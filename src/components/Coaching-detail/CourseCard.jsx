import React from 'react';


const CourseCard = ({ image }) => {
  return (
    <div className='rounded-[5px] shadow-neons p-[8px] pb-[21px] '>
      <img src={image} alt="blog" className='w-full' />
      <div className='flex justify-between mt-[15px] '>
        <div className='flex gap-[8px] items-center '>
          <img src="/calendar.svg" alt="calendar" />
          <p className='text-[#6D6C80] font-Inter xl:text-sm md:text-[10px] xxs:text-sm font-medium'>20 July, 2024</p>
        </div>
        <div className='flex gap-[8px] items-center '>
          <img src="/admin.svg" alt="admin" />
          <p className='text-[#6D6C80] font-Inter xl:text-sm md:text-[10px] xxs:text-sm font-medium'>20 July, 2024</p>
        </div>
      </div>
      <h3 className='text-[#161439] text-center pt-[16px] xl:text-[15px] lg:text-sm xxs:text-sm font-medium'>Python for Machine Learning & Data Science MasterclassLearn</h3>
    </div>
  );
}

export default CourseCard;
