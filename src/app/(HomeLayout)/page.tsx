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
    const res = await fetch('https://backend.trustyourguru.com/api/teacher-profile?page=1&limit=4');
    return res.json();
  } catch (error) {
    // Handle the error, log it, or throw it further if needed
    console.error('An error occurred while fetching data:');
    throw error; // Re-throwing the error to be caught by the caller
  }
}



export default async function page() {
  let data;

  try {
    data = await getData();
  } catch (error) {
    console.error('An error occurred while fetching data:');
    data = []; // Fallback to empty array in case of error
  }


  return (
   <main className="overflow-hidden">

    <Banner/>
    <Main/>
   <Teacher props={data} />
    <Cources/>
    <Cources1/>
    <Cources3/>
    <Cources4/>
    {/* <Cources5/> */}
  
   </main>
  );
}
