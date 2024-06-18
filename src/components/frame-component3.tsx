import type { NextPage } from "next";
import GroupComponent from "./group-component";
import styles from "./frame-component3.module.css";
import Link from "next/link"

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  const cards = [1, 2, 3, 4];
  return (
   <section className="text-gray-600 body-font">
  <div className="max-w-7xl px-5 py-10 mx-auto">
  <div  className="flex flex-wrap -m-4">
    
    {cards.map((card, index) => (
      

       <div key={index} className="p-4 md:w-1/4">
 <div  className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
 <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/cardtwo.png" alt="blog" />
 <div className="p-4">
  <div className="flex flex-row justify-between">
  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">TRUST POINTS 192</h2>

  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Designing/ UI&X</h2>


  </div>

   <h1 className="title-font text-lg font-semibold text-gray-900 mb-2">Graphic Design Masterclass - Learn GREAT Design</h1>
   <p className="leading-relaxed mb-2">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
   <div className="flex items-center justify-between flex-wrap ">
     <Link href="/courses/detials" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Enroll Now
       <svg className="w-4 h-5 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
         <path d="M5 12h14" />
         <path d="M12 5l7 7-7 7" />
       </svg>
     </Link>

     <h1 className="title-font text-lg font-semibold text-blue-600 mb-2">$15.00</h1>

   </div>
 </div>
</div>
</div>
   
    )
    
    )}
       
       </div>
  </div>
</section>

  );
};

export default FrameComponent3;
