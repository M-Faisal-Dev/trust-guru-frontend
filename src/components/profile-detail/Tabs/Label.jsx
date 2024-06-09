import React from 'react'

const Label = (props) => {
  return (
    <label className='text-blackk xl:text-xl lg:text-base md:text-sm xxs:text-base font-normal xl:w-auto
    lg:w-[150px] md:w-[140px] xxs:w-[150px] ' htmlFor="name">{props.labeltext}</label>
  )
}

export default Label