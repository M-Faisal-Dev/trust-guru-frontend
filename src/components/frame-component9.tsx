import type { NextPage } from "next";
import styles from "./frame-component9.module.css";
import Link from "next/link"

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({ className = "" }) => {

  const data = {
    mainheading: "Affidati a chi vale.",
    heading: "Scegli i migliori coach in ogni mercato!",
    description: "Individua velocemente i migliori formatori. Analizza il loro programma dettagliato. Soddisfatto o Rimborsato.",
    link : "ISCRIVITI"
   
  };

  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={`${styles.rectangleParent} pb-4  pt-7 px-16 `}>
        <div className={styles.frameChild}   />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.learningIsWhatYouParent}>
                <h1 className={styles.learningIsWhat}>{data.mainheading}</h1>
                <h2 className={styles.makeOfIt}>
                  {data.heading}
                </h2>
              </div>
              <div className={styles.loremIpsumHasBeenTheIndusWrapper}>
                <div className={styles.loremIpsumHasBeen}>
  <ul className="list-disc pl-5">
    <li><strong>Individua velocemente</strong> i migliori formatori.</li>
    <li><strong>Analizza</strong> il loro programma dettagliato.</li>
    <li><strong>Soddisfatto o Rimborsato.</strong></li>
  </ul>
</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <button className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <Link href = "/courses" className={styles.startFreeTrail}>{data.link}</Link>
              </button>
            </div>
          </div>
        </div>


        
        <div className={styles.frameDiv}>
          {/* <img className={styles.frameInner} alt="" src="/group-141.svg" /> */}
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
