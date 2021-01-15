import React from 'react'
import './MovieSearch.css'
import { useDispatch } from 'react-redux'
import { addMovie } from '../reducers/movieReducer'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


function MovieSearch({ movie, nominated }) {

    const dispatch = useDispatch()

    const nominateMovie = (e) => {
        console.log(`movie nominated ${movie}`)
        console.log(movie)
        dispatch(addMovie(movie))


    }
    return (
        <div className="movie">
                <Link to={`/movies/${movie.imdbID}`}>

            <div className="movie__select">
                    <img
                        src={movie.Poster}
                        alt="img"
                        className="movie__poster" />

                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>

            </div>
            </Link>

            {
                nominated ?
                    <Button variant="contained" onClick={nominateMovie} disabled>Nominate</Button>
                    :
                    <Button variant="contained" color="primary" onClick={nominateMovie}>Nominate</Button>
            }

        </div>
    )
}

export default MovieSearch
