import {
  FaBullhorn,
  FaRegHandshake,
  FaCheckCircle,
  FaChartLine,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Advertise() {
  return (
    <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      {/* Hero Section */}
      <section className='relative bg-sky-50 dark:bg-gray-900/30 pt-32 lg:pt-24 pb-32  px-20 lg:pb-4 rounded-md m-4'>
        <div className='mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative'>
          <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-0 lg:-translate-y-0 lg:left-0 lg:top-16 w-40 h-40 skew-x-6 opacity-50 dark:opacity-80 rounded-full bg-gradient-to-bl from-sky-600 to-sky-400 blur-3xl flex'></div>
          <div className='flex text-center lg:text-left flex-col lg:items-center lg:flex-row gap-8 lg:gap-10 xl:gap-12 relative max-w-4xl lg:max-w-none'>
            <div className='space-y-8 xl:space-y-10 lg:py-12 flex-1 lg:w-1/2'>
              <h1 className='text-sky-950 dark:text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold'>
                Empowering Your Brand with Effective Digital Marketing
              </h1>
              <p className='text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:max-w-none'>
                We help businesses grow by creating digital marketing strategies
                that deliver real results. With our experience and approach,
                success isn't just a goal—it's a guarantee.
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
                  Contact Us
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
            Why We’re the Right Choice for Your Digital Marketing Needs
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto'>
            We understand the intricacies of the digital world and how to
            leverage them to help your business succeed. It's not about money
            for us—it’s about the impact we can make for you.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaBullhorn className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Targeted Advertising
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                We ensure your message reaches the right audience through
                strategic digital advertising, optimizing for performance.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaChartLine className='h-16 w-16 text-sky-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Data-Driven Success
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                We base our decisions on data, ensuring that every marketing
                effort leads to measurable growth for your business.
              </p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
              <FaRegHandshake className='h-16 w-16 text-teal-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Collaboration at Heart
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>
                Our approach is built on collaboration—working with you to
                create marketing campaigns that align with your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10'>
          <h2 className='text-3xl sm:text-4xl font-semibold text-center text-gray-900 dark:text-white mb-12'>
            Our Marketing Capabilities
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <FaCheckCircle className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                SEO Optimization
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                We enhance your website's visibility on search engines, driving
                more organic traffic and engagement.
              </p>
            </div>
            <div className='flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <FaCheckCircle className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Social Media Marketing
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                Engage your audience with tailored social media campaigns that
                spark conversation and drive action.
              </p>
            </div>
            <div className='flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <FaCheckCircle className='h-12 w-12 text-sky-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Content Creation
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mt-2 text-center'>
                From blog posts to video content, we create engaging and
                valuable content that speaks to your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className='py-24 bg-gradient-to-r from-sky-900 to-teal-500 text-white rounded-md shadow-md'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
            Ready to Take Your Digital Marketing to the Next Level?
          </h2>
          <p className='text-lg mb-8'>
            We're here to help your business thrive in the digital world. Let’s
            work together to make your goals a reality.
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
            Let’s Talk About Your Business
          </h2>
          <p className='text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
            We would love to discuss how we can help grow your business with our
            digital marketing expertise.
          </p>
          <Link
            href='/contact'
            className='inline-block px-6 py-3 mt-8 text-xl bg-teal-600 rounded-lg text-white hover:bg-teal-700 transition ease-in-out'
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
