import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import Footer from './Footer'

import { Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'


import './app.css'

const App = () => {
  return (
    <Container className="mainContainer">
      <Route path='/' render = {props => {
        return  <Navbar pathName={props.location.pathname}/>
      }}/>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/portfolio'>
        <Portfolio />
      </Route>
      <Footer/>
    </Container>
  )
}

export default App
