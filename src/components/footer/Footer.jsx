import React from 'react';
import './Footer.css'
import { Container,Row, Col, Image } from 'react-bootstrap';
import logo from '../../assets/img/NPMLogo.png'
import facebook from '../../assets/img/facebook-icon.svg'
import linkedin from '../../assets/img/linkedin-icon.svg'
import github from '../../assets/img/github-icon.svg'

export default function  Footer() {
  return (
    <div className='backgroundColor3'>
      <Container >
        <Row  style={{paddingBottom:"3rem", paddingTop:"4rem"}}>
          <Col xs={{ order: 'last' }} xxl={{ order: 'first'  }}md={6}>
            <div className="laslesvpn-footer">
            <div className='logoFooter d-flex'>
              <Image  src={logo} style={{height: "1.7rem", marginRight: "0.6rem"}} />
                <h5>Lasles<strong>VPM</strong></h5>
            </div>
            <p><strong>LaslesVPN</strong> is a private vitual network that <br />
            has unique features and has high security.
            </p>
            <div className="social-icon">
            <a href="https://www.facebook.com/pitagorasgmattos" target="_blank" rel="noreferrer">
          <Image className="media-icon" src={facebook}/>
            </a>
            <a href="https://github.com/juniorpgm34" target="_blank" rel="noreferrer">
          <Image className="media-icon" src={github} href="#"  />
            </a>
            <a href="https://www.linkedin.com/in/pitagorasgm/" target="_blank" rel="noreferrer">
          <Image className="media-icon" src={linkedin} href="#" /> 
            </a>
            </div>
            <span>@2023Lasles<strong>VPN</strong></span>
            </div>
          </Col>
          <Col xs={4} md={2} className='list-footer'>
          <h5>Product</h5>
          <p>Download</p>
          <p>Pricing</p>
          <p>Location</p>
          <p>Server</p>
          <p>Countrie</p>
          <p>Blog</p>
          </Col>
          <Col xs={4} md={2} className='list-footer'>
          <h5>Engage</h5>
          <p>LaslesVPN ?</p>
          <p>FAQ</p>
          <p>Tutorials</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          </Col>
          <Col xs={1} className='list-footer'>
          <h5>Earn Money</h5>
          <p>Affiliate</p>
          <p>Become Partner</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}