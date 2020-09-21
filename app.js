async function getMonster(monster) {
  try {
    const url = `https://www.dnd5eapi.co/api/monsters/${monster}`
    const response = await axios.get(url)
    console.log(response.data)
  } catch (error) {
    console.log(`Error: ${error}`)

  }
}

getMonster('goblin')

const roll = []