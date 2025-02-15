import Link from 'next/link';
import NavLink from '../NavLink';

const Hero = () => (
  <>
    <section class='flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row'>
      <div class='flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-12'>
        <p class='mb-4 font-semibold text-sky-500 md:mb-3 md:text-lg xl:text-xl'>
          Your Digital Success Starts Here
        </p>
        <h1 class='mb-4 text-4xl font-bold text-sky-800 sm:text-5xl md:mb-6 md:text-6xl'>
          Build Smarter, Grow Faster, Win Bigger
        </h1>

        <p class='mb-4 leading-relaxed text-gray-500 md:mb-6 lg:w-full xl:text-lg'>
          You have the vision; we bring it to life. Whether you need a stunning
          website, a powerful mobile app, or a winning digital marketing
          strategy, everything we do is designed to help you succeed. We know
          you value affordable, reliable solutions — that's why we make it easy
          for you to grow your business, delight your customers, and reach new
          heights with technology built for your goals. Together, we’ll turn
          your ideas into a thriving digital presence. Because when you shine,
          so does your business.
        </p>

        <div class='flex justify-between  w-full mb-4 rounded-lg border-2 border-sky-500 overflow-hidden md:mb-3'>
          <Link
            href='/get-a-website'
            class='px-2 text-center py-2 w-1/4 font-semibold text-sky-500 hover:bg-sky-100 text-lg'
          >
            Get a website
          </Link>
          <Link
            href='/build-an-app'
            class='px-2 text-center py-2  w-1/4 font-semibold text-sky-500 border-l border-sky-500 hover:bg-sky-100 text-lg'
          >
            Build an app
          </Link>
          <Link
            href='/sell-online'
            class='px-2 text-center py-2  w-1/4 font-semibold text-sky-500 border-l border-sky-500 hover:bg-sky-100 text-lg'
          >
            Sell Online
          </Link>
          <Link
            href='/advertise'
            class='px-2 text-center py-2  w-1/4 font-semibold text-sky-500 border-l border-sky-500 hover:bg-sky-100 text-lg'
          >
            Advertise
          </Link>
        </div>
      </div>

      <div class='h-48 hidden md:flex overflow-hidden rounded-lg bg-sky-500 shadow-lg lg:h-auto  xl:w-6/12'>
        <img
          src='/look2.jpg'
          loading='lazy'
          alt='Photo by Fakurian Design'
          class='h-full w-full object-cover '
        />
      </div>
    </section>
  </>
);

export default Hero;
