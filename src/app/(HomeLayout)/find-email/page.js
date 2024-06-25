"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import {routes} from "@/libs/api"
import axios from "axios";

function FindEmailPage() {


  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Modulo di ricerca email inviato");
    console.log(email);
  
    try {
      const response = await axios.post(routes.findEmail, { email });
      console.log(`Cercando email per: ${email}`);
      toast.success("Abbiamo trovato con successo la tua email. Controlla la tua email e verifica.");
      
      // You can redirect or perform further actions here
      // For example: router.push('/some-path');
    } catch (error) {
      console.error(error);
      toast.error("Impossibile trovare l'email. Per favore riprova.");
    }
  };
  

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <section className="flex flex-col w-full justify-center items-center max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 w-full flex flex-col justify-center">
          <div className="w-full">
            <div className="p-4 space-y-2 md:space-y-4 sm:p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Trova la tua Email
              </h1>
              <p className="text-base font-light text-center text-gray-600">
                Inserisci il tuo indirizzo email per recuperare il tuo account.
              </p>

              <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 text-gray-900 sm:text-base rounded-sm shadow-md border-gray-100 border focus:ring-1 outline-none block w-full p-2.5"
                    placeholder="tuo-email@esempio.com"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-base px-5 py-2.5 text-center"
                >
                  Trova Email
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

export default FindEmailPage;
