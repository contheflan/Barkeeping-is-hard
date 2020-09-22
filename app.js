async function getMonster(monster) {
  try {
    const url = `https://www.dnd5eapi.co/api/monsters/${monster}`
    const response = await axios.get(url)
    const monsterApi = document.querySelector(".api-info")
    const monsterIntro = document.querySelector("#intro-text")
    monsterIntro.innerText = `Zounds! A ${response.data.name} in your bar! Roll a 20-sided dice to attack! If the number rolled is higher than their armor you win! Show no quarter!`
    monsterApi.innerText = `${response.data.name} \n Armor Class: ${response.data.armor_class}`
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
getMonster('commoner')

function roll(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

const button = document.querySelector('#dice-roll');

button.addEventListener('click', () => {
  // console.log(roll(1, 20))
  const diceResult = document.querySelector(".results")
  // create an if statement for comparing roll and monster ac
  diceResult.innerText = roll(1, 20)
  // if (roll > ${ response.data.name })
})


