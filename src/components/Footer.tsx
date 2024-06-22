import type { NextPage } from "next";
import styles from "./frame-component.module.css";
import Link from "next/link"
import { FaFacebookF } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";

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
              <div className={styles.listItem2}> 
              <Link href="/privacy-policy" >privacy-policy </Link>
              
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heading4OurCompanyParent}>
          <h3 className={styles.heading42}>{data.listItem3}</h3>
          <div className={styles.heading4Group}>
            <div className={styles.heading43} />
            <div className={styles.listItemLinkContactUParent}>
              <div className={styles.listItem7}>
             
                
                {data.listItem4}</div>
              <div className={styles.listItem8}>{data.listItem5}</div>
              <div className={styles.listItem8}>{data.listItem6}</div>
          
  
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.heading4Container}>
            <div className={styles.heading44} />
            <div className={styles.heading4GetInTouchWrapper}>
              <h3 className={`${styles.heading45}`}>



              <div className={`${styles.vectorParent} space-x-3 flex justify-center`}>
              <Link href="https://www.facebook.com/profile.php?id=61560140813337">
              <FaFacebookF />
              </Link>
              <RiWhatsappFill />


              <Link href="https://www.instagram.com/trust.your.guru?fbclid=IwZXh0bgNhZW0CMTAAAR0UHG1RGZUMrWnLr2p1aQDl4hq5Xlgoj4ENpi29Aeqd24h-8NM6qzhDMCU_aem_ZmFrZWR1bW15MTZieXRlcw">
                    
                    <IoLogoInstagram />
                    </Link>

          
            </div>
                
                </h3>
            </div>
          </div>
         
          <div className={styles.loremIpsumHasBeen1}>
           {data.listItem8}
          </div>

          <div className={styles.frameContainer}>
          <h2 className={styles.trustYourGuru}>Trust Your Guru</h2>
         
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
          © 2010-2024 www.trustyourguru.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
