"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {routes} from "@/libs/api"


// [
//     {
//         "_id": "666c14820197f7fd1ca16716",
//         "courseTitle": "Introduction to Programming",
//         "coverPicture": "https://example.com/cover.jpg",
//         "bannerPicture": "https://example.com/banner.jpg",
//         "totalPrice": 499,
//         "weeklyPrice": 50,
//         "courseDescription": "This course provides an introduction to programming using Python. It covers basic concepts such as variables, control structures, functions, and data structures.",
//         "studentLearn": "By the end of this course, students will be able to write simple Python programs, understand basic programming concepts, and solve problems using code.",
//         "certificateOption": "Yes",
//         "accessOption": "Lifetime",
//         "totalArtical": 10,
//         "totalLength": "30 hours",
//         "totalWeeks": 6,
//         "weeks": [
//             {
//                 "weeklyTitle": "Week 1: Introduction and Setup",
//                 "sessions": [
//                     {
//                         "topic": "Introduction to Python",
//                         "sessionLength": "2 hours",
//                         "_id": "666c14820197f7fd1ca16718"
//                     },
//                     {
//                         "topic": "Setting up the Development Environment",
//                         "sessionLength": "1.5 hours",
//                         "_id": "666c14820197f7fd1ca16719"
//                     }
//                 ],
//                 "_id": "666c14820197f7fd1ca16717"
//             },
//             {
//                 "weeklyTitle": "Week 2: Basic Syntax and Data Types",
//                 "sessions": [
//                     {
//                         "topic": "Basic Syntax",
//                         "sessionLength": "2 hours",
//                         "_id": "666c14820197f7fd1ca1671b"
//                     },
//                     {
//                         "topic": "Data Types and Variables",
//                         "sessionLength": "2 hours",
//                         "_id": "666c14820197f7fd1ca1671c"
//                     }
//                 ],
//                 "_id": "666c14820197f7fd1ca1671a"
//             },
//             {
//                 "weeklyTitle": "Week 3: Control Structures",
//                 "sessions": [
//                     {
//                         "topic": "Conditional Statements",
//                         "sessionLength": "2 hours",
//                         "_id": "666c14820197f7fd1ca1671e"
//                     },
//                     {
//                         "topic": "Loops",
//                         "sessionLength": "2 hours",
//                         "_id": "666c14820197f7fd1ca1671f"
//                     }
//                 ],
//                 "_id": "666c14820197f7fd1ca1671d"
//             },
//             {
//                 "weeklyTitle": "Week 4: Functions",
//                 "sessions": [
//                     {
//                         "topic": "Defining Functions",
//                         "sessionLength": "2 hours",
//                         "_id": "666c14820197f7fd1ca16721"
//                     },
//                     {
//                         "topic": "Function Arguments and Return Values",
//                         "sessionLength": "1.5 hours",
//                         "_id": "666c14820197f7fd1ca16722"
//                     }
//                 ],
//                 "_id": "666c14820197f7fd1ca16720"
//             },
//             {
//                 "weeklyTitle": "Week 5: Data Structures",
//                 "sessions": [
//                     {
//                         "topic": "Lists and Tuples",
//                         "sessionLength": "2 hours",
//                         "_id": "666c14820197f7fd1ca16724"
//                     },
//                     {
//                         "topic": "Dictionaries and Sets",
//                         "sessionLength": "2 hours",
//                         "_id": "666c14820197f7fd1ca16725"
//                     }
//                 ],
//                 "_id": "666c14820197f7fd1ca16723"
//             },
//             {
//                 "weeklyTitle": "Week 6: Final Project",
//                 "sessions": [
//                     {
//                         "topic": "Project Overview and Requirements",
//                         "sessionLength": "1 hour",
//                         "_id": "666c14820197f7fd1ca16727"
//                     },
//                     {
//                         "topic": "Project Work Time",
//                         "sessionLength": "5 hours",
//                         "_id": "666c14820197f7fd1ca16728"
//                     }
//                 ],
//                 "_id": "666c14820197f7fd1ca16726"
//             }
//         ],
//         "createdAt": "2024-06-14T09:59:30.525Z",
//         "updatedAt": "2024-06-14T09:59:30.525Z"
//     }
// ]






const itemsPerPage = 12; // Change this value to set how many items per page

function Page({data}) {
  // const cards = [1, 2, 3, 4];

  console.log(data, "this is a list of cards")
  const [currentPage, setCurrentPage] = useState(1);
  


  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function truncateDescription(description, wordLimit) {
    const words = description.split(' ');
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  const wordLimit = 14;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-12 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {currentItems.map((card, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-3 w-full">
                <div className=' shadow-neons p-2'>

               
                <Link href="/courses/details" className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={card.bannerPicture} />
                </Link>
<div className='px-2'>



                <div className="flex flex-row mt-2 justify-between">
 <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">TRUST POINTS 192</h2>

 <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Designing/ UI&X</h2>


 </div>
                <div className="">
               
                  <h1 className="title-font text-base font-semibold text-gray-900 mt-1">{card.courseTitle}</h1>
  <p className="text-sm font-normal my-1">{truncateDescription(card.courseDescription, wordLimit)}</p>
  <div className="flex items-center justify-between flex-wrap ">
    <Link href={`/courses/${card._id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Enroll Now
      <svg className="w-4 h-5 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </Link>

    <h1 className="title-font text-lg font-semibold text-blue-600 mb-2">${card.totalPrice}</h1>

  </div>
                </div>
                </div>
                </div>
              </div>
            ))}




          </div>
          <div className="flex justify-center mt-14">
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
      </section>
    </div>
  );
}

export default Page;
