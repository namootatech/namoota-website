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

    <div className="relative dark:bg-center bg-cover pb-6 sm:pb-8 lg:pb-12 rounded-3xl overflow-hidden mt-32 mb-32" style={{backgroundImage: "url('/image1.jpg')"}}>
        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm" style={{backgroundImage: "url('/booking1.jpeg')", backgroundColor: 'rgba(0, 0, 0, 0.6)', backgroundBlendMode: 'overlay'}}></div>
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
                            <img src="/icons/efficient.png" alt="icon" className="hidden sm:block w-6 h-6 md:w-6 md:h-6 lg:w-12 lg:h-12"/>
                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-sky-800">Increased Efficiency:</h1>
                            <p className="text-gray-500 dark:text-gray-500">
                                Automate scheduling and reduce time spent on manual bookings.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <img src="/icons/dialogue_crop.png" alt="icon" className="hidden sm:block w-6 h-6 md:w-6 md:h-6 lg:w-12 lg:h-12"/>
                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-sky-800">Better Communication:</h1>
                            <p class="text-gray-500 dark:text-gray-500">
                                Send automated reminders to customers, minimizing no-shows.
                            </p>
                        </div>

                        <div class="space-y-3">
                            <img src="/icons/24-hours.png" alt="icon" className="hidden sm:block w-6 h-6 md:w-6 md:h-6 lg:w-12 lg:h-12"/>
                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-sky-800">24/7 Access:</h1>
                            <p class="text-gray-500 dark:text-gray-500">
                                Allow customers to book anytime, providing flexibility and convenience.
                            </p>
                        </div>

                        <div class="space-y-3">
                            <img src="/icons/automation.png" alt="icon" className="hidden sm:block w-6 h-6 md:w-6 md:h-6 lg:w-12 lg:h-12"/>
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



