import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './navbar.css'
import { Link } from 'react-router-dom'
class MainNavbar extends Component {
  state = {
    location: window.location.pathname,
  }
  componentDidUpdate(prevProps){
    if(prevProps.pathName !== this.props.pathName){
      this.setState({location: this.props.pathName})
    }
  }
  render() {
    return (
      <Container className="mainNavbar" style={{ padding: '0px' }}>
        <Navbar bg="light" expand="lg" >
          <Navbar.Brand href="#home">Christopher Alba</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="navlink" to="/" >
                <Nav.Link onClick={() => this.setState({location : '/'}) }className={this.state.location === '/' ? 'activeLink' : ''} href="#home" >
                  Home
                </Nav.Link>
              </Link>
              <Link className="navlink" to="/portfolio">
                <Nav.Link onClick={() => this.setState({location : '/portfolio'}) } className={this.state.location === '/portfolio' ? 'activeLink' : ''} href="#link" >
                  Portfolio
                </Nav.Link>
              </Link>
              <Link className="navlink" to="/blog">
                <Nav.Link onClick={() => this.setState({location : '/blog'}) } className={this.state.location === '/blog' ? 'activeLink' : ''} href="#link" >
                  Blog
                </Nav.Link>
              </Link>
              <Link className="navlink" to="/contact">
                <Nav.Link onClick={() => this.setState({location : '/contact'}) } className={this.state.location === '/contact' ? 'activeLink' : ''}href="#link">
                  Contact
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )


  }
}

export default MainNavbar