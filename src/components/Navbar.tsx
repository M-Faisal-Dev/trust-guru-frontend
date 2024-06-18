"use client"
import React, { useState } from 'react';
import type { NextPage } from 'next';
import styles from './Navbar.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CgClose } from "react-icons/cg";
import { useAuth } from '@/Context/AuthContext';
import {routes} from "@/libs/api"
import Link from "next/link"


import axios from 'axios';

export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, userType, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.get(routes.logout, { withCredentials: true });
      // Perform any additional cleanup actions, such as redirecting or clearing local state
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className={`${styles.rectangleParent} ${className}`}>
      <div className={styles.frameChild} />
      <h2 className={styles.trustyourguru}>TrustYourGuru</h2>
      <nav className={`${styles.frameWrapper} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.homeParent}>
          <Link href="/" className={styles.aboutUs}>Home</Link>
          <Link href="/about-us"  className={styles.aboutUs}>About Us</Link>
          <Link href="/faq"  className={styles.courses}>faq</Link>
          {/* <Link href="/instructor" className={styles.pages}>Instructor</Link> */}
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

           { isAuthenticated ? ( 
              
  <button onClick={handleLogout} className={styles.logIn}>Logout</button>
 ) : (   <Link href="/login" className={styles.logIn}>Log In</Link>
 )}

          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
