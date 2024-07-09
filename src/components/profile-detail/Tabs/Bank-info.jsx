"use client"
import React, { useState, useEffect } from 'react';
import Label from './Label';
import Input from './Input';
import { useAuth } from '@/Context/AuthContext';
import {routes} from "@/libs/api"
import axios from 'axios';
import {toast} from 'react-toastify';


const BankInfoForm = () => {
  const [bankInfo, setBankInfo] = useState({
    bankName: '',
    iban: '',
    accNumber: '',
  });
  const [checkDataStatus, setCheckDataStatus] = useState(false)

  const { isAuthenticated, login, logout, userToken, getRefreshToken } = useAuth();
  const Token = getRefreshToken()
  console.log(Token, "this is token")

  useEffect(() => {
    const fetchTeacherProfile = async () => {
      try {
        const response = await axios.get(routes.getSingleUser, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token}`,
          },
        });

        // Handle the response here
        if(response.data.iban){
         setCheckDataStatus(true)
        setBankInfo(response.data)
        }else{
          setCheckDataStatus(false)
        }

      } catch (error) {
        setCheckDataStatus(false)
        console.error(error);
      }
    };
  
    fetchTeacherProfile();
  }, [Token]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankInfo({ ...bankInfo, [name]: value });
  };


  const fetchTeacherProfile = async () => {
    try {
      const response = await axios.get(routes.getSingleUser, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Token}`,
        },
      });

      // Handle the response here
      if(response.data.iban){
       setCheckDataStatus(true)
      setBankInfo(response.data)
      }else{
        setCheckDataStatus(false)
      }

    } catch (error) {
      setCheckDataStatus(false)
      console.error(error);
    }
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Bank Info Submitted:', bankInfo);
    try {
    
        const response = await axios.put(routes.bankDetails, bankInfo, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`,  // Include token in headers
          },
        });

        setBankInfo({
          bankName: '',
          iban: '',
          accNumber: '',
        })
        toast.success("I tuoi dati sono stati inviati con successo");
        fetchTeacherProfile();
  
      
    } catch (error) {
      toast.error("Si è verificato un errore durante l'invio dei tuoi dati. Per favore, riprova.");
    }

  };


  const handleEdit = ()=>{
    setCheckDataStatus(false)
    const fetchTeacherProfile = async () => {
      try {
        const response = await axios.get(routes.getSingleUser, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token}`,
          },
        });

        setBankInfo(response.data)
       
      } catch (error) {
        setCheckDataStatus(false)
        console.error(error);
      }
    };
  
    fetchTeacherProfile();
  }


  return (
  <div>
   { checkDataStatus === false ? ( <div className='shadow-neons 2xl:px-[50px] xl:px-10 xxs:px-5'>
    <h1 className='text-skyblue text-xl font-medium pt-[59px]'>Informazioni Bancarie</h1>
    <form onSubmit={handleSubmit} className='mt-[49px]'>
      <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
        <Label labeltext='Nome Banca' />
        <Input name="bankName" value={bankInfo.bankName} onChange={handleChange} placeholder='HBL Bank' />
      </div>
      <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
        <Label labeltext='IBAN' />
        <Input name="iban" value={bankInfo.iban} onChange={handleChange} placeholder='xxxxxxxxxxxxxxxxxxxxxxx' />
      </div>
      <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
        <Label labeltext='Acc Number' />
        <Input name="accNumber" value={bankInfo.accNumber} onChange={handleChange} placeholder='xxxxxxxxxxxxxxxxxxxxxxx' />
      </div>
      <div className='py-[30px] grid place-items-center'>
        <button type="submit" className='w-[199px] h-[44px] rounded-[3px] bg-light-blue text-whitee text-xl font-normal'>Save Bank Info</button>
      </div>
    </form>
  </div>) : (
   
 
      <div className="container mx-auto pt-4 pb-11 px-4">
    <h2 className="text-2xl font-bold mb-4">Informazioni Bancarie</h2>
    {bankInfo && (
      <div className="grid grid-cols-1 text-lg md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Nome Banca:</span>
          <span>{bankInfo.bankName}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">IBAN:</span>
          <span>{bankInfo.iban}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Acc Number:</span>
          <span>{bankInfo.accNumber}</span>
        </div>
    
        
      </div>
    )}

<div className='py-[30px] grid place-items-center'>
      <button onClick={handleEdit} className='w-[232px] h-[44px] rounded-[3px] bg-light-blue text-whitee text-xl font-normal'>Modifica Informazioni</button>
    </div>
  </div>
  
  )
  }
  </div>
  );
};

export default BankInfoForm;
