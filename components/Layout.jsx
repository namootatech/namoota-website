import React from 'react';
import Head from 'next/head';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';
import { homepageSeoConfig, seoConfigByPathname } from '../config/seo';

const Layout = ({ children }) => {
  const [pathname, setPathname] = React.useState('');
  const [seoConfig, setSeoConfig] = React.useState(homepageSeoConfig);

  React.useEffect(() => {
    setPathname(window.location.pathname);
    setSeoConfig(seoConfigByPathname[pathname] || homepageSeoConfig);
  }, []);

  return (
    <>
      <Head>
        <title>
          {seoConfig.title} | Namoota - Web Design - Build an App - Get a quote
        </title>
        <meta name='description' content={seoConfig.description} />
        <meta name='keywords' content={seoConfig.keywords} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Namoota' />
        <meta name='format-detection' content='telephone=yes' />
        <meta name='theme-color' content='#0ca5e9' />
        <meta name='color-scheme' content='light' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        <meta name='bingbot' content='index, follow' />
        <meta name='rating' content='general' />
        <meta name='distribution' content='global' />

        {/* Open Graph (OG) Meta Tags */}
        <meta property='og:title' content={seoConfig.ogTitle} />
        <meta property='og:description' content={seoConfig.ogDescription} />
        <meta property='og:image' content={seoConfig.ogImage} />
        <meta
          property='og:url'
          content={'https://www.namoota.co.za/' + pathname}
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Namoota' />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={seoConfig.twitterTitle} />
        <meta
          name='twitter:description'
          content={seoConfig.twitterDescription}
        />
        <meta name='twitter:image' content={seoConfig.twitterImage} />
        <meta name='twitter:site' content='@namootatech' />

        {/* Favicons */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicon/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#0ca5e9' />
        <meta
          name='msapplication-TileImage'
          content='/favicon/ms-icon-144x144.png'
        />

        {/* Mobile-Specific Settings */}
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta name='apple-mobile-web-app-title' content='Namoota' />
        <meta name='application-name' content='Namoota' />
        <meta name='mobile-web-app-capable' content='yes' />

        {/* External Resources */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          integrity='sha512-qOA1GuvtgCrVwIft5mG95n2ZMOj35FRARn/V/7Ig1UsdFJldqj36a+um5E+d50UUa8OHvN2s46+sMWaZ69uqAw=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        <script
          async
          src='https://maps.googleapis.com/maps/api/js?key=AIzaSyB1HBcPkYo58RBdFL-y3qYC1VPsqOg-RSo&libraries=places'
        ></script>
        <script
          async
          src='https://api.cronbot.ai/v1/widgets/app/app_nm1irfr7t8nr'
        ></script>

        {/* Canonical URL */}
        <link rel='canonical' href='https://www.namoota.co.za' />
      </Head>

      <main>
        <div class='bg-white pb-6 sm:pb-8 lg:pb-12'>
          <div class='mx-auto max-w-screen-2xl px-4 md:px-20'>
            <Navbar />
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
