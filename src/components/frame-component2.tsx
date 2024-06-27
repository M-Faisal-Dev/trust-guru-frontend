import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
const data = {
  heading: "Chi è già su TYG"
}

  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.heading2OurTopClassPrWrapper}>
            <h1 className={styles.heading2}>
            {data.heading}
            </h1>
          </div>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/elena.jpg"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.heading2OliviaMiaParent}>
                  <h3 className={styles.heading21}>Elena Acatrinei</h3>
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
                TrustYourGuru mi è stato d’aiuto nella ricerca di un personal trainer competente che mi aiutasse a raggiungere i risultati desiderati.
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
            <img
                className={styles.group27Button}
                alt=""
                src="/alessia.jpg"
              />
            <img
              className={styles.group27Button}
              loading="lazy"
              alt=""
              src="/tiziano.jpg"
            />
            <img
              className={styles.group37Button}
              loading="lazy"
              alt=""
              src="/loram.jpg"
            />
            <img
              className={styles.group47Button}
              loading="lazy"
              alt=""
              src="/elisa.jpg"
            />
            <img
              className={styles.group57Button}
              loading="lazy"
              alt=""
              src="/marco.jpg"
            />
            <img
              className={styles.group67Button}
              loading="lazy"
              alt=""
              src="/elenamasala.jpg"
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
