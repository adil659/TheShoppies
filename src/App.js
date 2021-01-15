import './App.css';
import Home from './components/Home';
import Search from '@material-ui/icons/Search'
import { useState, useEffect } from 'react'
import { useField } from './hooks/hooks'
import {useDispatch} from 'react-redux'
import {initMovies} from './reducers/movieReducer'


function App() {
  const searchTerm = useField('text')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initMovies())
  }, [])

  return (
    <div className="app" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/watercolor.png`}}>
     
      <Home></Home>
    </div>
  );
}

export default App;
