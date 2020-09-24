let monsterApi = document.querySelector("#api-info")
let monsterName = ""
let monsterArmor = 0
let monsterHealth = 0
let theMonsters = ['goblin', 'mimic', 'skeleton', 'ogre', 'doppelganger']

async function getMonster(monster) {
  try {
    const url = `https://www.dnd5eapi.co/api/monsters/${monster[Math.floor(Math.random() * theMonsters.length)]}`
    const response = await axios.get(url)
    const monsterIntro = document.querySelector("#intro-text")
    monsterIntro.innerText = `Zounds! A ${response.data.name} in your bar! Roll a 20-sided dice to throw 'em out! If the number rolled is equal to or higher than their armor you win! Show no quarter!`
    monsterApi.innerText = `NAME: ${response.data.name} \n \n ARMOR: ${response.data.armor_class} \n \n HEALTH: ${response.data.hit_points}`
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
  let loser = " \n LOSER -10 DMG"
  let winner = " \n WINNER -10 DMG"
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

// function KeyboardEvent() {
//   window.location.replace("intro.html")
// }


// create a if statement to kick you to various results screens

// to do: add results screen, dice animation, weapons with dice modifiers, add images?
