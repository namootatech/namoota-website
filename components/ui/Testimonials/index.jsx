import SectionWrapper from '../../SectionWrapper';

const Testimonials = () => {
  const testimonials = [
    {
      avatar: '/testimonials/mthuthu.png',
      name: 'Mthuthu Ndebele',
      title: 'Singer & Songwriter',
      heading: 'Great digital branding and accessibility!',
      quote:
        'As a musician, digital branding and accessibility have become a necessity and Namoota has been nothing but the cut-edge provider making the navigation to my website friendly as it is nicely linked to my music and social media accounts making it easier to update it from time to time',
    },
    {
      avatar: '/testimonials/theo.png',
      name: 'Theo Gina',
      title: 'Founder of Theo Tours',
      heading: 'Excellent Websites for Marketing!',
      quote:
        'My name is Xolani Theo Gina from Theo Tours. I would like to thank Zweli and his team for developing my company website. It helped me reach a lot of customers. Now my customers are able to book tours from my website.',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Shaun Adams',
      title: 'DevOps engineer',
      heading: 'Money saving solutions at hand',
      quote:
        "My company's software now is easy to use, saves time and money, and is loved by a lot of users. One customer saved R10k over the course of 3 years and another saves 8 hours per week! Thanks to Namoota.",
    },
  ];

  return (
    <div class='bg-white py-6 sm:py-8 lg:py-12'>
      <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
        <h2 class='mb-8 text-center text-4xl font-bold text-sky-800 md:mb-12 lg:text-5xl'>
          What others say about us
        </h2>

        <div class='grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x'>
          {testimonials.map((t) => (
            <div class='flex flex-col items-center justify-between gap-4 sm:px-4 md:gap-6 lg:px-8'>
              <div class='text-center text-2xl text-gray-600'>“{t.quote}”</div>

              <div class='flex flex-col items-between justify-between gap-2 sm:flex-row md:gap-3'>
                <div class='h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14'>
                  <img
                    src={t.avatar}
                    loading='lazy'
                    alt={t.name}
                    class='h-full w-full object-cover object-center'
                  />
                </div>

                <div>
                  <div class='text-center text-xl font-bold text-indigo-500 sm:text-left'>
                    {t.name}
                  </div>
                  <p class='text-center text-lg text-gray-500 '>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
