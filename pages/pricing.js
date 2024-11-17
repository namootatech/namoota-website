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
import { pricing } from '../config';
import Link from 'next/link';

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
                <span class='text-sky-700 dark:text-sky-500'>
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
            {pricing.map((i) => (
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
                        <span class='w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 dark:bg-sky-500 text-white'>
                          <FaCircleCheck />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div class='font-bold text-4xl text-gray-900 dark:text-white'>
                    <span>{`From ${i.startingPrice}`}</span>
                  </div>
                </div>
                <div class='flex md:justify-end md:items-center'>
                  <Link
                    href='/contact'
                    class='h-10 px-5 bg-sky-700 text-sky-100 dark:text-gray-300 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center outline-none'
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
