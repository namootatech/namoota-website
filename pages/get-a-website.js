import { FaCheckCircle, FaRegHandshake, FaLaptopCode } from 'react-icons/fa';
import Link from 'next/link';

export default function GetAWebsite() {
  return (
    <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      {/* Hero Section */}
      <section className='relative bg-sky-50 dark:bg-gray-900/30 pt-32 lg:pt-24 pb-32  px-20 lg:pb-4 rounded-md m-4'>
        <div className='mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative'>
          <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-0 lg:-translate-y-0 lg:left-0 lg:top-16 w-40 h-40 skew-x-6 opacity-50 dark:opacity-80 rounded-full bg-gradient-to-bl from-sky-600 to-sky-400 blur-3xl flex'></div>
          <div className='flex text-center lg:text-left flex-col lg:items-center lg:flex-row gap-8 lg:gap-10 xl:gap-12 relative max-w-4xl lg:max-w-none'>
            <div className='space-y-8 xl:space-y-10 lg:py-12 flex-1 lg:w-1/2'>
              <h1 className='text-sky-950 dark:text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold'>
                Get Your Business Online with a Powerful Website
              </h1>
              <p className='text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:max-w-none'>
                Build your digital presence with our custom websites tailored
                for businesses that want to scale.
              </p>
              <div className='flex flex-wrap items-center gap-4 z-30 sm:w-max sm:flex-nowrap mx-auto lg:mx-0'>
                <Link
                  href='/get-a-quote'
                  className='px-5 h-12 flex items-center sm:w-max w-full justify-center bg-gradient-to-br from-sky-700 to-sky-600 text-white rounded-lg ease-linear transition'
                >
                  Get Quote
                </Link>
                <Link
                  href='/contact'
                  className='px-5 h-12 flex items-center sm:w-max w-full justify-center gap-x-3 border border-gray-200 dark:border-gray-900/60 rounded-lg text-sky-800 dark:text-gray-100 bg-sky-50 dark:bg-gray-900'
                >
                  <FaRegHandshake className='h-5 w-5' />
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
            Why Choose Us?
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto'>
            We specialize in creating websites that not only look great but also
            drive results. From custom designs to e-commerce integrations, we’ve
            got your business covered.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaLaptopCode className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Custom Web Development
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Get a website that fits your brand, with custom features
                designed to meet your business needs.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaCheckCircle className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Proven Success
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Join the growing list of satisfied clients who have successfully
                launched and scaled their online businesses with us.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaRegHandshake className='h-16 w-16 text-teal-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Full Support
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                From concept to launch and beyond, we provide full support and
                maintenance to ensure your website is always running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10'>
          <h2 className='text-3xl sm:text-4xl font-semibold text-center text-gray-900 dark:text-white mb-12'>
            Our Website Features
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <FaCheckCircle className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Responsive Design
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                Your website will look great on any device, from desktops to
                mobile phones.
              </p>
            </div>
            <div className='flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <FaCheckCircle className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                SEO Optimized
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                Improve your search engine rankings with SEO best practices
                built right into the design.
              </p>
            </div>
            <div className='flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <FaCheckCircle className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Fast Performance
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                Websites optimized for fast loading times, ensuring a better
                user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className='py-24 bg-gradient-to-r from-sky-900 to-cyan-500 text-white rounded-md shadow-md'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
            Ready to Build Your Online Presence?
          </h2>
          <p className='text-lg mb-8'>
            We’re here to help you get started. Let’s create a website that
            drives your business forward.
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
            Let's Build Your Dream Website
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-8'>
            Our team is ready to help you bring your website vision to life.
            Reach out today and start your journey.
          </p>
          <a
            href='/contact'
            className='inline-block text-lg bg-sky-700 text-white px-8 py-3 rounded-lg'
          >
            Send us an email
          </a>
        </div>
      </section>
    </div>
  );
}
