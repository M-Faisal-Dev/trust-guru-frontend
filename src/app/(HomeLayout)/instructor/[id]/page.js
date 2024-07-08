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
    // const res = await fetch(`http://localhost:4000/api/teacher-profile/${id}`, { cache: 'no-store' });
    return res.json();
  } catch (error) {
    // Handle the error, log it, or throw it further if needed
    console.error('An error occurred while fetching data:');
    throw error; // Re-throwing the error to be caught by the caller
  }
}


async function getAdditionalData(id) {
  try {
    const res = await fetch(`https://backend.trustyourguru.com/api/course/get-by-token/${id}`, { cache: 'no-store' });
    return res.json();
  } catch (error) {
    console.error('An error occurred while fetching additional data:', error);
    throw error;
  }
}

export default async function page({ params }) {
 const {id} = params;
 let additionalData;
  let data;

  try {
    data = await getData(id);
  } catch (error) {
    console.error('An error occurred while fetching data:');
    data = []; // Fallback to empty array in case of error
  }

  
  try {
    additionalData = await getAdditionalData(id);
  } catch (error) {
    console.error('An error occurred while fetching additional data:');
    additionalData = []; // Fallback to empty array in case of error
  }

  console.log(additionalData, "this is course data")

  return (
    <div>
      {/* <Nav /> */}
      <Hero />
       <Lorenzo props = {data}/>
      <Faisal props = {data} couses = {additionalData} /> 
      {/* <Footer /> */}
    </div>
  );
}


