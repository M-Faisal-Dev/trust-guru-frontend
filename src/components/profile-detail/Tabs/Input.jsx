import React from 'react';

const Input = ({ name, value, onChange, placeholder, type }) => {
  return (
    <input
      className='shadow-neons bg-whitee rounded h-[50px] xl:max-w-[572px] w-full px-[30px]'
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
