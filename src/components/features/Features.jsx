import React from 'react';
import './Features.css'
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import featuresImage from '../../assets/img/featuresImage.png'
import iconText from '../../assets/img/iconText.png'

export default function  Features() {
  return (
    <Container id="Features">
      <Row xs={1} sm={1} xxl={2} className="align-items-center features" >
        <Col xs={{ order: 'last' }} xxl={{ order: 'first' }}>
        <Image src={featuresImage} style={{ width: '100%' }} />
        </Col>
        <Col xs={{ order: 'last' }} xxl={{ order: 'last' }}>
        <Card  className="cardFeatures" style={{ width: '80%', margin:"0 auto" }}>
      <Card.Body>
        <Card.Title>We Provide Many Features You Can Use</Card.Title>
        <Card.Text>
        You can explore the features that we provide with fun and have their own functions each feature.
        </Card.Text>
        <Card.Text><Card.Img src={iconText}/>Powerfull online protection.</Card.Text>
        <Card.Text><Card.Img src={iconText}/>Internet without borders.</Card.Text>
        <Card.Text><Card.Img src={iconText}/>Supercharged VPN</Card.Text>
        <Card.Text><Card.Img src={iconText}/>No specific time limits.</Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  );
}