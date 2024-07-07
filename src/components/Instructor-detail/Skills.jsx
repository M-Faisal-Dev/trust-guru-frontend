import React from 'react'
import Php from './Skills/Php'
import Line from './Skills/Line'


const Skills = ({skills}) => {
  return (
    <div className='grid sm:grid-cols-2 gap-x-[55px] sm:gap-y-[0px] xxs:gap-y-[15px] '>
    <div className='mt-[18px]'>
    <div className='flex justify-between'>
     <Php skill='PHP' />   
     <Php skill='20%' />
    </div>
    <Line  className='max-w-[401px]' />
  </div> 
  {/* two  */}
  <div className='mt-[18px]'>
    <div className='flex justify-between'>
     <Php skill='React' />   
     <Php skill='65%' />
    </div>
    <Line  className='max-w-[296px]' />
  </div>
  <div className='mt-[18px]'>
    <div className='flex justify-between'>
     <Php skill='Java' />   
     <Php skill='55%' />
    </div>
    <Line  className='max-w-[250px]' />
  </div>
  <div className='mt-[18px]'>
    <div className='flex justify-between'>
     <Php skill='Angular' />   
     <Php skill='40%' />
    </div>
    <Line className='max-w-[182px]' />
  </div>
  </div>
  )
}

export default Skills