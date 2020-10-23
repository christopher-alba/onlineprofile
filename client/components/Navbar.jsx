import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './navbar.css'
import { Link } from 'react-router-dom'
class MainNavbar extends Component {
  state = {
    location: this.props.pathName,
    prevScrollpos: window.pageYOffset,
    visible: true
  }
  componentDidUpdate(prevProps) {
    if (prevProps.pathName !== this.props.pathName) {
      this.setState({ location: this.props.pathName })
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
  render() {
    return (
      <div className={`mainNavbar ${!this.state.visible ? 'hidden' : ''}`} >
        <Navbar bg="light" expand="lg" >
          <Navbar.Brand href="/">Christopher Alba</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="navlink" to="/" >
                <Nav.Link className={this.state.location === '/' ? 'activeLink' : ''} href="#home" >
                  Home
                </Nav.Link>
              </Link>
              <Link className="navlink" to="/portfolio">
                <Nav.Link className={this.state.location === '/portfolio' ? 'activeLink' : ''} href="#link" >
                  Portfolio
                </Nav.Link>
              </Link>
              <Link className="navlink" to="/blog">
                <Nav.Link className={this.state.location === '/blog' ? 'activeLink' : ''} href="#link" >
                  Blog
                </Nav.Link>
              </Link>
              <Link className="navlink" to="/contact">
                <Nav.Link className={this.state.location === '/contact' ? 'activeLink' : ''} href="#link">
                  Contact
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )


  }
}

export default MainNavbar