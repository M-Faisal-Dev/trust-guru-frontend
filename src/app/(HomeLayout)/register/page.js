"use client"

import Image from "next/image";
import React, { useState } from 'react';
import Link from "next/link";


function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: '',
    userType: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send formData to your API
    console.log(formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <section className="flex flex-col w-full md:flex-row justify-center items-center max-w-6xl mx-auto bg-white  rounded-lg shadow-lg overflow-hidden">

      <div className="hidden md:block md:flex-1 md:mr-6  w-2/5 p-6 flex justify-center items-center">
          <Image width={300} height={300} alt="sideImg" src="/register.svg" className="w-full h-auto" />
        </div>



        <div className="md:flex-1 p-6 flex md:w-3/5 w-full flex-col justify-center">
          <div className="w-full">
            <div className="p-4 space-y-2 md:space-y-4 sm:p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
               Register
              </h1>
              <p className="text-base font-light text-center text-gray-600">
                  Already have an account? <Link href="/login" className="font-medium text-blue hover:underline dark:text-primary-500 cursor-pointer">Login here</Link>
                </p>

              <form className="space-y-2 md:space-y-4" action="#" onSubmit={handleSubmit}>
                <div>
                  <input type="text" name="fullName" id="fullName" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5 " placeholder="Full Name"
                   value={formData.fullName}
                   onChange={handleChange}
                  required />
                </div>
            

                <div>
                  <input type="tel" name="phoneNumber" id="number" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5 " placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                     required />
                </div>

                <div>
                  <input type="email" name="email" id="email" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5" placeholder="name@company.com" 
                   value={formData.email}
                   onChange={handleChange}
                  required />
                </div>


                <div>
                  <select id="userType" name="userType" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5"
                     value={formData.userType}
                     onChange={handleChange}
                  required>
                    <option value="">User Type</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                  </select>
                </div>


                <div>
                  <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5" 
                      value={formData.password}
                      onChange={handleChange}
                      required />
                </div>
                <div>
                  <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5"
                     value={formData.confirmPassword}
                    onChange={handleChange}
                     required />
                </div>
            
                <button type="submit" className="w-full text-white bg-blue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-base px-5 py-2.5 text-center ">Create an account</button>
               
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
