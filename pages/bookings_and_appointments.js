import Head from 'next/head';
import Link from 'next/link';
import GradientWrapper from '../components/GradientWrapper';

const BookingsAppointmets = () => {
  return (
    <>
    <Head>
    <meta name='robots' content='index' />
    <title>Bookings and Appointments Systems | Namoota</title>
    </Head>
s
    <div className="relative dark:bg-center bg-cover pb-6 sm:pb-8 lg:pb-12 rounded-3xl overflow-hidden mt-32 mb-32" style={{backgroundImage: "url('/image1.jpg')"}}>
        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm" style={{backgroundImage: "url('/image1.jpg')"}}></div>
        
        {/* Content Layer */}
        <div className="relative z-10 mx-auto max-w-screen-2xl px-4 md:px-8">
            <section className="flex flex-col items-center md:py-56 py-32">
                <div className="flex max-w-xl flex-col items-center text-center">
                    <p className="mb-4 font-semibold text-sky-500 md:mb-6 md:text-lg xl:text-xl">
                        Maximize efficiency and improve customer satisfaction with a system tailored to your needs
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="mb-8 text-xl font-bold text-white sm:text-2xl md:mb-12 md:text-3xl">
                        Streamlined Bookings & Appointments Systems
                    </h1>
                    <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                        <Link href="/contact" className="inline-block rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-sky-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:bg-sky-700 md:text-base">
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <GradientWrapper>
        <section className="bg-white dark:bg-gray-50 rounded-3xl">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-sky-800">What is a Bookings & Appointments System?</h1>
                <p class="mb-4 font-semibold text-sky-600 md:mb-6 md:text-lg xl:text-xl">How It Benefits Your Business</p>
                <p className="mb-8 leading-relaxed md:mb-5 lg:w-4/5 xl:text-lg text-gray-500">
                    A Bookings & Appointments system is an online platform that enables businesses to manage appointments, bookings, and scheduling. This system can be 
                    customized to meet the unique needs of your business, allowing for seamless interactions between you and your customers.
                </p>
                <div className="">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>

                <div className="mt-6 xl:mt-8 lg:flex lg:items-center">
                    <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                        <div className="space-y-3">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </span>
                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-sky-800">Increased Efficiency:</h1>
                            <p className="text-gray-500 dark:text-gray-500">
                                Automate scheduling and reduce time spent on manual bookings.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>
                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-sky-800">Better Communication:</h1>
                            <p class="text-gray-500 dark:text-gray-500">
                                Send automated reminders to customers, minimizing no-shows.
                            </p>
                        </div>

                        <div class="space-y-3">
                            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                            </span>

                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-sky-800">24/7 Access:</h1>

                            <p class="text-gray-500 dark:text-gray-500">
                                Allow customers to book anytime, providing flexibility and convenience.
                            </p>
                        </div>

                        <div class="space-y-3">
                            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </span>

                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-sky-800">Streamlined Processes:</h1>

                            <p class="text-gray-500 dark:text-gray-500">
                                Easily manage appointments, allocate resources, and avoid overbooking.
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                        <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="/calendar.jpg" alt="" />
                    </div>
                </div>

            </div>
        </section>
    </GradientWrapper>
    </>
  );
};
export default BookingsAppointmets;



