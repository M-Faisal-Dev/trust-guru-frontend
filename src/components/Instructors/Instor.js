"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { GoChevronRight } from 'react-icons/go';
import Link from 'next/link';


const itemsPerPage = 10; // Number of items per page

function Instor({props}) {

  

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(props.length / itemsPerPage);

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const currentItems = props.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
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
            <p>Home</p>
            <GoChevronRight />
            <p>Instructors</p>
          </div>
        </div>
      </div>
      <div className='w-11/12 mx-auto'>
        <div className='py-10 space-y-6'>
          {currentItems.map((instructor, index) => (
            <Link href={`instructor/${instructor._id}`} key={index} className='flex flex-row mx-auto justify-between px-10 w-full border hover:border-blue rounded-sm p-4 items-center'>
              <div className='flex flex-row space-x-8'>
                <div className='rounded-full relative w-22 h-22'>
                  <Image
                    width={200}
                    height={200}
                    alt="Instructor"
                    src={instructor.profileImage}
                    className="w-22 h-22 rounded-full z-50 absolute top-11 inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <div className='flex flex-col justify-center items-start'>
                  <h3 className='text-gray-900 text-lg font-semibold'>{instructor.fullName}</h3>
                  {/* <label className='text-blue text-sm'>{instructor.role}</label> */}
                </div>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h3 className='text-gray-900 text-lg font-semibold'>TRUST POINTS</h3>
                <label>{instructor.totalPoints}</label>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h3 className='text-gray-900 text-lg font-semibold'>MONTH</h3>
                <label>{instructor.lastMonth}</label>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h3 className='text-gray-900 text-lg font-semibold'>AV. SCORE</h3>
                <label>{instructor.averageScore}</label>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h3 className='text-gray-900 text-lg font-semibold'>N. CLIENTS</h3>
                <label>{instructor.numClients}</label>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center my-8">
          <button
            className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded"
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-4 py-2 mx-1 ${currentPage === i + 1 ? 'bg-blue text-white' : 'bg-gray-300 text-gray-700'} rounded`}
              onClick={() => handleChangePage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded"
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Instor;
