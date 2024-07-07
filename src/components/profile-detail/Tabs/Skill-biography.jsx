"use client"
import React, { useState, useEffect } from 'react';
import Label from './Label';
import Input from './Input';
import { useAuth } from '@/Context/AuthContext';
import { routes } from "@/libs/api";
import axios from 'axios';
import {toast} from 'react-toastify';


const Biography = () => {
  const [bioData, setBioData] = useState({
    biography: '',
    skills: [{ skill: '', skillPercentage: '' }],
  });

  const [teacherData, setTeacherData] = useState({
    biography: '',
    skills: [{ skill: '', skillPercentage: '' }],
  });
  const [checkDataStatus, setCheckDataStatus] = useState(false)

  const { isAuthenticated, login, logout, userToken, getRefreshToken } = useAuth();



  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'biography') {
      setBioData({ ...bioData, biography: value });
    } else {
      const newSkills = bioData.skills.map((skill, i) => (
        i === index ? { ...skill, [name]: value } : skill
      ));
      setBioData({ ...bioData, skills: newSkills });
    }
  };

  const handleAddSkill = () => {
    setBioData({
      ...bioData,
      skills: [...bioData.skills, { skill: '', skillPercentage: '' }],
    });
  };

  const Token = getRefreshToken();
  console.log(Token, "this is token");



  useEffect(() => {
    const fetchTeacherProfile = async () => {
      try {
        const response = await axios.get(routes.getSingleTeacherbyToken, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token}`,
          },
        });
        if(response.data.biography){
          setCheckDataStatus(true)
          setTeacherData(response.data)
        }else{
          setCheckDataStatus(false)
        }
      
       
      } catch (error) {
        // Handle the error here
        console.error(error);
      }
    };
  
    fetchTeacherProfile();
  }, [Token]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Biography Data Submitted:', bioData);
    try {
      const response = await axios.put(routes.updateTeacherSkills, bioData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`,
        },
      });

      toast.success("I tuoi dati sono stati inviati con successo");
        window.location.reload();
    } catch (error) {
      console.log(error)
      toast.error("Si è verificato un errore durante l'invio dei tuoi dati. Per favore, riprova.");
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className='shadow-neons 2xl:px-[50px] xl:px-10 xxs:px-5 py-10'>
      <h1 className='text-skyblue text-xl font-semibold pt-[59px]'>biografia&competenze</h1>

     { checkDataStatus == false ? (<form onSubmit={handleSubmit} className='mt-[49px]'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-between mt-4'>
          <Label labeltext='Biography' />
          <textarea
            name="biography"
            value={bioData.biography}
            onChange={(e) => handleChange(e)}
            placeholder='Write your biography here'
            className='w-full sm:w-3/4 p-2 border border-gray-300 rounded'
            rows="6"
            required
          />
        </div>

        {bioData.skills.map((skill, index) => (
          <div key={index} className='flex flex-col gap-2 mt-4'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-between'>
              <Label labeltext='Skill' />
              <Input
                name="skill"
                value={skill.skill}
                onChange={(e) => handleChange(e, index)}
                placeholder='e.g., JavaScript'
                className='w-full sm:w-3/4'
                required
              />
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-between'>
              <Label labeltext='Skill Percentage' />
              <Input
                name="skillPercentage"
                value={skill.skillPercentage}
                onChange={(e) => handleChange(e, index)}
                placeholder='e.g., 80%'
                className='w-full sm:w-3/4'
                required
              />
            </div>
          </div>
        ))}
        <div className='py-[30px] flex justify-end'>
          <button
            type="button"
            onClick={handleAddSkill}
            className='p-2 rounded-[3px] bg-light-blue text-white text-base font-normal'
          >
            Add New Skill
          </button>
        </div>
        <div className='py-[30px] flex justify-center'>
          <button
            type="submit"
            className='w-[199px] h-[44px] rounded-[3px] bg-light-blue text-white text-xl font-normal'
          >
            Save Biography Info
          </button>
        </div>
      </form>
      ) : (
 <div className='mt-8'>
 <h2 className='text-xl font-semibold mt-4 mb-2'>Biography:</h2>
 <p className='text-lg'>{teacherData.biography}</p>
 <h2 className='text-xl font-semibold mt-4 mb-2'>Skills:</h2>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
   {teacherData.skills.map((skill, index) => (
     <div key={index} className='flex flex-row justify-between mx-auto items-center'>
       <div className='flex-col justify-center space-y-2 text-lg items-center'>
       <p className='w-full'><strong className='text-xl'>Skill:</strong> {skill.skill}</p>
       <p className='w-full'><strong className='text-xl'>Skill Percentage:</strong> {skill.skillPercentage}</p>
       </div>
       
     </div>
   ))}
 </div>
</div>

      )}



     
    </div>
  );
};

export default Biography;
