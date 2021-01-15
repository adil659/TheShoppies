import './App.css';
import Home from './components/Home';
import Search from '@material-ui/icons/Search'
import { useState, useEffect } from 'react'
import { useField } from './hooks/hooks'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  const searchTerm = useField('text')

  return (
    <div className="App">
     
      <Home></Home>
    </div>
  );
}

export default App;
