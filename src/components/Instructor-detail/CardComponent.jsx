// CardComponent.jsx
import React from 'react';
// import Icon from '../assets/Icon.svg';
import Link from "next/link"

const CardComponent = ({ image, develop, drop, author, description, price, id }) => {
    return (
        <div className='rounded-[6px] shadow-neon bg-whitee md:h-[466px] xxs:h-auto md:pb-0 xxs:pb-[26px]'>
            <img src={image} alt="card" className='w-full' />
            <div className='px-5'>
                <p className='text-light-dark text-lg font-medium pt-5'>{develop}</p>
                <h3 className='text-light-dark text-lg font-medium pt-3'>{drop}</h3>
                {/* <h5 className='text-light-blue text-base font-normal pt-[14px]'>By {author}</h5> */}
                <p className='text-blackk text-sm font-normal pt-[6px]'>
  {description.length > 140 ? `${description.substring(0, 140)}...` : description}
</p>

                <div className='pt-6 flex justify-between'>
                    <Link href={`/courses/${id}`} className='cursor-pointer text-light-dark text-base font-medium flex items-center gap-[5px]'>
                        Enroll Now
                        <img className='pt-[2px]' src="/Icon.svg" alt="Icon" />
                    </Link>
                    <h3 className='text-dark-blue text-xl font-semibold'>${price}</h3>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
