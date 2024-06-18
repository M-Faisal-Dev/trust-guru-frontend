"use client"
import React, { useState } from 'react';
import Label from './Label';
import Input from './Input';
import { useAuth } from '@/Context/AuthContext';
import {routes} from "@/libs/api"
import axios from 'axios';


const BankInfoForm = () => {
  const [bankInfo, setBankInfo] = useState({
    bankName: '',
    iban: '',
    accNumber: '',
  });

  const { isAuthenticated, login, logout, userToken, getRefreshToken } = useAuth();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankInfo({ ...bankInfo, [name]: value });
  };

  const Token = getRefreshToken()
  console.log(Token, "this is token")

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

        console.log(response.data, "upload bank details")
      
    } catch (error) {
      console.error('Error uploading data:', error);
      // Handle error (e.g., show error message)
    }

  };

  return (
    <div className='shadow-neons 2xl:px-[50px] xl:px-10 xxs:px-5'>
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
    </div>
  );
};

export default BankInfoForm;
