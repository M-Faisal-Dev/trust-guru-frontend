import React from 'react';

const CourseHeading = ({ dummy, className }) => {
  return (
    <h5
      className={`text-black lg:text-xl md:text-base sm:text-base xxs:text-lg text-center font-normal ${className}`}>
      {dummy}
    </h5>
  );
}

export default CourseHeading;
