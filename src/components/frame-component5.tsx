import type { NextPage } from "next";
import FrameComponent6 from "./frame-component6";
import styles from "./frame-component5.module.css";

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
        <div className={styles.frameParent}>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.sectionParent}>
                <div className={styles.section} />
                <img
                  className={styles.sectionLinkInstructor01}
                  loading="lazy"
                  alt=""
                  src="/section--link--instructor01png@2x.png"
                />
              </div>
              <div className={styles.sectionGroup}>
                <div className={styles.section1} />
                <img
                  className={styles.sectionLinkInstructor03}
                  loading="lazy"
                  alt=""
                  src="/section--link--instructor03png@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <FrameComponent6
              sectionHeading2LinkMarkJ="Mark Jukarberg"
              sectionUXDesignLead="UX Design Lead"
              sectionLinkInstructor02pn="/section--link--instructor02png@2x.png"
            />
            <FrameComponent6
              sectionHeading2LinkMarkJ="William Hope"
              sectionUXDesignLead="Digital Marketing"
              sectionLinkInstructor02pn="/section--link--instructor04png@2x.png"
              propGap="57px"
              propHeight="unset"
              propMinWidth="154px"
              propPadding="var(--padding-42xl) 0px 0px"
              propDisplay="unset"
              propMinWidth1="unset"
              propTop="calc(50% - 101px)"
            />
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.sectionHeading2LinkOParent}>
                <div className={styles.sectionHeading1}>Olivia Mia</div>
                <div className={styles.sectionWeb}>Web Design</div>
                <div className={styles.section48Container}>
                  <span>(192 TRUST POINTS)</span>
                </div>
              </div>
              <div className={styles.sectionHeading2LinkSParent}>
                <div className={styles.sectionHeading2}>Sophia Ava</div>
                <div className={styles.sectionWeb1}>Web Development</div>
                <div className={styles.section48Container1}>
                  <span>(192 TRUST POINTS)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
