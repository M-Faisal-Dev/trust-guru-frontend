"use client"
import React from 'react';
import Nav from '@/components/Instructor-detail/Nav';
import Hero from '@/components/Instructor-detail/Hero';
import Lorenzo from '@/components/Instructor-detail/Lorenzo';
import {Faisal} from '@/components/Instructor-detail/Faisal';
// import Footer from '../components/Footer';

const page = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Hero />
       <Lorenzo />
      <Faisal /> 
      {/* <Footer /> */}
    </div>
  );
}

export default page;
