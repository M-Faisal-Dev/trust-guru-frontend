import React from 'react';


const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(/hero.png)` }}
      className="bg-cover bg-center h-[375px] "
    >
    <div className='max-w-[1440px] xl:px-[60px] xxs:px-5 mx-auto'>
        <h2 className='text-whitee text-[40px] font-semibold leading-[48px] pt-[58px] '>Instructor</h2>
        <div className='flex items-center gap-[8px] pt-[10px] text-whitee text-base font-normal '>
            <a className='hover:text-light-blue' href="#" >Home</a>
            <img className='mt-[3px]' src="/symbol.svg" alt="symbol" />
            <a className='hover:text-light-blue' href="#">Instructors</a>
        </div>
    </div>
    </div>
  );
}

export default Hero;
