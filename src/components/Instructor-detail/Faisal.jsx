"use client"
import React from 'react'
import MainHeading from './MainHeading'
import MainParagraph from './MainParagraph'
import Skills from './Skills'
// import CourseSwiper from './CourseSwiper'
import CardList from './CardList'

export const Faisal = () => {
  return (
    <div className='xl:px-0 xxs:px-5'>
    <div className='max-w-[1136px] lg:px-[85px] md:px-6 xxs:px-3 pb-[66px] mx-auto rounded-[10px] bg-whitee shadow-neon mt-[40px] mb-[76px]'>
        <MainHeading mainheading='Biography' />
        <MainParagraph mainparagraph='Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.dolor sit amet,
        consectetur adipiscing elited do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  />
        <MainParagraph mainparagraph='Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utte labore et dolore magna aliquauis
        ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.' />
        <MainHeading mainheading='Skills' />
        <MainParagraph mainparagraph='Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsa.' />
        <Skills />
        <MainHeading mainheading='My Courses' />
        <MainParagraph mainparagraph='when known printer took a galley of type scrambl edmake' />
        <CardList />

        {/* <CourseSwiper /> */}
    </div>
    </div>
  )
}

