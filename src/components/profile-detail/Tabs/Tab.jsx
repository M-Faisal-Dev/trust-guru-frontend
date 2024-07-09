import React, { useState, useEffect } from 'react';
import Label from './Label';
import Input from './Input'; // Ensure the correct path to your Input component
import axios from 'axios';
import { routes } from "@/libs/api";
import { handleProfileImageUpload } from "@/libs/uploadAsset";
import { useAuth } from '@/Context/AuthContext';
import {toast} from 'react-toastify';

const Tab = () => {
  const [teacherData, setTeacherData] = useState({
    fullName: '',
    profileImage: '',
    about: '',
    profession: '',
    country: '',
    city: '',
    address: '',
    zipCode: '',
    phone: '',
    email: '',
    gender: '',
    dob: '',
  });
  const [formData, setFormData] = useState({
    fullName: '',
    profileImage: '',
    about: '',
    profession: '',
    country: '',
    city: '',
    address: '',
    zipCode: '',
    phone: '',
    email: '',
    gender: '',
    dob: '',
 
  });
  const [checkDataStatus, setCheckDataStatus] = useState(false)
  const { isAuthenticated, login, logout, userToken, getRefreshToken } = useAuth();

  const Token = getRefreshToken()
  console.log(Token, "this is token")



  useEffect(() => {
    const fetchTeacherProfile = async () => {
      try {
        const response = await axios.get(routes.getSingleTeacherbyToken, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token}`,
          },
        });
        // Handle the response here
        if(response.data){
          setCheckDataStatus(true)
          setTeacherData(response.data)
        }
       
      } catch (error) {
        setCheckDataStatus(false)
        console.error(error);
      }
    };
  
    fetchTeacherProfile();
  }, [Token]);


  const [image, setImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };


  const fetchTeacherProfile = async () => {
    try {
      const response = await axios.get(routes.getSingleTeacherbyToken, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Token}`,
        },
      });
      // Handle the response here
      if(response.data){
        setCheckDataStatus(true)
        setTeacherData(response.data)
      }
     
    } catch (error) {
      setCheckDataStatus(false)
      console.error(error);
    }
  };

 



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let uploadedImageUrl = '';
      if (image) {
        uploadedImageUrl = await handleProfileImageUpload(image);
      }
      const finalFormData = {
        ...formData,
        profileImage: uploadedImageUrl.image[0],
      };

  
      const response = await axios.post(routes.createTeacher, finalFormData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`,  // Include token in headers
        },
      });

      setFormData({
        fullName: '',
        profileImage: '',
        about: '',
        country: '',
        profession: '',
        city: '',
        address: '',
        zipCode: '',
        phone: '',
        email: '',
        gender: '',
        dob: '',
      })

      toast.success("I tuoi dati sono stati inviati con successo");
      fetchTeacherProfile();
    } catch (error) {
      toast.error("Si è verificato un errore durante l'invio dei tuoi dati. Per favore, riprova.");
      // Handle the error appropriately
    }
  };


  const handleEdit = ()=>{
    setCheckDataStatus(false)
    const fetchTeacherProfile = async () => {
      try {
        const response = await axios.get(routes.getSingleTeacherbyToken, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token}`,
          },
        });
        // Handle the response here
      
        setFormData(response.data)
      } catch (error) {
        setCheckDataStatus(false)
        console.error(error);
      }
    };
  
    fetchTeacherProfile();
    setTeacherData(formData)
  }

  return (

<div className='shadow-neons 2xl:px-[50px] xl:px-10 xxs:px-5'>
  <h1 className='text-skyblue text-xl font-semibold pt-[59px]'>Immagine del Profilo</h1>
  <div className='grid place-content-center'>



  { checkDataStatus == false  ? (
    <div className='relative w-32 h-32'>
      {image ? (
        <img
          className="w-full h-full object-cover rounded-full"
          src={URL.createObjectURL(image)}
          alt="Profilo caricato"
        />
      ) : (
        <svg
          className="w-full h-full text-gray-400 rounded-full"
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
        type="file"
        accept="image/*"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleImageUpload}
      />
      <img src="/upload.svg" alt="Carica" className='absolute right-2 bottom-2 w-8 h-8 pointer-events-none' />
    </div>) : (<div className='relative w-32 h-32'>
     
        <img
          className="w-full h-full object-cover rounded-full"
          src={teacherData?.profileImage}
          alt="Profilo caricato"
        />
     
    </div>)
}


  </div>

{ checkDataStatus == false ? (<form onSubmit={handleSubmit} className='mt-[49px]'>
    <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between'>
      <Label labeltext='Nome e Cognome' />
      <Input name="fullName" value={formData.fullName} onChange={handleChange} placeholder='Lorenzo Armentano' />
    </div>
    <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
      <Label labeltext='Descrivi te stesso' />
      <textarea
        className='shadow-neons bg-whitee rounded h-[120px] xl:max-w-[572px] w-full py-[15px] px-[30px]'
        name="about"
        value={formData.about}
        onChange={handleChange}
        placeholder='Lorem ipsum presenta il carattere di esempio e l’orientamento della scrittura sulle pagine web e altre applicazioni software dove il contenuto non è la principale preoccupazione dello sviluppatore.'
      ></textarea>
    </div>
    <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
      <Label labeltext='la tua professione' />
      <Input name="profession" value={formData.profession} onChange={handleChange} placeholder='UI&UX Designing' />
    </div>
    <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
      <Label labeltext='Nazione' />
      <Input name="country" value={formData.country} onChange={handleChange} placeholder='Pakistan' />
    </div>
    <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
      <Label labeltext='Città' />
      <Input name="city" value={formData.city} onChange={handleChange} placeholder='Thana Malakand' />
    </div>
    <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
      <Label labeltext='Indirizzo' />
      <Input name="address" value={formData.address} onChange={handleChange} placeholder='Malakand, KPK, Pakistan' />
    </div>
    <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
      <Label labeltext='CAP' />
      <Input name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder='23050' />
    </div>
    <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
      <Label labeltext='Cellulare' />
      <Input name="phone" value={formData.phone} onChange={handleChange} placeholder='+92 344 9020468' />
    </div>
    <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
      <Label labeltext='Email' />
      <Input name="email" value={formData.email} onChange={handleChange} placeholder='LorenzoArmentano@gmail.com' />
    </div>
    <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 xl:gap-[147px] mt-4'>
      <Label labeltext='Sesso' />
      <div className='flex items-center justify-center gap-10'>
        <div className='flex gap-[10px]'>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleGenderChange}
            className="custom-radio"
          />
          <label htmlFor="male">Maschio</label>
        </div>
        <div className='flex gap-[10px]'>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleGenderChange}
            className="custom-radio"
          />
          <label htmlFor="female">Femmina</label>
        </div>
        <div className='flex gap-[10px]'>
          <input
            type="radio"
            id="other"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleGenderChange}
            className="custom-radio"
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>
    </div>
    <div className='flex sm:flex-row xxs:flex-col sm:items-center sm:gap-0 xxs:gap-2 justify-between mt-4'>
      <Label labeltext='Data di Nascita' />
      <Input name="dob" type="date" value={formData.dob} onChange={handleChange} placeholder='18 Agosto 1999' />
    </div>
    <div className='py-[30px] grid place-items-center'>
      <button type="submit" className='w-[199px] h-[44px] rounded-[3px] bg-light-blue text-whitee text-xl font-normal'>Salva le Modifiche</button>
    </div>
  </form>) : (
    <div className="container mx-auto pt-4 pb-11 px-4">
    {teacherData && (
      <div className="grid grid-cols-1 text-lg md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Nome completo:</span>
          <span>{teacherData.fullName}</span>
        </div>
        <div className="flex flex-col md:col-span-2">
          <span className="font-semibold text-xl">About:</span>
          <span>{teacherData.about}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">la tua professione:</span>
          <span>{teacherData.profession}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Nazione:</span>
          <span>{teacherData.country}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Città:</span>
          <span>{teacherData.city}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Indirizzo:</span>
          <span>{teacherData.address}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">CAP:</span>
          <span>{teacherData.zipCode}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Cellulare:</span>
          <span>{teacherData.phone}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Email:</span>
          <span>{teacherData.email}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Sesso:</span>
          <span>{teacherData.gender}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Data di Nascita:</span>
          <span>{new Date(teacherData.dob).toLocaleDateString()}</span>
        </div>
      </div>
    )}
    <div className='py-[30px] grid place-items-center'>
      <button onClick={handleEdit} className='w-[232px] h-[44px] rounded-[3px] bg-light-blue text-whitee text-xl font-normal'>Modifica Informazioni</button>
    </div>
  </div>
  
  ) }
</div>


  );
};

export default Tab;
