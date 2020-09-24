// global variables for some monsters and monster information
let goblin = { name: 'goblin', img: 'assets/goblin.gif' }
let skeleton = { name: 'skeleton', img: 'assets/skeleton.gif' }
let mimic = { name: 'mimic', img: 'assets/mimic.gif' }
let ogre = { name: 'ogre', img: 'assets/ogre.gif' }
let zombie = { name: 'zombie', img: 'assets/zombie.gif' }
let swarm = { name: 'swarm-of-insects', img: 'assets/swarm.gif' }
let vampire = { name: 'vampire', img: 'assets/vampire.gif' }
let chain = { name: 'chain-devil', img: 'assets/chain.gif' }
let horn = { name: 'horned-devil', img: 'assets/horn.gif' }

let monsterApi = document.querySelector("#api-info")
let monsterName = ""
let monsterArmor = 0
let monsterHealth = 0

let theMonsters = [goblin, skeleton, mimic, ogre, zombie, swarm, vampire, chain, horn]

// async function to pull a random monster (from theMonsters array) and append some of their stats to the "api-info" div
async function getMonster(monster) {
  try {
    const monsterObject = monster[Math.floor(Math.random() * theMonsters.length)]
    const url = `https://www.dnd5eapi.co/api/monsters/${monsterObject.name}`
    const response = await axios.get(url)
    const monsterIntro = document.querySelector("#intro-text")
    monsterIntro.innerText = `Zounds! A ${response.data.name} in your bar! Roll a 20-sided dice to throw 'em out! If the number rolled is equal to or higher than their armor you win! Show no quarter!`
    monsterApi.innerText = `NAME: ${response.data.name} \n \n ARMOR: ${response.data.armor_class} \n \n HEALTH: ${response.data.hit_points}`
    const image = document.querySelector("#monster-img")
    image.setAttribute("src", monsterObject.img)
    monsterName = response.data.name
    monsterArmor = response.data.armor_class
    monsterHealth = response.data.hit_points
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
getMonster(theMonsters)


const button = document.querySelector('#dice-roll');
const diceResult = document.querySelector("#results")
let diceRoll = 0

// function for a random dice roll between 1 and 20 and a DOM 
function roll(min, max) {
  let temp = Math.round(Math.random() * (max - min) + min)
  diceRoll = temp
  return temp
}

button.addEventListener('click', () => {
  diceResult.innerText = roll(1, 20)
  compare(diceRoll)
})


// function to compare the dice roll result with the armor statistic on the monster pulled from the api
function compare(diceRoll) {
  let loser = " \n LOSER \n -10 HP"
  let winner = " \n WINNER \n 10 DMG"
  let health = document.querySelector('#health-bar')
  if (diceRoll >= monsterArmor) {
    document.querySelector('#results').style.color = "limegreen"
    diceResult.innerText += winner
    monsterHealth -= 10;
    monsterApi.innerText = `NAME: ${monsterName} \n \n ARMOR: ${monsterArmor} \n \n HEALTH: ${monsterHealth}`
    if (monsterHealth <= 0) {
      window.location.replace("win.html")
    }
  } else {
    document.querySelector('#results').style.color = "red"
    diceResult.innerText += loser
    health.value -= 10;
    if (health.value == 0) {
      window.location.replace("lose.html")
    }
  }
}