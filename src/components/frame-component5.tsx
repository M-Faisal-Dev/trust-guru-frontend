import type { NextPage } from "next";
import FrameComponent6 from "./frame-component6";
import styles from "./frame-component5.module.css";
import Link from "next/link"

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.skilledIntroduceParent}>
            <div className={styles.skilledIntroduce}>Skilled Introduce</div>
            <div className={styles.sectionHeading2OurTopWrapper}>
              <h2 className={styles.sectionHeading}>
                ACCESS THE RANKING OF COACHES ON THE EXPERIENCE OF THEIR
                CLIENTS.
              </h2>
            </div>
            <div className={styles.sectionWhen}>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type ...
            </div>
          </div>
        </div>
      


<div className="flex items-center justify-center text-center w-[61%]">
  <div className="flex flex-col p-2 m-2 w-full">


    <div className="flex items-center justify-between md:flex-row flex-col space-x-4  p-2">
   
      <Link href="/instructor/details" className="flex items-center space-x-2 px-6 py-2 md:w-2/4 w-full  ">
        <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
          <img src="/section--link--instructor01png@2x.png" alt = "img" />
        </div>
        <div className="flex-col">
          <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Mark Jukarberg</div>
          <div className="styles.sectionWeb">UX Design Lead </div>
          <div className={styles.section48Container}>
                  <span>(192 TRUST POINTS)</span>
                </div>
        </div>
      </Link>
      <Link href="/instructor/details" className="flex items-center  space-x-2 px-6 py-2 md:w-2/4 w-full  ">
        <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
          <img src="https://source.unsplash.com/300x300/?girl" alt = "img" />
        </div>
        <div className="flex-col">
          <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Mark Jukarberg</div>
          <div className="styles.sectionWeb">UX Design Lead </div>
          <div className={styles.section48Container}>
                  <span>(192 TRUST POINTS)</span>
                </div>
        </div>
      </Link>
    </div>
    <div className="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col ">
    
      <Link href="/instructor/details" className="flex items-center  space-x-2 px-6 py-2 md:w-2/4 w-full  ">
        <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
          <img src="https://source.unsplash.com/300x300/?girl,woman" alt = "img" />
        </div>
        <div className="flex-col">
          <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Mark Jukarberg</div>
          <div className="styles.sectionWeb">UX Design Lead </div>
          <div className={styles.section48Container}>
                  <span>(192 TRUST POINTS)</span>
                </div>
        </div>
      </Link>
      <Link href="/instructor/details" className="flex items-center  space-x-2 px-6 py-2 md:w-2/4 w-full  ">
        <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
          <img src="https://source.unsplash.com/300x300/?woman" alt = "img" />
        </div>
        <div className="flex-col">
          <div className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-800">Mark Jukarberg</div>
          <div className="styles.sectionWeb">UX Design Lead </div>
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
