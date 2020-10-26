import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './navbar.css'
import { Link } from 'react-router-dom'
class MainNavbar extends Component {
  state = {
    location: this.props.pathName,
    prevScrollpos: window.pageYOffset,
    visible: true,
    whiteArrow: false
  }
  componentDidUpdate(prevProps) {
    if (prevProps.pathName !== this.props.pathName) {
      this.setState({ location: this.props.pathName, whiteArrow: false })
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {

    // collapsing and expanding of navbar code below
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });

    // changing color of chevron arrow code below
    let workExperience = document.getElementsByClassName("workExperience")[0]
    let downArrow = document.getElementsByClassName("showNav")[0]
    let topWork
    let bottomWork
    let topArrow
    let bottomArrow
    if(workExperience !== undefined && downArrow !== undefined){

      let viewportOffsetWork = workExperience.getBoundingClientRect()
      topWork = viewportOffsetWork.top
      bottomWork = viewportOffsetWork.bottom

      let downArrowOffset = downArrow.getBoundingClientRect()
      topArrow = downArrowOffset.top
      bottomArrow = downArrowOffset.bottom

      if(topArrow > topWork && bottomArrow < bottomWork ){
        this.setState({whiteArrow: true})
      } else {
        this.setState({whiteArrow: false})
      }
    }
    

  };
  render() {
    return (
      <>
        {!this.state.visible && <div className={`showNav`} onClick={() => this.setState({ visible: true })}><i className={`fas fa-chevron-down ${this.state.whiteArrow?'white !important':''}`}></i></div>}
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
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    )


  }
}

export default MainNavbar