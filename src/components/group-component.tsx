import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
  group15?: string;
  design?: string;
  heading5LinkLearningJavaS?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];
  propDebugCommit?: CSSProperties["debugCommit"];
  propDebugCommit1?: CSSProperties["debugCommit"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  group15,
  design,
  heading5LinkLearningJavaS,
  propPadding,
  propWidth,
  propPadding1,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const heading5Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const heading51Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <img className={styles.frameItem} loading="lazy" alt="" src={group15} />
      <div className={styles.frameWrapper} style={frameDiv2Style}>
        <div className={styles.designParent}>
          <div className={styles.design}>{design}</div>
          <div className={styles.heading5} style={heading5Style}>
            {heading5LinkLearningJavaS}
          </div>
          <div className={styles.linkDavidMillarParent}>
            <div className={styles.linkDavid}>By David Millar</div>
            <div className={styles.sectionWhen}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type ...
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer} style={frameDiv3Style}>
        <div className={styles.frameParent}>
          <div className={styles.frameDiv}>
            <div className={styles.enrollNowParent} style={frameDiv4Style}>
              <div className={styles.enrollNow}>Enroll Now</div>
              <div className={styles.beforeWrapper}>
                <img className={styles.beforeIcon} alt="" src="/before.svg" />
              </div>
            </div>
          </div>
          <div className={styles.heading51} style={heading51Style}>
            $15.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
