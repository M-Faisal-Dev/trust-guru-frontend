import type { NextPage } from "next";
import FrameComponent6 from "./frame-component6";
import styles from "./frame-component5.module.css";
import Link from "next/link"

export type FrameComponent5Type = {
  className?: string;
};




const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {

const data = {
  heading: "UN SOCIAL MARKETPLACE PER TE.",
  heading2: "TROVERAI SUBITO I MIGLIORI! SENZA PERDERE TEMPO IN RICERCHE!",
  discription: "TrustYourGuru aiuta i coach ad ottenere clienti gratuitamente. Il loro guadagno dipenderà dal livello di soddisfazione dei loro studenti.",
}


  return (
    <section className="max-w-7xl mx-auto">
   
  <div className = "flex md:flex-row flex-col items-center justify-center">
  <div className="flex flex-col justify-center  md:w-2/5 p-4">
        <div className="mb-4 text-2xl font-medium  text-blue">{data.heading}</div>
        <h2 className="mb-4 text-2xl font-semibold text-blue-600">{data.heading2}</h2>
        <div className="mb-4 text-xl font-medium ">
          
    <p><strong>TrustYourGuru</strong> aiuta i coach ad <strong> ottenere clienti gratuitamente!</strong>  </p>
    <p>
    Il loro successo dipenderà dal <strong>livello di soddisfazione</strong> dei loro studenti. 

    </p>
        
        </div>
      </div>
  
      <div className="flex items-center justify-center text-center ">
        <div className="flex flex-col p-2 m-2 w-full">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-2">
            {/* Card 1 */}
            <Link href="/instructor/details" className="flex items-center space-x-2 px-6 py-2 w-full md:w-auto">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="/section--link--instructor01png@2x.png" alt="img" className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Mark Jukarberg</div>
                <div className="styles.sectionWeb">UX Design Lead</div>
                <div className={styles.section48Container}>
                  <span>(192 TRUST POINTS)</span>
                </div>
              </div>
            </Link>
  
            {/* Card 2 */}
            <Link href="/instructor/details" className="flex items-center space-x-2 px-6 py-2 w-full md:w-auto">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="/section--link--instructor02png@2x.png" alt="img" className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Mark Jukarberg</div>
                <div className={styles.sectionWeb}>UX Design Lead</div>
                <div className={styles.section48Container}>
                  <span>(192 TRUST POINTS)</span>
                </div>
              </div>
            </Link>
          </div>
  
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-2 mt-4">
            {/* Card 3 */}
            <Link href="/instructor/details" className="flex items-center space-x-2 px-6 py-2 w-full md:w-auto">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="/section--link--instructor03png@2x.png" alt="img" className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Mark Jukarberg</div>
                <div className={styles.sectionWeb}>UX Design Lead</div>
                <div className={styles.section48Container}>
                  <span>(192 TRUST POINTS)</span>
                </div>
              </div>
            </Link>
  
            {/* Card 4 */}
            <Link href="/instructor/details" className="flex items-center space-x-2 px-6 py-2 w-full md:w-auto">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="/section--link--instructor04png@2x.png" alt="img" className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Mark Jukarberg</div>
                <div className={styles.sectionWeb}>UX Design Lead</div>
                <div className={styles.section48Container}>
                  <span>(192 TRUST POINTS)</span>
                </div>
              </div>
            </Link>
          </div>
          </div>
          </div>
  </div>
   
          
  </section>
  
  );
};

export default FrameComponent5;
