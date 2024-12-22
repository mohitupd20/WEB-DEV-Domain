import Herosection from '../app/components/Herosection'; 
import Footer from './components/Footer';
import OurDomains from './components/OurDomains';
import Joincodenex from './components/Joincodenex';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <AboutUs />
      <OurDomains />
      <Joincodenex />
      <Footer />
    </div>
  );
}
