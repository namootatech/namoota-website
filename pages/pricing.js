import Head from 'next/head';
import GradientWrapper from '../components/GradientWrapper';
import CTA from '../components/ui/CTA';
import Features from '../components/ui/Features';
import FooterCTA from '../components/ui/FooterCTA';
import Hero from '../components/ui/Hero';
import LogoGrid from '../components/ui/LogoGrid';
import Testimonials from '../components/ui/Testimonials';
import ToolKit from '../components/ui/ToolKit';
import Stats from '../components/ui/Stats';
import Team from '../components/ui/Team';
import { FaCircleCheck } from 'react-icons/fa6';

const CTAContent = ({ hint, title, link1, link2 }) => (
  <div class='bg-white py-6 sm:py-8 lg:py-12'>
    <div class='mx-auto max-w-screen-2xl px-4 md:px-8'>
      <div class='mx-auto flex max-w-3xl flex-col items-center text-center'>
        <p class='mb-4 font-semibold text-sky-500 md:mb-6 md:text-lg xl:text-xl'>
          {hint}
        </p>

        <h1 class='mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl'>
          {title}
        </h1>

        <div class='flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center'>
          <a
            href={link1.link}
            class='inline-block rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-sky-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:bg-sky-700 md:text-base'
          >
            {link1.text}
          </a>
          <a
            href={link2.link}
            class='inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-sky-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'
          >
            {link2.text}
          </a>
        </div>
      </div>
    </div>
  </div>
);

const items = [
  {
    item: 'Android/iOS App Development',
    startingPrice: 'R30,000',
    duration: '4-6 weeks',
    features: [
      'User-friendly mobile interface',
      'User management system',
      'Secure database integration',
      'Push notifications setup',
      'Basic authentication & authorization',
      'Compatible for both Android and iOS',
    ],
  },
  {
    item: 'Web Application Development',
    startingPrice: 'R30,000',
    duration: '6-8 weeks',
    features: [
      'Responsive design for all devices',
      'User management system',
      'Secure database integration',
      'Authentication and user roles',
      'Basic dashboard with reporting tools',
      'SEO optimization & analytics setup',
    ],
  },
  {
    item: 'Desktop Application Development',
    startingPrice: 'R35,000',
    duration: '8-10 weeks',
    features: [
      'Desktop-specific user interface',
      'User management system',
      'Local/Cloud database integration',
      'Installation & setup process',
      'Basic reporting and analytics',
      'Offline functionality with data sync',
    ],
  },
  {
    item: 'Quotation and Invoicing System',
    startingPrice: 'R36,000',
    duration: '3-4 weeks',
    features: [
      'Customizable templates for quotes and invoices',
      'User management system',
      'Secure database integration',
      'Email notifications for invoicing',
      'Reporting tools for sales tracking',
    ],
  },
  {
    item: 'Bookings and Appointments System',
    startingPrice: 'R36,000',
    duration: '4-6 weeks',
    features: [
      'User-friendly booking interface',
      'Calendar integration',
      'User management system',
      'Secure database integration',
      'Email and SMS reminders',
    ],
  },
  {
    item: 'App with Social Features',
    startingPrice: 'R30,000',
    duration: '6-8 weeks',
    features: [
      'User profiles and social connections',
      'Secure database integration',
      'User management system',
      'Real-time notifications',
      'Content sharing and messaging features',
    ],
  },
  {
    item: 'E-commerce Store App',
    startingPrice: 'R40,000',
    duration: '8-10 weeks',
    features: [
      'User-friendly shopping interface',
      'Product catalog management',
      'Secure payment gateway integration',
      'User management system',
      'Order tracking and notifications',
    ],
  },
  {
    item: 'Inventory Management System',
    startingPrice: 'R36,000',
    duration: '4-6 weeks',
    features: [
      'Real-time inventory tracking',
      'User management system',
      'Reporting tools for stock levels',
      'Secure database integration',
      'Supplier management features',
    ],
  },
  {
    item: 'Project Management App',
    startingPrice: '36,000',
    duration: '6-8 weeks',
    features: [
      'Task and project tracking',
      'User management system',
      'Collaboration tools',
      'Secure database integration',
      'Reporting tools for progress tracking',
    ],
  },
  {
    item: 'Case Management System',
    startingPrice: 'R38,000',
    duration: '8-10 weeks',
    features: [
      'Customizable case tracking',
      'User management system',
      'Secure database integration',
      'Reporting tools for case outcomes',
      'Email notifications for updates',
    ],
  },
  {
    item: 'Email, SMS, and Push Notifications for Existing System',
    startingPrice: 'R18,000',
    duration: '2-3 weeks',
    features: [
      'Integration of email notifications',
      'SMS notifications setup',
      'Push notifications for mobile apps',
      'User management system',
      'Reporting on notification engagement',
    ],
  },
  {
    item: 'Custom Static Website',
    startingPrice: 'R10,000',
    duration: '3-4 weeks',
    features: [
      'Responsive design',
      'User-friendly navigation',
      'Content management system',
      'SEO optimization',
      'Basic analytics setup',
    ],
  },
  {
    item: 'Custom Landing Page',
    startingPrice: 'R8,000',
    duration: '1-2 weeks',
    features: [
      'Responsive design',
      'Call-to-action buttons',
      'User-friendly layout',
      'SEO optimization',
      'Basic analytics setup',
    ],
  },
  {
    item: '6 Months Digital Marketing Campaign',
    startingPrice: 'R50,000',
    duration: '6 months',
    features: [
      'Targeted online advertising',
      'Social media marketing',
      'Content creation and management',
      'SEO strategies',
      'Monthly reporting and analysis',
    ],
  },
  {
    item: 'Social Media Management',
    startingPrice: 'R30,000',
    duration: '3 months',
    features: [
      'Content creation and scheduling',
      'Engagement with followers',
      'Monthly performance reports',
      'Strategy development',
      'Ad management',
    ],
  },
  {
    item: 'Leads Generation & Management System',
    startingPrice: 'R35,000',
    duration: '4-6 weeks',
    features: [
      'Lead capture forms',
      'User management system',
      'Secure database integration',
      'Reporting tools for lead tracking',
      'Integration with email marketing',
    ],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <section class='py-20'>
        <div class='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 divide-y divide-gray-200 dark:divide-gray-800'>
          <div class='flex md:justify-between md:flex-row flex-col gap-5 md:gap-20'>
            <div class='max-w-xl'>
              <h1 class='text-3xl/tight sm:text-4xl/tight font-bold text-gray-900 dark:text-white'>
                The Right Plan for <br />
                <span class='text-sky-700 dark:text-sky-600'>
                  Your Business
                </span>
              </h1>
            </div>
            <div class='flex-1 max-w-2xl'>
              <p class='text-sky-700 text-xl dark:text-gray-300'>
                At Namoota, we provide a wide range of digital solutions to help
                your business thrive in today’s digital world. Whether you need
                a mobile app, a web application, or a custom website, we have
                flexible packages designed to fit your unique requirements and
                budget. Below, you will find the starting prices for some of our
                most popular services. Each project is tailored to meet your
                specific business needs, ensuring you get the best solution to
                maximize your success.
              </p>
            </div>
          </div>
          <div class='mt-16 border-t border-t-gray-200 dark:border-t-gray-800 divide-y divide-gray-200 dark:divide-gray-800'>
            {items.map((i) => (
              <div class='py-4 grid items-center md:grid-cols-3 lg:grid-cols-5 gap-6'>
                <div class='md:col-span-2 lg:col-span-1'>
                  <h2 class='font-bold text-2xl text-gray-900 dark:text-gray-100'>
                    {i.item}
                  </h2>
                </div>
                <div class='text-gray-700 dark:text-gray-300 md:col-span-2 lg:col-span-3 md:items-center grid gap-6 md:grid-cols-3'>
                  <ul class='space-y-3 md:col-span-2'>
                    {i.features.map((f) => (
                      <li class='flex items-center gap-x-4'>
                        <span class='w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 dark:bg-sky-600 text-white'>
                          <FaCircleCheck />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div class='font-bold text-4xl text-gray-900 dark:text-white'>
                    <span>{i.startingPrice}</span>
                  </div>
                </div>
                <div class='flex md:justify-end md:items-center'>
                  <a
                    href='#'
                    class='h-10 px-5 bg-sky-700 text-sky-100 dark:text-gray-300 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center outline-none'
                  >
                    Talk to us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
