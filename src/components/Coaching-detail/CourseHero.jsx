import React from 'react';

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(/hero.png)`, backgroundPosition: 'center', backgroundSize: 'cover'}}
      className="bg-cover bg-center h-[375px] "
    >
    <div className='max-w-[1440px] xl:px-[60px] xxs:px-5 mx-auto'>
        <h2 className='text-whitee xl:text-[50px] md:text-4xl xxs:text-2xl text-center font-medium leading-[1] pt-[90px] '>
        The Complete Graphics Design Course
        </h2>
        <p className='max-w-[793px] mx-auto text-whitee text-center xl:text-xl md:text-lg xxs:text-sm  
        font-light pt-3 ' >Lorem Ipsum is basically just dummy text that is latin. It&apos;s a content filler for when you don&apos;t really have content to put in there yet. It tends to help you make sure you have your font how you want it,</p>
    <h3 className='text-whitee text-[25px] font-medium pt-3 text-center ' >450+ Students Completed</h3>
    </div>
    </div>
  );
}

export default Hero;
