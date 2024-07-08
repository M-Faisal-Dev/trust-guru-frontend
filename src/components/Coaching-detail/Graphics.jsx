"use client"
import React, {useState} from 'react'
import CourseHeading from './CourseHeading'
import CourseList from './CourseList'
import Accordion from './Accordian'
import CourseCard from './CourseCard'
import { useAuth } from '@/Context/AuthContext';
import {routes} from "@/libs/api"
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Graphics = ({data}) => {
    const [showMore, setShowMore] = useState(false);
    const { isAuthenticated, login, logout, userToken, getRefreshToken } = useAuth();

    const [showPopup, setShowPopup] = useState(false);
    const [instructionsPopup, setInstructionsPopup] = useState(true);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };

  const items = [
    'Web Designing',
    'Web Development',
    'App Designing',
    'Landing Page Designing',
    'Logo Designing',
    'Poster Designing',
    'Banner Designing',
    'Flayer Designing'
  ];
  const itemsToShow = showMore ? items : items.slice(0, 5);

  const handleToggle = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  const handleClose = () => {
    setInstructionsPopup(false);
  };


  const Token = getRefreshToken()
 

  const handleWeeklyPlan = async (id) => {
    try {
      const response = await axios.post(
        routes.purchasedCourse,
        {
          courseId: id,
          plan: 'weekly',
          price: data.weeklyPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      toast.success('Course purchased successfully');
      togglePopup(); // Close the popup after successful submission
    } catch (error) {
      console.error('Error purchasing course', error);
    }
  };




  const handleOnetimePlan = async (id) => {
    try {
      const response = await axios.post(
        routes.purchasedCourse,
        {
          courseId: id,
          plan: 'oneTime',
          price: data.weeklyPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      toast.success('Course purchased successfully');
      togglePopup(); // Close the popup after successful submission
    } catch (error) {
      console.error('Error purchasing course', error);
    }
  };



  const [skills, setSkills] = useState('');
  const [passion, setPassion] = useState('');
  const [commitment, setCommitment] = useState('');
  const [results, setResults] = useState('');
  const [comment, setComment] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Prepare data object to be sent
      
      const formData = {
        skills: Number(skills),
        passion: Number(passion),
        commitment: Number(commitment),
        results: Number(results),
        comment
      };
  

      const response = await axios.put(
        `${routes.createandUpdatePoints}/${data._id}`,
        {
          ...formData 
        }
       
      );
      toast.success('Review submitted successfully!');

      // Reset form fields after submission (if needed)
      setSkills('');
      setPassion('');
      setCommitment('');
      setResults('');
      setComment('');
    } catch (error) {
      // Handle error
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review.');
    }
  };



    return (

        <div className='max-w-[1440px] mx-auto 2xl:px-[60px] md:px-5 sm:px-10 xxs:px-5 '>

{instructionsPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg justify-center shadow-lg p-6 relative md:w-[30%] w-[60%]">
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl text-blue text-center font-bold mb-4">Money Back!</h2>
            <p className="text-base font-medium">
Se il coach non rispetta il programma, potrai richiedere indietro i soldi spesi nella settimana di riferimento. Ti consigliamo di REGISTRARE LE VIDEOCALL!
            </p>
          </div>
        </div>
      )}


{showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-1/2">
            <button
              onClick={togglePopup}
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Choose a Subscription Plan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg text-center">
                <h3 className="text-lg font-bold mb-2">Weekly Plan</h3>
                <p className="mb-4">${data.weeklyPrice}  per week</p>
                <button  onClick={()=>handleWeeklyPlan(data._id)} className="bg-blue text-white py-2 px-4 rounded">Choose Plan</button>
              </div>
              <div className="border p-4 rounded-lg text-center">
                <h3 className="text-lg font-bold mb-2">One-Time Plan</h3>
                <p className="mb-4">${data.totalPrice} one-time</p>
                <button  onClick={()=>handleOnetimePlan(data._id)}  className="bg-blue text-white py-2 px-4 rounded">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      )}




            <div className='flex md:flex-row xxs:flex-col mt-[25px] gap-5 '>
                <div className='md:max-w-[357px] xxs:max-w-full w-full flex md:flex-col sm:flex-row xxs:flex-col
                md:gap-0 sm:gap-3  '>
                    <div className='shadow-neons md:max-w-[357px] w-full flex flex-col items-center '>
                        <img src={data.bannerPicture} alt="" />
                        <div className='flex flex-col items-center px-[14px]'>
                        <CourseHeading dummy={data.courseTitle} className='pt-4' />
                        <p className=' text-blackk text-xs font-light text-center pt-[10px] ' >{data.courseDescription}</p>
                        <CourseHeading dummy='This course includes:' className='pt-[37px] pb-[4px] ' />
                        <ul>
                            <CourseList list={`${data.totalLength} on-demand video`} />
                            <CourseList list={`${data.totalArtical} articles`} />
                            <CourseList list='Access on Mobile&PC' />
                            <CourseList list={`Full ${data.accessOption}`} />
                            <CourseList list='Certificate of completion' />
                        </ul>
                        <CourseHeading dummy='Chat with your instructor' className='pt-6' />
                       
                       
                        {/* <a href="#" className='bg-light-blue rounded-[3px] w-[123px] h-10 flex items-center justify-center
            text-whitee text-lg font-normal gap-[9px] mt-[10px] mb-[28px] '>
                            <img src="/chat.svg" alt="chat" />
                            Chat
                        </a> */}

<div className='mt-4 flex flex-col justify-center items-center'>

<div className='flex flex-row space-x-2 items-center'>
<h3 className='text-3xl font-semibold'>${data.totalPrice}</h3>
<p className='text-base text-gray-400 font-light'>$74.99 Discount 87% off</p>
</div>


                        <button    onClick={togglePopup} className='bg-light-blue rounded-[3px] w-[123px] h-10 flex items-center justify-center
            text-whitee text-lg font-normal gap-[9px] mt-[10px] mb-[28px] '>
                           Buy
                        </button>
                        </div>


                        </div>
                    </div>
                   
                    <div className='shadow-neons md:max-w-[357px] w-full px-5 md:mt-5'>
                <CourseHeading dummy='Categories' className='pt-5 sm:text-start' />
                <div className='flex flex-col sm:items-start xxs:items-center'>
                    <ul className='px-5'>
                    {itemsToShow.map((item, index) => (
                        <CourseList key={index} list={item} />
                    ))}
                    </ul>
                </div>
                <a
                    href="#"
                    className='text-light-blue text-xs font-medium pt-[18px] pb-[12px] underline flex justify-center'
                    onClick={handleToggle}
                >
                    {showMore ? 'View Less' : 'View More'}
                </a>
                </div>
                </div>
                {/* second div  */}
                <div className='pb-[51px] xl:max-w-[943px] lg:max-w-[643px] md:max-w-[480px] '>
                    <img src={data.coverPicture} alt="manwomen" className='w-full' />
                    <div className='w-full shadow-neons xl:px-[50px] md:px-3 xxs:px-5 '>
                        <h2 className='text-light-dark text-[25px] font-medium leading-10 pt-[52px]'>
                            What Will I Learn From This Course?</h2>
                        <p className='text-light-skyblue text-[15px] font-normal' >{data.studentLearn}</p>
                       
            
                        <h4 className='text-very-lightgrey text-lg font-light pt-[52px] pb-[12px] ' >{data.courseTitle}</h4>
                        
                        <div className="">
    {data.weeks.map((week, weekIndex) => (
      <Accordion key={weekIndex} title={week.weeklyTitle}>
        <div className='grid sm:grid-cols-2 px-[70px] pb-[5px]'>
          <div>
            <h2 className="text-blackk text-lg font-normal pt-5 ">Topic</h2>
            <ul className="">
              {week.sessions.map((session, sessionIndex) => (
                <li key={sessionIndex} className='text-light-purple text-[15px] font-light pt-3'>
                  {session.topic}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-blackk text-lg font-normal pt-5 ">Session Length</h2>
            <ul className="">
              {week.sessions.map((session, sessionIndex) => (
                <li key={sessionIndex} className='text-dark-purple text-[15px] font-light pt-3'>
                  {session.sessionLength}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Accordion>
    ))}
    <button className='w-full shadow-neons rounded-[2px] border border-light-blue h-[60px] bg-whitee text-light-blue text-xl font-normal'>
      View More
    </button>
  </div>
                        {/* end of accordion  */}
                        <form className='mt-[30px]' onSubmit={handleFormSubmit}>
      <h2 className='text-light-skyblue text-lg font-normal mb-[10px]'>
        How was your experience with your Instructor{' '}
        <span className='text-very-lightgrey text-[15px]'>(Score Out of 10)</span>
      </h2>
      <div className='bg-[#F5F5F5] rounded-[2px] grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-[15px] shadow-neons px-[25px] pt-[9px] pb-[25px]'>
        <div className='flex flex-col gap-[5px]'>
          <label className='text-light-skyblue text-xl font-normal uppercase'>SKILLS</label>
          <input
            type='Number'
            className='bg-whitee shadow-neons rounded-[2px] px-5 md:h-[60px] xxs:h-[45px]'
            placeholder='--/10'
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[5px]'>
          <label className='text-light-skyblue text-xl font-normal uppercase'>PASSION</label>
          <input
            type='Number'
            className='bg-whitee shadow-neons rounded-[2px] px-5 md:h-[60px] xxs:h-[45px]'
            placeholder='--/10'
            value={passion}
            onChange={(e) => setPassion(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[5px]'>
          <label className='text-light-skyblue text-xl font-normal uppercase'>COMMITMENT</label>
          <input
            type='Number'
            className='bg-whitee shadow-neons rounded-[2px] px-5 md:h-[60px] xxs:h-[45px]'
            placeholder='--/10'
            value={commitment}
            onChange={(e) => setCommitment(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[5px]'>
          <label className='text-light-skyblue text-xl font-normal uppercase'>RESULTS</label>
          <input
            type='Number'
            className='bg-whitee shadow-neons rounded-[2px] px-5 md:h-[60px] xxs:h-[45px]'
            placeholder='--/10'
            value={results}
            onChange={(e) => setResults(e.target.value)}
          />
        </div>
        <div className='flex flex-col col-span-1 sm:col-span-2 gap-[5px]'>
          <label className='text-light-skyblue text-xl font-normal uppercase'>Comment</label>
          <textarea
            className='bg-whitee shadow-neons rounded-[2px] pt-[14px] px-5 h-[174px]'
            placeholder='Enter comments'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='mt-[5px] col-span-1 sm:col-span-2 w-full shadow-neons rounded-[2px] border border-light-blue h-[60px] bg-whitee text-light-blue text-xl font-normal'>
          Add Review
        </button>
      </div>
    </form>
                        {/* cards  */}
                        <h4 className='text-very-lightgrey text-lg font-light pb-[10px] pt-[35px]'>More Courses</h4>
                        <div className='grid lg:grid-cols-3  xl:gap-[17px] lg:gap-2 xxs:gap-5 '>
                            <CourseCard image="/blog.png" />
                            <CourseCard image="/blogs.png" />
                            <CourseCard image="blogss.png" />
                        </div>
                        <button className=' mt-[30px] mb-[61px] col-span-2 w-full shadow-neons rounded-[2px] border border-light-blue
                            h-[60px] bg-whitee text-light-blue text-xl font-normal ' >
                            Add Review
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Graphics