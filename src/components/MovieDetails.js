import React from 'react'
import { useState, useEffect } from 'react'
import * as omdbApi from '../requests/omdb'
import { useParams } from 'react-router-dom'
import './MovieDetails.css'

function MovieDetails() {
    const { movie_id } = useParams();
    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() => {
        omdbApi.getMovieDetails(movie_id).then(res => setMovieDetails(res))

    }, [movie_id])

    return (
        <div className="movie__details">
            <h1>Movie Details</h1>
            <div className="movie__details__start">
                <div className="movie__details__img">
                    <img src={movieDetails.Poster} alt='img'></img>

                </div>
                <div className="movie__details__info">
                    <div className="movie__details__info__item">
                        <h3>Title:</h3>
                        <p>{movieDetails.Title}</p> 
                    </div>
                    <div className="movie__details__info__item">
                        <h3>Release date:</h3>
                        <p>{movieDetails.Released}</p>
                    </div>
                    <div className="movie__details__info__item">
                        <h3>Actors:</h3>
                        <p>{movieDetails.Actors}</p> 
                    </div>
                    <div className="movie__details__info__item">
                        <h3>Country:</h3>
                        <p>{movieDetails.Country}</p> 
                    </div>
                    <div className="movie__details__info__item">
                        <h3>Runtime:</h3>
                        <p>{movieDetails.Runtime}</p> 
                    </div>
                    <div className="movie__details__info__item">
                        <h3>Summary:</h3>
                        <p>{movieDetails.Plot}</p> 
                    </div>
                   
                </div>
            </div>



        </div>
    )
}

export default MovieDetails
