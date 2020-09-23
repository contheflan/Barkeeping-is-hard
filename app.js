let monsterArmor = 0

let theMonsters = ['goblin', 'commoner', 'mimic', 'satyr']
function monsterRoll(theMonsters) {
  for (let i = theMonsters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const tempMonster = theMonsters[i]
    theMonsters[i] = theMonsters[j]
    theMonsters[j] = tempMonster
  }
  // let randomMonster = theMonsters[Math.floor(Math.random() * theMonsters.length)]
  // for (let i = 0; i > theMonsters.length; i++) {
}


async function getMonster(monster) {
  try {
    const url = `https://www.dnd5eapi.co/api/monsters/${monster}`
    const response = await axios.get(url)
    const monsterApi = document.querySelector("#api-info")
    const monsterIntro = document.querySelector("#intro-text")
    monsterIntro.innerText = `Zounds! A ${response.data.name} in your bar! Roll a 20-sided dice to throw 'em out! If the number rolled is equal to or higher than their armor you win! Show no quarter!`
    monsterApi.innerText = `NAME: ${response.data.name} \n \n ARMOR: ${response.data.armor_class}`
    monsterArmor = response.data.armor_class
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
getMonster(monsterRoll)

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
  compare(diceRoll, monsterArmor)
})


function compare(diceRoll, monsterArmor) {
  let loser = " \n LOSER"
  let winner = " \n WINNER"
  if (diceRoll >= monsterArmor) {
    document.querySelector('#results').style.color = "limegreen"
    diceResult.innerText += winner
  } else {
    document.querySelector('#results').style.color = "red"
    diceResult.innerText += loser
  }
}


// to do: add splash/results screen, dice animation, weapons with dice modifiers, more monsters, add images, health bar?
