import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Brand from '../Brand';
import NavLink from '../NavLink';
import { useAuth } from '@/util/auth/context';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { events } = useRouter();

  useEffect(() => {
    // Close the navbar menu when navigate
    const handleState = () => {
      setIsOpen(false);
    };
    events.on('routeChangeStart', () => handleState());
    events.on('hashChangeStart', () => handleState());
  }, []);

  return (
    <header class='flex items-center justify-between py-4  md:py-8'>
      <a
        href='/'
        class='inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl'
        aria-label='logo'
      >
        <img className='w-54 h-10' src='/logz.png' />
      </a>

      <nav class='hidden gap-12 lg:flex'>
        <Link href='/' class='text-lg font-semibold text-sky-500'>
          Home
        </Link>
        <Link
          href='/services'
          class='text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-sky-700'
        >
          Services
        </Link>
        <Link
          href='/pricing'
          class='text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-sky-700'
        >
          Pricing
        </Link>
        <Link
          href='/#team'
          class='text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-sky-700'
        >
          Our Team
        </Link>
        <Link
          href='/contact'
          class='text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-sky-700'
        >
          Contact
        </Link>
        {/* <Link
          href='/'
          class='text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-sky-700'
        >
          Resources
        </Link> */}
        <Link
          href='/blog'
          class='text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-sky-700'
        >
          Blogs
        </Link>
      </nav>

      <Link
        href='/login'
        class='hidden rounded-lg bg-sky-800 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-sky-300 transition duration-100 hover:bg-sky-300 hover:text-sky-800 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block'
      >
        Sign Up
      </Link>
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
        } md:hidden absolute border-b-sky-700 border-b-8 shadow-lg  border-b-solid top-10 mt-4 inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
      >
        <div class='flex flex-col md:flex-row md:mx-6'>
          <Link
            class='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 md:mx-4 md:my-0'
            href='/'
          >
            Home
          </Link>
          <Link
            class='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 md:mx-4 md:my-0'
            href='/#features'
          >
            Services
          </Link>
          <Link
            class='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 md:mx-4 md:my-0'
            href='/pricing'
          >
            Pricing
          </Link>
          <Link
            class='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 md:mx-4 md:my-0'
            href='/#team'
          >
            Our Team
          </Link>
          <Link
            class='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 md:mx-4 md:my-0'
            href='/#contact'
          >
            Contact
          </Link>
<<<<<<< HEAD
          {/* <Link
            class='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
=======
          <Link
            class='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 md:mx-4 md:my-0'
>>>>>>> 8d44243ca721bdab6199c6538bf2caef1959e81e
            href='/resources'
          >
            Resources
          </Link> */}
          <Link
            class='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
            href='/blog'
          >
            Blogs
          </Link>
        </div>
      </div>

      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        class='inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-sky-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fill-rule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clip-rule='evenodd'
          />
        </svg>
        Menu
      </button>
    </header>
  );
};

export default Navbar;
