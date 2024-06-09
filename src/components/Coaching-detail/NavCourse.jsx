import React, {useEffect} from 'react';
import Anchor from './Anchor';


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
  return (
    <nav className="relative bg-dark-blue ">
      <div className='max-w-[1440px] xl:px-[60px] xxs:px-5 mx-auto py-[18px]'>
      <div className="flex items-center justify-between">
        <div>
          <h2 className='text-whitee lg:text-3xl md:text-2xl xxs:text-xl font-medium hover:text-blackk '>Trust Your Guru</h2>
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-[31px] md:flex xl:text-lg xxs:text-sm font-medium text-whitee">
          <Anchor text='Home' />
          <Anchor text= 'About Us' />
          <Anchor  text= 'Courses' />
          <Anchor  text= 'Pages' />
          <Anchor  text= 'Pages' />
        </div>
        {/* Button */}
        <div className='flex gap-6 items-center '  >
            <img src="/search.svg" alt="" className='hidden md:block' />
        <a
          href="#"
          className="hidden  lg:w-[114px] md:w-[100px] h-[40px] rounded-[3px]  text-whitee text-lg 
          font-normal  md:flex items-center justify-center border border-whitee ">Log In</a>
          </div>
        {/* Hamburger Icon */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
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
          className="absolute flex-col items-center hidden self-end py-8 mt-[15px]
          space-y-5 font-normal bg-dark-blue text-whitee sm:w-auto sm:self-center left-0 right-0 drop-shadow-md"
        >
        <Anchor text='Home' />
          <Anchor text= 'About Us' />
          <Anchor  text= 'Courses' />
          <Anchor  text= 'Pages' />
          <Anchor  text= 'Pages' />
          <img src="/search.svg" alt="" className='md:block' />
        <a
          href="#"
          className="lg:w-[114px] w-[100px] h-[40px] rounded-[3px]  text-whitee text-lg 
          font-normal  flex items-center justify-center border border-whitee ">Log In</a>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
