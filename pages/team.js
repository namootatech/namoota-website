import React from 'react'
import Hero from '../components/ui/Hero'
import LogoGrid from '../components/ui/LogoGrid'
import FooterCTA from '../components/ui/FooterCTA'
import Head from 'next/head'
import GradientWrapper from '../components/GradientWrapper'
import aya from '/team/aya.jpeg'
// import zweli from '../../public/team/zweliMthethwa.jpeg'
// import kaatnanret from '../../public/team/dyelpoKaatNanretSenshak.jpeg'
// import siya from '../../public/team/siyamthandaNomgqokwana.jpeg'
// import matthew from '../../public/team/matthewFourie.jpeg'

export default function team() {
  const data = [
    {
      id: 1,
      name: 'Zweli Mthethwa',
      title: 'Co-founder/ Software Engineer',
      imageUrl: zweli,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nunc, nec aliquam nunc nisl sit amet nunc.'
    },
    {
      id: 2,
      name: 'Ayabonga Qwabi',
      title: 'Co-founder/ Software Engineer',
      imageUrl: aya,
      description: 'Aya develops efficient and scalable software solutions, contributing to the innovation and functionality of our products.'
    },
    {
      id: 3,
      name: 'Siyamthanda Nomgqokwana',
      title: 'IT Infrastructure / Cloud Architect',
      imageUrl: siya,
      description: 'Siya architects and implements robust cloud solutions, shaping the technological foundation of our projects.'
    },
    {
      id: 4,
      name: 'Matthew Fourie',
      title: 'Software Engineer',
      imageUrl: matthew,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nunc, nec aliquam nunc nisl sit amet nunc.'
    },
    {
      id: 5,
      name: 'Dyelpo KaatNanret Senshak',
      title: 'Social Media Specialist',
      imageUrl: kaatnanret,
      description: 'KaatNanret manages social media pages and creates content to reach target audiences and drive conversions.'
    },
  ]

  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <LogoGrid />
      <GradientWrapper>
        {data.map((member) => {
          return (
            <div key={member.id} className='flex flex-col items-center justify-center'>
              <div className='flex flex-col items-center justify-center'>
                <img src={`/public/${member.imageUrl}`} alt={member.name} className='w-48 h-48 rounded-full object-cover' />
                <h2 className='text-2xl font-bold mt-4'>{member.name}</h2>
                <p className='text-gray-600 text-lg mt-2'>{member.title}</p>
                <p className='text-gray-600 text-lg mt-2'>{member.description}</p>
              </div>
            </div>
          )
        })}
      </GradientWrapper>
      <FooterCTA />
    </>
  )
}
