import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {

  const data = {
    mainheading: "Affidati a chi vale.",
    subheading: "Siamo un social marketplace che permette a persone competenti con la passione per l’insegnamento di miglliorare la vita di chi vuole imparare,",
    listItem1: "Link utili",
    listItem2: "Riguardo Noi",
    listItem3: "La nostra azienda",
    listItem4: "Contattaci",
    listItem5: "Diventa un coach",
    listItem6: "Blog",
    listItem7: "Restiamo in contatto",
    listItem8: "Seguici sui nostri canali social!",
  }
  


  return (
    <footer className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.trustYourGuruParent}>
          <h2 className={styles.trustYourGuru}>Trust Your Guru</h2>
          <div className={styles.loremIpsumHasBeenTheIndusParent}>
            <div className={styles.loremIpsumHasBeen}>
              {data.subheading}
            </div>
            <div className={styles.listItem4637thAveNyParent}>
              <div className={styles.listItem}>A&A Dealing LLC</div>
              <div className={styles.listItem}>16192 Coastal Highway, Lewes, Delaware 19958</div>
            </div>
          </div>
        </div>
        <div className={styles.heading4UsefulLinksParent}>
          <h3 className={styles.heading4}>{data.listItem1}</h3>
          <div className={styles.heading4Parent}>
            <div className={styles.heading41} />
            <div className={styles.listItemLinkOurValueParent}>
              <div className={styles.listItem2}>{data.listItem2}</div>
            </div>
          </div>
        </div>
        <div className={styles.heading4OurCompanyParent}>
          <h3 className={styles.heading42}>{data.listItem3}</h3>
          <div className={styles.heading4Group}>
            <div className={styles.heading43} />
            <div className={styles.listItemLinkContactUParent}>
              <div className={styles.listItem7}>{data.listItem4}</div>
              <div className={styles.listItem8}>{data.listItem5}</div>
              <div className={styles.listItem8}>{data.listItem6}</div>
          
  
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.heading4Container}>
            <div className={styles.heading44} />
            <div className={styles.heading4GetInTouchWrapper}>
              <h3 className={styles.heading45}>{data.listItem7}</h3>
            </div>
          </div>
          <div className={styles.loremIpsumHasBeen1}>
           {data.listItem8}
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
