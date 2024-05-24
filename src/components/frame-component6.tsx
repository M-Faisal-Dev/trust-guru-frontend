import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
  sectionHeading2LinkMarkJ?: string;
  sectionUXDesignLead?: string;
  sectionLinkInstructor02pn?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propTop?: CSSProperties["top"];
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({
  className = "",
  sectionHeading2LinkMarkJ,
  sectionUXDesignLead,
  sectionLinkInstructor02pn,
  propGap,
  propHeight,
  propMinWidth,
  propPadding,
  propDisplay,
  propMinWidth1,
  propTop,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      minWidth: propMinWidth,
      padding: propPadding,
    };
  }, [propHeight, propMinWidth, propPadding]);

  const sectionUXStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  const sectionLinkInstructor02Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameWrapper} style={frameDiv1Style}>
        <div className={styles.sectionHeading2LinkMParent}>
          <div className={styles.sectionHeading}>
            {sectionHeading2LinkMarkJ}
          </div>
          <div className={styles.sectionUx} style={sectionUXStyle}>
            {sectionUXDesignLead}
          </div>
          <div className={styles.section48Container}>
            <span>(192 TRUST POINTS)</span>
          </div>
        </div>
      </div>
      <div className={styles.sectionParent}>
        <div className={styles.section} />
        <img
          className={styles.sectionLinkInstructor02}
          loading="lazy"
          alt=""
          src={sectionLinkInstructor02pn}
          style={sectionLinkInstructor02Style}
        />
      </div>
    </div>
  );
};

export default FrameComponent6;
