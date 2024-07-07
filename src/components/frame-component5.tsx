import type { NextPage } from "next";
import FrameComponent6 from "./frame-component6";
import styles from "./frame-component5.module.css";
import Link from "next/link"



const FrameComponent5 = ({props}: any) => {
  console.log(props, "this is is faisal i live in pakistan")

const data = {
  heading: "UN SOCIAL MARKETPLACE PER TE.",
  heading2: "TROVERAI SUBITO I MIGLIORI! SENZA PERDERE TEMPO IN RICERCHE!",
  discription: "TrustYourGuru aiuta i coach ad ottenere clienti gratuitamente. Il loro guadagno dipenderà dal livello di soddisfazione dei loro studenti.",
}


  return (
    <section className="max-w-7xl mx-auto">
   
  <div className = "flex md:flex-row flex-col items-center justify-center">
  <div className="flex flex-col justify-center  md:w-2/5 p-4">
        <div className="mb-4 text-xl md:text-2xl font-medium  text-blue">{data.heading}</div>
        <h2 className="mb-4 text-2xl font-semibold text-blue-600">{data.heading2}</h2>
        <div className="mb-4 text-xl font-medium ">
          
    <p><strong>TrustYourGuru</strong> aiuta i coach ad <strong> ottenere clienti gratuitamente!</strong>  </p>
    <p>
    Il loro successo dipenderà dal <strong>livello di soddisfazione</strong> dei loro studenti. 

    </p>
        
        </div>
      </div>
  
      {/* <div className="flex items-center justify-center text-center ">
        <div className="flex flex-col p-2 m-2 w-full">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-2">

            <Link href="/instructor/details" className="flex items-center space-x-2 px-6 py-2 w-full md:w-auto">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="/loram.jpg" alt="img" className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Lorenzo Armentano</div>
                <div className={styles.sectionWeb}>UX Design Lead</div>
                <div className={styles.section48Container}>
                  <span>(192 TRUST POINTS)</span>
                </div>
              </div>
            </Link>
  
    
            <Link href="/instructor/details" className="flex items-center space-x-2 px-6 py-2 w-full md:w-auto">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="/elisa.jpg" alt="img" className="object-contain w-full h-full" />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Elisa Montagni</div>
                <div className={styles.sectionWeb}>Yoga Teacher</div>
                <div className={styles.section48Container}>
                  <span>(189 TRUST POINTS)</span>
                </div>
              </div>
            </Link>
          </div>
  
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-2 mt-4">
   
            <Link href="/instructor/details" className="flex items-center space-x-2 px-6 py-2 w-full md:w-auto">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="/marco.jpg" alt="img" className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Marco Romano</div>
                <div className={styles.sectionWeb}>Principles of Marketing</div>
                <div className={styles.section48Container}>
                  <span>(188 TRUST POINTS)</span>
                </div>
              </div>
            </Link>
  
         
            <Link href="/instructor/details" className="flex items-center space-x-2 px-6 py-2 w-full md:w-auto">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="/elenamasala.jpg" alt="img" className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Elena Masala</div>
                <div className={styles.sectionWeb}>Project Management</div>
                <div className={styles.section48Container}>
                  <span>(187 TRUST POINTS)</span>
                </div>
              </div>
            </Link>
          </div>
          </div>
          </div> */}

<div className="flex flex-wrap justify-evenly sm:w-[70%] w-[80%]">
      {props.map((instructor: any) => (
        <div key={instructor._id} className="flex flex-col items-center space-y-4 p-2 m-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-[40%]">
          <Link href={`/instructor/${instructor._id}`} passHref>
            <div className="flex items-center space-x-2 w-full">
            <div className=" h-28 w-28  rounded-full overflow-hidden bg-gray-200">
                <img src={instructor.profileImage} alt="Instructor" className="object-cover w-full h-full" />
              </div>
            
              <div className="flex flex-col">
                <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">{instructor.fullName}</div>
                <div className={styles.section48Container}>
                  <span>(192 TRUST POINTS)</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
   
          
  </section>
  
  );
};

export default FrameComponent5;
