import React from 'react';

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(/hero.png)` }}
      className="bg-cover bg-center h-[375px] "
    >
    <div className='max-w-[1440px] xl:px-[60px] xxs:px-5 mx-auto'>
        <h2 className='text-whitee text-[40px] font-semibold leading-[48px] lg:pt-[128px] xxs:pt-[58px] '>Profile</h2>
    </div>
    </div>
  );
}

export default Hero;
