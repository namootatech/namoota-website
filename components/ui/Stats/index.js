const Stats = () => {
  return (
    <section class='lg:py-28 py-10 px-8 container mx-auto'>
      {/* <div class='lg:mb-24 mb-10 text-right py-4 px-8'>
        <h1 className='text-5xl text-sky-800 font-black py-8'>
          Our Impact in Numbers
        </h1>
        <p class='block antialiased font-sans leading-relaxed text-sky-900 mb-4 !text-2xl font-bold lg:!text-3xl'>
          Driving Success Through Digital Innovation
        </p>
        <p class='block antialiased font-sans text-xl font-normal leading-relaxed text-inherit w-full !text-gray-500 text-right'>
          At Namoota, we’re committed to transforming businesses with powerful
          digital solutions. Our track record speaks for itself—whether it’s
          delivering custom software, enhancing customer experiences, or
          maximizing profits, we consistently drive success for our clients.
          Discover how our expertise is making a real difference for SMEs across
          South Africa.
        </p>
      </div> */}
      <div class='grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center'>
        <img
          src='/woman-afric.jpg'
          alt='happy team work'
          class='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 bg-gray-100/50 text-right'
        />
        <div>
          <div class='grid lg:grid-cols-2 gap-10 gap-x-20'>
            <div class='relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none'>
              <p class='block antialiased font-sans leading-relaxed text-sky-900 text-4xl font-bold'>
                10+ Projects
              </p>
              <hr class='mt-2 mb-4 max-w-sm' />

              <p class='block antialiased font-sans text-inherit text-base font-normal max-w-xs leading-7 !text-gray-500'>
                Each project is crafted to meet the unique needs of SMEs,
                driving tangible results.
              </p>
            </div>
            <div class='relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none'>
              <p class='block antialiased font-sans leading-relaxed text-sky-900 text-4xl font-bold'>
                +100K Users
              </p>
              <hr class='mt-2 mb-4 max-w-sm' />
              <p class='block antialiased font-sans text-inherit text-base font-normal max-w-xs leading-7 !text-gray-500'>
                Our platforms ensure seamless interactions, leading to happier
                customers and better business outcomes.
              </p>
            </div>
            <div class='relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none'>
              <p class='block antialiased font-sans leading-relaxed text-sky-900 text-4xl font-bold'>
                95% Client Satisfaction
              </p>
              <hr class='mt-2 mb-4 max-w-sm' />
              <p class='block antialiased font-sans text-inherit text-base font-normal max-w-xs leading-7 !text-gray-500'>
                With a 95% satisfaction rate, our clients trust us to deliver
                quality solutions that transform their businesses.
              </p>
            </div>
            <div class='relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none'>
              <p class='block antialiased font-sans leading-relaxed text-sky-900 text-4xl font-bold'>
                6+ Years of Experience
              </p>
              <hr class='mt-2 mb-4 max-w-sm' />

              <p class='block antialiased font-sans text-inherit text-base font-normal max-w-xs leading-7 !text-gray-500'>
                With 6 years of experience, Namoota specializes in helping SMEs
                integrate digital tools for long-term success and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
