import Head from 'next/head';
import GradientWrapper from '../components/GradientWrapper';
import CTA from '../components/ui/CTA';
import Features from '../components/ui/Features';
import FooterCTA from '../components/ui/FooterCTA';
import Hero from '../components/ui/Hero';
import LogoGrid from '../components/ui/LogoGrid';
import Testimonials from '../components/ui/Testimonials';
import ToolKit from '../components/ui/ToolKit';
import Stats from '../components/ui/Stats';
import Team from '../components/ui/Team';

const CTAContent = ({ hint, title, link1, link2 }) => (
  <div class='bg-white py-6 sm:py-8 lg:py-12'>
    <div class='mx-auto max-w-screen-2xl px-4 md:px-8'>
      <div class='mx-auto flex max-w-3xl flex-col items-center text-center'>
        <p class='mb-4 font-semibold text-sky-500 md:mb-6 md:text-lg xl:text-xl'>
          {hint}
        </p>

        <h1 class='mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl'>
          {title}
        </h1>

        <div class='flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center'>
          <a
            href={link1.link}
            class='inline-block rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-sky-300 transition duration-100 hover:bg-sky-500 focus-visible:ring active:bg-sky-700 md:text-base'
          >
            {link1.text}
          </a>
          <a
            href={link2.link}
            class='inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-sky-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'
          >
            {link2.text}
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <Stats />
      <Features />

      <Team />
      <CTAContent
        title='Ready to take your business digital? Let us build the perfect app solution for your needs.'
        hint='Boost Your Business with Custom Apps'
        link1={{ text: 'Get Started Today' }}
        link2={{ text: 'Learn More' }}
      />
      <CTA />
      <LogoGrid />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
    </>
  );
}
