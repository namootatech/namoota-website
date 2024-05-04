import Image from 'next/image';
import clinicplus from '../../../public/logos/1.png';
import tecla from '../../../public/logos/2.webp';
import siavista from '../../../public/logos/3.png';
import adobe from '../../../public/logos/adobe.svg';
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
  <div>
    <div className='custom-screen'>
      <h2 className='font-semibold text-sm text-gray-600 text-center'>
        Exceptional experiences crafted for:
      </h2>
      <div className='mt-6'>
        <ul className='flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16'>
          {logos.map((item, idx) => (
            <li key={idx}>
              <Image
                src={item.src}
                alt={item.alt}
                width={100}
                height={100}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default LogoGrid;
