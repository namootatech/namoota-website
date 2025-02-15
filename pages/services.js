import Link from 'next/link';
import {
  FaCheckCircle,
  FaLaptopCode,
  FaMobileAlt,
  FaDesktop,
  FaRegHandshake,
  FaChartLine,
} from 'react-icons/fa';

export default function Services() {
  return (
    <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      {/* Hero Section */}
      <section className='relative bg-sky-50 dark:bg-gray-900/30 pt-32 lg:pt-24 pb-32 px-20 lg:pb-4 rounded-md m-4'>
        <div className='mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative'>
          <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-0 lg:-translate-y-0 lg:left-0 lg:top-16 w-40 h-40 skew-x-6 opacity-50 dark:opacity-80 rounded-full bg-gradient-to-bl from-sky-600 to-sky-400 blur-3xl flex'></div>
          <div className='flex text-center lg:text-left flex-col lg:items-center lg:flex-row gap-8 lg:gap-10 xl:gap-12 relative max-w-4xl lg:max-w-none'>
            <div className='space-y-8 xl:space-y-10 lg:py-12 flex-1 lg:w-1/2'>
              <h1 className='text-sky-950 dark:text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold'>
                Digitizing Your Business with Heart
              </h1>
              <p className='text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:max-w-none'>
                At Namoota, we believe every small business has the potential to
                thrive in the digital world. Let us show you how we can help
                with our cutting-edge technology and hands-on experience.
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

      {/* Systems We Build Section */}
      <section className='py-24 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 text-center'>
          <h2 className='text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6'>
            Systems We Build
          </h2>
          <h2 className='text-2xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
            Streamline Your Business Operations
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto'>
            We understand that running a business can be overwhelming, but the
            right systems can make a world of difference. Our systems are built
            to make your day-to-day operations more efficient, organized, and
            automated.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaLaptopCode className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Quoting & Invoicing
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Automate and simplify your quoting and invoicing processes,
                ensuring you never miss a detail.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaCheckCircle className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Bookings & Appointments
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Manage appointments with ease, integrate with your calendar, and
                set up automated reminders.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaDesktop className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Inventory Management
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Track stock, monitor product movement, and optimize your supply
                chain for maximum efficiency.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaRegHandshake className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Social Features System
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Create a community around your brand with custom-built social
                features that foster engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps We Build Section */}
      <section className='py-24 bg-sky-50 dark:bg-gray-800 rounded-md shadow-lg my-6'>
        <div className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10'>
          <h2 className='text-3xl sm:text-4xl font-semibold text-center text-gray-900 dark:text-white mb-6'>
            Apps We Build
          </h2>
          <h2 className='text-2xl sm:text-2xl text-center font-semibold text-gray-900 dark:text-white mb-6'>
            Scale with Your Business
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg'>
              <FaMobileAlt className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Android & iOS Apps
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                Using Ionic, we create mobile apps that work seamlessly across
                both platforms, leveraging Google Firebase for real-time data.
              </p>
            </div>
            <div className='flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg'>
              <FaLaptopCode className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Progressive Web Apps (PWA)
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                Fast, reliable, and accessible across devices without the need
                for an app store. Perfect for businesses looking for a web
                presence.
              </p>
            </div>
            <div className='flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg'>
              <FaDesktop className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Desktop Apps
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                Using Electron, we develop desktop applications that work across
                Windows, Mac, and Linux, ideal for businesses needing a robust
                desktop presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content & Marketing Section */}
      <section className='py-24 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 text-center'>
          <h2 className='text-3xl sm:text-4xl font-semibold text-center text-gray-900 dark:text-white mb-6'>
            Content
          </h2>
          <h2 className='text-2xl sm:text-2xl text-center font-semibold text-gray-900 dark:text-white mb-6'>
            Grow Your Brand with Expert Marketing
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto'>
            Great apps and systems are just part of the equation. To grow your
            business, you need to engage with your audience effectively. That's
            where our expertise in digital marketing and social media management
            comes in.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaRegHandshake className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Social Media Management
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                With Meta certificates and years of experience, we create and
                manage social media strategies that increase your brand's
                visibility and engagement.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaChartLine className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Digital Marketing
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Our digital marketing strategies are data-driven and focus on
                achieving tangible results, whether it's increasing your website
                traffic, generating leads, or improving your conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Namoota Section */}
      <section className='py-24 bg-sky-50 dark:bg-gray-800 rounded-md shadow-lg my-6'>
        <div className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 text-center'>
          <h2 className='text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6'>
            Why Namoota is Perfect for Your Business
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto'>
            We aren't just another software development company; we're your
            partner in growth. With a small but mighty team of 7, we are
            flexible, transparent, and hands-on.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg'>
              <FaRegHandshake className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Relationship-Focused
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Our business is about relationships, not just projects. We work
                closely with you at every stage of the process.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg'>
              <FaLaptopCode className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Innovative Solutions
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                We approach every project with a mindset of collaboration and
                innovation, delivering solutions that matter.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg'>
              <FaChartLine className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Growth-Oriented
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Our tools are cutting-edge, but our approach is grounded in
                practical problem-solving to help your business grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className='py-24 bg-gradient-to-r from-sky-900 to-cyan-500 text-white rounded-md shadow-lg m-20'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
            Ready to Digitize Your Business?
          </h2>
          <p className='text-lg mb-8'>
            Let's collaborate to create solutions that meet your business needs
            and solve your challenges.
          </p>
          <div className='flex justify-center gap-4'>
            <Link
              href='/get-a-quote'
              className='inline-block px-8 py-3 text-xl bg-sky-700 rounded-lg shadow-lg hover:bg-sky-800 transition ease-in-out'
            >
              Get a Quote
            </Link>
            <Link
              href='/contact'
              className='inline-block px-8 py-3 text-xl bg-white text-sky-700 rounded-lg shadow-lg hover:bg-gray-100 transition ease-in-out'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
