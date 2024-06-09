import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className="flex rounded-[2px] shadow-neons border justify-between items-center w-full
        px-[30px] py-[15px] text-left text-blackk focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      {isOpen && (
        <div className="bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
