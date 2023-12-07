"use state"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from './header.js';  
import Scroll from './Scroll';
import Footer from './footer';  
//import Main from './Main';  

export default function Home() {
  return (
    <>
      <Header/>
      <Scroll/>
      <Footer/>
    </>

  );
};