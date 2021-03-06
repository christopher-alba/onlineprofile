import React, { Component } from 'react'
import './footer.css'
import Button from 'react-bootstrap/Button'
import FadeInSection from './FadeInSection'

class Footer extends Component {
  render() {
    return (
      <div className="footerWrap">

        <div className="onlineLinks">
          <FadeInSection>
            <h2>My Online Links</h2>
          </FadeInSection>
          <FadeInSection>
            <a href="https://www.facebook.com/christopher.alba.357/"><h4 className="footerLinks">Facebook <i class="fab fa-facebook-square"></i></h4></a>
          </FadeInSection>
          <FadeInSection>
            <a href="https://www.linkedin.com/in/christopher-alba-86845b191/"><h4 className="footerLinks">Linked In <i class="fab fa-linkedin"></i></h4></a>
          </FadeInSection>
          <FadeInSection>
            <a href="https://github.com/christopher-alba"><h4 className="footerLinks">Github <i class="fab fa-github-square"></i></h4></a>
          </FadeInSection>
          <FadeInSection>
            <a href="https://www.instagram.com/alba.sy.chris/?hl=en"><h4 className="footerLinks">Instagram <i class="fab fa-instagram-square"></i></h4></a>
          </FadeInSection>
          <FadeInSection>
            <a href="https://careerkarma.com/profile/ckg66cpon0ezz085762bsc5uv/#projects"><h4>Career Karma</h4></a>
          </FadeInSection>
        </div>

        <div className="contactMe">
          <h2>Contact Me</h2>
          <Button variant="outline-light" href="https://docs.google.com/document/d/16pRyFT4RnE5ICkokCWPxguS-Z14z-i5bxwUf2Sz1doE/edit?usp=sharing"><h4>View My CV</h4></Button>
          <Button href="tel:+6402108173338" variant="outline-light"><h4>+64 021 08173338 <i class="fas fa-mobile"></i></h4></Button>
          <Button href="mailto:chris.alba.dev@gmail.com" variant="outline-light"><h4>chris.alba.dev@gmail.com <i class="fas fa-envelope-square"></i></h4></Button>
        </div>
        <img src="https://www.newzealand.com/assets/Tourism-NZ/Auckland/cfeb375aac/img-1545344662-6574-9912-C9EDA874-9F47-C996-B68CBE301D86DB16__aWxvdmVrZWxseQo_FocalPointCropWzQ0MCwxMjgwLDUwLDUwLDc1LCJqcGciLDY1LDIuNV0.jpg" alt="" />
      </div>
    )
  }
}

export default Footer