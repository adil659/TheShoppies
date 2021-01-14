import React from 'react'
import './MovieSearch.css'
import {useDispatch} from 'react-redux'
import {addMovie} from '../reducers/movieReducer'
import Button from '@material-ui/core/Button';


function MovieSearch({movie, nominated}) {

    const dispatch = useDispatch()

    const nominateMovie = (e) => {
        console.log(`movie nominated ${movie}`)
        console.log(movie)
        dispatch(addMovie(movie))


    }
    return (
        <div className="movie">

            <img
                src={movie.Poster}
                alt="img" />

                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
            
            {
                nominated ?             
                <Button variant="contained" onClick={nominateMovie} disabled>Nominate</Button>
                :
                <Button variant="contained" onClick={nominateMovie}>Nominate</Button>
            }
        </div>
    )
}

export default MovieSearch
