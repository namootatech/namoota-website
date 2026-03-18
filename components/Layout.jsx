import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';
import { homepageSeoConfig, seoConfigByPathname } from '../config/seo';

const SITE_URL = 'https://namootatech.com';

function normalizePath(path) {
  if (!path) return '/';
  const withoutQuery = path.split('?')[0];
  const trimmed = withoutQuery.replace(/\/+$/, '');
  return trimmed.length ? trimmed : '/';
}

function titleCaseFromPath(path) {
  const cleaned = decodeURIComponent(path).replace(/^\//, '');
  const words = cleaned
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .split(' ')
    .filter(Boolean)
    .slice(0, 6);
  return words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function buildFallbackSeo(configPathname) {
  const pageName = titleCaseFromPath(configPathname) || 'Namoota';
  return {
    ...homepageSeoConfig,
    title: `${pageName} - Namoota`,
    ogTitle: `${pageName} - Namoota`,
    twitterTitle: `${pageName} - Namoota`,
  };
}

export default function Layout({ children }) {
  const router = useRouter();
  const rawPath = router?.asPath || router?.pathname || '/';
  const pathname = normalizePath(rawPath);
  const normalizedNoSlash = pathname.replace(/^\//, '');

  const seoConfig =
    seoConfigByPathname[pathname] ||
    seoConfigByPathname[normalizedNoSlash] ||
    seoConfigByPathname[`/${normalizedNoSlash}`] ||
    buildFallbackSeo(pathname);

  const canonicalUrl =
    pathname === '/'
      ? SITE_URL
      : `${SITE_URL}${pathname.startsWith('/') ? '' : '/'}${pathname}`;

  return (
    <>
      <Head>
        <title key='title'>{seoConfig.title || homepageSeoConfig.title}</title>
        <meta
          key='description'
          name='description'
          content={seoConfig.description || homepageSeoConfig.description}
        />
        <meta
          key='keywords'
          name='keywords'
          content={seoConfig.keywords || homepageSeoConfig.keywords}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Namoota' />
        <meta name='format-detection' content='telephone=yes' />
        <meta name='theme-color' content='#0ca5e9' />
        <meta name='color-scheme' content='light' />
        <meta key='robots' name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        <meta name='bingbot' content='index, follow' />
        <meta name='rating' content='general' />
        <meta name='distribution' content='global' />

        {/* Open Graph (OG) Meta Tags */}
        <meta key='og:title' property='og:title' content={seoConfig.ogTitle} />
        <meta
          key='og:description'
          property='og:description'
          content={seoConfig.ogDescription}
        />
        <meta key='og:image' property='og:image' content={seoConfig.ogImage} />
        <meta key='og:url' property='og:url' content={canonicalUrl} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Namoota' />

        {/* Twitter Meta Tags */}
        <meta key='twitter:card' name='twitter:card' content='summary_large_image' />
        <meta
          key='twitter:title'
          name='twitter:title'
          content={seoConfig.twitterTitle}
        />
        <meta
          key='twitter:description'
          name='twitter:description'
          content={seoConfig.twitterDescription}
        />
        <meta
          key='twitter:image'
          name='twitter:image'
          content={seoConfig.twitterImage}
        />
        <meta name='twitter:site' content='@namootatech' />

        {/* Favicons */}
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#0ca5e9' />
        <meta name='msapplication-TileImage' content='/favicon/ms-icon-144x144.png' />

        {/* Mobile-Specific Settings */}
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        <meta name='apple-mobile-web-app-title' content='Namoota' />
        <meta name='application-name' content='Namoota' />
        <meta name='mobile-web-app-capable' content='yes' />

        {/* External Resources */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
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
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&libraries=places`}
        ></script>
        <script async src='https://api.cronbot.ai/v1/widgets/app/app_nm1irfr7t8nr'></script>

        {/* Canonical URL */}
        <link key='canonical' rel='canonical' href={canonicalUrl} />
      </Head>

      <main className='dark:bg-slate-950 transition-colors duration-500'>
        <div className='bg-white dark:bg-slate-950 pb-6 sm:pb-8 lg:pb-12 transition-colors duration-500'>
          <div className='mx-auto max-w-screen-2xl px-4 md:px-20'>
            <Navbar />
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
