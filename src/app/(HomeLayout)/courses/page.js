"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const cards = [
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  // Add more cards as needed
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  {
    title: 'PMP Certification: 35+ PDU Formal PMP Exam Prep_New PMP 2024',
    author: 'Sabri C. PMP',
    trustPoints: 192,
    price: '$16.00',
    imageUrl: '/cardone.png',
  },
  // ... (add 10 more cards or as needed)
];

const itemsPerPage = 12; // Change this value to set how many items per page

function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const currentItems = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-12a  py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {currentItems.map((card, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-neons">
                <Link href="/courses/details" className="block relative h-52 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={card.imageUrl} />
                </Link>
                <div className="mt-2 space-y-1">
                  <h2 className="text-gray-900 title-font text-base font-semibold">{card.title}</h2>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{card.author} | TRUST POINTS {card.trustPoints}</h3>
                  <p className="mt-1 text-gray-900 title-font text-base font-semibold">{card.price}</p>
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
