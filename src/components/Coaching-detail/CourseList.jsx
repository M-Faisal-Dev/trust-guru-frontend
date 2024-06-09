import React from 'react'

const CourseList = (props) => {
  return (
    <li className='text-light-skyblue xl:text-lg lg:text-base md:text-xs
    sm:text-xs xxs:text-sm font-light list-disc pt-[10px] ' >{props.list}</li>
  )
}

export default CourseList