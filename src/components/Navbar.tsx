"use client"
import React, { useState } from 'react';
import type { NextPage } from 'next';
import styles from './Navbar.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CgClose } from "react-icons/cg";
export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`${styles.rectangleParent} ${className}`}>
      <div className={styles.frameChild} />
      <h2 className={styles.trustyourguru}>TrustYourGuru</h2>
      <nav className={`${styles.frameWrapper} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.courses}>Courses</div>
          <div className={styles.pages}>Pages</div>
        </div>
      </nav>
      <div className={styles.frameContainer}>
        <div className={styles.frameParent}>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt="Vector Icon"
              src="/vector.svg"
            />
          </div>

          { isMenuOpen === false ? (<button
            className={styles.hamburgerButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RxHamburgerMenu />
          </button>) : ( <button
            className={styles.hamburgerButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <CgClose /> 
          </button>)

          }
        
          <button className={`${styles.rectangleGroup} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.frameItem} />
            <div className={styles.logIn}>Log In</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
