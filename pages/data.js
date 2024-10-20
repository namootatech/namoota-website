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
import { FaCircleCheck } from 'react-icons/fa6';
import { pricing } from '../config';
import Link from 'next/link';

import { dataPackages, networkPackages } from '../config/data';

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
    </>
  );
}
