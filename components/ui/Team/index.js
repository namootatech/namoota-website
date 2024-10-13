const data = [
  {
    id: 1,
    name: 'Zweli Mthethwa',
    title: 'Co-founder/ Software Engineer',
    imageUrl: '/team/zweli-removebg.png',
    description:
      'Zweli designs high-performance solutions and mentors the team, driving the technical vision of our projects.',
    color: '#219ebc',
  },
  {
    id: 2,
    name: 'Ayabonga Qwabi',
    title: 'Co-founder/ Software Engineer',
    imageUrl: '/team/aya-removebg.png',
    description:
      'Aya develops efficient and scalable software solutions, contributing to the innovation and functionality of our products.',
    color: '#219ebc',
  },
  {
    id: 3,
    name: 'Siyamthanda Nomgqokwana',
    title: 'IT Infrastructure / Cloud Architect',
    imageUrl: 'team/siya-removebg.png',
    description:
      'Siya architects and implements robust cloud solutions, shaping the technological foundations of our projects.',
    color: '#219ebc',
  },
  {
    id: 4,
    name: 'Matthew Fourie',
    title: 'Software Engineer',
    imageUrl: 'team/matt-removebg.png',
    description:
      'Matthew supports the development team by writing clean and maintainable code, assisting in the creation of innovative software solutions that drive project success.',
    color: '#219ebc',
  },
  {
    id: 5,
    name: 'Dyelpo KaatNanret Senshak',
    title: 'Social Media Specialist',
    imageUrl: 'team/kaatnanret-removebg.png',
    description:
      'KaatNanret manages social media pages and creates content to reach target audiences and drive conversions.',
    color: 'black',
  },
];

const Team = () => (
  <section class='bg-white dark:bg-gray-900' id='team'>
    <div class='container px-6 py-10 mx-auto'>
      <h1 class='mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl'>
        Meet <span class='text-sky-500'>Our Team</span>
      </h1>

      <p class='max-w-4xl my-6 text-sky-800 dark:text-gray-300 text-2xl text-left'>
        We empower businesses by crafting bespoke software solutions that
        transcend expectations. Namoota crafts innovative applications that
        integrate perfectly, driving exceptional customer experiences.
      </p>

      <div class='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2'>
        {data.map((p) => (
          <div class='px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-sky-600 dark:border-gray-700 dark:hover:border-transparent'>
            <div class='flex flex-col sm:-mx-4 sm:flex-row'>
              <img
                class='flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300'
                src={p.imageUrl}
                alt=''
              />

              <div class='mt-4 sm:mx-4 sm:mt-0'>
                <h1 class='text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white'>
                  {p.name}
                </h1>

                <p class='mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300'>
                  {p.title}
                </p>
              </div>
            </div>

            <p class='mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300'>
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
