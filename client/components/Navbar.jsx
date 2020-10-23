import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './navbar.css'
class MainNavbar extends Component {
  render() {
    return (
      <Container className="mainNavbar" style={{padding:'0px'}}>
        <Navbar bg="light" expand="lg" >
          <Navbar.Brand href="#home">Christopher Alba</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Portfolio</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )


  }
}

export default MainNavbar