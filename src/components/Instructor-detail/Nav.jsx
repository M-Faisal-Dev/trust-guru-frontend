"use client"
import React, {useEffect} from 'react';
import Anchor from './Anchor';
import { useAuth } from '@/Context/AuthContext';
import {routes} from "@/libs/api"
import Link from "next/link"


const Nav = () => {
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

  const handleLogout = async () => {
    try {
      await axios.get(routes.logout, { withCredentials: true });
      // Perform any additional cleanup actions, such as redirecting or clearing local state
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (
    <nav className="relative bg-dark-blue ">
      <div className='max-w-[1440px] xl:px-[60px] xxs:px-5 mx-auto py-[18px]'>
      <div className="flex items-center justify-between">
        <div>
          <h2 className='text-whitee lg:text-3xl md:text-2xl xxs:text-xl font-medium hover:text-blackk '>Trust Your Guru</h2>
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-[31px] md:flex xl:text-lg xxs:text-sm font-medium text-whitee">
          <Anchor text='Home' link = "/" />
          <Anchor text= 'FAQ' link = "/faq" />
          <Anchor  text= 'Privacy&policy' link = "/privacy-policy"  />
         
        </div>
        {/* Button */}
 


{ isAuthenticated ? ( 
              
              <button onClick={handleLogout}  className="hidden  lg:w-[147px] md:w-[120px] h-[40px] rounded-[2px] bg-whitee text-light-blue text-[15px] 
              font-normal  md:flex items-center justify-center">Logout</button>
             ) : (   <Link href="/login"  className="hidden  lg:w-[147px] md:w-[120px] h-[40px] rounded-[2px] bg-whitee text-light-blue text-[15px] 
              font-normal  md:flex items-center justify-center">Log In</Link>
             )}
            
        {/* Hamburger Icon */}
        <button
          id="menu-btn"
          className="flex flex-col hamburger  md:hidden focus:outline-none"
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
          space-y-5 font-normal bg-dark-blue text-whitee sm:w-auto sm:self-center left-0 right-0 drop-shadow-md"
        >
        <Anchor text='Home' link = "/"  />
        <Anchor text= 'FAQ' link = "/faq" />
        <Anchor  text= 'Privacy&policy' link = "/privacy-policy"  />
         
     


{ isAuthenticated ? ( 
              
              <button onClick={handleLogout} className="lg:w-[147px] w-[120px] h-[40px] rounded-[2px] bg-whitee text-light-blue text-[15px] 
              font-normal flex items-center justify-center">Logout</button>
             ) : (   <Link href="/login"  className="lg:w-[147px] w-[120px] h-[40px] rounded-[2px] bg-whitee text-light-blue text-[15px] 
              font-normal flex items-center justify-center">Log In</Link>
             )}
            
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
