import React from 'react'
import './MovieNominated.css'
import { deleteMovie } from '../reducers/movieReducer'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


function MovieNominated({ movie }) {

    const dispatch = useDispatch()

    const removeMovie = (e) => {
        dispatch(deleteMovie(movie.imdbID))
    }

    return (
        <div className="movie__nominated">
            <Link to={`/movies/${movie.imdbID}`}>
            <div className="movie__nominated__select">


                <img
                    className="movie__nominated__image"
                    src={movie.Poster}
                    alt="img" />

                <div className="movie__details">
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>
                </div>
            </div>
            </Link>
            <Button variant="contained" onClick={removeMovie}>Delete</Button>

        </div>
    )
}

export default MovieNominated
