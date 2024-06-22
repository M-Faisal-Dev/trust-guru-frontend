import type { NextPage } from "next";
import styles from "./frame-component8.module.css";

export type FrameComponent8Type = {
  className?: string;
  section?: string;
  smoothVirtualLive?: string;
  classes?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({
  className = "",
  section,
  smoothVirtualLive,
  classes,
}) => {
  return (
    <div className={`${styles.sectionParentjoin} items-center flex flex-row space-x-3`}>
      <img className={styles.sectionIcon} loading="lazy" alt="" src={section} />
      <div className={styles.sectionHeading4SmoothVWrapper}>
        <div className={styles.sectionHeadingContainer}>
          <p className={styles.smoothVirtualLive}>{smoothVirtualLive}</p>
          <p className={styles.classes}>{classes}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
