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
            <div className="carouselItemWrap">
              <div>
                <h3>An Aspiring Web Developer</h3>
                <p>I enjoy learning new web technologies outside of university and building projects specifically in Javascript.</p>
                <img className="carouselImages" src="https://skywell.software/wp-content/uploads/2018/12/web-development-1024x605.jpg" alt="" />
              </div>
            </div>

          </Carousel.Item>
          <Carousel.Item>
            <div className="carouselItemWrap">
              <div>
                <h3>An Engineering Student</h3>
                <p>I'm a second year student studying a Bachelors of Engineering (Honours) in Computer Systems at the University of Auckland</p>
                <img className="carouselImages" src="https://educationcentral.co.nz/wp-content/uploads/2019/04/Auckland_uni4.jpg" alt="" />
              </div>
            </div>

          </Carousel.Item>
          <Carousel.Item>
            <div className="carouselItemWrap">
              <div>
                <h3>A Life Long Learner</h3>
                <p>I value constant upskilling in new technologies required to stay in demand in my chosen career path. Learning is enjoyable.</p>
                <img className="carouselImages" src="https://goodparentingbrighterchildren.com/wp-content/uploads/2019/02/Lifelong-learning-PB.jpg" alt="" />
              </div>
            </div>

          </Carousel.Item>
          <Carousel.Item>
            <div className="carouselItemWrap">
              <div>
                <h3>Passionate About Design</h3>
                <p>From a young age I enjoyed designing from drawing, to playing minecraft, and now building full-stack web applications.</p>
                <img className="carouselImages" src="https://hbr.org/resources/images/article_assets/2018/08/R1805D_CHIN.jpg" alt="" />
              </div>
            </div>

          </Carousel.Item>
        </Carousel>
        <div className="homeInnerContainer">
          <h3>Introduction</h3>
          <p>Hey there! I'm Chris, a university student who practices web development in his spare time. I've always loved designing and building things from a young age and is why I fell in love with web development and engineering. This website that I built myself has most of the information you'd be interested in knowing about me, ranging from my portfolio of projects that I keep up to date and up to my hobbies and interests. It also has my contact details incase you're an employer looking for an intern. I still need 800 hours of practical experience left in my degree to graduate so I'm open to internships until the end of 2022!</p>
        </div>

        <div className="homeInnerContainer workExperience">
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