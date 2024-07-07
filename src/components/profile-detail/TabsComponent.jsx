"use client"
import React, { useState, useEffect } from 'react';
import Tab from './Tabs/Tab';
import BankInfo from './Tabs/Bank-info';
import Biography from './Tabs/Skill-biography';
import { CiBank } from "react-icons/ci";
import Link from "next/link";
import { routes } from "@/libs/api";
import { useAuth } from '@/Context/AuthContext';
import axios from 'axios';
const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [teacherData, setTeacherData] = useState({
        fullName: '',
        profileImage: '',
        about: '',
        country: '',
        city: '',
        address: '',
        zipCode: '',
        phone: '',
        email: '',
        gender: '',
        dob: '',
      });
    const { isAuthenticated, login, logout, userToken, getRefreshToken } = useAuth();
    const [checkDataStatus, setCheckDataStatus] = useState(false)
    

    const Token = getRefreshToken()


    useEffect(() => {
        const fetchTeacherProfile = async () => {
          try {
            const response = await axios.get(routes.getSingleTeacherbyToken, {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Token}`,
              },
            });

           if(response.data){
            setCheckDataStatus(true)
            setTeacherData(response.data)
           }
            
          } catch (error) {
            // Handle the error here
            console.error(error);
          }
        };
      
        fetchTeacherProfile();
      }, [Token]);
    


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        const btn = document.getElementById('menu-btn');
        if (btn) {
            const toggleMenu = () => {
                setIsMenuOpen(prevState => !prevState);
                btn.classList.toggle('open');
            };

            btn.addEventListener('click', toggleMenu);

            return () => {
                btn.removeEventListener('click', toggleMenu);
            };
        }
    }, []);
    return (
        <section className="md:mt-[70px] xxs:mt-[30px]">
            <div className="max-w-[1440px] mx-auto 2xl:px-[80px] lg:px-[30px] md:px-5 xxs:px-5">
                <div className="flex md:flex-row xxs:flex-col md:items-start xxs:items-center justify-between
                lg:gap-[30px] md:gap-[15px] xxs:gap-[30px]">
                    {/* nav  */}
            <div className="relative w-full xxs:block md:hidden">
            <div className='w-full'>
                <div className="flex items-center justify-between  ">
                    
                    {/* Hamburger Icon */}
                    <button
                        id="menu-btn"
                        className="block hamburger md:hidden focus:outline-none"
                    >
                        <span className="hamburger-top text-black !bg-blackk "></span>
                        <span className="hamburger-middle !bg-blackk  "></span>
                        <span className="hamburger-bottom !bg-blackk  "></span>
                    </button>
                </div>
            </div>

            {/* Mobile View */}
            {isMenuOpen && (
                <div className="md:hidden xxs:block shadow-neons mt-[30px] xl:max-w-[385px] lg:max-w-[300px] md:max-w-[250px] w-full">
                    <div className="grid place-items-center shadow-neons md:max-w-[385px] xxs:max-w-full
                        w-full pt-[25px] pb-[15px] rounded-5">
                        <img src={teacherData?.profileImage} className='rounded-full' alt="smith" />
                        <h2 className="text-blackk xl:text-3xl lg:text-2xl xxs:text-xl
                            font-medium pt-[22px]">{teacherData.fullName}</h2>
                        <nav className="flex-1 w-full lg:mt-[47px] xxs:mt-5">
                            <ul>
                                <li
                                    className={`tab cursor-pointer text-skyblue sm:text-xl xxs:text-base font-medium flex gap-4 py-[11px] px-[34px]
                                        hover:bg-light-grey hover:text-skyblue ${activeTab === 'tab1' ? 'bg-light-grey active' : ''}`}
                                    onClick={() => handleTabClick('tab1')}
                                >
                                    <img src="/myprofile.svg'" alt="profile" /> Profile
                                </li>
                                <li
                                    className={`tab cursor-pointer text-skyblue sm:text-xl xxs:text-base font-medium flex gap-4 py-[11px] px-[34px]
                                        hover:bg-light-grey hover:text-skyblue ${activeTab === 'tab3' ? 'bg-light-grey active' : ''}`}
                                    onClick={() => handleTabClick('tab3')}
                                >
                                    <img src="/myprofile.svg'" alt="profile" /> Profile
                                </li>
                                
                                <Link href = "/listing">
                                <li
                                    className={`tab cursor-pointer text-skyblue sm:text-xl xxs:text-base font-medium flex gap-4 py-[11px] px-[34px]
                                        hover:bg-light-grey hover:text-skyblue ${activeTab === 'tab2' ? 'bg-light-grey active' : ''}`}
                                    
                                >
                                    <img src="/myprofile.svg" alt="profile" /> My Listing
                                </li>
                                </Link>
                               

                                <li
                                    className={`tab cursor-pointer text-skyblue sm:text-xl xxs:text-base font-medium flex gap-4 py-[11px] px-[34px]
                                        hover:bg-light-grey hover:text-skyblue ${activeTab === 'tab3' ? 'bg-light-grey active' : ''}`}
                                    onClick={() => handleTabClick('tab3')}
                                >
                                    <CiBank /> Bank Account 
                                </li>
                              
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </div>
                    {/* end  */}
                    <div className="one md:block xxs:hidden xl:max-w-[385px] lg:max-w-[300px] md:max-w-[250px] w-full">
                        <div className="grid place-items-center  shadow-neons md:max-w-[385px] xxs:max-w-full
                         w-full pt-[25px] pb-[15px] rounded-5">

                            {checkDataStatus === true ? (<img src={teacherData?.profileImage} className='rounded-full w-40 h-40' 
                            alt="smith" />) : (
                                <img src='/profile.png' 
                                alt="smith" />
                            )}

                           {checkDataStatus === true ? (<h2 className="text-blackk  xl:text-3xl lg:text-2xl xxs:text-xl
                             font-medium pt-[22px]">{teacherData.fullName}</h2>) : (<h2 className="text-blackk  xl:text-3xl lg:text-2xl xxs:text-xl
                                font-medium pt-[22px]">User Name</h2>)}
                            <nav className="flex-1 w-full lg:mt-[47px] xxs:mt-5">
                                <ul>
                                    <li
                                        className={`tab cursor-pointer text-skyblue sm:text-xl xxs:text-base font-medium flex gap-4 py-[11px] px-[34px]
                                             hover:bg-light-grey hover:text-skyblue ${activeTab === 'tab1' ? 'bg-light-grey active' : ''}`}
                                        onClick={() => handleTabClick('tab1')}
                                    >
                                        <img src="/list.svg" alt="profile" /> Profile
                                    </li>
                                 
                                    <li
                                    className={`tab cursor-pointer text-skyblue sm:text-xl xxs:text-base font-medium flex gap-4 py-[11px] px-[34px]
                                        hover:bg-light-grey hover:text-skyblue ${activeTab === 'tab3' ? 'bg-light-grey active' : ''}`}
                                    onClick={() => handleTabClick('tab3')}
                                >
                                 <img className='w-8 h-8' src="/skills.png" alt="skills" />    
                                  biografia&competenze
                                </li>


                                    <Link href = "/listing">
                                <li
                                    className={`tab cursor-pointer text-skyblue sm:text-xl xxs:text-base font-medium flex gap-4 py-[11px] px-[34px]
                                        hover:bg-light-grey hover:text-skyblue ${activeTab === 'tab2' ? 'bg-light-grey active' : ''}`}
                                    
                                >
                                    <img src="/myprofile.svg" alt="profile" /> My Listing
                                </li>
                                </Link>
                                    <li
                                        className={`tab cursor-pointer text-skyblue sm:text-xl xxs:text-base font-medium flex gap-4 py-[11px] px-[34px]
                                             hover:bg-light-grey hover:text-skyblue ${activeTab === 'tab4' ? 'bg-light-grey active' : ''}`}
                                        onClick={() => handleTabClick('tab4')}
                                    >
                                        <div className='flex flex-row justify-between items-center'>

                                          <CiBank className=' font-semibold text-lg mr-3'/> Bank Account 
                                        </div>
                                    </li>
                                   
                                </ul>
                            </nav>
                        </div>

                        
                            
                    </div>

                    <div className="flex w-full">
                        {activeTab === 'tab1' && (
                            <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'active' : ''} w-full md:pb-0 xxs:pb-[30px]`}>
                                <Tab />
                            </div>
                        )}
                        {activeTab === 'tab2' && (
                            <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'active' : ''} w-full md:pb-0 xxs:pb-[30px]`}>
                                <h2>Tab 2</h2>
                            </div>
                        )}
                        {activeTab === 'tab3' && (
                            <div id="tab3" className={`tab-content ${activeTab === 'tab3' ? 'active' : ''} w-full md:pb-0 xxs:pb-[30px]`}>
                                <Biography/>
                            </div>
                        )}
                        {activeTab === 'tab4' && (
                            <div id="tab3" className={`tab-content ${activeTab === 'tab4' ? 'active' : ''} w-full md:pb-0 xxs:pb-[30px]`}>
                                   <BankInfo />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabsComponent;
