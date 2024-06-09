import type { NextPage } from "next";
import styles from "./frame-component9.module.css";
import Link from "next/link"

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({ className = "" }) => {
  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={`${styles.rectangleParent}   py-7 px-16`}>
        <div className={styles.frameChild}   />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.learningIsWhatYouParent}>
                <h1 className={styles.learningIsWhat}>Learning is What You</h1>
                <h2 className={styles.makeOfIt}>
                  Make Of It. Make It Yours At Trust Your Guru
                </h2>
              </div>
              <div className={styles.loremIpsumHasBeenTheIndusWrapper}>
                <div className={styles.loremIpsumHasBeen}>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type ...
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <button className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <Link href = "/courses" className={styles.startFreeTrail}>Start Your Journey</Link>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <img className={styles.frameInner} alt="" src="/group-141.svg" />
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-140@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
