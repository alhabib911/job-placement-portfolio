import React, { useState } from 'react';
import PHeroLogo from '../../image/Exprience/PHeroLogo.jpg'
import accivement from '../../image/Exprience/1670410039232.jpg'
import { BsBoxArrowInUpRight } from 'react-icons/bs';


const JobExperience = () => {
    const [exp, setExp] = useState(false);
    const [expTwo, setExpTwo] = useState(false);
    const [expThree, setExpThree] = useState(false);
    const [expFour, setExpFour] = useState(false);
    const [expFive, setExpFive] = useState(false);
    const [expSix, setExpSix] = useState(false);
    return (
        <div className='mx-14 mt-4 bg-white px-5 py-3 rounded-md'>
            <h2 className='text-xl font-semibold pb-4'>Experience</h2>
            <div className='pt-2 flex gap-4'>
                <img className='w-12' src={PHeroLogo} alt="" />
                <div>
                    <h3 className='font-medium'>Programming Hero</h3>
                    <p className='text-sm text-gray-500'>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='mx-16 pt-2'>
                <h3 className='font-medium'>Job Placement Executive</h3>
                <p className='text-sm text-gray-500'>Feb 2023 - Present</p>
                <p className='text-sm text-gray-500'>Remote Job</p>
            </div>
            <div className='mx-16'>
                <button
                    onClick={() => setExp(!exp)}
                >
                    <h3 className='flex items-center gap-2 font-medium pt-2 text-blue-600'>Responsibility <BsBoxArrowInUpRight /></h3>
                </button>{" "}

                {exp ? (
                    <div className="">
                        <div>
                            <p className='text-sm'>
                                - Actively engaging in Facebook and LinkedIn job-related groups in Bangladesh and abroad. <br />
                                - Recommending candidates to the company, by developing a good relationship with the clients. <br />
                                - Monitoring their job applications and job tasks and consistently motivating them. <br />
                                - Finding jobs from global job portals and publishing them on our job portal so that our candidates can apply. <br />
                                - Writing or collecting very professional content in these groups and sharing it so that all the job posters or job seekers in the groups can be seen more or less. <br />
                                - Keeping candidates in continuous monitoring and taking sessions for their technical and interpersonal improvement plus keeping them in their work. <br />
                                - Following up with the candidates who will get the job and helping them keep their motivation if necessary.</p>
                        </div>
                    </div>
                ) : (
                    ""
                )}
                <div className='pt-2'>
                    <h3><span className='font-medium'>Skills:</span> <span className='text-sm'>Project Management · Communication · Professional Networking · Time Management · International Networking · Job Search Strategies · Negotiation · Team Leadership</span></h3>
                    <div className='flex gap-3'>
                        <img className='w-2/12' src={accivement} alt="" />
                        <img className='w-2/12' src={accivement} alt="" />
                        <img className='w-2/12' src={accivement} alt="" />
                        <img className='w-2/12' src={accivement} alt="" />
                    </div>
                </div>

            </div>
            <div className='mx-16 pt-2'>
                <h3 className='font-medium'>Job Placement Executive</h3>
                <p className='text-sm text-gray-500'>Feb 2023 - Present</p>
                <p className='text-sm text-gray-500'>Remote Job</p>
            </div>
            <div className='mx-16'>
                <button
                    onClick={() => setExpTwo(!expTwo)}
                >
                    <h3 className='flex items-center gap-2 font-medium pt-2 text-blue-600'>Responsibility <BsBoxArrowInUpRight /></h3>
                </button>{" "}

                {expTwo ? (
                    <div className="">
                        <div>
                            <p className='text-sm'>- Maintaining a good connection with different companies globally to place and refer our candidates <br />
                                - Actively engaging in Facebook and LinkedIn job-related groups in Bangladesh and abroad. <br />
                                - Recommending candidates to the company, by developing a good relationship with the clients. <br />
                                - Monitoring their job applications and job tasks and consistently motivating them. <br />
                                - Finding jobs from global job portals and publishing them on our job portal so that our candidates can apply. <br />
                                - Writing or collecting very professional content in these groups and sharing it so that all the job posters or job seekers in the groups can be seen more or less. <br />
                                - Keeping candidates in continuous monitoring and taking sessions for their technical and interpersonal improvement plus keeping them in their work. <br />
                                - Following up with the candidates who will get the job and helping them keep their motivation if necessary.</p>
                        </div>
                    </div>
                ) : (
                    ""
                )}
                <div className='pt-2'>
                    <h3><span className='font-medium'>Skills:</span> <span className='text-sm'>Project Management · Communication · Professional Networking · Time Management · International Networking · Job Search Strategies · Negotiation · Team Leadership</span></h3>
                    <div className='flex gap-3'>
                        <img className='w-2/12' src={accivement} alt="" />
                        <img className='w-2/12' src={accivement} alt="" />
                        <img className='w-2/12' src={accivement} alt="" />
                        <img className='w-2/12' src={accivement} alt="" />
                    </div>
                </div>
            </div>
            <div className='py-2'>
                <hr />
            </div>
            <div>
                <div className='pt-2 flex gap-4'>
                    <img className='w-12' src={PHeroLogo} alt="" />
                    <div>
                        <h3 className='font-medium'>Evaly.com.bd</h3>
                        <p className='text-sm text-gray-500'>Dhaka, Bangladesh</p>
                    </div>

                </div>
                <div className='mx-16 pt-2'>
                    <h3 className='font-medium'>Senior Executive</h3>
                    <p className='text-sm text-gray-500'>Feb 2023 - Present</p>
                    <p className='text-sm text-gray-500'>Onsite Job</p>
                </div>
                <div className='mx-16'>
                    <button
                        onClick={() => setExpThree(!expThree)}
                    >
                        <h3 className='flex items-center gap-2 font-medium pt-2 text-blue-600'>Responsibility <BsBoxArrowInUpRight /></h3>
                    </button>{" "}

                    {expThree ? (
                        <div className="">
                            <div>
                                <p className='text-sm'>
                                    - Actively engaging in Facebook and LinkedIn job-related groups in Bangladesh and abroad. <br />
                                    - Recommending candidates to the company, by developing a good relationship with the clients. <br />
                                    - Monitoring their job applications and job tasks and consistently motivating them. <br />
                                    - Finding jobs from global job portals and publishing them on our job portal so that our candidates can apply. <br />
                                    - Writing or collecting very professional content in these groups and sharing it so that all the job posters or job seekers in the groups can be seen more or less. <br />
                                    - Keeping candidates in continuous monitoring and taking sessions for their technical and interpersonal improvement plus keeping them in their work. <br />
                                    - Following up with the candidates who will get the job and helping them keep their motivation if necessary.</p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className='pt-2'>
                        <h3><span className='font-medium'>Skills:</span> <span className='text-sm'>Project Management · Communication · Professional Networking · Time Management · International Networking · Job Search Strategies · Negotiation · Team Leadership</span></h3>
                    </div>

                </div>
                
            </div>
            <div className='py-2'>
                <hr />
            </div>
            <div>
                <div className='pt-2 flex gap-4'>
                    <img className='w-12' src={PHeroLogo} alt="" />
                    <div>
                        <h3 className='font-medium'>Blue Horn</h3>
                        <p className='text-sm text-gray-500'>Dhaka, Bangladesh</p>
                    </div>

                </div>
                <div className='mx-16 pt-2'>
                    <h3 className='font-medium'>Senior Executive</h3>
                    <p className='text-sm text-gray-500'>Feb 2023 - Present</p>
                    <p className='text-sm text-gray-500'>Onsite Job</p>
                </div>
                <div className='mx-16'>
                    <button
                        onClick={() => setExpFour(!expFour)}
                    >
                        <h3 className='flex items-center gap-2 font-medium pt-2 text-blue-600'>Responsibility <BsBoxArrowInUpRight /></h3>
                    </button>{" "}

                    {expFour ? (
                        <div className="">
                            <div>
                                <p className='text-sm'>
                                    - Actively engaging in Facebook and LinkedIn job-related groups in Bangladesh and abroad. <br />
                                    - Recommending candidates to the company, by developing a good relationship with the clients. <br />
                                    - Monitoring their job applications and job tasks and consistently motivating them. <br />
                                    - Finding jobs from global job portals and publishing them on our job portal so that our candidates can apply. <br />
                                    - Writing or collecting very professional content in these groups and sharing it so that all the job posters or job seekers in the groups can be seen more or less. <br />
                                    - Keeping candidates in continuous monitoring and taking sessions for their technical and interpersonal improvement plus keeping them in their work. <br />
                                    - Following up with the candidates who will get the job and helping them keep their motivation if necessary.</p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className='pt-2'>
                        <h3><span className='font-medium'>Skills:</span> <span className='text-sm'>Project Management · Communication · Professional Networking · Time Management · International Networking · Job Search Strategies · Negotiation · Team Leadership</span></h3>
                    </div>

                </div>
            </div>
            <div className='py-2'>
                <hr />
            </div>
            <div>
                <div className='pt-2 flex gap-4'>
                    <img className='w-12' src={PHeroLogo} alt="" />
                    <div>
                        <h3 className='font-medium'>Daraz Online Shopping</h3>
                        <p className='text-sm text-gray-500'>Dhaka, Bangladesh</p>
                    </div>

                </div>
                <div className='mx-16 pt-2'>
                    <h3 className='font-medium'>Senior Executive</h3>
                    <p className='text-sm text-gray-500'>Feb 2023 - Present</p>
                    <p className='text-sm text-gray-500'>Onsite Job</p>
                </div>
                <div className='mx-16'>
                    <button
                        onClick={() => setExpFive(!expFive)}
                    >
                        <h3 className='flex items-center gap-2 font-medium pt-2 text-blue-600'>Responsibility <BsBoxArrowInUpRight /></h3>
                    </button>{" "}

                    {expFive ? (
                        <div className="">
                            <div>
                                <p className='text-sm'>
                                    - Actively engaging in Facebook and LinkedIn job-related groups in Bangladesh and abroad. <br />
                                    - Recommending candidates to the company, by developing a good relationship with the clients. <br />
                                    - Monitoring their job applications and job tasks and consistently motivating them. <br />
                                    - Finding jobs from global job portals and publishing them on our job portal so that our candidates can apply. <br />
                                    - Writing or collecting very professional content in these groups and sharing it so that all the job posters or job seekers in the groups can be seen more or less. <br />
                                    - Keeping candidates in continuous monitoring and taking sessions for their technical and interpersonal improvement plus keeping them in their work. <br />
                                    - Following up with the candidates who will get the job and helping them keep their motivation if necessary.</p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className='pt-2'>
                        <h3><span className='font-medium'>Skills:</span> <span className='text-sm'>Project Management · Communication · Professional Networking · Time Management · International Networking · Job Search Strategies · Negotiation · Team Leadership</span></h3>
                    </div>

                </div>
            </div>
            <div className='py-2'>
                <hr />
            </div>
            <div>
                <div className='pt-2 flex gap-4'>
                    <img className='w-12' src={PHeroLogo} alt="" />
                    <div>
                        <h3 className='font-medium'>Motion View</h3>
                        <p className='text-sm text-gray-500'>Dhaka, Bangladesh</p>
                    </div>

                </div>
                <div className='mx-16 pt-2'>
                    <h3 className='font-medium'>Senior Executive</h3>
                    <p className='text-sm text-gray-500'>Feb 2023 - Present</p>
                    <p className='text-sm text-gray-500'>Onsite Job</p>
                </div>
                <div className='mx-16'>
                    <button
                        onClick={() => setExpSix(!expSix)}
                    >
                        <h3 className='flex items-center gap-2 font-medium pt-2 text-blue-600'>Responsibility <BsBoxArrowInUpRight /></h3>
                    </button>{" "}

                    {expSix ? (
                        <div className="">
                            <div>
                                <p className='text-sm'>
                                    - Actively engaging in Facebook and LinkedIn job-related groups in Bangladesh and abroad. <br />
                                    - Recommending candidates to the company, by developing a good relationship with the clients. <br />
                                    - Monitoring their job applications and job tasks and consistently motivating them. <br />
                                    - Finding jobs from global job portals and publishing them on our job portal so that our candidates can apply. <br />
                                    - Writing or collecting very professional content in these groups and sharing it so that all the job posters or job seekers in the groups can be seen more or less. <br />
                                    - Keeping candidates in continuous monitoring and taking sessions for their technical and interpersonal improvement plus keeping them in their work. <br />
                                    - Following up with the candidates who will get the job and helping them keep their motivation if necessary.</p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className='pt-2'>
                        <h3><span className='font-medium'>Skills:</span> <span className='text-sm'>Project Management · Communication · Professional Networking · Time Management · International Networking · Job Search Strategies · Negotiation · Team Leadership</span></h3>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default JobExperience;