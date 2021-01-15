
import db from '../firebase'

function movieReducer(state = [], action) {


    switch (action.type) {
        case 'INIT_MOVIES':
            return action.data
        case 'ADD_MOVIE':
            if(state.length >= 5) {
                alert(`Cannot nominate more than 5`)
                return state
            }
            else {
                db.collection('nominated_movies').doc(action.data.movie.imdbID).set(action.data.movie)
                return [...state, action.data.movie]
            }
        case 'DELETE_MOVIE':
            console.log(`deleteing`)
            const newArr = state.filter((movie) => movie.imdbID !== action.data.movie_id)
            return newArr
        default:
            return state
    }
}

export const initMovies = () => {
    return async dispatch => {
        db.collection('nominated_movies').onSnapshot((snapshot) => {
            dispatch({
                type: 'INIT_MOVIES',
                data: snapshot.docs.map(doc => {
                    return {
                        ...doc.data()
                    }
                })
            })
        })
    }
}

export const addMovie = (movie) => {
    return async dispatch => {
        dispatch({
            type: 'ADD_MOVIE',
            data: {
                movie
            }
        })
    }
}

export const deleteMovie = (movie_id) => {
    db.collection('nominated_movies').doc(movie_id).delete()
    return async dispatch => {
        dispatch({
            type: 'DELETE_MOVIE',
            data: {
                movie_id
            }
        })
    }
}

export default movieReducer