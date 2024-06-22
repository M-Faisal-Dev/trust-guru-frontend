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










export default function Home() {
  return (
   <main className="overflow-hidden">

    <Banner/>
    <Main/>
    <Teacher/>
    <Cources/>
    <Cources1/>
    <Cources3/>
    <Cources4/>
    {/* <Cources5/> */}
  
   </main>
  );
}
