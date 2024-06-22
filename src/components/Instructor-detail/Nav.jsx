"use client"
import React, {useEffect} from 'react';
import Anchor from './Anchor';
import { useAuth } from '@/Context/AuthContext';
import {routes} from "@/libs/api"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/navigation'


const Nav = () => {
  const router = useRouter()
  useEffect(() => {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    const toggleMenu = () => {
      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
    };
    btn.addEventListener('click', toggleMenu);
    // Cleanup the event listener on component unmount
    return () => {
      btn.removeEventListener('click', toggleMenu);
    };
  }, []);


  const { isAuthenticated, userType, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/'); // Redirect to home page
  };


  return (
    <nav className="relative bg-dark-blue">
    <div className='max-w-[1440px] xl:px-[60px] xxs:px-5 mx-auto py-[18px]'>
      <div className="relative flex items-center justify-between">
        {/* Logo */}
        <div className="">
      <Image 
        className="absolute z-9999 -top-4 left-0 w-13 h-13 md:w-18 md:h-18"
        alt="logo"
        src="/logo.jpg"
        quality={100}
        width={60}
        height={60}
      />
    </div>
  
        {/* Menu Items */}
        <div className="hidden space-x-[31px] md:flex xl:text-lg xxs:text-sm font-medium text-white">
          <Anchor text='Home' link="/" />
          <Anchor text='FAQ' link="/faq" />
          <Anchor text='About us' link="/about-us" />
        </div>
  
        {/* Button */}
        {isAuthenticated ? ( 
          <button 
            onClick={handleLogout}  
            className="hidden lg:w-[120px] md:w-[80px] h-[40px] rounded-md bg-white text-light-blue text-[15px] font-normal md:flex items-center justify-center"
          >
            Logout
          </button>
        ) : (
          <Link 
            href="/login"  
            className="hidden lg:w-[120px] md:w-[80px] h-[40px] rounded-md bg-white text-light-blue text-[15px] font-normal md:flex items-center justify-center"
          >
            Log In
          </Link>
        )}
  
        {/* Hamburger Icon */}
        <button
          id="menu-btn"
          className="flex flex-col hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
  
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute z-99 flex-col items-center hidden self-end py-8 mt-[15px]
          space-y-5 font-normal bg-dark-blue text-white sm:w-auto sm:self-center left-0 right-0 drop-shadow-md"
        >
          <Anchor text='Home' link="/" />
          <Anchor text='FAQ' link="/faq" />
          <Anchor text='About us' link="/about-us" />
  
          {isAuthenticated ? ( 
            <button 
              onClick={handleLogout} 
              className="lg:w-[120px] md:w-[80px] h-[40px] rounded-[2px] bg-white text-light-blue text-[15px] font-normal flex items-center justify-center"
            >
              Logout
            </button>
          ) : (
            <Link 
              href="/login"  
              className="lg:w-[120px] md:w-[80px] h-[40px] rounded-md bg-whitee text-light-blue text-[15px] font-normal flex items-center justify-center"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  </nav>
  
  );
}

export default Nav;
