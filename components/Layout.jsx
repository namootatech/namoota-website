import Head from 'next/head';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Namoota</title>
        <meta
          name='description'
          content='Namoota making it simple for you to build and grow your SaaS applications, or any business idea'
        />
        <meta name="keywords" content="www.namoota.co.za,software development company, best software development company, 
        desktop applications, website development, mobile app development,reservation 
        systems developers, Tour booking systems, Search Engine optimasation, South African Software Companies,
         kwaZulu Natal Software companies, South African IT companies, South African Systems Developers, Best IT companies, Eastern Cape Best Software Development companies" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-qOA1GuvtgCrVwIft5mG95n2ZMOj35FRARn/V/7Ig1UsdFJldqj36a+um5E+d50UUa8OHvN2s46+sMWaZ69uqAw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
