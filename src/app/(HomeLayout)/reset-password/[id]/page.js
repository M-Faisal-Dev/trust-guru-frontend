"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation'
import {routes} from "@/libs/api"
import axios from "axios";


function ResetPasswordPage() {
  const router = useRouter();
  const {id} = useParams()

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Le password non coincidono. Riprova.");
      return;
    }

    console.log("Modulo di reset della password inviato");

    try {
      const response = await axios.put(`${routes.resetPassword}/${id}`, {
        password: formData.password
      });

      console.log(`Password resettata per: ${response.data.email}`);
      toast.success("Password resettata con successo");
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("Impossibile resettare la password. Per favore riprova.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <section className="flex flex-col w-full justify-center items-center max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 w-full flex flex-col justify-center">
          <div className="w-full">
            <div className="p-4 space-y-2 md:space-y-4 sm:p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Resetta la tua Password
              </h1>
              <p className="text-base font-light text-center text-gray-600">
                Inserisci la nuova password.
              </p>

              <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5"
                    placeholder="Nuova Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5"
                    placeholder="Conferma Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-base px-5 py-2.5 text-center"
                >
                  Resetta Password
                </button>
              </form>
              <div className="text-sm text-center mt-4">
                <Link href="/login" className="font-medium text-blue hover:underline cursor-pointer">
                  Torna al Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResetPasswordPage;
