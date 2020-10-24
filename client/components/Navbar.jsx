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
      <>
        {!this.state.visible && <div className="showNav" onClick={() => this.setState({ visible: true })}><i className="fas fa-chevron-down"></i></div>}
        <div className={`mainNavbar ${!this.state.visible ? 'hidden' : ''}`} >
          <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="/">Christopher Alba</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className={this.state.location === '/' ? 'activeLink' : ''} href="/" >
                  Home
                </Nav.Link>
                <Nav.Link className={this.state.location === '/portfolio' ? 'activeLink' : ''} href="/#/portfolio" >
                  Portfolio
                </Nav.Link>
                <Nav.Link className={this.state.location === '/blog' ? 'activeLink' : ''} href="/#/blog" >
                  Blog
                </Nav.Link>
                <Nav.Link className={this.state.location === '/contact' ? 'activeLink' : ''} href="/#/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    )


  }
}

export default MainNavbar