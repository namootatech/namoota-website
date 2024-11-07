import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import GradientWrapper from '../components/GradientWrapper';


export default function inventory_management() {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);


  return (
    <>
    <Head>
        <meta name='robots' content='index' />
        <title>Social Features Systems | Namoota</title>
    </Head>

    {/* Hero Section */}
    <section className="w-full flex justify-center gap-5 bg-white my-10 md:my-24">
        <div className="relative w-full sm:w-[50%] flex flex-col justify-center items-start md:items-end z-10">
            <div className='w-full md:w-[85%] p-2'>
                <h1 className="font-black text-black text-3xl lg:text-5xl">Social</h1>
                <h1 className="font-bold text-black text-2xl lg:text-4xl"><span className="text-blue-500">Features</span> System</h1>
                <p className="max-w-md leading-relaxed text-gray-800 xl:text-lg my-5 sm:my-2 lg:my-10">Enhancing Engagement and Communication with Innovative Social Features.</p>
                <div className="mt-5">
                    <Link href="/contact" className="inline-block rounded-md bg-sky-500 px-4 md:px-5 py-2 text-center text-xs font-semibold text-white outline-none ring-sky-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:bg-sky-700 md:text-base">
                        Get Started
                    </Link>
                </div>
            </div>
            
            {/* corner blocks in the heading content */}
            <div className='hidden md:block absolute top-0 left-0 z-0'>
                <div className='flex'>
                    <div className="bg-blue-500 w-10 h-10"></div>
                    <div className="bg-gray-900 w-8 h-5"></div>
                </div>
                <div className="bg-gray-300 w-4 h-20"></div>
            </div>
            {/* mobile view corner blocks */}
            <div className='sm:hidden absolute bottom-0 right-0 z-0'>
                <div className='flex justify-end'>
                    <div className="bg-gray-300 w-2 h-10"></div>
                </div>
                <div className='flex items-end'>
                    <div className="bg-gray-900 w-6 h-3"></div>
                    <div className="bg-blue-500 w-5 h-5"></div>
                </div>
            </div>
        </div>

        {/* Right Section (Grid of Images and Colored Blocks) */}
        <div className='w-[50%] hidden sm:block'>
            <div className="grid xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-1 mt-8 md:mt-0">
                {/* Add images and color blocks in a grid */}
                <div className="bg-blue-500 aspect-square"></div>
                <img src="typing.jpg" alt="Event 1" className="object-cover aspect-square" />
                <img src="look2.jpg" alt="Event 1" className="object-cover aspect-square" />
                <div className="bg-gray-900 aspect-square"></div>
                <img src="colourful_phone.jpg" alt="Event 2" className="object-cover aspect-square" />

                <img src="Book.png" alt="Event 1" className="object-cover aspect-square" />
                <img src="phone.jpg" alt="Event 1" className="object-cover aspect-square" />
                <div className="bg-blue-500 aspect-square"></div>
                <img src="party.jpg" alt="Event 2" className="object-cover aspect-square" />
                <div className="bg-gray-300 aspect-square"></div>

                <div className="bg-gray-900 aspect-square"></div>
                <div className="bg-blue-500 aspect-square"></div>
                <img src="developer-image.jpeg" alt="Event 1" className="object-cover aspect-square sm:hidden lg:block" />
                <div className="bg-gray-300 aspect-square sm:hidden lg:block"></div>
                <img src="hashtag.jpg" alt="Event 1" className="object-cover aspect-square sm:hidden lg:block" />
                
            </div>
        </div>
    </section>

    {/* Content Section */}
    <div className="w-full mt-20 md:mt-52 md:mb-40 text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="content px-6 lg:px-10">
            <h3 className="text-3xl font-semibold mb-4">
                <span className="">What is a </span><strong className='text-blue-500'>Social Features System?</strong>
            </h3>
            <p className="text-gray-800 xl:text-lg my-5 sm:my-2 lg:my-5">
                Our Social Features System integrates tools for user engagement and community building within your application.
                Features like user profiles, messaging, content sharing, and activity feeds empower businesses to connect with 
                their customers more directly, create loyal communities, and facilitate easy communication between users.
            </p>
        </div>
    </div>

    <GradientWrapper>   
    {/* <!-- Content Section --> */}
    <section id="faq" className="faq py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="md:flex">
                {/* <!-- Left Content --> */}
                <div className="w-full lg:w-1/3" data-aos="fade-up" data-aos-delay="100">
                    <div className='p-0 md:p-5'>
                        <img src="image22.jpg" alt="Image" className="object-cover aspect-square rounded-lg" />
                    </div>
                </div>

                {/* <!-- Right Items --> */}
                <div className="w-full lg:w-2/3 p-1 md:p-5" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-2xl font-semibold mb-4 px-4 mt-3 sm:mt-0">Benefits for Your Business</h2>
                    <div className="sm:space-y-5 lg:space-y-9">

                        {/* <!-- Item 1 --> */}
                        <div className="faq-item bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-medium flex items-center justify-between cursor-pointer"
                                onClick={() => setIsOpen1(!isOpen1)}>
                                <span className="flex items-center"><span className="mr-2 text-indigo-600">1.</span> Enhanced Engagement:</span>
                                {/* <i className="faq-toggle bi bi-chevron-right transform transition-transform duration-200"></i> */}
                            </h3>
                            <div className={`faq-content mt-2 text-gray-500 ${isOpen1 ? 'block' : 'hidden'}`}>
                                <p>
                                    With features like real-time messaging and social sharing, you can 
                                    keep your audience engaged, offering them meaningful ways to interact with your brand.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Item 2 --> */}
                        <div className="faq-item bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-medium flex items-center justify-between cursor-pointer"
                                onClick={() => setIsOpen2(!isOpen2)}>
                                <span className="flex items-center"><span className="mr-2 text-indigo-600">2.</span> Streamlined Communication:</span>
                                {/* <i className="faq-toggle bi bi-chevron-right transform transition-transform duration-200"></i> */}
                            </h3>
                            <div className={`faq-content mt-2 text-gray-500 ${isOpen2 ? 'block' : 'hidden'}`}>
                                <p>
                                    Messaging and notifications help you and your users stay informed 
                                    without needing to switch to different platforms.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Item 3 --> */}
                        <div className="faq-item bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-medium flex items-center justify-between cursor-pointer"
                                onClick={() => setIsOpen3(!isOpen3)}>
                                <span className="flex items-center"><span className="mr-2 text-indigo-600">1.</span> Improved Customer Insights:</span>
                                {/* <i className="faq-toggle bi bi-chevron-right transform transition-transform duration-200"></i> */}
                            </h3>
                            <div className={`faq-content mt-2 text-gray-500 ${isOpen3 ? 'block' : 'hidden'}`}>
                                <p>
                                    Analytics on social interactions help you learn about your users’ 
                                    interests and needs, enabling you to adapt and offer relevant services.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Item 4 --> */}
                        <div className="faq-item bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-medium flex items-center justify-between cursor-pointer"
                                onClick={() => setIsOpen4(!isOpen4)}>
                                <span className="flex items-center"><span className="mr-2 text-indigo-600">1.</span> Strengthened Community:</span>
                                {/* <i className="faq-toggle bi bi-chevron-right transform transition-transform duration-200"></i> */}
                            </h3>
                            <div className={`faq-content mt-2 text-gray-500 ${isOpen4 ? 'block' : 'hidden'}`}>
                                <p>
                                    Establishing an interactive community around your product enhances 
                                    user loyalty and retention, as users feel more connected and valued.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
    </GradientWrapper>
    </>
  )
}
