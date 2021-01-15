import React from 'react'
import { useState, useEffect } from 'react'
import MovieSearch from './MovieSearch'
import './Home.css'
import * as omdbApi from '../requests/omdb'
import { useField } from '../hooks/hooks'
import Search from '@material-ui/icons/Search'
import NominatedMovies from './NominatedMoviesList'
import { useSelector } from 'react-redux'
import movieReducer from '../reducers/movieReducer'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import MovieDetails from './MovieDetails'

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

    const showMovies = () => {
        return (
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
        )
    }

    return (
        <div>

            <Router>



                <Switch>
                    <Route path='/movies/:movie_id'>
                        <div className="home__header">
                            <Link to='/' onClick={e => searchTerm.setValue('')} className="link"><h1>The Shoppies</h1></Link>
                        </div>
                        <MovieDetails></MovieDetails>
                    </Route>

                    <Route path="/">
                        <div className="home__header">
                            <Link to='/' onClick={e => searchTerm.setValue('')} className="link"><h1>The Shoppies 🏆</h1></Link>
                            <div className="home__searchbar">
                                <input placeholder="Search" type={searchTerm.type} value={searchTerm.value} onChange={searchTerm.onChange} />
                                <Search></Search>
                            </div>

                        </div>
                        {
                            showMovies()
                        }
                    </Route>
                </Switch>
            </Router>




        </div>
    )
}

export default Home
