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
        <div className="homeInnerContainer">
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eum accusamus tenetur sint tempore accusantium, harum maiores saepe neque quibusdam temporibus soluta facere non omnis quod nisi, velit blanditiis aspernatur. Est tempore hic provident eos libero delectus iusto omnis rerum animi molestias, velit dolorum voluptatum consequuntur vel ut minima perferendis. Dolorem aut ipsam quo, quod sit ab, cumque pariatur assumenda esse excepturi eligendi modi in ducimus, officiis odio quisquam minus eos dolorum aliquam unde sed dolor iure! Vitae distinctio, non, tempora nesciunt delectus aperiam laudantium minima laboriosam commodi porro magnam! Quidem voluptatum voluptatibus voluptas quis sit accusantium vitae a dolorem, dolores, delectus nesciunt? Consectetur minus officia eaque eligendi, repudiandae ex magni, animi cum numquam veritatis tempore dicta temporibus recusandae maxime molestiae, quia provident labore quibusdam veniam iste vel id. Aliquam minima maiores non quas praesentium, pariatur assumenda ad quasi in esse fugiat, totam illo ab nam exercitationem, quisquam tempore voluptatem nostrum eligendi? Expedita porro ratione eaque eos, delectus magnam ipsum fuga voluptatibus obcaecati natus, distinctio quasi numquam libero tenetur, nostrum dolore perferendis voluptate velit quia. Eligendi quas facere possimus atque minus. Aliquid iure repellendus mollitia repellat debitis corrupti molestiae ut natus magni dolorum, quas illum. Inventore quo fugit temporibus architecto?</p>
        </div>
        
        <div className="homeInnerContainer">
          <h3>My Work Experience</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eum accusamus tenetur sint tempore accusantium, harum maiores saepe neque quibusdam temporibus soluta facere non omnis quod nisi, velit blanditiis aspernatur. Est tempore hic provident eos libero delectus iusto omnis rerum animi molestias, velit dolorum voluptatum consequuntur vel ut minima perferendis. Dolorem aut ipsam quo, quod sit ab, cumque pariatur assumenda esse excepturi eligendi modi in ducimus, officiis odio quisquam minus eos dolorum aliquam unde sed dolor iure! Vitae distinctio, non, tempora nesciunt delectus aperiam laudantium minima laboriosam commodi porro magnam! Quidem voluptatum voluptatibus voluptas quis sit accusantium vitae a dolorem, dolores, delectus nesciunt? Consectetur minus officia eaque eligendi, repudiandae ex magni, animi cum numquam veritatis tempore dicta temporibus recusandae maxime molestiae, quia provident labore quibusdam veniam iste vel id. Aliquam minima maiores non quas praesentium, pariatur assumenda ad quasi in esse fugiat, totam illo ab nam exercitationem, quisquam tempore voluptatem nostrum eligendi? Expedita porro ratione eaque eos, delectus magnam ipsum fuga voluptatibus obcaecati natus, distinctio quasi numquam libero tenetur, nostrum dolore perferendis voluptate velit quia. Eligendi quas facere possimus atque minus. Aliquid iure repellendus mollitia repellat debitis corrupti molestiae ut natus magni dolorum, quas illum. Inventore quo fugit temporibus architecto?</p>
        </div>

        <div className="homeInnerContainer">
          <h3>My Education</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eum accusamus tenetur sint tempore accusantium, harum maiores saepe neque quibusdam temporibus soluta facere non omnis quod nisi, velit blanditiis aspernatur. Est tempore hic provident eos libero delectus iusto omnis rerum animi molestias, velit dolorum voluptatum consequuntur vel ut minima perferendis. Dolorem aut ipsam quo, quod sit ab, cumque pariatur assumenda esse excepturi eligendi modi in ducimus, officiis odio quisquam minus eos dolorum aliquam unde sed dolor iure! Vitae distinctio, non, tempora nesciunt delectus aperiam laudantium minima laboriosam commodi porro magnam! Quidem voluptatum voluptatibus voluptas quis sit accusantium vitae a dolorem, dolores, delectus nesciunt? Consectetur minus officia eaque eligendi, repudiandae ex magni, animi cum numquam veritatis tempore dicta temporibus recusandae maxime molestiae, quia provident labore quibusdam veniam iste vel id. Aliquam minima maiores non quas praesentium, pariatur assumenda ad quasi in esse fugiat, totam illo ab nam exercitationem, quisquam tempore voluptatem nostrum eligendi? Expedita porro ratione eaque eos, delectus magnam ipsum fuga voluptatibus obcaecati natus, distinctio quasi numquam libero tenetur, nostrum dolore perferendis voluptate velit quia. Eligendi quas facere possimus atque minus. Aliquid iure repellendus mollitia repellat debitis corrupti molestiae ut natus magni dolorum, quas illum. Inventore quo fugit temporibus architecto?</p>
        </div>
      </Container>

    )
  }
}

export default Home