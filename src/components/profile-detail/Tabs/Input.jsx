import React from 'react'

const Input = ({placeholder}) => {
  return (
    <input className='shadow-neons bg-whitee rounded h-[50px] xl:max-w-[572px]   w-full px-[30px] ' 
    type="text" placeholder={placeholder} />
  )
}

export default Input