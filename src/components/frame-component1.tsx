import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.sectionHeading2ThousandParent}>
            <h1 className={styles.sectionHeading}>
              TYGs purpose is to allow truly competent people to earn money by
              helping others.
            </h1>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector-3.svg"
                      />
                    </div>
                    <div className={styles.sectionList}>
                      The Most World Class Instructors
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className={styles.sectionList1}>
                      Access Your Class anywhere
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.vectorFrame}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector-3.svg"
                      />
                    </div>
                    <div className={styles.sectionList2}>
                      Flexible Course Plan
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.startFreeTrial}>Start Free Trial</div>
                <div className={styles.vectorWrapper1}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/group-33@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
