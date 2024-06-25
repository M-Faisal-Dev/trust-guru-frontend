"use client"

import Image from "next/image";
import React, { useState } from 'react';
import Link from "next/link";
import {routes} from "@/libs/api"
import axios from "axios";
import { useRouter } from 'next/navigation'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: '',
    userType: '',
    password: '',
    confirmPassword: ''
  });
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your API endpoint with formData
      const response = await axios.post(routes.register, formData);
      console.log(response.data)
      router.push("/login")
    } catch (error) {
      // Handle errors, e.g., show an error message
      toast.error('User registration failed');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
  <section className="flex flex-col w-full md:flex-row justify-center items-center max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

    <div className="hidden md:block md:flex-1 md:mr-6 w-2/5 p-6 flex justify-center items-center">
      <Image width={300} height={300} alt="sideImg" src="/register.svg" className="w-full h-auto" />
    </div>

    <div className="md:flex-1 p-6 flex md:w-3/5 w-full flex-col justify-center">
      <div className="w-full">
        <div className="p-4 space-y-2 md:space-y-4 sm:p-8">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
            Registrati
          </h1>
          <p className="text-base font-light text-center text-gray-600">
            Hai già un account? <Link href="/login" className="font-medium text-blue hover:underline dark:text-primary-500 cursor-pointer">Entra qui</Link>
          </p>

          <form className="space-y-2 md:space-y-4" action="#" onSubmit={handleSubmit}>
            <div>
              <input type="text" name="fullName" id="fullName" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5" placeholder="Nome e cognome"
                value={formData.fullName}
                onChange={handleChange}
                required />
            </div>

            <div>
              <input type="tel" name="mobile" id="number" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5" placeholder="Telefono"
                value={formData.mobile}
                onChange={handleChange}
                required />
            </div>

            <div>
              <input type="email" name="email" id="email" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5" placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required />
            </div>

            <div>
              <select id="userType" name="userType" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5"
                value={formData.userType}
                onChange={handleChange}
                required>
                <option value="">Tipo di Utente</option>
                <option value="Teacher">coaches</option>
                <option value="Student">Studente</option>
              </select>
            </div>

            <div>
              <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5"
                value={formData.password}
                onChange={handleChange}
                required />
            </div>
            <div>
              <input type="password" name="confirmPassword" id="confirm-password" placeholder="Inseriscila di nuovo" className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5"
                value={formData.confirmPassword}
                onChange={handleChange}
                required />
            </div>

            <button type="submit" className="w-full text-white bg-blue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-base px-5 py-2.5 text-center">Registrati</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

  );
}

export default Page;
