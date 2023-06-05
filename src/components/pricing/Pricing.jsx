import React from 'react';
import './Pricing.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import imagePricing from '../../assets/img/imagePricing.png'
import iconPricing from '../../assets/img/iconPricing.png'

export default function  Pricing() {
  return (
    <div className='backgroundColor' >
    <Container id="Pricing">
      <Row className='princing-row'>
        <Col className="d-flex justify-content-center"> 
        <div className='cardPricingTitle'>
            <h1>
            Choose Your Plan
            </h1>
            <p>
            Let's choose the package that is best for you and explore it happily and <br />cheerfully.
            </p>
        </div>
        </Col>
      </Row>
      <Row xs={1}  xxl={3} className='pricing-row-card' >
        <Col className="d-flex justify-content-center">
        <Card className='cardPricing'>
          <div className='card-inside'>
            <Card.Img className='imagePricing' src={imagePricing} />
            <Card.Body >
            <Card.Title >
              Free Plan
            </Card.Title>
            <Card.Text>
            <p><Card.Img className='iconPricing' src={iconPricing} />Unlimited Bandwitch</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />Encrypted Connection</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />No Traffic Logs</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />Works on All Devices</p>
            </Card.Text>
            </Card.Body>
          <Card.Body>
            <Card.Text style={{fontSize:"1.2rem", marginTop:"7.8rem"}}><strong>Free</strong></Card.Text>
            <Button className='buttonPricing' variant="outline-danger">Select</Button>
          </Card.Body>
          </div>
        </Card>
        </Col>
        <Col className="d-flex justify-content-center">
        <Card className='cardPricing '>
          <div className='card-inside'>
            <Card.Img className='imagePricing' src={imagePricing} />
            <Card.Body >
            <Card.Title>
              Standard Plan
            </Card.Title>
            <Card.Text>
            <p><Card.Img className='iconPricing' src={iconPricing} />Unlimited Bandwitch</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />Encrypted Connection</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />Yes Traffic Logs</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />Works on All Devices</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />Connect Anyware</p>
            </Card.Text>
            </Card.Body>
          <Card.Body>
            <Card.Text style={{fontSize:"1.2rem", marginTop:"5.15rem"}}><strong>$9</strong> / mo</Card.Text>
            <Button className='buttonPricing' variant="outline-danger">Select</Button>
          </Card.Body>
          </div>
        </Card>
        </Col>
        <Col className="d-flex justify-content-center">
        <Card className='cardPricing '>
          <div className='card-inside '>
            <Card.Img className='imagePricing' src={imagePricing} />
            <Card.Body>
            <Card.Title>
              Premium Plan
            </Card.Title>
            <Card.Text>
            <p><Card.Img className='iconPricing' src={iconPricing} />Unlimited Bandwitch</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />Encrypted Connection</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />Yes Traffic Logs</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />Works on All Devices</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />Connect Anyware</p>
            <p><Card.Img className='iconPricing' src={iconPricing} />Get New Features</p>
            </Card.Text>
            </Card.Body>
          <Card.Body>
            <Card.Text style={{fontSize:"1.2rem", marginTop:"2.5rem"}}><strong>$12</strong> / mo</Card.Text>
            <Button className='buttonPricing' variant="outline-danger">Select</Button>
          </Card.Body>
          </div>
        </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}