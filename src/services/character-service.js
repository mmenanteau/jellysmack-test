import axios from 'axios'

export async function getCharacters(page) {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character', {
      params: { page }
    })
    const nextPage = response.data.info.next ? page + 1 : null
    return { characters: response.data.results, nextPage }
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
