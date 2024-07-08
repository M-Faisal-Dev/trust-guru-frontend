"use client"
import React from 'react';
import Nav from '@/components/Instructor-detail/Nav';
import Hero from '@/components/Instructor-detail/Hero';
import Lorenzo from '@/components/Instructor-detail/Lorenzo';
import {Faisal} from '@/components/Instructor-detail/Faisal';
// import Footer from '../components/Footer';

async function getData(id) {
  try {
    const res = await fetch(`https://backend.trustyourguru.com/api/teacher-profile/${id}`, { cache: 'no-store' });
    return res.json();
  } catch (error) {
    // Handle the error, log it, or throw it further if needed
    console.error('An error occurred while fetching data:');
    throw error; // Re-throwing the error to be caught by the caller
  }
}

export default async function page({ params }) {
 const {id} = params;
  let data;

  try {
    data = await getData(id);
  } catch (error) {
    console.error('An error occurred while fetching data:');
    data = []; // Fallback to empty array in case of error
  }

  return (
    <div>
      {/* <Nav /> */}
      <Hero />
       <Lorenzo props = {data}/>
      <Faisal props = {data} /> 
      {/* <Footer /> */}
    </div>
  );
}


