import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/util/firebase';
import ReactPaginate from 'react-paginate';

export default function InsightsPage() {
  const [exchanges, setExchanges] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // Statistics
  const [stats, setStats] = useState({
    totalExchanges: 0,
    totalDeferred: 0,
    totalCompleted: 0,
    totalPending: 0,
    totalProfit: 0,
    avgDeferredAmount: 0,
  });

  // Fetch Data from Firestore
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'exchanges'));
        const exchangeData = [];
        let totalDeferredAmount = 0;

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          exchangeData.push({ id: doc.id, ...data });
          if (
            data.status === 'Pending Completion' ||
            data.status === 'Deferred'
          ) {
            totalDeferredAmount += parseFloat(data.remainingAmount || 0);
          }
        });

        // Update statistics
        const totalProfit = exchangeData.reduce(
          (sum, e) =>
            sum + (e.exchangeAmount - (e.amountWorth || e.totalAmount || 0)),
          0
        );
        const totalDeferred = exchangeData.filter(
          (e) => e.type === 'Deferred'
        ).length;
        const totalCompleted = exchangeData.filter(
          (e) => e.status === 'Completed' || e.status === 'Paid'
        ).length;
        const totalPending = exchangeData.filter(
          (e) => e.status === 'Pending Completion'
        ).length;

        setStats({
          totalExchanges: exchangeData.length,
          totalDeferred,
          totalCompleted,
          totalPending,
          totalProfit,
          avgDeferredAmount: totalDeferred
            ? (totalDeferredAmount / totalDeferred).toFixed(2)
            : 0,
        });

        setExchanges(exchangeData);
      } catch (error) {
        console.error('Error fetching exchanges:', error);
      }
    };

    fetchExchanges();
  }, []);

  // Pagination
  const offset = currentPage * itemsPerPage;
  const currentItems = exchanges.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(exchanges.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Total calculations for the table
  const tableTotals = {
    totalAmount: currentItems
      .reduce((sum, item) => sum + (item.exchangeAmount || 0), 0)
      .toFixed(2),
    totalProfit: currentItems
      .reduce(
        (sum, e) =>
          sum + (e.exchangeAmount - (e.amountWorth || e.totalAmount || 0)),
        0
      )
      .toFixed(2),
    totalCustomerPayout: currentItems
      .reduce((sum, e) => sum + (e.amountWorth || e.totalAmount || 0), 0)
      .toFixed(2),
  };

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      {/* Statistics Section */}
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold'>Total Exchanges</h2>
          <p className='text-2xl font-bold'>{stats.totalExchanges}</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold'>Total Deferred Exchanges</h2>
          <p className='text-2xl font-bold'>{stats.totalDeferred}</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold'>Total Completed Exchanges</h2>
          <p className='text-2xl font-bold'>{stats.totalCompleted}</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold'>Total Pending Completion</h2>
          <p className='text-2xl font-bold'>{stats.totalPending}</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold'>Total Profit</h2>
          <p className='text-2xl font-bold'>R{stats.totalProfit.toFixed(2)}</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold'>Avg. Deferred Amount</h2>
          <p className='text-2xl font-bold'>R{stats.avgDeferredAmount}</p>
        </div>
      </div>

      {/* Paginated Table */}
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-lg font-semibold mb-4'>Exchanges Table</h2>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-2 border'>Name</th>
              <th className='p-2 border'>Status</th>
              <th className='p-2 border'>Exchange Amount</th>
              <th className='p-2 border'>Customer Payout</th>
              <th className='p-2 border'>Profit</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((exchange) => (
              <tr key={exchange.id} className='text-center'>
                <td className='p-2 border'>{exchange.name}</td>
                <td className='p-2 border'>{exchange.status}</td>
                <td className='p-2 border'>
                  R {exchange.exchangeAmount?.toFixed(2)}
                </td>
                <td className='p-2 border'>
                  R {exchange.amountWorth || exchange.totalAmount || 0}
                </td>

                <td className='p-2 border'>
                  R
                  {(
                    exchange.exchangeAmount -
                    (exchange.amountWorth || exchange.totalAmount || 0)
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className='bg-gray-100'>
              <td className='p-2 border font-bold'>Totals</td>
              <td className='p-2 border font-bold'>--</td>
              <td className='p-2 border font-bold'>
                R{tableTotals.totalAmount}
              </td>
              <td className='p-2 border font-bold'>
                R{tableTotals.totalCustomerPayout}
              </td>

              <td className='p-2 border font-bold'>
                R{tableTotals.totalProfit}
              </td>
            </tr>
          </tfoot>
        </table>

        {/* Pagination */}
        <div className='mt-4'>
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName='flex justify-center space-x-2'
            activeClassName='bg-blue-500 text-white px-4 py-2 rounded'
            pageClassName='px-3 py-1 border rounded'
            previousClassName='px-3 py-1 border rounded'
            nextClassName='px-3 py-1 border rounded'
          />
        </div>
      </div>
    </div>
  );
}
