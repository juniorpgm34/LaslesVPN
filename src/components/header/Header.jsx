import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/img/NPMLogo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Image, Button } from 'react-bootstrap';

export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Navbar
      className={`nav-header ${collapsed ? '' : 'expanded'}`}
      fixed='top'
      expand='lg'
      collapseOnSelect
      style={{ padding: '1.5rem 0', backgroundColor: 'white' }}
    >
      <Container>
        <Navbar.Brand
          style={{
            fontSize: '1.2rem',
            fontWeight: '500',
            lineHeight: '0.85rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          href='#home'
        >
          <Image src={logo} style={{ height: '1.5rem', marginRight: '0.5rem' }} />
          <Nav.Item>Lasles<strong>VPM</strong></Nav.Item>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={toggleCollapsed} />
        <Navbar.Collapse className='justify-content-center' id='responsive-navbar-nav'>
          <Nav navbarScroll style={{ gap: '1.5rem' }}>
            <Nav.Link href='#About' onClick={toggleCollapsed}>
              About
            </Nav.Link>
            <Nav.Link href='#Features' onClick={toggleCollapsed}>
              Features
            </Nav.Link>
            <Nav.Link href='#Pricing' onClick={toggleCollapsed}>
              Pricing
            </Nav.Link>
            <Nav.Link href='#Localization' onClick={toggleCollapsed}>
              Localization
            </Nav.Link>
            <Nav.Link href='#Testimonials' onClick={toggleCollapsed}>
              Testimonials
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className={`login ${collapsed ? '' : 'collapsed'}`}>
          <Nav.Link style={{ color: 'black' }}>Sing In</Nav.Link>
          <Button variant='danger' className='buttonSingUp' size='sm'>
            Sing Up
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
