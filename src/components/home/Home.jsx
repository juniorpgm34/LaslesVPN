import React from 'react';
import './Home.css'
import Header from '../header/Header'
import About from '../about/About';
import Features from '../features/Features';
import Pricing from '../pricing/Pricing';
import Location from '../localization/Localization'
import Testimonials from '../testimonials/Testimonials'
import Footer from '../footer/Footer'

export default function  Home() {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <Pricing />
      <Location />
      <Testimonials />
      <Footer />
    </div>
  );
}