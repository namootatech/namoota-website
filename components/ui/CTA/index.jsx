import SectionWrapper from '../../SectionWrapper';
import NavLink from '../NavLink';
import ctaImage from '../../../public/cta-image.jpg';
import Image from 'next/image';

const CTA = () => {
  return (
    <section class='relative pt-32 lg:pt-36 md:-mx-24 '>
      <div class='mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12'>
        <div class='absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block'>
          <span class='absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-sky-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden'></span>
          <span class='absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-sky-500 blur-xl opacity-80'></span>
        </div>
        <span class='w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-sky-500 to-sky-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90'></span>
        <div
          class='relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
        lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2'
        >
          <h1
            class='text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
                    font-bold text-gray-900 dark:text-black'
          >
            Create Successful{' '}
            <span class='text-transparent bg-clip-text bg-gradient-to-br from-sky-600 from-20% via-sky-500 via-30% to-sky-600'>
              Business Models
            </span>
             with Our IT Solutions
          </h1>
          <p class='mt-8 text-gray-700 dark:text-gray-700'>
            Namoota, a software development company, helps to digitize
            businesses by focusing on client’s business challenges and needs. We
            value close transparent cooperation and encourage our clients to
            participate actively in the project development life cycle.
          </p>
          <div class='mt-10  w-full flex max-w-md mx-auto lg:mx-0'>
            <div class='flex sm:flex-row flex-col gap-5 w-full'>
              <form
                action='#'
                class='py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 dark:text-gray-400 shadow-lg shadow-gray-200/20 dark:shadow-transparent
                        border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 rounded-full ease-linear focus-within:bg-white dark:focus-within:bg-gray-950  focus-within:border-sky-500'
              >
                <span class='min-w-max pr-2 border-r border-gray-200 dark:border-gray-800'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='w-5 h-5'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z'
                    />
                  </svg>
                </span>
                <input
                  type='email'
                  name=''
                  id=''
                  placeholder='johndoe@gmail.com'
                  class='w-full py-3 outline-none bg-transparent'
                />
                <button
                  class='flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                            after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-sky-500 border-transparent hover:border-[#172554]'
                >
                  <span class='hidden sm:flex relative z-[5]'>Call me</span>
                  <span class='flex sm:hidden relative z-[5]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      class='w-5 h-5'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class='flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto md:max-w-3xl w-full'>
          <Image
            src={ctaImage}
            alt='Hero image'
            width='2350'
            height='2359'
            class='lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96'
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
