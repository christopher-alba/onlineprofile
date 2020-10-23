import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import './home.css'
class Home extends Component {
  render() {
    return (
      <Container className="homeContainer">
        <Carousel className="homeCarousel">

          <Carousel.Item>


            <h3>An Aspiring Web Developer</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

          </Carousel.Item>
          <Carousel.Item>



            <h3>An Engineering Student</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          </Carousel.Item>
          <Carousel.Item>


            <h3>A Life Long Learner</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>

          </Carousel.Item>
          <Carousel.Item>


            <h3>Passionate About Design</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>

          </Carousel.Item>
        </Carousel>
      </Container>

    )
  }
}

export default Home