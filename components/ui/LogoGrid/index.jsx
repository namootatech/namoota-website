import Image from 'next/image';
import clinicplus from '../../../public/logos/1.png';
import tecla from '../../../public/logos/2.webp';
import siavista from '../../../public/logos/3.png';
import theotours from '../../../public/logos/theotours.png';
import africancreative from '../../../public/logos/africancreativeartforms.png';
import musicloopy from '../../../public/logos/musicloopy.png';

const logos = [
  {
    src: clinicplus,
    alt: 'clinicplus',
  },
  {
    src: tecla,
    alt: 'tecla',
  },
  {
    src: siavista,
    alt: 'siavista',
  },
  {
    src: theotours,
    alt: 'theotours',
  },
  {
    src: africancreative,
    alt: 'african creative artforms',
  },
  {
    src: musicloopy,
    alt: 'Music Loopy',
  },
];

const LogoGrid = () => (
  <div className='bg-white py-6 sm:py-8 lg:py-12 mt-20'>
    <div className='mx-auto max-w-screen-2xl px-4 md:px-2'>
      <div className='mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between'>
        <h2 className='mb-2 text-center text-2xl font-bold text-sky-800 lg:mb-0 lg:text-3xl'>
          Trusted by Forward-Thinking Businesses
        </h2>

        <p className='max-w-md text-center text-sm text-sky-600 lg:text-right'>
          From digital transformation to bespoke software solutions, these
          businesses trust us to drive their success in the digital world.
        </p>
      </div>

      <div className='grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-10'>
        {logos.map((item, idx) => (
          <div
            key={idx}
            className='m-8 relative shadow-md flex h-16 items-center justify-center rounded-2xl bg-sky-50 p-4 text-gray-400 sm:h-32 border-r-8 border-r-sky-700 border-r-solid'
          >
            {/* Image component */}
            <Image
              className='h-6 w-auto sm:h-16'
              src={item.src}
              alt={item.alt}
            />

            {/* sky overlay with hover effect */}
            <div className='absolute inset-0 bg-sky-600 opacity-50 hover:opacity-0 transition-opacity duration-300 rounded-xl'></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LogoGrid;
