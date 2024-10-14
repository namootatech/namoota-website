import Head from 'next/head';
import Link from 'next/link';
import GradientWrapper from '../components/GradientWrapper';

const QuotingInvoicing = () => {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Quoting & Invoicing Systems | Namoota</title>
      </Head>

      <section className="flex flex-col justify-center gap-2 sm:gap-10 md:gap-16 lg:flex-row">
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="mb-4 font-semibold text-sky-600 md:mb-6 md:text-lg xl:text-xl">
            Streamline Your Business Operations
          </p>

          <h1 className="mb-8 text-4xl font-bold text-sky-800 sm:text-5xl md:mb-12 md:text-6xl">
            Quoting & Invoicing Systems
          </h1>

          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            Empower your business with our custom-built quoting and invoicing systems. Streamline your processes, improve cash flow, and enhance customer communication.
          </p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="/contact" className="inline-block rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-sky-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:bg-sky-700 md:text-base">
              Get Started
            </Link>
          </div>
        </div>

        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img src="/quoting_invoicing_image.jpg" loading="lazy" alt="Invoicing System" className="h-[80%] w-full object-cover object-center" />
        </div>
      </section>

      <GradientWrapper>
        <div className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How Our Invoicing System Helps Your Business
            </h2>
            <div className="mt-6 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
              {[
                {
                  title: "Streamlined Processes",
                  description: "Automate your quoting and invoicing workflow, saving time and reducing errors."
                },
                {
                  title: "Improved Cash Flow",
                  description: "Send invoices faster and track payments more efficiently to improve your cash flow."
                },
                {
                  title: "Enhanced Customer Communication",
                  description: "Provide professional quotes and invoices, improving your business image and customer satisfaction."
                },
                {
                  title: "Real-time Insights",
                  description: "Get instant access to financial data and reports for better decision-making."
                },
                {
                  title: "Customization",
                  description: "Tailor the system to fit your specific business needs and branding."
                },
                {
                  title: "Integration",
                  description: "Seamlessly integrate with other business systems for a unified workflow."
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {item.title}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GradientWrapper>
    </>
  );
};

export default QuotingInvoicing;