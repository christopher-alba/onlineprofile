import React, { Component } from 'react'
import './portfolio.css'
import projects from '../projects'
import Animate from 'react-smooth'
import Search from './Search'

class Portfolio extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <Animate to="1" from="0" attributeName="opacity">
        <div className="portfolioContainer ">
          <div className="portfolioHeader">
            <h3>Welcome to my Portfolio</h3>
            <img src="https://www.fictiontalk.com/wp-content/uploads/2020/08/essential-things-you-need-for-a-perfect-gaming-setup.jpg" alt="" />
          </div>
          <Search />
          

        </div>
      </Animate>
    )
  }
}

export default Portfolio