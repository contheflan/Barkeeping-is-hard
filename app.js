async function getMonster(monster) {
  try {
    const url = `https://www.dnd5eapi.co/api/monsters/${monster}`
    const response = await axios.get(url)
    // console.log(response.data.name)
  } catch (error) {
    console.log(`Error: ${error}`)

  }
}

getMonster('goblin')

// const dice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function roll(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
// console.log(roll(1, 20))
//

const button = document.querySelector('#dice-roll');

button.addEventListener('click', () => {
  // console.log(roll(1, 20))
  const diceResult = document.querySelector(".results")
  diceResult.innerHTML = roll(1, 20)
})

// button.addEventListener('click', () => {
//   const diceResult = document.querySelector(".results")
//   diceResult.innerHTML = roll(1, 20)
// })