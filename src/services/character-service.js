import axios from 'axios'

export async function getCharacters(characters = [], page = 1) {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character', {
      params: { page }
    })
    characters.push(...response.data.results)
    if (response.data.info.next) {
      return getCharacters(characters, page + 1)
    } else {
      return characters
    }
  } catch (error) {
    // eslint-disable-next-line
    console.error(`Error on API: ${error}`)
  }
}

export async function getCharacterById(id) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return response.data
  } catch (error) {
    // eslint-disable-next-line
    console.error(`Error on API: ${error}`)
  }
}
