"use state"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';  
import Scroll from './Scroll';
import Footer from './footer';  

export default function Home() {
  return (
    <>
      <Header/>
      <Scroll/>
      <Footer/>
    </>

  );
};
