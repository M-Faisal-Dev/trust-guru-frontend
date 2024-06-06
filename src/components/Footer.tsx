import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <footer className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.trustYourGuruParent}>
          <h2 className={styles.trustYourGuru}>Trust Your Guru</h2>
          <div className={styles.loremIpsumHasBeenTheIndusParent}>
            <div className={styles.loremIpsumHasBeen}>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type...
            </div>
            <div className={styles.listItem4637thAveNyParent}>
              <div className={styles.listItem}>463 7th Ave, NY 10018, USA</div>
              <div className={styles.listItem1}>+123 88 9900 456</div>
            </div>
          </div>
        </div>
        <div className={styles.heading4UsefulLinksParent}>
          <h3 className={styles.heading4}>Useful Links</h3>
          <div className={styles.heading4Parent}>
            <div className={styles.heading41} />
            <div className={styles.listItemLinkOurValueParent}>
              <div className={styles.listItem2}>About Us</div>
              <div className={styles.listItem3}>Ranking Courses</div>
              <div className={styles.listItem4}>Best Courses</div>
              <div className={styles.listItem5}>Best Courses</div>
              <div className={styles.listItem6}>Best Courses</div>
            </div>
          </div>
        </div>
        <div className={styles.heading4OurCompanyParent}>
          <h3 className={styles.heading42}>Our Company</h3>
          <div className={styles.heading4Group}>
            <div className={styles.heading43} />
            <div className={styles.listItemLinkContactUParent}>
              <div className={styles.listItem7}>Contact Us</div>
              <div className={styles.listItem8}>Become Teacher</div>
              <div className={styles.listItem9}>Blog</div>
              <div className={styles.listItem10}>Instructor</div>
              <div className={styles.listItem11}>Events</div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.heading4Container}>
            <div className={styles.heading44} />
            <div className={styles.heading4GetInTouchWrapper}>
              <h3 className={styles.heading45}>Get In Touch</h3>
            </div>
          </div>
          <div className={styles.loremIpsumHasBeen1}>
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s,
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
              <img className={styles.vectorIcon2} alt="" src="/vector-9.svg" />
              <div className={styles.frameWrapper}>
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-10.svg"
                  />
                  <div className={styles.vectorContainer}>
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector-11.svg"
                    />
                    <img
                      className={styles.vectorIcon5}
                      alt=""
                      src="/vector-12.svg"
                    />
                  </div>
                </div>
              </div>
              <img className={styles.vectorIcon6} alt="" src="/vector-13.svg" />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.vectorParent1}>
                <img className={styles.vectorIcon7} alt="" src="/vector1.svg" />
                <div className={styles.vectorFrame}>
                  <img
                    className={styles.vectorIcon8}
                    alt=""
                    src="/vector-14.svg"
                  />
                </div>
                <div className={styles.vectorParent2}>
                  <img
                    className={styles.vectorIcon9}
                    alt=""
                    src="/vector-15.svg"
                  />
                  <img
                    className={styles.vectorIcon10}
                    alt=""
                    src="/vector-16.svg"
                  />
                </div>
              </div>
              <div className={styles.vectorParent3}>
                <img
                  className={styles.vectorIcon11}
                  alt=""
                  src="/vector2.svg"
                />
                <img
                  className={styles.vectorIcon12}
                  alt=""
                  src="/vector-17.svg"
                />
                <div className={styles.frameParent1}>
                  <div className={styles.vectorWrapper1}>
                    <img
                      className={styles.vectorIcon13}
                      alt=""
                      src="/vector-18.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon14}
                    alt=""
                    src="/vector-19.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skillgrocomAllRightsReserWrapper}>
        <div className={styles.skillgrocomAllRights}>
          © 2010-2024 skillgro.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
