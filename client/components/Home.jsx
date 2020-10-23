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


            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

          </Carousel.Item>
          <Carousel.Item>



            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          </Carousel.Item>
          <Carousel.Item>


            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>

          </Carousel.Item>
        </Carousel>
      </Container>

    )
  }
}

export default Home