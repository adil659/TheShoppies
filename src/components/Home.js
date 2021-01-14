import React from 'react'
import {useState, useEffect} from 'react'
import MovieSearch from './MovieSearch'
import './Home.css'
import * as omdbApi from '../requests/omdb'
import {useField} from '../hooks/hooks'
import Search from '@material-ui/icons/Search'
import NominatedMovies from './NominatedMoviesList'
import {useSelector} from 'react-redux'
import movieReducer from '../reducers/movieReducer'

function Home() {
    const [movies, setMovies] = useState([])
    const searchTerm = useField('text')
    const nominatedMovies = useSelector(state => state.nominatedMovies)

    useEffect(() => {
        omdbApi.searchMovie(searchTerm.value).then(res => {
            console.log(res.Search)
            setMovies(res.Search)
        })        
    }, [searchTerm.value])
    
    return (
        <div>
            <div className="home__header">
                <a href="#" onClick={e => searchTerm.setValue('')}><h1>The Shoppies</h1></a>
                <div className="home__searchbar">
                    <input placeholder="Search" type={searchTerm.type} value={searchTerm.value} onChange={searchTerm.onChange} /> 
                    <Search></Search>
                </div>
                
            </div>

            <div className="home__movies">
                {
                    (
                        searchTerm.value === '' ? <NominatedMovies></NominatedMovies> 
                        : 
                        movies?.map(movie => (
                            <MovieSearch movie={movie} id={movie.imdbID} key={movie.imdbID} 
                            nominated={nominatedMovies.find(nominatedMovie => nominatedMovie.imdbID === movie.imdbID) ? true : false}></MovieSearch>
                        ))
                    )
                }

            </div>
        </div>
    )
}

export default Home
