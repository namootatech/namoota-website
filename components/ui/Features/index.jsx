import SectionWrapper from '../../SectionWrapper';

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
          />
        </svg>
      ),
      title: 'Effortless Experience',
      desc: 'Our software seamlessly integrates across devices, ensuring a smooth and delightful customer journey - from browsing to booking and beyond.',
    },
    {
      icon: (
        <svg
          className='w-6 h-6'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9 4.476V3H8.865C8.3955 3 7.941 3.093 7.5015 3.2775C7.06407 3.46087 6.66854 3.73136 6.339 4.0725C6.01829 4.39483 5.76667 4.77915 5.5995 5.202V5.2035C5.45069 5.60502 5.35097 6.02305 5.3025 6.4485V6.4515C5.25984 6.8816 5.24781 7.31419 5.2665 7.746C5.2845 8.181 5.2935 8.616 5.2935 9.0495C5.2935 9.354 5.2335 9.639 5.118 9.9075V9.909C4.89786 10.433 4.48805 10.8546 3.9705 11.0895C3.70659 11.2048 3.42148 11.2635 3.1335 11.262H3V12.738H3.135C3.4275 12.738 3.705 12.798 3.969 12.9195L3.9705 12.921C4.2375 13.038 4.464 13.197 4.653 13.398L4.656 13.401C4.851 13.596 5.0055 13.8285 5.1165 14.0985L5.118 14.1015C5.235 14.3715 5.2935 14.6535 5.2935 14.9505C5.2935 15.3855 5.2845 15.8205 5.2665 16.254C5.2485 16.698 5.2605 17.1315 5.3025 17.559V17.5605C5.352 17.985 5.451 18.3975 5.598 18.7965V18.798C5.757 19.2075 6.0045 19.584 6.339 19.9275C6.6735 20.2725 7.062 20.538 7.5015 20.7225C7.941 20.907 8.3955 21 8.8665 21H9V19.524H8.865C8.565 19.524 8.2845 19.467 8.0205 19.3515C7.76585 19.2325 7.53389 19.0701 7.335 18.8715C7.14192 18.666 6.98519 18.4291 6.8715 18.171C6.7605 17.901 6.7065 17.616 6.7065 17.3115C6.7065 16.9695 6.711 16.632 6.723 16.3035C6.735 15.9615 6.735 15.6285 6.723 15.306C6.71771 14.9845 6.69015 14.6637 6.6405 14.346C6.59278 14.0326 6.50819 13.726 6.3885 13.4325C6.15504 12.8646 5.77322 12.3698 5.283 12C5.77377 11.6304 6.15612 11.1356 6.39 10.5675C6.51 10.2795 6.5925 9.978 6.642 9.6645C6.6915 9.3495 6.7185 9.03 6.7245 8.7045C6.7365 8.3745 6.7365 8.0415 6.7245 7.7055C6.7125 7.3695 6.7065 7.0305 6.7065 6.6885C6.7039 6.25858 6.82703 5.83727 7.06076 5.47643C7.29448 5.11558 7.6286 4.83093 8.022 4.6575C8.28687 4.53605 8.57512 4.4741 8.8665 4.476H9ZM15 19.524V21H15.135C15.6045 21 16.059 20.907 16.4985 20.7225C16.938 20.538 17.3265 20.2725 17.661 19.9275C17.9955 19.5825 18.243 19.2075 18.4005 18.798V18.7965C18.5505 18.3975 18.648 17.982 18.6975 17.5515V17.5485C18.7395 17.1285 18.7515 16.698 18.7335 16.254C18.7155 15.819 18.7065 15.384 18.7065 14.9505C18.7065 14.646 18.7665 14.361 18.882 14.0925V14.091C19.1019 13.5668 19.5118 13.1452 20.0295 12.9105C20.2935 12.7954 20.5785 12.7367 20.8665 12.738H21V11.262H20.865C20.571 11.262 20.2935 11.202 20.0295 11.0805L20.028 11.079C19.7705 10.968 19.5382 10.8057 19.3455 10.602L19.3425 10.599C19.1443 10.3993 18.9878 10.1622 18.882 9.9015V9.8985C18.7648 9.63083 18.7045 9.34171 18.705 9.0495C18.705 8.6145 18.714 8.1795 18.732 7.746C18.7507 7.3107 18.7387 6.87461 18.696 6.441V6.4395C18.6474 6.01715 18.5482 5.60217 18.4005 5.2035V5.202C18.2329 4.77902 17.9807 4.39469 17.6595 4.0725C17.3299 3.7314 16.9344 3.46091 16.497 3.2775C16.0653 3.09415 15.601 2.99977 15.132 3H15V4.476H15.135C15.435 4.476 15.7155 4.533 15.978 4.6485C16.239 4.7715 16.467 4.9305 16.6635 5.1285C16.854 5.3295 17.0085 5.5635 17.127 5.829C17.238 6.099 17.292 6.384 17.292 6.6885C17.292 7.0305 17.2875 7.3665 17.2755 7.6965C17.2635 8.0385 17.2635 8.3715 17.2755 8.694C17.2815 9.027 17.3085 9.3465 17.358 9.654C17.4075 9.975 17.4915 10.278 17.61 10.5675C17.8439 11.1356 18.2263 11.6303 18.717 12C18.2263 12.3697 17.8439 12.8644 17.61 13.4325C17.4912 13.7227 17.4066 14.0257 17.358 14.3355C17.3085 14.6505 17.2815 14.97 17.2755 15.2955C17.2634 15.6284 17.2634 15.9616 17.2755 16.2945C17.2875 16.6305 17.2935 16.9695 17.2935 17.3115C17.2959 17.7414 17.1727 18.1626 16.939 18.5234C16.7053 18.8842 16.3713 19.1689 15.978 19.3425C15.7131 19.4639 15.4249 19.5259 15.1335 19.524H15Z'
            fill='currentColor'
          />
        </svg>
      ),
      title: 'User-centric Design',
      desc: 'User-centric design is at our core. We craft software that empowers users and drives powerful results for your business.',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
          />
        </svg>
      ),
      title: 'Agile Development',
      desc: "Don't wait for success. Our agile approach gets your software up and running quickly, so you can see the value sooner.",
    },
  ];

  return (
    <section class='py-10 -mx-24 '>
      <div class=' mx-auto  flex flex-col gap-14  '>
        {/* <div class='flex flex-col w-full text-elft'>
          <h2 className='text-5xl text-sky-800 font-black py-8'>
            Our Core Solutions
          </h2>
          <p class='block antialiased font-sans leading-relaxed text-sky-500 mb-4 !text-2xl font-bold lg:!text-3xl'>
            Innovative Tools for Your Business Growth
          </p>
        </div> */}
        <div class='flex gap-12 lg:items-center bg-sky-500 p-8 px-24 rounded-md'>
          <div class='flex flex-1 flex-col gap-10'>
            <h2 className='text-5xl text-sky-100 font-black py-8'>
              Our Core Solutions
            </h2>
            <div class='gap-8 lg:gap-10 grid sm:grid-cols-2'>
              <div class='space-y-4'>
                <div class='p-2 w-full rounded-md flex bg-sky-50 dark:bg-sky-900 text-sky-600 dark:text-sky-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='w-6 h-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
                    />
                  </svg>
                  <h2 class='font-bold text-sky-600 dark:text-white text-sm'>
                    Custom Web & Mobile Apps
                  </h2>
                </div>

                <p class='text-gray-100 dark:text-gray-300'>
                  We build dynamic web applications and custom mobile apps for
                  Android and iOS to meet your business needs and enhance user
                  experience.
                </p>
              </div>

              <div class='space-y-4'>
                <div class='w-full p-2 rounded-md bg-sky-50 dark:bg-sky-900 text-sky-600 dark:text-sky-400 flex '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='w-6 h-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
                    />
                  </svg>
                  <h2 class='font-bold text-sky-600 dark:text-white text-sm'>
                    Digital Marketing
                  </h2>
                </div>

                <p class='text-gray-100 dark:text-gray-300'>
                  Grow your online presence with targeted digital marketing and
                  expert social media management, designed to engage customers
                  and boost your brand.
                </p>
              </div>

              <div class='space-y-4'>
                <div class='p-2 rounded-md bg-sky-50 dark:bg-sky-900 text-sky-600 dark:text-sky-400 flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='w-6 h-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
                    />
                  </svg>
                  <h2 class='font-bold text-sky-600 dark:text-white text-sm'>
                    Stores & Bookings Systems
                  </h2>
                </div>

                <p class='text-gray-100 dark:text-gray-300'>
                  We create secure e-commerce platforms and streamlined bookings
                  management systems that drive sales and simplify appointment
                  handling.
                </p>
              </div>

              <div class='space-y-4'>
                <span class='p-2 rounded-md bg-sky-50 dark:bg-sky-900 text-sky-600 dark:text-sky-400 flex w-max'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='w-6 h-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
                    />
                  </svg>
                  <h2 class='font-bold text-sky-600 dark:text-white text-sm'>
                    Quotation & Invoicing Solutions
                  </h2>
                </span>

                <p class='text-gray-100 dark:text-gray-300'>
                  Automate your business processes with custom systems for
                  efficient quotation creation, invoicing, and financial
                  tracking.
                </p>
              </div>
            </div>
            <a
              href='#'
              class='bg-white text-sky-600 px-5 h-12 rounded-md w-max flex items-center gap-x-3'
            >
              Sign up now
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                class='w-5 h-5'
              >
                <path
                  fill-rule='evenodd'
                  d='M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
          </div>
          <img
            src='/Book.png'
            width='500'
            alt='img cover about'
            class=' hidden md:flex md:w-1/2 h-full object-coverobject-center rounded-md'
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
