import React from 'react'
import { GoChevronRight } from "react-icons/go";
import Image from "next/image"

function Courselising() {
  return (
    <div>
         <div className='relative'>
    <Image
        width={1500}
        height={1000}
        quality={100}
        alt="sideImg"
        src="/instor-banner.jpg"
        className="w-full h-auto"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute top-1/3 left-18 p-4">
        <p className="text-white font-bold text-4xl">All Instructors</p>
        <div className='flex flex-row items-center space-x-1 text-white text-lg font-medium'>
        <p className="">Home</p>
        <GoChevronRight />
        <p className="">Instructors</p>
        </div>
    </div>
</div>

    </div>
  )
}

export default Courselising