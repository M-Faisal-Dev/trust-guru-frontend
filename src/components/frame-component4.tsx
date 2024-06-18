import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
const data = {
  heading : "I piu’ scelti.",
  subheading : "Acquisire le giuste competenze può cambiarti la vita."
}

  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.topClassCoursesWrapper}>
              <div className={styles.topClassCourses}></div>
            </div>
            <div className={styles.heading2ExploreOurWorldParent}>
              <h1 className={styles.heading2}>
              {data.heading}
              
              </h1>
              <div className={styles.whenKnownPrinterTookAGallWrapper}>
                <div className={styles.whenKnownPrinter}>
                {data.subheading}
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default FrameComponent4;
