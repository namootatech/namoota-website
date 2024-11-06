import Head from 'next/head';
import Link from 'next/link';
import GradientWrapper from '../components/GradientWrapper';

const OverviewSystems = () => {
  return (
    <>
    <Head>
        <meta name='robots' content='index' />
        <title>Overview | Namoota</title>
    </Head>

    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20 mt-28 rounded-t-3xl">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4 md:text-5xl">
            Streamline Your Business with Custom Systems
          </h1>
          <p className="text-xl mb-8 p-2 font-semibold text-sky-400">
            From booking systems to inventory management, we build solutions tailored to your needs.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="inline-block rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-sky-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:bg-sky-700 md:text-base">
                Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section class="bg-gray-50 mt-20">
        <div class="container px-6 py-12 mx-auto">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                <div>
                    <svg width="38px" height="38px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M670.1 857.7H206.2c-27.6 0-50-22.4-50-50V331.1c0-27.6 22.4-50 50-50H670c27.6 0 50 22.4 50 50v476.6c0.1 27.7-22.3 50-49.9 50z" fill="#FFFFFF" /><path d="M669 299.3H205.1c-16.5 0-30 13.5-30 30v75.9H699v-75.9c0-16.5-13.5-30-30-30z" fill="#E6E6E6" /><path d="M859 159.3c-15.4-12.3-35.5-19-56.7-19H363.6c-21.2 0-41.4 6.8-56.7 19-16.4 13.1-25.9 31.7-25.9 51v49h-75.9c-38.6 0-70 31.4-70 70v476.6c0 38.6 31.4 70 70 70H669c38.6 0 70-31.4 70-70v-49h63.3c21.2 0 41.4-6.8 56.7-19 16.4-13.1 25.9-31.7 25.9-51V210.3c0-19.3-9.5-37.9-25.9-51zM699 405.2H175.1v-75.9c0-16.5 13.5-30 30-30H669c16.5 0 30 13.5 30 30v75.9z m0 400.7c0 16.5-13.5 30-30 30H205.1c-16.5 0-30-13.5-30-30V425.2H699v380.7z m145.9-119c0 16.3-19.5 30-42.6 30H739V329.3c0-38.6-31.4-70-70-70H321v-49c0-16.3 19.5-30 42.6-30h438.7c23.1 0 42.6 13.7 42.6 30v476.6z" fill="#005BFF" /><path d="M537.3 369.2H393.1c-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9h144.2c9.9 0 17.9 8 17.9 17.9 0 9.9-8 17.9-17.9 17.9z" fill="#FFFFFF" /><path d="M320.4 802.3h-82.1c-16.6 0-30-13.4-30-30V454.4h112.1v347.9zM636.2 802.3H355V454.4h311.3v317.9c-0.1 16.6-13.5 30-30.1 30z" fill="#E6E6E6" /><path d="M230.2 351.3m-18.7 0a18.7 18.7 0 1 0 37.4 0 18.7 18.7 0 1 0-37.4 0Z" fill="#FFFFFF" /><path d="M290.6 351.3m-18.7 0a18.7 18.7 0 1 0 37.4 0 18.7 18.7 0 1 0-37.4 0Z" fill="#FFFFFF" /><path d="M225.3 749.2c-2.4 0-4.7-0.8-6.6-2.5-4.1-3.7-4.5-10-0.8-14.1l120.8-136 121 34.4 191.7-132.3c4.5-3.1 10.8-2 13.9 2.5 3.1 4.5 2 10.8-2.5 13.9L463.2 652.7l-118-33.5-112.5 126.6c-1.9 2.2-4.7 3.4-7.4 3.4z" fill="#005BFF" /><path d="M469.9 740.3L338.6 566.7l-123.2 51.8c-5.1 2.1-11-0.2-13.1-5.3-2.1-5.1 0.2-11 5.3-13.1l137.5-57.9 124 164.1L638 463.6c3.2-4.5 9.4-5.7 13.9-2.5s5.7 9.4 2.5 13.9L469.9 740.3z" fill="#06F3FF" />
                    </svg>
                    <h1 class="mt-2 text-xl font-semibold text-gray-800">Bookings & Appointments</h1>
                    <p class="mt-2">Manage and streamline your booking processes, ensuring customers can easily schedule appointments. Improve customer satisfaction and operational efficiency.</p>
                    <div className="xs:mt-2 sm:mt-3">
                        <Link href="/bookings_and_appointments" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                </div>
                <div>
                    <svg width="38px" height="38px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M509.8 139.7l190.5 109.6 0.2 196.5 173.2 99.7 0.2 219.8-190.2 110.1-172.4-99.2-171.5 99.2-190.5-109.6-0.2-219.9 170.7-98.8-0.3-197.3z" fill="#FFFFFF" /><path d="M520 527.5V365l-10 5.8-10-5.8v162.2l10.3 5.9zM339.5 666.9l-10-5.7v162.1l10.3 5.9 9.7-5.6V661.2zM693.4 823.6V661.2l-2 1.1c-1.6 0.9-3.3 1.3-5 1.3-3.5 0-6.8-1.8-8.7-5-2.5-4.3-1.4-9.6 2.2-12.7-3.8 1.4-6.6 5.1-6.6 9.4v167.9l10.3 5.9 9.8-5.5z" fill="#06F3FF" /><path d="M825.1 563.7l8.4 4.8c-1.9-3.1-5.1-4.8-8.4-4.8zM833.7 568.9v9.5c1.6-2.9 1.7-6.5 0-9.5zM656.7 628.5l-8.7-5c-4.8-2.8-10.9-1.1-13.7 3.7-2.8 4.8-1.1 10.9 3.7 13.7l8.7 5c1.6 0.9 3.3 1.3 5 1.3 3.5 0 6.8-1.8 8.7-5 2.7-4.8 1.1-10.9-3.7-13.7zM613.3 603.6l-8.7-5c-4.8-2.8-10.9-1.1-13.7 3.7-2.8 4.8-1.1 10.9 3.7 13.7l8.7 5c1.6 0.9 3.3 1.3 5 1.3 3.5 0 6.8-1.8 8.7-5 2.8-4.8 1.1-10.9-3.7-13.7z" fill="#005BFF" /><path d="M833.6 568.7c0-0.1-0.1-0.1-0.1-0.2l-8.4-4.8c-1.8 0-3.5 0.4-5.2 1.3l-8.7 5c-4.8 2.8-6.4 8.9-3.7 13.7 1.9 3.2 5.2 5 8.7 5 1.7 0 3.4-0.4 5-1.3l8.7-5c1.7-1 2.9-2.3 3.8-3.9V569c0-0.2-0.1-0.3-0.1-0.3zM690 640l-8.7 5c-0.5 0.3-1 0.6-1.4 1-3.7 3.1-4.7 8.4-2.2 12.7 1.9 3.2 5.2 5 8.7 5 1.7 0 3.4-0.4 5-1.3l2-1.1 6.7-3.9c4.8-2.8 6.4-8.9 3.7-13.7-2.9-4.8-9-6.5-13.8-3.7zM570 578.7l-8.7-5c-4.8-2.8-10.9-1.1-13.7 3.7-2.8 4.8-1.1 10.9 3.7 13.7l8.7 5c1.6 0.9 3.3 1.3 5 1.3 3.5 0 6.8-1.8 8.7-5 2.7-4.8 1-11-3.7-13.7zM776.6 590l-8.7 5c-4.8 2.8-6.4 8.9-3.7 13.7 1.9 3.2 5.2 5 8.7 5 1.7 0 3.4-0.4 5-1.3l8.7-5c4.8-2.8 6.4-8.9 3.7-13.7-2.8-4.8-8.9-6.5-13.7-3.7zM733.3 615l-8.7 5c-4.8 2.8-6.4 8.9-3.7 13.7 1.9 3.2 5.2 5 8.7 5 1.7 0 3.4-0.4 5-1.3l8.7-5c4.8-2.8 6.4-8.9 3.7-13.7-2.8-4.8-8.9-6.5-13.7-3.7z" fill="#005BFF" /><path d="M873.7 545.5l-173.2-99.7-0.2-196.5-190.5-109.6-190.3 110.1 0.2 197.3L149 546l0.3 219.8 190.5 109.7 171.4-99.3 172.4 99.3 190.2-110.1-0.1-219.9zM509.8 185.9l140.4 80.8-140.3 81L369.5 267l140.3-81.1zM339.3 482l140.4 80.8-140.3 81L199 563.1 339.3 482z m10.2 341.6l-9.7 5.6-10.3-5.9-140.2-80.7-0.2-162.1 140.4 80.7 10 5.8 10-5.8 140.4-81 0.2 162.1-140.6 81.3z m160.8-290.5l-10.3-5.9-140.2-80.7-0.2-162.1L500 365l10 5.8 10-5.8 140.4-81 0.2 162.1L520 527.5l-9.7 5.6z m323.6 209.1l-140.6 81.4-9.7 5.6-10.3-5.9-140.2-80.7L533 569l150.3-87 141.9 81.7c3.3 0.1 6.6 1.8 8.4 4.8l0.2 0.1v0.3c1.7 3.1 1.6 6.7 0 9.5l0.1 163.8z" fill="#005BFF" />
                    </svg>
                    <h1 class="mt-1 text-xl font-semibold">Quoting & Invoicing</h1>
                    <p class="mt-2">Automate and organize your invoicing and quoting processes to reduce errors and save time, allowing you to focus more on growing your business.</p>
                    <div className="xs:mt-2 sm:mt-3">
                        <Link href="/quoting_invoicing" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                </div>
                <div>
                    <svg width="38px" height="38px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M433.2 816.8c-14.2 0-25.8-11.6-25.8-25.8 0-14.2 11.6-25.8 25.8-25.8 14.2 0 25.8 11.6 25.8 25.8 0.1 14.2-11.6 25.8-25.8 25.8z" fill="#005BFF" /><path d="M600.5 736.7c0 5.1-4.2 9.3-9.3 9.3h-316c-5.1 0-9.3-4.2-9.3-9.3V260.4c0-5.1 4.2-9.3 9.3-9.3h315.9c5.1 0 9.3 4.2 9.3 9.3v476.3h0.1z" fill="#E6E6E6" /><path d="M301.8 354.2c-13.6 0-24.7 11.1-24.7 24.7s11.1 24.7 24.7 24.7 24.7-11.1 24.7-24.7-11.1-24.7-24.7-24.7zM804 577.8c-29.4 0-53.4 24-53.4 53.4s24 53.4 53.4 53.4 53.4-24 53.4-53.4-24-53.4-53.4-53.4z" fill="#FFFFFF" /><path d="M804 557.8c-40.5 0-73.4 32.9-73.4 73.4s32.9 73.4 73.4 73.4 73.4-32.9 73.4-73.4-32.9-73.4-73.4-73.4z m-53.4 73.4c0-29.4 24-53.4 53.4-53.4s53.4 24 53.4 53.4-24 53.4-53.4 53.4c-29.5 0-53.4-24-53.4-53.4z" fill="#005BFF" /><path d="M365.7 546c-11.4 0-20.6 9.2-20.6 20.6s9.2 20.6 20.6 20.6 20.6-9.2 20.6-20.6S377 546 365.7 546zM128.3 421.3c-13.6 0-24.7 11.1-24.7 24.7s11.1 24.7 24.7 24.7S153 459.6 153 446s-11.1-24.7-24.7-24.7z" fill="#FFFFFF" /><path d="M191.4 414.6c-1.8-5.2-7.4-8-12.7-6.3l-18.7 6.3c-8.1-8.2-19.3-13.3-31.8-13.3-24.6 0-44.7 20-44.7 44.7s20 44.7 44.7 44.7 44.7-20 44.7-44.7c0-4.8-0.8-9.5-2.2-13.8l14.4-4.8c5.2-1.9 8-7.5 6.3-12.8z m-63.1 56c-13.6 0-24.7-11.1-24.7-24.7s11.1-24.7 24.7-24.7 24.7 11.1 24.7 24.7-11.1 24.7-24.7 24.7zM329.4 427.4l-3.5-11c12.3-8 20.5-21.8 20.5-37.5 0-24.6-20-44.7-44.7-44.7s-44.7 20-44.7 44.7 20 44.7 44.7 44.7c1.8 0 3.6-0.1 5.3-0.3l3.2 10.2c1.3 4.3 5.3 7 9.5 7 1 0 2-0.2 3-0.5 5.5-1.7 8.4-7.4 6.7-12.6z m-18.5-25.6c-0.4 0.1-0.8 0.3-1.1 0.4-2.5 0.9-5.2 1.4-8 1.4-13.6 0-24.7-11.1-24.7-24.7s11.1-24.7 24.7-24.7 24.7 11.1 24.7 24.7c0 10.3-6.5 19.2-15.6 22.9zM338 497.6c1 0 2-0.2 3-0.5 5.3-1.7 8.2-7.3 6.5-12.5l-6-19.1c-1.7-5.3-7.3-8.2-12.5-6.5-5.3 1.7-8.2 7.3-6.5 12.5l6 19.1c1.3 4.3 5.2 7 9.5 7zM438 505.2l-8 6.1c-4.4 3.3-5.3 9.6-1.9 14 2 2.6 5 3.9 8 3.9 2.1 0 4.2-0.7 6-2l8-6.1c4.4-3.3 5.3-9.6 1.9-14-3.3-4.4-9.6-5.2-14-1.9zM531.6 446.6c-3.3-4.4-9.6-5.3-14-1.9l-8 6.1c-4.4 3.3-5.3 9.6-1.9 14 2 2.6 5 3.9 8 3.9 2.1 0 4.2-0.7 6-2l8-6.1c4.4-3.3 5.3-9.6 1.9-14zM477.8 474.9l-8 6.1c-4.4 3.3-5.3 9.6-1.9 14 2 2.6 5 3.9 8 3.9 2.1 0 4.2-0.7 6-2l8-6.1c4.4-3.3 5.3-9.6 1.9-14-3.3-4.3-9.6-5.2-14-1.9zM398.2 535.5l-3.6 2.7c-7.4-7.5-17.6-12.2-28.9-12.2-1.7 0-3.3 0.1-4.9 0.3l-1.1-3.6c-1.7-5.3-7.3-8.2-12.6-6.5-5.3 1.7-8.2 7.3-6.5 12.6l1.5 4.9c-10.3 7.4-17 19.4-17 33 0 22.4 18.2 40.6 40.6 40.6s40.6-18.2 40.6-40.6c0-3.8-0.5-7.5-1.5-11l5.5-4.2c4.4-3.3 5.3-9.6 1.9-14-3.3-4.5-9.6-5.4-14-2z m-53.1 31.1c0-11.4 9.2-20.6 20.6-20.6s20.6 9.2 20.6 20.6-9.2 20.6-20.6 20.6-20.6-9.2-20.6-20.6z" fill="#005BFF" /><path d="M863.8 414.8H666.9v-200c0-41.8-34-75.8-75.8-75.8H275.2c-41.8 0-75.8 34-75.8 75.8v585.4c0 41.8 34 75.8 75.8 75.8h588.5c41.8 0 75.8-33.6 75.8-74.9V489.8c0.1-41.4-33.9-75-75.7-75zM591.2 836h-316c-19.7 0-35.8-16-35.8-35.8V409l2.5-0.8c5.2-1.8 8-7.4 6.3-12.7-1.3-3.9-4.9-6.5-8.7-6.8V214.9c0-19.7 16-35.8 35.8-35.8h315.9c19.7 0 35.8 16 35.8 35.8V435c-1.9 0.2-3.9 1-5.5 2.3-4.2 3.6-4.7 9.9-1.1 14.1l6.5 7.6 0.1 0.1v341.2c-0.1 19.7-16.1 35.7-35.8 35.7z m308.4-34.9c0 19.3-16 34.9-35.8 34.9H658c5.7-10.7 9-22.8 9-35.8V500.5c2.3 0 4.6-0.8 6.4-2.4 4.2-3.6 4.7-9.9 1.1-14.1l-6.5-7.6c-0.3-0.4-0.7-0.7-1.1-1.1v-20.5h196.9c19.7 0 35.8 15.7 35.8 34.9v311.4z" fill="#005BFF" /><path d="M732.9 552.5c-3.6-4.2-9.9-4.7-14.1-1.1-4.2 3.6-4.7 9.9-1.1 14.1l6.5 7.6c2 2.3 4.8 3.5 7.6 3.5 2.3 0 4.6-0.8 6.5-2.4 4.2-3.6 4.7-9.9 1.1-14.1l-6.5-7.6zM700.4 514.5c-3.6-4.2-9.9-4.7-14.1-1.1s-4.7 9.9-1.1 14.1l6.5 7.6c2 2.3 4.8 3.5 7.6 3.5 2.3 0 4.6-0.8 6.5-2.4 4.2-3.6 4.7-9.9 1.1-14.1l-6.5-7.6z" fill="#005BFF" /><path d="M493.7 223h-121c-5.5 0-10-4.5-10-10s4.5-10 10-10h121c5.5 0 10 4.5 10 10s-4.5 10-10 10z" fill="#06F3FF" /><path d="M597.3 320.1c-33.6 0-60.9 27.3-60.9 60.9s27.3 60.9 60.9 60.9 60.9-27.3 60.9-60.9-27.3-60.9-60.9-60.9z" fill="#FFFFFF" /><path d="M597.3 300.1c-44.6 0-80.9 36.3-80.9 80.9 0 44.6 36.3 80.9 80.9 80.9 44.6 0 80.9-36.3 80.9-80.9 0-44.6-36.3-80.9-80.9-80.9zM536.5 381c0-33.6 27.3-60.9 60.9-60.9s60.9 27.3 60.9 60.9-27.3 60.9-60.9 60.9-60.9-27.3-60.9-60.9z" fill="#005BFF" />
                    </svg>
                    <h1 class="mt-1 text-xl font-semibold">Inventory Management</h1>
                    <p class="mt-2">Keep track of stock levels, automate reordering, and avoid stockouts. An efficient inventory system reduces waste and increases customer satisfaction.</p>
                    <div className="xs:mt-2 sm:mt-3">
                        <Link href="/inventory_management" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                </div>
                <div>
                    <svg width="38px" height="38px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M854.7 828.1H169.9c-38.9 0-70.5-31.6-70.5-70.5v-499c0-38.9 31.6-70.5 70.5-70.5h684.7c38.9 0 70.5 31.6 70.5 70.5v499c0.1 38.9-31.5 70.5-70.4 70.5z" fill="#FFFFFF" /><path d="M885.2 258.1c0-16.5-13.5-30-30-30H169.4c-16.5 0-30 13.5-30 30v120.1h745.7V258.1z m-649.7 96.1c-28.2 0-51.2-23-51.2-51.2s23-51.2 51.2-51.2 51.2 23 51.2 51.2-22.9 51.2-51.2 51.2z m281.8-6.8H374.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7h142.6c24.1 0 43.7 19.6 43.7 43.7s-19.6 43.7-43.7 43.7z" fill="#E6E6E6" /><path d="M213.3 752.8h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H213.3c-8.5 0-15.4-6.9-15.4-15.4V524.6c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0.1 19.4 15.9 35.3 35.4 35.3z" fill="#06F3FF" /><path d="M235.5 271.8c-17.2 0-31.2 14-31.2 31.2s14 31.2 31.2 31.2 31.2-14 31.2-31.2-14-31.2-31.2-31.2z" fill="#FFFFFF" /><path d="M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z" fill="#005BFF" /><path d="M517.3 280.1H374.7c-13 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7h142.6c13 0 23.7-10.6 23.7-23.7s-10.7-23.7-23.7-23.7z" fill="#FFFFFF" /><path d="M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z" fill="#005BFF" /><path d="M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z" fill="#005BFF" /><path d="M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z" fill="#005BFF" />
                    </svg>
                    <h1 class="mt-1 text-xl font-semibold">Social Features System</h1>
                    <p class="mt-2">Enhance communication and engagement with a robust social features system, making it easier to connect with your users and build a loyal community.</p>
                    <div className="xs:mt-2 sm:mt-3">
                        <Link href="/social_features" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>

    {/* <GradientWrapper>
        <div className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center mb-4 font-semibold text-sky-800 md:mb-6 text-2xl sm:text-3xl md:text-3xl xl:text-4xl">
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
    </GradientWrapper> */}
    </>
  );
};
export default OverviewSystems;