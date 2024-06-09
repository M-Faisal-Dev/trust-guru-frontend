import React from 'react';
import PropTypes from 'prop-types';

const Line = ({ className }) => {
  return (
    <hr className={`mt-[10px]  w-full h-[10px] rounded-[30px] bg-dark-blue ${className}`} />
  );
};

Line.propTypes = {
  className: PropTypes.string,
};

Line.defaultProps = {
  className: '',
};

export default Line;
