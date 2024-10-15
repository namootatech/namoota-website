import Head from 'next/head';
import Link from 'next/link';
import GradientWrapper from '../components/GradientWrapper';

const QuotingInvoicing = () => {
  return (
    <>
    <Head>
    <meta name='robots' content='index' />
    <title>Quoting & Invoicing Systems | Namoota</title>
    </Head>

    <section class="items-center">
        <div class="container px-6 py-16 mx-auto text-center">
            <div class="flex flex-col items-center max-w-full">
                <p className="mb-4 font-semibold text-sky-600 md:mb-6 md:text-lg xl:text-xl">
                    Streamline Your Business Operations
                </p>
                <h1 className="mb-8 text-3xl font-bold text-sky-800 sm:text-5xl md:mb-12 md:text-5xl">
                    Quoting & Invoicing Systems
                </h1>
                <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                    Empower your business with our custom-built quoting and invoicing systems. Streamline your processes, improve cash flow, and enhance customer communication.
                </p>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <Link href="/contact" className="inline-block rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-sky-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:bg-sky-700 md:text-base">
                    Get Started
                </Link>
                </div>
            </div>

            <div class="flex justify-center mt-10">
                <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
            </div>
        </div>
    </section>

    <GradientWrapper>
    <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center mb-4 font-semibold text-sky-800 md:mb-6 md:text-lg xl:text-4xl">
                How Our Invoicing System Helps <span class="underline decoration-sky-600">Your</span> Business
            </p>
            <div class="container px-6 py-10 mx-auto">
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    <div class="space-y-3">
                        <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </span>
                        <h1 class="text-xl font-semibold text-gray-900 capitalize dark:text-gray-900">Streamlined Processes</h1>
                        <p class="text-gray-500 dark:text-gray-500">
                            Automate your quoting and invoicing workflow, saving time and reducing errors.
                        </p>
                    </div>

                    <div class="space-y-3">
                        <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </span>
                        <h1 class="text-xl font-semibold text-gray-900 capitalize dark:text-gray-900">Improved Cash Flow</h1>
                        <p class="text-gray-500 dark:text-gray-500">
                            Send invoices faster and track payments more efficiently to improve your cash flow.
                        </p>
                    </div>

                    <div class="space-y-3">
                        <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </span>
                        <h1 class="text-xl font-semibold text-gray-900 capitalize dark:text-gray-900">Enhanced Customer Communication</h1>
                        <p class="text-gray-500 dark:text-gray-500">
                            Provide professional quotes and invoices, improving your business image and customer satisfaction.
                        </p>
                    </div>

                    <div class="space-y-3">
                        <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </span>
                        <h1 class="text-xl font-semibold text-gray-900 capitalize dark:text-gray-900">Real-time Insights</h1>
                        <p class="text-gray-500 dark:text-gray-500">
                            Get instant access to financial data and reports for better decision-making.
                        </p>
                    </div>

                    <div class="space-y-3">
                        <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>
                        <h1 class="text-xl font-semibold text-gray-900 capitalize dark:text-gray-900">Customization</h1>
                        <p class="text-gray-500 dark:text-gray-500">
                            Tailor the system to fit your specific business needs and branding.
                        </p>
                    </div>

                    <div class="space-y-3">
                        <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </span>
                        <h1 class="text-xl font-semibold text-gray-900 capitalize dark:text-gray-900">Integration</h1>
                        <p class="text-gray-500 dark:text-gray-500">
                            Seamlessly integrate with other business systems for a unified workflow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </GradientWrapper>
    </>
  );
};
export default QuotingInvoicing;