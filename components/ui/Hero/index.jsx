import NavLink from '../NavLink';

const Hero = () => (
  <>
    <section class='flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row'>
      <div class='flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-12'>
        <p class='mb-4 font-semibold text-sky-600 md:mb-3 md:text-lg xl:text-xl'>
          Unlocking digital dreams!
        </p>

        <h1 class='mb-4 text-4xl font-bold text-sky-800 sm:text-5xl md:mb-6 md:text-6xl'>
          Empowering SMEs with Digital Solutions
        </h1>

        <p class='mb-4 leading-relaxed text-gray-500 md:mb-6 lg:w-4/5 xl:text-lg'>
          At Namoota, we're passionate about bridging the digital divide for
          small and medium enterprises (SMEs) in South Africa, our mission is to
          help businesses succeed by introducing them to the limitless
          possibilities of the digital world. With our bespoke software
          solutions, digital marketing expertise, and business-focused tools, we
          empower SMEs to grow, thrive, and reach new markets with confidence.
        </p>

        <div class='flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start'>
          <a
            href='#'
            class='inline-block rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-sky-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:bg-sky-700 md:text-base'
          >
            Get a quote
          </a>

          <a
            href='#'
            class='inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-sky-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'
          >
            Book a call
          </a>
        </div>
      </div>

      <div class='h-48 hidden md:flex overflow-hidden rounded-lg bg-sky-500 shadow-lg lg:h-auto  xl:w-6/12'>
        <img
          src='/lonbg.png'
          loading='lazy'
          alt='Photo by Fakurian Design'
          class='h-full w-full object-cover '
        />
      </div>
    </section>
  </>
);

export default Hero;
