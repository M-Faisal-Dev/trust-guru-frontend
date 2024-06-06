import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.heading2OurTopClassPrWrapper}>
            <h1 className={styles.heading2}>
              WHO HAS ALREADY USED THE BETA VERSION.
            </h1>
          </div>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-29.svg"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.heading2OliviaMiaParent}>
                  <h3 className={styles.heading21}>Olivia Mia</h3>
                  <div className={styles.webDesign}>Web Design</div>
                  <div className={styles.symbolParent}>
                    <div className={styles.symbol}></div>
                    <div className={styles.symbol1}></div>
                    <div className={styles.symbol2}></div>
                    <div className={styles.symbol3}></div>
                    <div className={styles.symbolWrapper}>
                      <div className={styles.symbol4}></div>
                    </div>
                    <div className={styles.ratings}>(4.8 Ratings)</div>
                  </div>
                </div>
                <div className={styles.loremIpsumHasBeen}>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it. Lorem Ipsum has been the industrys standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
            </div>
            <button className={styles.group17Button}>
              <img
                className={styles.instructorNav01pngIcon}
                alt=""
                src="/instructor-nav01png@2x.png"
              />
            </button>
            <img
              className={styles.group27Button}
              loading="lazy"
              alt=""
              src="/group--2--7--button@2x.png"
            />
            <img
              className={styles.group37Button}
              loading="lazy"
              alt=""
              src="/group--3--7--button@2x.png"
            />
            <img
              className={styles.group47Button}
              loading="lazy"
              alt=""
              src="/group--4--7--button@2x.png"
            />
            <img
              className={styles.group57Button}
              loading="lazy"
              alt=""
              src="/group--5--7--button@2x.png"
            />
            <img
              className={styles.group67Button}
              loading="lazy"
              alt=""
              src="/group--4--7--button@2x.png"
            />
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
