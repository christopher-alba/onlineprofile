import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
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
        <div className="homeInnerContainer introduction">
          <div className="introText">
            <div>
              <h3>Introduction</h3>
              <p>Hey there! I'm Chris, a university student who practices web development in his spare time. I've always loved designing and building things from a young age and is why I fell in love with web development and engineering. This website that I built myself has most of the information you'd be interested in knowing about me, ranging from my portfolio of projects that I keep up to date and up to my hobbies and interests. It also has my contact details incase you're an employer looking for an intern. I still need 800 hours of practical experience left in my degree to graduate so I'm open to internships until the end of 2022!</p>
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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi delectus totam fuga accusantium ullam quod. Doloribus facilis hic sit maxime quod provident adipisci iste autem, quisquam fugit delectus ut repudiandae dignissimos nobis impedit quasi suscipit quis voluptas. Ut porro voluptates, doloremque aut dolorum quidem totam dolore tempore dolor voluptatibus, cum quibusdam iusto hic explicabo tenetur, aliquid excepturi laborum at corporis? Pariatur accusamus dicta sunt iusto nobis at, enim laborum! Magnam nihil iste sint ad fuga sed a molestias adipisci? Similique consequatur asperiores, nam impedit molestiae dolor a nemo est. Libero eos eius culpa, totam recusandae quisquam et, beatae corrupti ex qui aspernatur impedit laudantium ab. Repellat, sint. Explicabo voluptate vel obcaecati! Commodi, repudiandae exercitationem, inventore aperiam eveniet quos assumenda harum voluptas laudantium quam quo cum impedit ea. Similique at explicabo voluptatem iure, deleniti nulla illum, rerum ut laudantium possimus itaque mollitia, cumque officia iste sapiente fuga quos neque eveniet. Voluptatem hic aliquid recusandae quam quas tempora minima pariatur obcaecati! Perspiciatis, possimus! Odio animi a est suscipit possimus. Libero dolore illum veniam, molestias odit maiores consectetur neque nemo architecto, a quibusdam aspernatur nobis sapiente amet perferendis rerum accusantium maxime sint ullam quasi laborum, ratione ipsum. Nam consequuntur praesentium aliquid obcaecati autem?</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eum accusamus tenetur sint tempore accusantium, harum maiores saepe neque quibusdam temporibus soluta facere non omnis quod nisi, velit blanditiis aspernatur. Est tempore hic provident eos libero delectus iusto omnis rerum animi molestias, velit dolorum voluptatum consequuntur vel ut minima perferendis. Dolorem aut ipsam quo, quod sit ab, cumque pariatur assumenda esse excepturi eligendi modi in ducimus, officiis odio quisquam minus eos dolorum aliquam unde sed dolor iure! Vitae distinctio, non, tempora nesciunt delectus aperiam laudantium minima laboriosam commodi porro magnam! Quidem voluptatum voluptatibus voluptas quis sit accusantium vitae a dolorem, dolores, delectus nesciunt? Consectetur minus officia eaque eligendi, repudiandae ex magni, animi cum numquam veritatis tempore dicta temporibus recusandae maxime molestiae, quia provident labore quibusdam veniam iste vel id. Aliquam minima maiores non quas praesentium, pariatur assumenda ad quasi in esse fugiat, totam illo ab nam exercitationem, quisquam tempore voluptatem nostrum eligendi? Expedita porro ratione eaque eos, delectus magnam ipsum fuga voluptatibus obcaecati natus, distinctio quasi numquam libero tenetur, nostrum dolore perferendis voluptate velit quia. Eligendi quas facere possimus atque minus. Aliquid iure repellendus mollitia repellat debitis corrupti molestiae ut natus magni dolorum, quas illum. Inventore quo fugit temporibus architecto?</p>
            </div>
          </div>
          <div className="educationInner">
            <div className="educationImage">
              <img src="https://www.sanctamaria.school.nz/wp-content/uploads/2020/03/schoollogo.jpg" alt="" />
            </div>
            <div className="educationText">
              <h4>Sancta Maria College</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eum accusamus tenetur sint tempore accusantium, harum maiores saepe neque quibusdam temporibus soluta facere non omnis quod nisi, velit blanditiis aspernatur. Est tempore hic provident eos libero delectus iusto omnis rerum animi molestias, velit dolorum voluptatum consequuntur vel ut minima perferendis. Dolorem aut ipsam quo, quod sit ab, cumque pariatur assumenda esse excepturi eligendi modi in ducimus, officiis odio quisquam minus eos dolorum aliquam unde sed dolor iure! Vitae distinctio, non, tempora nesciunt delectus aperiam laudantium minima laboriosam commodi porro magnam! Quidem voluptatum voluptatibus voluptas quis sit accusantium vitae a dolorem, dolores, delectus nesciunt? Consectetur minus officia eaque eligendi, repudiandae ex magni, animi cum numquam veritatis tempore dicta temporibus recusandae maxime molestiae, quia provident labore quibusdam veniam iste vel id. Aliquam minima maiores non quas praesentium, pariatur assumenda ad quasi in esse fugiat, totam illo ab nam exercitationem, quisquam tempore voluptatem nostrum eligendi? Expedita porro ratione eaque eos, delectus magnam ipsum fuga voluptatibus obcaecati natus, distinctio quasi numquam libero tenetur, nostrum dolore perferendis voluptate velit quia. Eligendi quas facere possimus atque minus. Aliquid iure repellendus mollitia repellat debitis corrupti molestiae ut natus magni dolorum, quas illum. Inventore quo fugit temporibus architecto?</p>
            </div>
          </div>

        </div>
      </div >

    )
  }
}

export default Home