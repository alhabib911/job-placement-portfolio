import React from 'react';
import CoverPhoto from '../../image/cover-photo.jpeg'
import ProfilePhoto from '../../image/profile-photo.jpeg'
import BlogOne from '../../image/Blog/blog-one.png'
import { BsFillCalendarCheckFill } from 'react-icons/bs';

const Header = () => {
    return (
        <div className='mx-20 flex gap-5 pt-5'>
            <div className='w-3/4 bg-white shadow-md rounded-md '>
                <div className='absolute flex'>
                    <div className='w-8/12'>
                        <img className='rounded-md' src={CoverPhoto} alt="" />
                    </div>
                </div>
                <div className='relative pt-36 pl-6 '>
                    <img className='w-[160px]' src={ProfilePhoto} alt="" />
                </div>
                <div className='pt-6 pl-6 flex justify-between gap-8'>
                    <div className='w-8/12 '>
                        <h1 className='text-2xl font-semibold'>Abdullah Al Habib</h1>
                        <p className='pt-2'>Job Placement Intern at Programming Hero || Establishing connections worldwide and helping Recruiters to hire skilled Developers completely free of cost || MERN stack developer</p>
                        <p className='text-sm text-gray-500 pt-3'>Talks about #planning, #teamwork, #decisionmaking, #hiringdevelopers, and #projectmanagement</p>
                    </div>
                    <div className='w-2/6'>
                        <h1 className='text-base font-semibold'>Programming Hero</h1>
                        <h1 className='text-base font-semibold'>Programming Hero</h1>
                    </div>
                </div>
                <div className='pl-6 pt-3 flex items-center gap-5 pb-5'>
                    <p className='text-base text-gray-500 pt-1'>Dhaka, Bangladesh</p>
                    <button className='text-blue-600 font-semibold'>Contact Details</button>
                </div>
            </div>

            <div className='w-1/4'>
                <div className='bg-white rounded-md shadow-md mb-2'>
                    <div className='px-2 pt-1 text-center'>
                        <h2 className='font-semibold'>Meet With Me</h2>
                        <p className='text-xs text-gray-500'>30 mins, One-on-One</p>
                        <div className='pt-5 pb-2'>
                            {/* <a className='text-sky-500 pt-' href="https://www.facebook.com" target="_blank">View booking page</a> */}
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-md shadow-md pb-5'>
                    <img className='rounded-md' src={BlogOne} alt="" />
                    <div className='mx-2'>
                        <h2 className='font-semibold text-lg pt-2'>Lorem ipsum dolor sit amet.</h2>
                        <p className='pt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur quae. Consequatur.</p>
                    </div>
                    <div className='pt-3 mx-2'>
                        <p className='text-sm'>Author: Abdullah Al Habib</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;