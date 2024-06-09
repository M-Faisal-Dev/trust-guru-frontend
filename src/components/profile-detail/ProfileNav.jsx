import React from 'react'
import Anchor from './Anchor'

const ProfileNav = () => {
  return (
    <nav className='bg-dark-blue'>
        <div className='max-w-[1440px] xl:px-[60px] xxs:px-5 mx-auto py-[18px]'>
        <div className="flex items-center justify-between">
        <div>
          <h2 className='text-whitee lg:text-3xl md:text-2xl xxs:text-xl font-medium hover:text-blackk '>Trust Your Guru</h2>
        </div>
        {/* Button */}
        <a
          href="#"
          className="lg:w-[147px] xxs:w-[120px] h-[40px] rounded-[2px] bg-whitee text-light-blue text-[15px] 
          font-normal  flex items-center justify-center">Start Free Trail</a>
      </div>
        </div>
    </nav>
  )
}

export default ProfileNav