import Link from 'next/link';

export default function Contact() {
  return (
    <div className='container mx-auto min-h-screen'>
      <main>
        <div className='m-8'>
          <p className='text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl'>
            {' '}
            Form successfully submitted!{' '}
          </p>
          <p className='description text-2xl my-4'>
            Thanks for your inquiry! We've received your message and will be in
            touch soon
          </p>
          <Link href='/'>
            <button className='rounded rounded-lg bg-gray-900 p-4 my-4 text-white'>
              Go back home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
