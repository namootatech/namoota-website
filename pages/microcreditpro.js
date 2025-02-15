import Head from 'next/head';
import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../util/firebase';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'beta_testers'), formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center'>
      <Head>
        <title>MicroCredit Pro Beta Testing</title>
        <meta
          name='description'
          content='Join the beta testing program for MicroCredit Pro, the ultimate app for small business loaners.'
        />
      </Head>

      <header className='bg-cyan-500 w-full py-6 text-center text-white'>
        <h1 className='text-3xl font-bold'>MicroCredit Pro</h1>
        <p className='text-lg'>Empowering Small Business Loaners</p>
      </header>

      <main className='flex-grow w-full px-4 py-8 md:px-16'>
        <section className='bg-white shadow-lg rounded-lg p-6 md:p-12 max-w-3xl mx-auto text-center'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>
            Join Our Beta Testing Program
          </h2>
          <p className='text-gray-600 mb-6'>
            Be the first to experience MicroCredit Pro and help shape the future
            of small loan management.
          </p>

          <section className='text-left mb-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              What is MicroCredit Pro?
            </h3>
            <p className='text-gray-600'>
              MicroCredit Pro is a cutting-edge platform designed specifically
              for small informal loan business owners. Our app provides you with
              tools to better manage your loans, assess borrower risk with an
              in-app credit scoring system, automate payment collections, and
              gain valuable insights into your business performance. With
              features like payment notifications, digital receipts, and fraud
              detection, MicroCredit Pro empowers you to grow your loan business
              securely and efficiently.
            </p>
          </section>

          {!submitted ? (
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-cyan-500 focus:border-cyan-500'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-cyan-500 focus:border-cyan-500'
                />
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700'
                >
                  Cellphone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-cyan-500 focus:border-cyan-500'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
              >
                Join Beta Testing
              </button>
            </form>
          ) : (
            <p className='text-green-600 font-medium'>
              Thank you for signing up! We'll be in touch soon.
            </p>
          )}
        </section>
      </main>

      <footer className='w-full py-4 bg-gray-100 text-center'>
        <p className='text-gray-500 text-sm'>
          &copy; 2024 MicroCredit Pro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
