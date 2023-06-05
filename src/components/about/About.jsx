import React from 'react';
import './About.css'
import Card from 'react-bootstrap/Card';
import { Button, Image } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap/esm';
import aboutImage from '../../assets/img/aboutImage.png'
import user from '../../assets/img/user.png'
import server from '../../assets/img/server.png'
import location from '../../assets/img/location.png'

export default function  About() {
  return (
    <Container fluid="xxl" id="About" style={{
      padding: "6rem 0 3rem 0"
    }}>
      <Row xs={1} sm={1} xl={2} className="align-items-center about">
       <Col className='col-card-about' >
    <Card className="cardAbout" style={{ 
      width: "100%",
    }}>
    <Card.Body>
      <Card.Title>Want anything to be easy with <strong>LaslesVPN</strong>.</Card.Title>
      <Card.Text>
      Provide a network for all your needs with ease and fun using <strong>LaslesVPN</strong> discover interesting features from us.
      </Card.Text>
      <Button className='buttonAbout' variant="danger">Get Started</Button>
    </Card.Body>
  </Card>
  </Col> 
  <Col className='image-about'>
    <Image src={aboutImage} style={{
      width: "100%",
    }}/>
    </Col>
   </Row>
   <Row  className='align-items-center borderInfornation' style={{
      }}>
   <Col >
   <Card.Body className="cardInformation" >
      <Card.Img src={user} variant="left" />
      <Card className="miniCardInfo">
      <Card.Title> <strong>90+</strong></Card.Title>
      <Card.Text>
        Users
      </Card.Text>
      </Card>
    </Card.Body>
      </Col>
      <Col>
      <Card.Body className="cardInformation center"  style={{
        borderRight: "2px solid rgb(235, 235, 235)",
        borderLeft: "2px solid rgb(235, 235, 235)",
      }}>
      <Card.Img src={location} variant="left" />
      <Card className="miniCardInfo">
      <Card.Title> <strong>30+</strong></Card.Title>
      <Card.Text>
      Locations
      </Card.Text>
      </Card>
    </Card.Body>
   </Col>
   <Col>
   <Card.Body className="cardInformation">
      <Card.Img src={server} variant="left" />
      <Card className="miniCardInfo">
      <Card.Title><strong>50+</strong></Card.Title>
      <Card.Text>
      Servers
      </Card.Text>
      </Card>
    </Card.Body>
   </Col> 
   </Row>
  </Container>
  );
}