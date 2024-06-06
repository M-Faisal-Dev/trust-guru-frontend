import type { NextPage } from "next";
import FrameComponent8 from "./frame-component8";
import styles from "./frame-component7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-26.svg"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.howWeDoItParent}>
            <div className={styles.howWeDo}>HOW WE DO IT</div>
            <h1 className={styles.sectionHeadingContainer}>
              <span>
                <p className={styles.p}>35+</p>
                <p className={styles.newCoachesEvery}>
                  NEW COACHES EVERY MONTH
                </p>
              </span>
            </h1>
            <div className={styles.sectionEdhen}>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type ...
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <FrameComponent8
                section="/section.svg"
                smoothVirtualLive="Smooth Virtual Live"
                classes="Classes"
              />
              <FrameComponent8
                section="/section-1.svg"
                smoothVirtualLive="99% Graduation"
                classes="Complete"
              />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.sectionEdhenAnUnknownPriParent}>
                <div className={styles.sectionEdhen1}>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type ...
                </div>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.quickJoinNow}>Quick Join Now</div>
                </button>
              </div>
              <div className={styles.sectionEdhen2}>
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
