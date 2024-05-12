import SectionWrapper from '../../SectionWrapper';

const Testimonials = () => {
  const testimonials = [
    {
      avatar:
        '/testimonials/mthuthu.png',
      name: 'Mthuthu Ndebele',
      title: 'Singer & Songwriter',
      quote:
        'As a musician, digital branding and accessibility have become a necessity and Namoota has been nothing but the cut-edge provider making the navigation to my website friendly as it is nicely linked to my music and social media accounts making it easier to update it from time to time',
    },
    {
      avatar:
        '/testimonials/theo.png',
      name: 'Theo Gina',
      title: 'Founder of Theo Tours',
      quote:
        'My name is Xolani Theo Gina from Theo Tours. I would like to thank Zweli and his team for developing my company website. It helped me reach a lot of customers. Now my customers are able to book tours from my website.',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Shaun Adams',
      title: 'DevOps engineer',
      quote:
        "My company's software now is easy to use, saves time and money, and is loved by a lot of users. One customer saved R10k over the course of 3 years and another saves 8 hours per week! Thanks to Namoota.",
    },
  ];

  return (
    <SectionWrapper className='pb-0'>
      <div id='testimonials' className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='max-w-2xl sm:text-center md:mx-auto'>
          <h2 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
            See what others are saying about us
          </h2>
          <p className='mt-3 text-gray-600'>
            Listen to what the experts around the country are saying about us.
          </p>
        </div>
        <div className='mt-12'>
          <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {testimonials.map((item, idx) => (
              <li key={idx} className='bg-white border p-4 rounded-xl'>
                <figure>
                  <div className='flex items-center gap-x-4'>
                    <img
                      src={item.avatar}
                      className='w-14 h-14 object-cover rounded-full'
                      alt={item.name}
                    />
                    <div>
                      <span className='block text-gray-800 font-semibold'>
                        {item.name}
                      </span>
                      <span className='block text-gray-600 text-sm mt-0.5'>
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className='mt-6 text-gray-700'>{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
