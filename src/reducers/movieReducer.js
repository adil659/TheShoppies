
function movieReducer(state = [], action) {


    switch (action.type) {
        case 'INIT_CARDS':
            return state
        case 'ADD_MOVIE':
            if(state.length >= 5) {
                alert(`Cannot nominate more than 5`)
                return state
            }
            else {
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