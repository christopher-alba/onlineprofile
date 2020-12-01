import React, { Component } from 'react'
import './portfolio.css'
import FadeInSection from './FadeInSection'
import Button from 'react-bootstrap/Button'

class Projects extends Component {
    render() {
        return (
            <div className="portfolioInner">
                {this.props.projects.map(project => (
                    <FadeInSection>
                        <div className="projectContainer">
                            <img src={project.imgUrl} alt="" />
                            <Button className="visit" href={project.href} variant="dark">Visit <i className="fas fa-external-link-alt"></i> </Button>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div className="hashtags">
                                {project.tags.map(tag => <div className="hashtag"><strong>#{tag}</strong></div>)}
                            </div>

                        </div>
                    </FadeInSection>
                ))}
            </div>
        )
    }
}

export default Projects