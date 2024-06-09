import React, {useState} from 'react'
import CourseHeading from './CourseHeading'
import CourseList from './CourseList'
import Accordion from './Accordian'
import CourseCard from './CourseCard'


const Graphics = () => {
    const [showMore, setShowMore] = useState(false);

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
    return (

        <div className='max-w-[1440px] mx-auto 2xl:px-[60px] md:px-5 sm:px-10 xxs:px-5 '>
            <div className='flex md:flex-row xxs:flex-col mt-[25px] gap-5 '>
                <div className='md:max-w-[357px] xxs:max-w-full w-full flex md:flex-col sm:flex-row xxs:flex-col
                md:gap-0 sm:gap-3  '>
                    <div className='shadow-neons md:max-w-[357px] w-full flex flex-col items-center '>
                        <img src="/graphics.png" alt="" />
                        <div className='flex flex-col items-center px-[14px]'>
                        <CourseHeading dummy='Graphics Design' className='pt-4' />
                        <p className=' text-blackk text-xs font-light text-center pt-[10px] ' >Lorem Ipsum is basically just dummy text that is latin. It&apos;s a content filler for when you don&apos;t
                            really have content to put in there yet. It tends to help you make sure you have your font how you want it,</p>
                        <CourseHeading dummy='This course includes:' className='pt-[37px] pb-[4px] ' />
                        <ul>
                            <CourseList list='22 hours on-demand video' />
                            <CourseList list='15 articles' />
                            <CourseList list='Access on PC' />
                            <CourseList list='Full lifetime' />
                            <CourseList list='Certificate of completion' />
                        </ul>
                        <CourseHeading dummy='Chat with your instructor' className='pt-6' />
                        <a href="#" className='bg-light-blue rounded-[3px] w-[123px] h-10 flex items-center justify-center
            text-whitee text-lg font-normal gap-[9px] mt-[10px] mb-[28px] '>
                            <img src="/chat.svg" alt="chat" />
                            Chat
                        </a>
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
                    <img src="/manwomen.png" alt="manwomen" className='w-full' />
                    <div className='w-full shadow-neons xl:px-[50px] md:px-3 xxs:px-5 '>
                        <h2 className='text-light-dark text-[25px] font-medium leading-10 pt-[52px]'>
                            What Will I Learn From This Course?</h2>
                        <p className='text-light-skyblue text-[15px] font-normal' >Lorem Ipsum is basically just dummy text that is latin. It&apos;s a content filler for when you don&apos;t really have content to put in there yet. It tends to help you make sure you have your font how you want it, such as size, color, line height, font-family, etc</p>
                        <div className='flex items-center gap-4 pt-[20px] '>
                            <img src="/blueicon.svg" alt="" />
                            <p>Work with color & Gradients & Grids</p>
                        </div>
                        <div className='flex items-center gap-4 pt-[10px] '>
                            <img src="/blueicon.svg" alt="" />
                            <p>All the useful shortcuts</p>
                        </div>
                        <div className='flex items-center gap-4 pt-[10px] '>
                            <img src="/blueicon.svg" alt="" />
                            <p>Be able to create Flyers, Brochures, Advertisements</p>
                        </div>
                        <div className='flex items-center gap-4 pt-[10px] '>
                            <img src="/blueicon.svg" alt="" />
                            <p>How to work with Images & Text</p>
                        </div>
                        <p className='text-light-skyblue text-[15px] font-normal pt-5 '>
                            Lorem Ipsum is basically just dummy text that is latin. It&apos;s a content filler for when you don&apos;t really have content to put in there yet. It tends to help you make sure you have your font how you want it, such as size, color, line height, font-family, Lorem Ipsum is basically just dummy text that is latin. It&apos;s a content filler for when you don&apos;t really have content to put in there yet. It tends to help you make sure you have your font how you want it, such as size, color, line height, font-family, etc
                        </p>
                        <h4 className='text-very-lightgrey text-lg font-light pt-[52px] pb-[12px] ' >Drop Shipping</h4>
                        <div className="">
                            <Accordion title="First Week">

                                <div className='grid sm:grid-cols-2 px-[70px] pb-[5px]'>
                                    <div>
                                        <h2 className="text-blackk text-lg font-normal pt-5 ">Topic</h2>
                                        <ul className="">
                                            <li className=' text-light-purple text-[15px] font-light pt-3 ' >Drop Shipping</li>
                                            <li className=' text-light-purple text-[15px] font-light pt-3  ' >Drop Shipping</li>
                                            <li className=' text-light-purple text-[15px] font-light pt-3  ' >Drop Shipping</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-blackk text-lg font-normal pt-5 ">Session Length</h2>
                                        <ul className="">
                                            <li className=' text-dark-purple text-[15px] font-light pt-3' >60 min</li>
                                            <li className=' text-dark-purple text-[15px] font-light pt-3' >45 min</li>
                                            <li className=' text-dark-purple text-[15px] font-light pt-3' >41 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion>
                            <Accordion title="Section 2">
                                <div className='grid sm:grid-cols-2 px-[70px] pb-[5px]'>
                                    <div>
                                        <h2 className="text-blackk text-lg font-normal pt-5 ">Topic</h2>
                                        <ul className="">
                                            <li className=' text-light-purple text-[15px] font-light pt-3 ' >Drop Shipping</li>
                                            <li className=' text-light-purple text-[15px] font-light pt-3  ' >Drop Shipping</li>
                                            <li className=' text-light-purple text-[15px] font-light pt-3  ' >Drop Shipping</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-blackk text-lg font-normal pt-5 ">Session Length</h2>
                                        <ul className="">
                                            <li className=' text-dark-purple text-[15px] font-light pt-3' >60 min</li>
                                            <li className=' text-dark-purple text-[15px] font-light pt-3' >45 min</li>
                                            <li className=' text-dark-purple text-[15px] font-light pt-3' >41 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion>
                            <Accordion title="Section 3">
                                <div className='grid sm:grid-cols-2 px-[70px] pb-[5px]'>
                                    <div>
                                        <h2 className="text-blackk text-lg font-normal pt-5 ">Topic</h2>
                                        <ul className="">
                                            <li className=' text-light-purple text-[15px] font-light pt-3 ' >Drop Shipping</li>
                                            <li className=' text-light-purple text-[15px] font-light pt-3  ' >Drop Shipping</li>
                                            <li className=' text-light-purple text-[15px] font-light pt-3  ' >Drop Shipping</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-blackk text-lg font-normal pt-5 ">Session Length</h2>
                                        <ul className="">
                                            <li className=' text-dark-purple text-[15px] font-light pt-3' >60 min</li>
                                            <li className=' text-dark-purple text-[15px] font-light pt-3' >45 min</li>
                                            <li className=' text-dark-purple text-[15px] font-light pt-3' >41 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion>
                            <button className=' w-full shadow-neons rounded-[2px] border border-light-blue
                    h-[60px] bg-whitee text-light-blue text-xl font-normal ' >
                                View More
                            </button>
                        </div>
                        {/* end of accordion  */}
                        <form className='mt-[30px]'>
                            <h2 className='text-light-skyblue text-lg font-normal mb-[10px] '>How was your experience with
                                your Instructor <span className='text-very-lightgrey text-[15px]' >(Score Out of 10)</span></h2>
                            <div className='bg-[#F5F5F5] rounded-[2px] grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-[15px] shadow-neons px-[25px] pt-[9px] pb-[25px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-light-skyblue text-xl font-normal uppercase'>SKILLS</label>
                                <input type="text" className='bg-whitee shadow-neons rounded-[2px] px-5 md:h-[60px] xxs:h-[45px] ' placeholder='--/10' />
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-light-skyblue text-xl font-normal uppercase'>PASSION</label>
                                <input type="text" className='bg-whitee shadow-neons rounded-[2px] px-5 md:h-[60px] xxs:h-[45px] ' placeholder='--/10' />
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-light-skyblue text-xl font-normal uppercase'>COMMITMENT</label>
                                <input type="text" className='bg-whitee shadow-neons rounded-[2px] px-5 md:h-[60px] xxs:h-[45px] ' placeholder='--/10' />
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-light-skyblue text-xl font-normal uppercase'>RESULTS</label>
                                <input type="text" className='bg-whitee shadow-neons rounded-[2px] px-5 md:h-[60px] xxs:h-[45px] ' placeholder='--/10' />
                            </div>
                            <div className='flex flex-col col-span-1 sm:col-span-2 gap-[5px]'>
                                <label className='text-light-skyblue text-xl font-normal uppercase'>Comment</label>
                                <textarea className='bg-whitee shadow-neons rounded-[2px] pt-[14px] px-5 h-[174px]' placeholder='Enter comments' />
                            </div>
                            <button className='mt-[5px] col-span-1 sm:col-span-2 w-full shadow-neons rounded-[2px] border border-light-blue h-[60px] bg-whitee text-light-blue text-xl font-normal'>
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