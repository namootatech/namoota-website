import { useState } from 'react';
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { db } from '@/util/firebase';

export default function SearchAndCompleteExchangePage() {
  const [searchName, setSearchName] = useState('');
  const [results, setResults] = useState([]);
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [completionAmount, setCompletionAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'exchanges'),
        where('nameLowercase', '>=', searchName.toLowerCase())
      );
      const querySnapshot = await getDocs(q);

      const exchanges = [];
      querySnapshot.forEach((doc) => {
        exchanges.push({ id: doc.id, ...doc.data() });
      });

      setResults(exchanges);
    } catch (error) {
      console.error('Error fetching exchanges: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = async () => {
    if (!selectedExchange) {
      alert('Please select an exchange to complete.');
      return;
    }

    const remainingAmount = parseFloat(selectedExchange.remainingAmount || 0);
    const paidAmount = parseFloat(completionAmount || 0);

    if (paidAmount < 0 || paidAmount > remainingAmount + 2) {
      alert('Invalid payment amount.');
      return;
    }

    const updatedRemainingAmount = remainingAmount - paidAmount;

    try {
      await updateDoc(doc(db, 'exchanges', selectedExchange.id), {
        remainingAmount: updatedRemainingAmount,
        status:
          updatedRemainingAmount === 0 ? 'Completed' : 'Pending Completion',
      });

      alert(
        `Deferred exchange ${
          updatedRemainingAmount === 0 ? 'completed' : 'updated successfully'
        }.`
      );

      // Reset form and selection
      setSelectedExchange(null);
      setCompletionAmount('');
      setResults([]);
      setSearchName('');
    } catch (error) {
      console.error('Error updating exchange: ', error);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-lg'>
        <h1 className='text-2xl font-bold mb-4 text-center'>
          Search & Complete Exchange
        </h1>
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium'>Search by Name</label>
            <input
              type='text'
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className='mt-1 p-2 block w-full border rounded-md'
              placeholder='Enter customer name'
            />
          </div>
          <button
            type='button'
            onClick={handleSearch}
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>

          {results.length > 0 && (
            <div className='mt-4'>
              <h2 className='text-lg font-semibold'>Search Results</h2>
              <ul className='space-y-2 mt-2'>
                {results.map((exchange) => (
                  <li
                    key={exchange.id}
                    className={`p-2 border rounded-md cursor-pointer ${
                      selectedExchange?.id === exchange.id ? 'bg-gray-200' : ''
                    }`}
                    onClick={() => setSelectedExchange(exchange)}
                  >
                    <p>
                      <strong>Name:</strong> {exchange?.name}
                    </p>
                    <p>
                      <strong>Status:</strong> {exchange?.status}
                    </p>
                    <p>
                      <strong>Remaining Amount:</strong> R
                      {exchange?.remainingAmount
                        ? exchange?.remainingAmount?.toFixed(2)
                        : 0}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedExchange && (
            <div className='mt-4'>
              <h3 className='text-lg font-semibold'>
                Complete Deferred Exchange
              </h3>
              <div className='mt-2'>
                <label className='block text-sm font-medium'>
                  Remaining Amount: R
                  {selectedExchange.remainingAmount.toFixed(2)}
                </label>
                <input
                  type='number'
                  step='0.01'
                  value={completionAmount}
                  onChange={(e) => setCompletionAmount(e.target.value)}
                  className='mt-1 p-2 block w-full border rounded-md'
                  placeholder='Enter amount to pay'
                />
              </div>
              <button
                type='button'
                onClick={handleComplete}
                className='mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600'
              >
                Complete Exchange
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
