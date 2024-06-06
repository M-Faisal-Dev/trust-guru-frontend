"use client"

import Image from "next/image";
import React, { useState } from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send formData to your API
    console.log(formData);
  };






// upload Imgs 


const [image, setImage] = useState(null);

const handleImageUpload = (event) => {
  const uploadedImage = event.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    setImage(reader.result);
  };

  if (uploadedImage) {
    reader.readAsDataURL(uploadedImage);
  }
};



const [selectedOptions, setSelectedOptions] = useState([]);
const [customCondition, setCustomCondition] = useState('');
const [openDropDown, setOpenDropDown] = useState(false)
const [openDrop2nd, setOpenDrop2nd] = useState(false)

const handleCheckboxChange = (value) => {
  if (selectedOptions.includes(value)) {
    setSelectedOptions(selectedOptions.filter(option => option !== value));
  } else {
    setSelectedOptions([...selectedOptions, value]);
  }

  // Reset custom condition when an option other than "Other" is selected
  if (!selectedOptions.includes('other')) {
    setCustomCondition('');
  }
};

const handleInputChange = (event) => {
  const { value } = event.target;
  setCustomCondition(value);
};



  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
   

   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6 relative">
        <button 
       
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-blue mb-3 text-center">Answer Of these Question</h2>

<hr  className="border w-full right-0 opacity-50 border-blue mb-3"/>


        <form className="space-y-4">
          <div className="flex justify-center space-x-7 items-center">


          <label className="block text-lg font-medium text-gray-700">
              Upload Profile Picture
            </label>
         
        <div className="relative overflow-visible flex flex-row">
        
          <div className="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      {image ? (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={image}
          alt="Uploaded profile"
        />
      ) : (
        <svg
          className="absolute inset-0 w-full h-full text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      )}
 
      <input
        id="file-upload"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>

    <label
        htmlFor="file-upload"
        className="absolute bottom-0 right-0 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full cursor-pointer"
      >
        <MdOutlineFileUpload />
      </label>

    </div>

          </div>
      
          <div>
            <div className="flex flex-row justify-between border items-center">

         
      <label className="block text-lg font-medium py-2 px-4 w-full text-gray-700">
      Course about business 
      </label>

    {
      openDropDown === true ? ( < IoIosArrowUp className="text-xl" onClick={()=> setOpenDropDown(false)}/>):(<IoIosArrowDown  className="text-xl" onClick={()=> setOpenDropDown(true)}/>)
      }
      </div>
{ openDropDown &&
      <div className="mt-2 space-y-2 space-x-3 duration-500 transition-all ease-in-out">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            value="condition1"
            className="form-checkbox h-4 w-4 text-blue-600"
            onChange={() => handleCheckboxChange('condition1')}
          />
          <span className="ml-2 text-gray-700">Condition 1</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            value="condition2"
            className="form-checkbox h-4 w-4 text-blue-600"
            onChange={() => handleCheckboxChange('condition2')}
          />
          <span className="ml-2 text-gray-700">Condition 2</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            value="other"
            className="form-checkbox h-4 w-4 text-blue-600"
            onChange={() => handleCheckboxChange('other')}
          />
          <span className="ml-2 text-gray-700">Other</span>
        </label>
      
      </div>
}





    </div>
          <div>
            <div className="flex flex-row justify-between border items-center">

         
      <label className="block text-lg font-medium py-2 px-4 w-full text-gray-700">
      Course about business 
      </label>

    {
      openDrop2nd === true ? ( < IoIosArrowUp className="text-xl" onClick={()=> setOpenDrop2nd(false)}/>):(<IoIosArrowDown  className="text-xl" onClick={()=> setOpenDrop2nd(true)}/>)
      }
      </div>
{ openDrop2nd &&
      <div className="mt-2 space-y-2 space-x-3 duration-500 transition-all ease-in-out">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            value="condition1"
            className="form-checkbox h-4 w-4 text-blue-600"
            onChange={() => handleCheckboxChange('condition1')}
          />
          <span className="ml-2 text-gray-700">Condition 1</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            value="condition2"
            className="form-checkbox h-4 w-4 text-blue-600"
            onChange={() => handleCheckboxChange('condition2')}
          />
          <span className="ml-2 text-gray-700">Condition 2</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            value="other"
            className="form-checkbox h-4 w-4 text-blue-600"
            onChange={() => handleCheckboxChange('other')}
          />
          <span className="ml-2 text-gray-700">Other</span>
        </label>
      
      </div>
}





    </div>







       
          <div className="text-right">
            <button type="submit" className="bg-blue text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
   
   
   
   
      <section className="flex flex-col w-full md:flex-row justify-center items-center max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

        <div className="hidden md:block md:flex-1 md:mr-6 w-2/5 p-6 flex justify-center items-center">
          <Image width={300} height={300} alt="sideImg" src="/login.svg" className="w-full h-auto" />
        </div>

        <div className="md:flex-1 p-6 flex md:w-3/5 w-full flex-col justify-center">
          <div className="w-full">
            <div className="p-4 space-y-2 md:space-y-4 sm:p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Login
              </h1>
              <p className="text-base font-light text-center text-gray-600">
                Dont have an account? <a href="#" className="font-medium text-blue hover:underline cursor-pointer">Register here</a>
              </p>

              <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5" 
                    placeholder="name@company.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password" 
                    className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5" 
                    value={formData.password}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="rememberMe" 
                      id="rememberMe" 
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue hover:underline cursor-pointer">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full text-white bg-blue hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-base px-5 py-2.5 text-center"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
