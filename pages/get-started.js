import Head from 'next/head';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Checkbox from '../components/ui/Checkbox';

export default function GetStarted() {
  const servicesItems = [
    'Mobile development',
    'UI/UX Design',
    'web development',
    'SEO',
  ];

  return (
    <>
      <Head>
        <title>Contact us - Namoota</title>
      </Head>
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Talk to a Namoota expert
              </h1>
              <p className='mt-3 mb-3'>
                We are here to help. Email us on{' '}
                <a
                  href='mailto:support@Namoota.co.za'
                  target='_blank'
                  rel='noreferrer'
                  className='text-gray-600 hover:text-gray-400 font-medium duration-150'
                >
                  support@Namoota.co.za
                </a> or{' '} Message on{' '}
                <a className='text-gray-600 hover:text-gray-400 font-medium duration-150' href="https://wa.me/27734668809" target="_blank" rel="noreferrer">WhatsApp</a>
                {' '}or Call <a className='text-gray-600 hover:text-gray-400 font-medium duration-150' href="tel:+27789087337">+27(0)78 908 7337</a>
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27492351.60613264!2d5.847499693889836!3d-32.7391919653597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2sza!4v1714863786256!5m2!1sen!2sza"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                fluid
              ></iframe>
            </div>
            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
              <form
                className='space-y-5 font-medium'
                name='contact'
                method='post'
                data-netlify='true'
                action='/success'
              >
                <input type='hidden' name='form-name' value='contact' />

                <div>
                  <label>Full name</label>
                  <Input
                    aria-label='Full name'
                    type='text'
                    required
                    name='name'
                    className='mt-2 focus:border-gray-600'
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    aria-label='Email'
                    type='email'
                    required
                    name='email'
                    className='mt-2 focus:border-gray-600'
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    aria-label='Message'
                    required
                    name='message'
                    className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg'
                  ></textarea>
                </div>
                <div>
                  <label>Service</label>
                  <ul className='mt-3 flex flex-wrap gap-x-8 gap-y-3 font-normal max-w-md sm:gap-x-16'>
                    {servicesItems.map((item, idx) => (
                      <li key={idx} className='flex gap-x-2 items-center'>
                        <Checkbox id={`service-${idx}`} name={item} />
                        <label htmlFor={`service-${idx}`} className='text-sm'>
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='pt-1'>
                  <Button
                    type='submit'
                    className='w-full text-white bg-gray-600 hover:bg-gray-500 active:bg-gray-600 ring-offset-2 ring-gray-600 focus:ring'
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
