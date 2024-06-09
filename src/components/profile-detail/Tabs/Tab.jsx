// import React from 'react';
import React, { useState } from 'react';
import Label from './Label';
import Input from './Input'; // Ensure the correct path to your Input component


const Tab = () => {
    const [profileImage, setProfileImage] = useState("/eidtprofile.png");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className='shadow-neons 2xl:px-[50px] xl:px-10 xxs:px-5'>
      <h1 className='text-skyblue text-xl font-medium pt-[59px]'>Profile Image</h1>
      <div className='grid place-content-center'>
      <div className='relative'>
          <img src={profileImage} alt="ProfileEdit" className='lg:mt-[-50px] xxs:mt-[20px]' />
          <input 
            type="file" 
            accept="image/*" 
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleImageUpload}
          />
          <img src="/upload.svg" alt="Upload" className='absolute right-0 bottom-[20px] pointer-events-none' />
        </div>
      </div>
      <form action="#" className='mt-[49px]' >
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between'>
          <Label labeltext='Full Name' />
          <Input placeholder='Lorenzo Armentano' />
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between mt-4'>
          <Label labeltext='About' />
          <textarea  className='shadow-neons bg-whitee rounded h-[120px] xl:max-w-[572px]
        w-full py-[15px] px-[30px]'
          name="text" id="text" placeholder='Lorem ipsum presents the sample font and orientation of writing on web pages and other software applications where content is not the main concern of the developer.'></textarea>
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between mt-4'>
          <Label labeltext='Country' />
          <Input placeholder='Pakistan' />
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between mt-4'>
          <Label labeltext='City' />
          <Input placeholder='Thana Malakand' />
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between mt-4'>
          <Label labeltext='Address' />
          <Input placeholder='Malakand, KPK, Pakistan' />
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between mt-4'>
          <Label labeltext='Zip Code' />
          <Input placeholder='23050' />
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between mt-4'>
          <Label labeltext='Phone' />
          <Input placeholder='+92 344 9020468' />
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between mt-4'>
          <Label labeltext='Email' />
          <Input placeholder='LorenzoArmentano@gmail.com' />
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2
         xl:gap-[147px]  mt-4'>
          <Label labeltext='Gender' />
          <div className='flex items-center justify-center gap-10'>
            <div className='flex gap-[10px]'>
              <input type="radio" id="male" name="gender" className="custom-radio" />
              <label htmlFor="male">Male</label>
            </div>
            <div className='flex gap-[10px]'>
              <input type="radio" id="female" name="gender" className="custom-radio" />
              <label htmlFor="female">Female</label>
            </div>
            <div className='flex gap-[10px]'>
              <input type="radio" id="other" name="gender" className="custom-radio" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between mt-4'>
          <Label labeltext='Date Of Birth' />
          <Input placeholder='18 August 1999' />
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between mt-4'>
          <Label labeltext='Bank Name' />
          <Input placeholder='HBL Bank' />
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between mt-4'>
          <Label labeltext='IBAN' />
          <Input placeholder='xxxxxxxxxxxxxxxxxxxxxxx' />
        </div>
        <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2  justify-between mt-4'>
          <Label labeltext='Acc Number' />
          <Input placeholder='xxxxxxxxxxxxxxxxxxxxxxx' />
        </div>
      </form>
      <div className='py-[30px] grid place-items-center '>
      <button className='w-[199px] h-[44px] rounded-[3px] bg-light-blue text-whitee text-xl font-normal  '>Save Changes</button>
      </div>
    </div>
  );
}

export default Tab;
