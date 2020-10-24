import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import './portfolio.css'
import projects from '../projects'
import Button from 'react-bootstrap/Button'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolioContainer ">
        <div className="portfolioHeader">
          <h3>Welcome to my Portfolio</h3>
          <img src="https://www.fictiontalk.com/wp-content/uploads/2020/08/essential-things-you-need-for-a-perfect-gaming-setup.jpg" alt="" />
        </div>
        <div className="portfolioInner">
          {projects.map(project => (
            <div className="projectContainer">
              <img src={project.imgUrl} alt="" />
              <Button className="visit" href={project.href} variant="dark">Visit <i className="fas fa-external-link-alt"></i> </Button>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="hashtags">
                {project.tags.map(tag => <div className="hashtag"><strong>#{tag}</strong></div>)}
              </div>

            </div>
          ))}
        </div>

      </div>

    )
  }
}

export default Portfolio