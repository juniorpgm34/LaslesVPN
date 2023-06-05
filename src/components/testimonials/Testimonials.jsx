import React from 'react';
import './Testimonials.css'
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import test1 from '../../assets/img/testimonialImg1.png'
import test2 from '../../assets/img/testimonialImg2.png'
import test3 from '../../assets/img/testimonialImg3.png'


import starIcon from '../../assets/img/starIcon.png'

export default function  Testimonials() {

  const settings = {
    dots: true,
    dotsClass: 'slick-dots custom-dots-class', 
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Tamanho da tela em que a configuração será aplicada
        settings: {
          slidesToShow: 2, // Novo valor para slidesToShow em telas menores que 768px
        },
      },
      {
        breakpoint: 360, // Tamanho da tela em que a configuração será aplicada
        settings: {
          slidesToShow: 1, // Novo valor para slidesToShow em telas menores que 480px
        },
      },
    ],
  };


  return (
    <div>
      <Container id="Testimonials" className="backgroundSubUnder">
      <Row>
      <Col className="d-flex justify-content-center"> 
        <div className='cardPricingTitle'>
            <h1>
            Trusted by Thousands of <br /> Happy Customer
            </h1>
            <p>
            These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.            </p>
        </div>
        </Col>
      </Row>
<Row >
  <Col >
  <Slider  style={{ marginBottom:"7rem"}} {...settings}>
      <div className='card-testimonial '>
            <div className="body-card-testimonial">
              <div className="card-header">
              <div className="card-testimonial-autor d-flex">
               <img src={test1} alt="" />
                <div className='autor-name'>
                  <h6>Viezh Robert</h6>
                  <span>Warsaw, Poland</span>
               </div>
               </div>
               <div className="score">
                <p>4.5</p>
                <img src={starIcon}alt="" />
              </div>
              </div>
              <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
              </div>
      </div>
      <div className='card-testimonial'>
            <div className="body-card-testimonial">
              <div className="card-header">
              <div className="card-testimonial-autor d-flex">
               <img src={test2} alt="" />
                <div className='autor-name'>
                  <h6>Yessica Christy</h6>
                  <span>Shanxi, China</span>
               </div>
               </div>
               <div className="score">
                <p>4.5</p>
                <img src={starIcon}alt="" />
              </div>
              </div>
              <p>“I like it because I like to travel far and still can connect with high speed”.</p>
              </div>
      </div>
      <div className='card-testimonial'>
            <div className="body-card-testimonial">
              <div className="card-header">
              <div className="card-testimonial-autor d-flex">
               <img src={test3} alt="" />
                <div className='autor-name'>
                  <h6>Kim Young Jou</h6>
                  <span>Seoul, South Korea</span>
               </div>
               </div>
               <div className="score">
                <p>4.5</p>
                <img src={starIcon}alt="" />
              </div>
              </div>
              <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
              </div>
      </div>
      <div className='card-testimonial'>
            <div className="body-card-testimonial">
              <div className="card-header">
              <div className="card-testimonial-autor d-flex">
               <img src={test2} alt="" />
                <div className='autor-name'>
                  <h6>Yessica Christy</h6>
                  <span>Shanxi, China</span>
               </div>
               </div>
               <div className="score">
                <p>4.5</p>
                <img src={starIcon}alt="" />
              </div>
              </div>
              <p>“I like it because I like to travel far and still can connect with high speed”.</p>
              </div>
      </div>
    </Slider>
  </Col>
</Row>
<Row className='justify-content-center align-items-center'>
          <Col md={11}>
      <Card className='cardFooter' >
        <Card.Body>
          <div>
          <h1>Subscribe Now For <br />
          Get Special Features!
          </h1>
          <p>Let's subscribe with us and find the fun.</p>
          </div>
          <div className='d-flex align-items-center'>
        <Button variant="danger">Subscribe Now</Button>
          </div>
        </Card.Body>
      </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className='backgroundSubAbouve'>
      </Container>
    </div>
  );
}