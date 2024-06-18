import type { NextPage } from "next";
import styles from "./frame-component1.module.css";
import Link from "next/link"
export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
const data = {
  heading : "AFFIDATI A CHI VALE!",
  subheading : "I migliori formatori per ogni nicchia",
  subheading1 : "Segui il tuo percorso ovunque",
  subheading2 : "Pagamento settimanale",
  btn : "INIZIA OGGI!",

}


  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.sectionHeading2ThousandParent}>
            <h1 className={styles.sectionHeading}>
             {data.heading}
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
                      {data.subheading}
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
                     {data.subheading1}
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
                      {data.subheading2}
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <Link href="/courses" className={styles.startFreeTrial}>{data.btn}</Link>
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
