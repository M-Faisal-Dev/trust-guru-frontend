"use client"
import React from 'react'
import MainHeading from './MainHeading'
import MainParagraph from './MainParagraph'
import Skills from './Skills'
// import CourseSwiper from './CourseSwiper'
import CardList from './CardList'

export const Faisal = ({props}) => {
  console.log(props.biography)
  return (
    <div className='xl:px-0 xxs:px-5'>
    <div className='max-w-[1136px] lg:px-[85px] md:px-6 xxs:px-3 pb-[66px] mx-auto rounded-[10px] bg-whitee shadow-neon mt-[40px] mb-[76px]'>
        <MainHeading mainheading='Biography' />
        <MainParagraph mainparagraph={props.biography}  />
      

        <MainHeading mainheading='Skills' />
      
        <Skills skills = {props.skills}/>
        <MainHeading mainheading='My Courses' />
        <MainParagraph mainparagraph='when known printer took a galley of type scrambl edmake' />
        <CardList />

        {/* <CourseSwiper /> */}
    </div>
    </div>
  )
}

