import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import { Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/portfolio'>
        <Portfolio />
      </Route>

    </>
  )
}

export default App
