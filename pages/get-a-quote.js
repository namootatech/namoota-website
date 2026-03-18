import GetAQuote from '../components/GetAQuote';

export default function GetAQuotePage() {
  return (
    <div className='min-h-screen bg-gray-50 py-8 dark:bg-gray-900'>
      <div className='container mx-auto px-4 max-w-4xl relative'>
        {/* Hero — customer first */}
        <header className='text-center mb-8'>
          <h1 className='text-3xl sm:text-4xl font-bold text-cyan-800 dark:text-cyan-200 mb-3'>
            Get a quote for your project
          </h1>
          <p className='text-lg text-cyan-700 dark:text-cyan-300 max-w-2xl mx-auto'>
            Select the features that apply to your app or website and get an
            estimated scope, timeline and cost. When you're done, you can share
            your project with us or chat with our team to get started.
          </p>
        </header>

        <GetAQuote trustStats={{ count: 40, range: 'R45,000–R180,000' }} />

        {/* For developers — last, secondary */}
        <section className='mt-14 pt-8 border-t border-gray-200 dark:border-gray-700'>
          <h2 className='text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2'>
            For developers
          </h2>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            You can use this same tool to price projects for your clients. The
            survey and estimates are driven by our config; no need to clone
            anything—just use the UI above.
          </p>
        </section>
      </div>
    </div>
  );
}
