import Image from "next/image";
// import Navbar from "@/components/Navbar"
import Banner from "@/components/frame-component9";
import Main from "@/components/frame-component7";
import Cources1 from "@/components/frame-component3";
import Cources from "@/components/frame-component4";
import Cources3 from "@/components/frame-component2";
import Cources4 from "@/components/frame-component1";
import AboutUs from "@/components/About-us/About"

import Teacher from "@/components/frame-component5";


async function getData() {
  try {
    const res = await fetch('https://backend.trustyourguru.com/api/teacher-profile?page=1&limit=4', { cache: 'no-store' });
    return res.json();
  } catch (error) {
    // Handle the error, log it, or throw it further if needed
    console.error('An error occurred while fetching data:');
    throw error; // Re-throwing the error to be caught by the caller
  }
}
async function getTeacher() {
  try {
    const res = await fetch('https://backend.trustyourguru.com/api/teacher-profile?page=1&limit=12', { cache: 'no-store' });
    return res.json();
  } catch (error) {
    // Handle the error, log it, or throw it further if needed
    console.error('An error occurred while fetching data:');
    throw error; // Re-throwing the error to be caught by the caller
  }
}


async function getAdditionalData() {
  try {
    const res = await fetch('https://backend.trustyourguru.com/api/course?page=1&limit=4', { cache: 'no-store' });
    return res.json();
  } catch (error) {
    console.error('An error occurred while fetching additional data:');
    throw error;
  }
}

export default async function page() {
  let data;
  let additionalData;
  let teacherData;

  try {
    data = await getData();
  } catch (error) {
    console.error('An error occurred while fetching data:');
    data = []; // Fallback to empty array in case of error
  }

  try {
    additionalData = await getAdditionalData();
  } catch (error) {
    console.error('An error occurred while fetching additional data:');
    additionalData = []; // Fallback to empty array in case of error
  }

  try {
    teacherData = await getTeacher();
  } catch (error) {
    console.error('An error occurred while fetching additional data:');
    teacherData = []; // Fallback to empty array in case of error
  }


  return (
   <main className="overflow-hidden">

    <Banner/>
    <Main/>
   <Teacher props={data} />
    <Cources/>
    <Cources1 props={additionalData}/>
    <Cources3  props={teacherData} />
    <Cources4/>
    {/* <Cources5/> */}
  
   </main>
  );
}
