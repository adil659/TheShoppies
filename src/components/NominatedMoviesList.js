import React from 'react'
import { useSelector } from 'react-redux'
import MovieNominated from './MovieNominated'
import MovieSearch from './MovieSearch'
import './NominatedMoviesList.css'

function NominatedMovies() {
    const nominatedMovies = useSelector(state => state.nominatedMovies)

    console.log(`showing nominated movies: `)
    console.log(nominatedMovies)

    if (nominatedMovies.length >= 5) {
        console.log(`show banner`)
    }

    return (
        <div className="nominated__movies">
            <div className="nominated__movies__header">
                <h1>Nominated Movies</h1>
            </div>

            <div className={nominatedMovies.length < 5 ? 'hidden' : ''}>
                <div className='nominated__movies_banner'>
                    <h2>5 Movies have been nominated! 🏆</h2>
                </div>
            </div>

            <div className="nominated__movies__list">
                {
                    nominatedMovies?.map(movie => (
                        <MovieNominated movie={movie} id={movie.imdbID} key={movie.imdbID}></MovieNominated>
                    ))
                }
            </div>
        </div>
    )
}

export default NominatedMovies
