import Link from 'next/link';

const Brand = () => (
  <Link href='/'>
    <img
      src='/logo-id.png'
      className='w-720 h-16 border-4 border-solid border-sky-700 rounded-md'
      alt='Namoota logo'
    />
  </Link>
);
export default Brand;
