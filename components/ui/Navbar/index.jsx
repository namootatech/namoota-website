import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Brand from '../Brand';
import NavLink from '../NavLink';

const Navbar = () => {
  const [state, setState] = useState(false);
  const { events } = useRouter();

  const navigation = [
    { title: 'Features', path: '/#features' },
    { title: 'Our toolkit', path: '/#toolkit' },
    { title: 'Testimonials', path: '/#testimonials' },
    { title: 'Team', path: '/team' },
  ];

  useEffect(() => {
    // Close the navbar menu when navigate
    const handleState = () => {
      document.body.classList.remove('overflow-hidden');
      setState(false);
    };
    events.on('routeChangeStart', () => handleState());
    events.on('hashChangeStart', () => handleState());
  }, []);

  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle('overflow-hidden');
  };

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
        <a href='#' class='text-lg font-semibold text-sky-500'>
          Home
        </a>
        <a
          href='#'
          class='text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-sky-700'
        >
          Features
        </a>
        <a
          href='#'
          class='text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-sky-700'
        >
          Pricing
        </a>
        <a
          href='#'
          class='text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-sky-700'
        >
          About
        </a>
      </nav>

      <a
        href='#'
        class='hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-sky-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block'
      >
        Contact Sales
      </a>

      <button
        type='button'
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
