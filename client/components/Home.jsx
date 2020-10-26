import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import './home.css'
class Home extends Component {
  render() {
    return (
      <div className="homeContainer">

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
                <h3>A Lifelong Learner</h3>
                <p>I value constant upskilling in new technologies required to stay in demand in my chosen career path. Learning is enjoyable.</p>
                <img className="carouselImages" src="https://previews.123rf.com/images/mindscanner/mindscanner1404/mindscanner140400143/27070406-word-cloud-with-web-development-related-tags.jpg" alt="" />
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
        <div className="homeInnerContainer introduction">
          <div className="introText">
            <div>
              <h3>Introduction</h3>
              <p>Hey there! I'm Chris, a university student who practices web development in his spare time. I've always loved designing and building things from a young age and is why I fell in love with web development and engineering. This website that I built myself has most of the information you'd be interested in knowing about me, ranging from my portfolio of projects that I keep up to date and up to my educational history. It also has my contact details incase you're an employer looking for an intern. I still need 800 hours of practical experience left in my degree to graduate so I'm open to internships until the end of 2022!</p>
              <Button variant="outline-dark" href="https://docs.google.com/document/d/16pRyFT4RnE5ICkokCWPxguS-Z14z-i5bxwUf2Sz1doE/edit?usp=sharing">View My CV</Button>
            </div>

          </div>
          <div className="introImage">
            <img src="https://scontent.fakl4-1.fna.fbcdn.net/v/t1.0-9/101387075_2710697582485197_789596644646584320_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=r0ugjRATwVIAX8ndU2d&_nc_ht=scontent.fakl4-1.fna&oh=82a0fd3d61a266cef4eafc831ffc6b73&oe=5FB75E58" alt="" />
          </div>
        </div>

        <div className="homeInnerContainer workExperience">
          <h3 style={{ paddingBottom: "100px" }}>My Work Experience</h3>
          <div className="experienceInner">
            <div className="experienceImage">
              <img src="https://devacademy.co.nz/wp-content/uploads/2017/06/EDA-square-logo-uai-258x258.png" alt="" />
            </div>
            <div className="experienceText">
              <h4>Enspiral Dev Academy Web Developer Apprenticeship</h4>
              <p>EDA’s curriculum is designed and taught by currently employed software developers and was designed to turn someone from no experience in software to a full stack web developer in 15 weeks. A normal day in this bootcamp was usually around 10-12 hours of work a day. I was exposed to agile software practices when taking part in group projects.</p>
              <p>
                Pair programming happens almost everyday after each lecture. All our activities were version controlled in git and managed in github. Every friday there is a group project which lasts for one day.
              </p>
              <p>
                In this bootcamp I developed my communication skills, leadership skills, understanding of team dynamics, self awareness, technical skills, and other soft skills. During the lockdown, we continued to work remotely, building projects with up to teams of 20 people collaborating online. We would give and receive feedback to each other on a regular basis to allow ourselves to grow at a faster rate.
              </p>
              <p>
                In summary, it was a tough but enjoyable experience that gave me good insight into what software development is like in a professional environment.
              </p>
            </div>
          </div>
          <div className="experienceInner">
            <div className="experienceImage">
              <img src="https://www.jasper.io/static/90964f3761132ef6538c3259eb23af2e/b7710/jasper-logo.png" alt="" />
            </div>
            <div className="experienceText">
              <h4>Software Engineering Intern at Jasper</h4>
              <p>I have yet to begin this internship. Come back after the 24th of February 2021 to learn more about my experience at Jasper.</p>
            </div>
          </div>
        </div>

        <div className="homeInnerContainer">
          <h3 style={{ paddingBottom: "100px" }}>My Education</h3>
          <div className="educationInner">
            <div className="educationImage">
              <img src="https://pbs.twimg.com/profile_images/969044214288756736/41mG3WRy_400x400.jpg" alt="" />
            </div>
            <div className="educationText">
              <h4>University of Auckland</h4>
              <p>I'm a second year Computer Systems Engineering student at the University of Auckland. In this bachelors degree we learn about hardware, software and firmware, and how these things work together. This degree, including 1st year of engineering, totals to 4 years and I have 2 years remaining. Practical work experience gained by internships is required and I need another 800 hours in order to graduate.</p>

              <p>This degree is very challenging as it requires you to learn a large variety of technologies in a short amount of time. Personally, I enjoy the software and firmware aspects of this degree more than the hardware and I plan on taking software engineering electives in my 3rd and 4th year. Although, I still find learning about analogue circuitry quite interesting eventhough I lack some understanding of analogue circuits. </p>
            </div>
          </div>
        </div>
      </div >

    )
  }
}

export default Home