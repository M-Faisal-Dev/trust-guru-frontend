import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.topClassCoursesWrapper}>
              <div className={styles.topClassCourses}>Top Class Courses</div>
            </div>
            <div className={styles.heading2ExploreOurWorldParent}>
              <h1 className={styles.heading2}>
                Explore Our Worlds Best Courses
              </h1>
              <div className={styles.whenKnownPrinterTookAGallWrapper}>
                <div className={styles.whenKnownPrinter}>
                  When known printer took a galley of type scrambl edmake
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper1}>
            <div className={styles.tablistTabAllCoursesParent}>
              <div className={styles.tablistTab}>All Courses</div>
              <div className={styles.tablistTab1}>Design</div>
              <div className={styles.tablistTab2}>Business</div>
              <div className={styles.tablistTab3}>Development</div>
            </div>
          </div>
          <div className={styles.tablist} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
