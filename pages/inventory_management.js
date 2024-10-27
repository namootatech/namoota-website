import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import GradientWrapper from '../components/GradientWrapper';

export default function inventory_management() {
  return (
    <>
    <Head>
        <meta name='robots' content='index' />
        <title>Inventory management Systems | Namoota</title>
    </Head>
    {/* Hero */}
    <section className='relative flex flex-col lg:flex-row justify-end py-10 lg:py-28'>
        <div className="w-full lg:w-[75%] bg-gray-900 flex flex-col lg:flex-row justify-end rounded-b-lg lg:rounded-r-lg lg:rounded-l-none">
            {/* Image - will be full width on mobile, positioned left on desktop */}
            <div className='relative lg:absolute lg:top-36 lg:left-0 w-full lg:w-[40%]'>
                <img src="/inventory.jpg"  alt="bookings_and_appointments" className='w-full h-64 lg:h-auto object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-b-none'/>
            </div>
            
            {/* Content */}
            <div className='flex flex-col items-center lg:items-end w-full'>
                <div className="w-full px-8 py-8 lg:w-[75%] lg:pl-2 lg:pr-24 lg:pt-10 lg:pb-10 xl:pl-2 xl:pr-28 xl:pt-16 xl:pb-20">
                    <h1 className="text-2xl xl:text-4xl font-bold mb-4 text-white">Empower Your Business with Advanced Inventory Management</h1>
                    <p className="text-base md:text-base xl:text-lg mt-4 mb-8 text-white">Stay on top of your stock, reduce costs, and enhance customer satisfaction with a customized Inventory Management System. Our solutions streamline inventory processes, making it easy to manage your inventory and stay up to date.</p>
                    <Link href="/contact" className="w-full sm:w-auto inline-block rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-sky-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:bg-sky-700 md:text-base">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    </section>
    <GradientWrapper>    
    <section class="bg-white">
        <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">Why Choose Us For <span class="underline decoration-blue-500">Your</span> Inventory Management System?</h1>
        <p class="mt-4 text-gray-500 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="p-5 lg:p-10 space-y-3 border-2 border-blue-400 rounded-xl">
                <h1 class="text-xl font-semibold text-gray-700 capitalize">Reduce Costs & Improve Efficiency</h1>
                <p class="text-gray-800">
                    Our Inventory Management System automates key tasks, reducing the need for manual input and minimizing errors. This not only saves time but also reduces costs associated with overstocking, stockouts, and mismanagement.
                </p>
            </div>
            <div class="p-5 lg:p-10 space-y-3 border-2 border-blue-400 rounded-xl">
                <h1 class="text-xl font-semibold text-gray-700 capitalize">Real-Time Inventory Tracking</h1>
                <p class="text-gray-800">
                    Access real-time inventory data at any time, from anywhere. Our system integrates seamlessly with barcode scanners, mobile devices, and even remote warehouses, so your stock data is always up-to-date.
                </p>
            </div>
            <div class="p-5 lg:p-10 space-y-3 border-2 border-blue-400 rounded-xl">
                <h1 class="text-xl font-semibold text-gray-700 capitalize">Enhanced Supplier & Customer Relationships</h1>
                <p class="text-gray-800">
                    With accurate stock levels, you can ensure that popular items are never out of stock, reducing delays and keeping customers happy. For suppliers, our system provides real-time updates.
                </p>
            </div>
            <div class="p-5 lg:p-10 space-y-3 border-2 border-blue-400 rounded-xl">
                <h1 class="text-xl font-semibold text-gray-700 capitalize">Data-Driven Insights & Forecasting</h1>
                <p class="text-gray-800">
                Our system offers in-depth analytics and reporting capabilities, giving you the insights needed to identify trends, make informed purchasing decisions, and forecast demand effectively.
                </p>
            </div>
            <div class="p-5 lg:p-10 space-y-3 border-2 border-blue-400 rounded-xl">
                <h1 class="text-xl font-semibold text-gray-700 capitalize">Scalability & Flexibility</h1>
                <p class="text-gray-800">
                    We design solutions with your future in mind. Our Inventory Management System is scalable, meaning it can grow with your business. Whether you’re adding new locations.
                </p>
            </div>
            <div class="p-5 lg:p-10 space-y-3 border-2 border-blue-400 rounded-xl">
                <h1 class="text-xl font-semibold text-gray-700 capitalize">Improved Internal Communication</h1>
                <p class="text-gray-800">
                Our system’s centralized data makes it easy for all departments to access inventory information, improving communication and collaboration across your organization.
                </p>
            </div>
        </div>
        </div>
    </section>
    </GradientWrapper>
    </>
  )
}
