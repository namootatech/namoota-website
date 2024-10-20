import Head from 'next/head';
import GradientWrapper from '../components/GradientWrapper';
import CTA from '../components/ui/CTA';
import Features from '../components/ui/Features';
import FooterCTA from '../components/ui/FooterCTA';
import LogoGrid from '../components/ui/LogoGrid';
import Testimonials from '../components/ui/Testimonials';
import ToolKit from '../components/ui/ToolKit';
import Stats from '../components/ui/Stats';
import Team from '../components/ui/Team';
import { FaCircleCheck } from 'react-icons/fa6';
import { pricing } from '../config';
import Link from 'next/link';

import { dataPackages, networkPackages } from '../config/data';
import PreOrderForm from '../components/forms/PreOrder';

const Hero = () => {
  return (
    <section class='relative bg-white dark:bg-gray-900/30 pb-32 lg:pb-4'>
      <div class='mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative'>
        <div class='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-0 lg:-translate-y-0 lg:left-0 lg:top-16 w-40 h-40 skew-x-6 opacity-50 dark:opacity-80 rounded-full bg-gradient-to-bl from-cyan-600 to-sky-400 blur-3xl flex'></div>
        <div class='flex text-center lg:text-left flex-col lg:items-center lg:flex-row gap-8 lg:gap-10 xl:gap-12 relative max-w-4xl lg:max-w-none'>
          <div class='space-y-8 xl:space-y-10 lg:py-12 flex-1 lg:w-1/2'>
            <h1 class='text-cyan-950 dark:text-white text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-5xl/tight font-bold'>
              Stay Connected,
              <span class='text-transparent bg-clip-text bg-gradient-to-br from-cyan-700 to-sky-600'>
                Stay Flexible
              </span>{' '}
              Get the best data deals on all networks with Namoota.
            </h1>
            <p class='text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:max-w-none'>
              Tired of long-term contracts and hidden fees? Namoota Data Sim
              offers flexible, month-to-month plans that fit your needs.
            </p>
            <div class='flex flex-wrap items-center gap-4 z-30 sm:w-max sm:flex-nowrap mx-auto lg:mx-0'>
              <a
                href='#'
                class='px-5 h-12 flex items-center sm:w-max w-full justify-center bg-gradient-to-br from-cyan-700 to-sky-600 text-white rounded-lg ease-linear transition'
              >
                Choose your perfect plan
              </a>
            </div>
          </div>
          <div
            aria-hidden='true'
            class='flex-1 lg:w-1/2 relative hidden lg:flex justify-end pr-8'
          >
            <div class='rounded-lg absolute right-0 bottom-0 w-11/12 h-2/5 bg-gradient-to-tr from-cyan-50 to-sky-100 dark:bg-gradient-to-tr dark:from-gray-950 dark:to-gray-700'></div>
            <img
              src='/mobile.jpg'
              width='3200'
              class='w-11/12 h-auto relative rounded-lg shadow-lg'
              alt='portrait-of-smiling-medical-worker-girl-doctor'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <main>
        <Hero />
        <PreOrderForm />
      </main>
    </>
  );
}
