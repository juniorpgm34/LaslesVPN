import React from 'react';
import './Localization.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import HugeGlobal from "../../assets/img/HugeGlobal.png"
import Sponsored from "../../assets/img/Sponsored.png"

export default function  Localization() {
  return (
    <div className='backgroundColor2' >
      <Container id="Localization">
      <Row>
        <Col className="d-flex justify-content-center"> 
        <div className='cardPricingTitle'>
            <h1>
            Huge Global Network of Fast VPN
            </h1>
            <p>
            See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move <br /> locations.</p>
        </div>
        </Col>
        </Row>
        <Row >
            <Col className="d-flex justify-content-center">
     <Image className='img-localization' src={HugeGlobal} />
     </Col>
     </Row>
     <Row>
     <Col className="d-flex justify-content-center" >
     <Image src={Sponsored} style={{
      width:"100%"
     }}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}