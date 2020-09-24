let monsterApi = document.querySelector("#api-info")
let monsterName = ""
let monsterArmor = 0
let monsterHealth = 0
let goblin = { name: 'goblin', img: 'https://static.wikia.nocookie.net/diablo_gamepedia/images/4/48/Warped_One_%28Diablo_II%29.gif/revision/latest?cb=20090323220525' }
let skeleton = { name: 'skeleton', img: 'https://static.wikia.nocookie.net/diablo_gamepedia/images/1/11/Bone_Warrior_%28Diablo_II%29.gif/revision/latest?cb=20090408135450' }
let mimic = { name: 'mimic', img: 'https://static.wikia.nocookie.net/diablo_gamepedia/images/9/91/Siege_Beast_%28Diablo_II%29.gif/revision/latest?cb=20091107201227' }
let ogre = { name: 'ogre', img: 'https://static.wikia.nocookie.net/diablo_gamepedia/images/f/fc/Hephasto_the_Armorer_%28Diablo_II%29.gif/revision/latest?cb=20101010213045' }
let zombie = { name: 'zombie', img: 'https://static.wikia.nocookie.net/diablo_gamepedia/images/6/66/Zombie_%28Diablo_II%29.gif/revision/latest?cb=20090330212712' }
let swarm = { name: 'swarm-of-insects', img: 'https://static.wikia.nocookie.net/diablo_gamepedia/images/8/8a/Hell_Swarm_%28Diablo_II%29.gif/revision/latest?cb=20090428220720' }
let vampire = { name: 'vampire', img: 'https://static.wikia.nocookie.net/diablo_gamepedia/images/e/e9/Ghoul_Lord_%28Diablo_II%29.gif/revision/latest?cb=20101011065645' }
let chain = { name: 'chain-devil', img: 'https://static.wikia.nocookie.net/diablo_gamepedia/images/6/64/Moon_Lord_%28Diablo_II%29.gif/revision/latest?cb=20090625165259' }
let horn = { name: 'horned-devil', img: 'https://static.wikia.nocookie.net/diablo_gamepedia/images/9/98/Balrog_%28Diablo_II%29.gif/revision/latest?cb=20090322162229' }


let theMonsters = [goblin, skeleton, mimic, ogre, zombie, swarm, vampire, chain, horn]
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

let diceRoll = 0
function roll(min, max) {
  let temp = Math.round(Math.random() * (max - min) + min)
  diceRoll = temp
  return temp
}

const button = document.querySelector('#dice-roll');
const diceResult = document.querySelector("#results")

button.addEventListener('click', () => {
  diceResult.innerText = roll(1, 20)
  compare(diceRoll)
})

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

// to do: add dice animation, weapons with dice modifiers?
