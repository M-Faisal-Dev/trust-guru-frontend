import type { NextPage } from "next";
import FrameComponent8 from "./frame-component8";
import styles from "./frame-component7.module.css";
import Link from "next/link"

export type FrameComponent7Type = {
  className?: string;
};


const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {

  const data = {
    heading: "VISIBILITÀ SENZA INVESTIRE IN PUBBLICITÀ.",
    description: "Ogni coach è inserito all’interno di una classifica meritocratica! ",
    features: [
      { section: "/section.svg", title: "PERCORSI INDIVIDUALI ONLINE",},
      { section: "/section-1.svg", title: "IL 96.2% DEGLI STUDENTI RIACQUISTEREBBE!",},
    ],
    quickJoinText: "REGISTRATI SUBITO!",
    sectionContent1: "Percorsi one to one per creare una relazione trasparente e produttiva tra coach e studente.",
    sectionContent2: "Ogni coach dà il massimo per ottenere il miglior punteggio e scalare la propria classifica.",
    backgroundImage: "/background.jpg"
  };


  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={`${styles.frameWrapper}`}>

          <img
            className={`hidden md:block`}
            loading="lazy"
            alt=""
            src="/group-26.svg"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.howWeDoItParent}>
            <h1 className={styles.sectionHeadingContainer}>
              <span>
                <p className={styles.newCoachesEvery}>
                {data.heading}
                </p>
              </span>
            </h1>
            <div className={styles.sectionEdhen}>
             <p> Ogni coach è inserito all’interno di una <strong>classifica</strong> meritocratica! </p>

            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={`${styles.frameDiv} items-center`}>
              <FrameComponent8
                section="/section.svg"
                smoothVirtualLive={data.features[0].title}
                
               
              />
              <div className={styles.sectionEdhen1}>
                  <p className="text-lg md:hidden block"> <strong>Percorsi one to one</strong> per creare una <strong>relazione trasparente e produttiva</strong> coach e studente.</p>
                  
                </div>

                <div>
                  
                </div>
              <FrameComponent8
                section="/section-1.svg"
                smoothVirtualLive={data.features[1].title}
                
              />
                  <div className={styles.sectionEdhen2}>
            <p className="text-lg md:hidden block"> <strong>Ogni coach dà il massimo</strong> per ottenere il miglior punteggio e <strong> scalare la propria classifica.</strong> </p>  
              </div>




            </div>

            <div className={`md:hidden block`}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-26.svg"
          />
        </div>
            <div className={styles.frameParent1}>
              <div className={styles.sectionEdhenAnUnknownPriParent}>
                <div className={styles.sectionEdhen1}>
                  <p className="text-lg hidden md:block"> <strong>Percorsi one to one</strong> per creare una <strong>relazione trasparente e produttiva</strong> coach e studente.</p>
                  
                </div>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <Link href="/login" className={styles.quickJoinNow}>{data.quickJoinText}</Link>
                </button>
              </div>
              <div className={`${styles.sectionEdhen2} hidden md:block`}>
            <p className="text-lg mt-9 hidden md:block"> <strong>Ogni coach dà il massimo</strong> per ottenere il miglior punteggio e <strong> scalare la propria classifica.</strong> </p>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
