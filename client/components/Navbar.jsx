import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './navbar.css'
import { Link } from 'react-router-dom'
class MainNavbar extends Component {
  state = {
    location: ''
  }
  render() {
    return (
      <Container className="mainNavbar" style={{ padding: '0px' }}>
        <Navbar bg="light" expand="lg" >
          <Navbar.Brand href="#home">Christopher Alba</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" ><Nav.Link href="#home" >Home</Nav.Link></Link>
              <Link to="/portfolio"><Nav.Link href="#link" >Portfolio</Nav.Link></Link>
              <Link to="/blog"><Nav.Link href="#link" >Blog</Nav.Link></Link>
              <Link to="/contact"><Nav.Link href="#link">Contact</Nav.Link></Link>
           
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )


  }
}

export default MainNavbar