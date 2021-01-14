import axios from 'axios'

const base_url = 'https://www.omdbapi.com/'
const api_key = '44b49dbd'
const searchMovie = async (searchTerm) => {
    console.log('called')
    const result = await axios.get(`${base_url}?apikey=${api_key}&s=${searchTerm}`)
    return result.data
}


export {
    searchMovie
}