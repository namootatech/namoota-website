import React from 'react'
import Hero from '../components/ui/Hero'
import LogoGrid from '../components/ui/LogoGrid'
import FooterCTA from '../components/ui/FooterCTA'
import Head from 'next/head'
import GradientWrapper from '../components/GradientWrapper'
// import aya from '../public/team/aya.jpeg'
// import zweli from '../public/team/zweliMthethwa.jpeg'
// import kaatnanret from '../public/team/dyelpoKaatNanretSenshak.jpeg'
// import siya from '../public/team/siyamthandaNomgqokwana.jpeg'
// import matthew from '../public/team/matthewFourie.jpeg'

export default function team() {
  const data = [
    {
      id: 1,
      name: 'Zweli Mthethwa',
      title: 'Co-founder/ Software Engineer',
      imageUrl: "/team/zweli-removebg.png",
      description: 'Zweli designs high-performance solutions and mentors the team, driving the technical vision of our projects.',
      color: '#219ebc'
    },
    {
      id: 2,
      name: 'Ayabonga Qwabi',
      title: 'Co-founder/ Software Engineer',
      imageUrl: "/team/aya-removebg.png",
      description: 'Aya develops efficient and scalable software solutions, contributing to the innovation and functionality of our products.',
      color: '#219ebc'
    },
    {
      id: 3,
      name: 'Siyamthanda Nomgqokwana',
      title: 'IT Infrastructure / Cloud Architect',
      imageUrl: "team/siya-removebg.png",
      description: 'Siya architects and implements robust cloud solutions, shaping the technological foundations of our projects.',
      color: '#219ebc'
    },
    {
      id: 4,
      name: 'Matthew Fourie',
      title: 'Software Engineer',
      imageUrl: "team/matt-removebg.png",
      description: 'Matthew supports the development team by writing clean and maintainable code, assisting in the creation of innovative software solutions that drive project success.',
      color: '#219ebc'
    },
    {
      id: 5,
      name: 'Dyelpo KaatNanret Senshak',
      title: 'Social Media Specialist',
      imageUrl: "team/kaatnanret-removebg.png",
      description: 'KaatNanret manages social media pages and creates content to reach target audiences and drive conversions.',
      color: 'black'
    },
  ]

  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <section>
        <div className='border-t custom-screen py-16 text-gray-600'> {/* Adjusted padding from py-28 to py-16 */}
          <div className='space-y-2 max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl'>
              Meet Our Team
            </h1>
            <p className='max-w-xl mx-auto'>
              We empower businesses by crafting bespoke software solutions that
              transcend expectations. Namoota crafts innovative applications that
              integrate perfectly, driving exceptional customer experiences.
            </p>
          </div>
        </div>
      </section>

      <GradientWrapper>
        <div className="flex flex-wrap justify-center gap-6 p-10">
          {data.map((member) => {
            return (
              <div key={member.id} className='w-full md:w-[80%] xl:w-1/3 p-8 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-out'>
                <div className='flex flex-col items-center justify-center'>
                  <img src={member.imageUrl} alt={member.name} width={120} height={120} 
                      className='w-32 h-32 rounded-full object-cover border-4 border-white mb-5 shadow-3xl'
                  />
                  <div className='flex flex-col items-center justify-center text-center'>
                    <h2 className='text-xl text-gray-800 font-extrabold mx-auto sm:text-2xl'>{member.name}</h2>
                    <p className='text-lg font-semibold text-gray-700 sm:text-base'>{member.title}</p>
                  </div>
                  {/* divider line */}
                  <hr className="w-[70%] my-2 border-t border-gray-300" />
                  <p className='max-w-xl mx-auto text-gray-600 text-center'>{member.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </GradientWrapper>
      <FooterCTA />
    </>
  )
}