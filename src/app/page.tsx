import Image from "next/image";
// import Navbar from "@/components/Navbar"
import Banner from "@/components/frame-component9";
import Main from "@/components/frame-component7";
import Cources1 from "@/components/frame-component3";
import Cources from "@/components/frame-component4";
import Cources3 from "@/components/frame-component2";
import Cources4 from "@/components/frame-component1";






export default function Home() {
  return (
   <main>

    <Banner/>
    <Main/>
    <Cources/>
    <Cources1/>
    <Cources3/>
    <Cources4/>
    {/* <Cources5/> */}
  
   </main>
  );
}
