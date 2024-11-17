import {
  FaCheckCircle,
  FaLaptopCode,
  FaMobileAlt,
  FaDesktop,
  FaRegHandshake,
} from 'react-icons/fa';
import Link from 'next/link';

export default function BuildAnApp() {
  return (
    <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      {/* Hero Section */}
      <section className='relative bg-sky-50 dark:bg-gray-900/30 pt-32 lg:pt-24 pb-32  px-20 lg:pb-4 rounded-md m-4'>
        <div className='mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative'>
          <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-0 lg:-translate-y-0 lg:left-0 lg:top-16 w-40 h-40 skew-x-6 opacity-50 dark:opacity-80 rounded-full bg-gradient-to-bl from-sky-600 to-sky-400 blur-3xl flex'></div>
          <div className='flex text-center lg:text-left flex-col lg:items-center lg:flex-row gap-8 lg:gap-10 xl:gap-12 relative max-w-4xl lg:max-w-none'>
            <div className='space-y-8 xl:space-y-10 lg:py-12 flex-1 lg:w-1/2'>
              <h1 className='text-sky-950 dark:text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold'>
                Build Your Custom App to Solve Real Problems
              </h1>
              <p className='text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:max-w-none'>
                Whether you need a mobile app, web app, or desktop solution, we
                are here to bring your vision to life. Using a variety of
                versatile tools, we create fully branded, scalable, and
                user-friendly applications.
              </p>
              <div className='flex flex-wrap items-center gap-4 z-30 sm:w-max sm:flex-nowrap mx-auto lg:mx-0'>
                <Link
                  href='/get-a-quote'
                  className='px-5 h-12 flex items-center sm:w-max w-full justify-center bg-gradient-to-br from-sky-700 to-sky-600 text-white rounded-lg ease-linear transition'
                >
                  Get a Quote
                </Link>
                <Link
                  href='/contact'
                  className='px-5 h-12 flex items-center sm:w-max w-full justify-center gap-x-3 border border-gray-200 dark:border-gray-900/60 rounded-lg text-sky-800 dark:text-gray-100 bg-sky-50 dark:bg-gray-900'
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-24 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 text-center'>
          <h2 className='text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6'>
            Why Build Your App with Us?
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto'>
            We’re not just about building apps. We're here to provide solutions
            tailored to your needs. From business operations to customer
            engagement, our apps are built with a clear purpose to help you
            reach your goals.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaLaptopCode className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Versatile Development Tools
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Our expertise in React, Firebase, MongoDB, and more lets us
                build apps across platforms—Android, iOS, Web, and Desktop.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaCheckCircle className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Scalable Solutions
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Our solutions are scalable, ensuring your app grows with your
                business and adapts to new challenges.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaRegHandshake className='h-16 w-16 text-teal-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Full Support & Maintenance
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                From launch to long-term updates, we ensure your app stays
                relevant and fully operational.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10'>
          <h2 className='text-3xl sm:text-4xl font-semibold text-center text-gray-900 dark:text-white mb-12'>
            Key Features of Our Apps
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <FaMobileAlt className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Cross-Platform Compatibility
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                Whether it’s Android, iOS, or Web, we ensure your app works
                seamlessly across devices.
              </p>
            </div>
            <div className='flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <FaDesktop className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Desktop Solutions
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                We also build robust desktop apps that help you manage
                operations and deliver value to users.
              </p>
            </div>
            <div className='flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <FaCheckCircle className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Cloud Integration
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                With Google Cloud and Firebase, we integrate the latest cloud
                technologies for seamless performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className='py-24 bg-gradient-to-r from-sky-900 to-cyan-500 text-white rounded-md shadow-md'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
            Ready to Build Your App?
          </h2>
          <p className='text-lg mb-8'>
            Let's collaborate to create an app that meets your business needs
            and solves your challenges.
          </p>
          <Link
            href='/get-a-quote'
            className='inline-block px-8 py-3 text-xl bg-sky-700 rounded-lg shadow-lg hover:bg-sky-800 transition ease-in-out'
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-24 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 text-center'>
          <h2 className='text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6'>
            Let's Bring Your Idea to Life
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto'>
            From start to finish, we are here to ensure your app is a success.
            Contact us now to get started.
          </p>
          <div className='flex justify-center'>
            <Link
              href='/contact'
              className='text-xl font-semibold text-sky-600 dark:text-sky-300 border-b-2 border-sky-600 dark:border-sky-300 transition'
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
