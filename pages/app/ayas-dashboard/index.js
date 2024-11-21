const { default: Link } = require('next/link');

function Dashboard() {
  return (
    <div className='p-4 flex flex-col rounded shadow-md'>
      <h1 className='text-xl text-sky-800 p-4'>Ayas Dashboard</h1>
      <div className='grid grid-cols-4 gap-4  w-2/3'>
        <Link
          href='/app/ayas-dashboard/majonini/exchange'
          className='bg-sky-500 p-4 rounded-md shadow-md my-4 text-white items-center justify-center'
        >
          Exchange
        </Link>
        <Link
          href='/app/ayas-dashboard/majonini/deferred-exchange'
          className='bg-sky-500 p-4 rounded-md shadow-md my-4 text-white items-center justify-center'
        >
          Deferred Exchange
        </Link>
        <Link
          href='/app/ayas-dashboard/majonini/complete-deferred-exchange'
          className='bg-sky-500 p-4 rounded-md shadow-md my-4 text-white items-center justify-center'
        >
          Complete Exchange
        </Link>
        <Link
          href='/app/ayas-dashboard/majonini/insights'
          className='bg-sky-500 p-4 rounded-md shadow-md my-4 text-white items-center justify-center'
        >
          Insights
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
