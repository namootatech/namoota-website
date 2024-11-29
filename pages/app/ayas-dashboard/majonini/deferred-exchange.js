import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '@/util/firebase';

export default function DeferredExchangePage() {
  const [formData, setFormData] = useState({
    name: '',
    cellphone: '0987654321',
    email: 'unknown@gmail.com',
    suburb: 'Ezibeleni',
    postalCode: '5326',
    zone: 'Zone-3',
    exchangeAmount: '',
    partialAmount: '',
    type: 'Deffered',
    status: 'Pending Completion',
  });

  const [result, setResult] = useState({
    totalAmount: null,
    remainingAmount: null,
  });

  // Calculate Total Return Amount
  const calculateExchange = (amount) => {
    const fullTwos = Math.floor(amount / 2);
    const remainder = amount % 2;
    const totalAmount = fullTwos * 1.5 + remainder;
    const roundedAmount = Math.round(totalAmount * 2) / 2;
    return roundedAmount;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const exchangeAmount = parseFloat(formData.exchangeAmount || 0);
    let partialAmount = parseFloat(formData.partialAmount || 0);
    if (partialAmount > exchangeAmount) {
      partialAmount = exchangeAmount;
    }
    if (partialAmount < 0) {
      partialAmount = 0;
    }
    const totalAmount = calculateExchange(exchangeAmount);
    const remainingAmount = totalAmount - partialAmount;
    setResult({ totalAmount, remainingAmount });
  }, [formData.exchangeAmount, formData.partialAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const exchangeAmount = parseFloat(formData.exchangeAmount || 0);
    let partialAmount = parseFloat(formData.partialAmount || 0);
    if (partialAmount > exchangeAmount) {
      partialAmount = exchangeAmount;
    }
    if (partialAmount < 0) {
      partialAmount = 0;
    }
    const totalAmount = calculateExchange(exchangeAmount);
    const remainingAmount = totalAmount - partialAmount;
    try {
      await addDoc(collection(db, 'exchanges'), {
        ...formData,
        exchangeAmount,
        partialAmount,
        totalAmount,
        remainingAmount,
        date: new Date().toISOString(),
        nameLowercase: formData.name.toLowerCase(),
        type: 'Deffered',
        status: 'Pending Completion',
      });
      alert('Deferred Exchange saved successfully!');
      setFormData({
        name: '',
        cellphone: '',
        email: '',
        suburb: 'Ezibeleni',
        postalCode: '5326',
        zone: '',
        exchangeAmount: '',
        partialAmount: '',
      });
    } catch (error) {
      console.error('Error saving to Firestore: ', error);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-lg'>
        <h1 className='text-2xl font-bold mb-4 text-center'>
          Deferred Exchange
        </h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-3 gap-4'>
            <div>
              <label className='block text-sm font-medium'>Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='mt-1 p-2 block w-full border rounded-md'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium'>Cellphone</label>
              <input
                type='text'
                name='cellphone'
                value={formData.cellphone}
                onChange={handleChange}
                className='mt-1 p-2 block w-full border rounded-md'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium'>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='mt-1 p-2 block w-full border rounded-md'
                required
              />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div>
              <label className='block text-sm font-medium'>Suburb</label>
              <input
                type='text'
                name='suburb'
                value={formData.suburb}
                onChange={handleChange}
                className='mt-1 p-2 block w-full border rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium'>Postal Code</label>
              <input
                type='text'
                name='postalCode'
                value={formData.postalCode}
                onChange={handleChange}
                className='mt-1 p-2 block w-full border rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium'>Zone</label>
              <select
                name='zone'
                value={formData.zone}
                onChange={handleChange}
                className='mt-1 p-2 block w-full border rounded-md'
              >
                <option value=''>Select Zone</option>
                <option value='Zone-1'>Zone 1</option>
                <option value='Zone-2'>Zone 2</option>
                <option value='Zone-3'>Zone 3</option>
                <option value='Bhekela'>Bhekela</option>
                <option value='Vezinyawo'>Vezinyawo</option>
                <option value='Mabuyaze'>Mabuyaze</option>
                <option value='Mabuyaze'>KwaThemba</option>
                <option value='Chancele'>Chancele</option>
              </select>
            </div>
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Exchange Amount (R)
            </label>
            <input
              type='number'
              step='0.01'
              name='exchangeAmount'
              value={formData.exchangeAmount}
              onChange={handleChange}
              className='mt-1 p-2 block w-full border rounded-md'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Partial Amount Given (R)
            </label>
            <input
              type='number'
              step='0.01'
              name='partialAmount'
              value={formData.partialAmount}
              onChange={handleChange}
              className='mt-1 p-2 block w-full border rounded-md'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'
          >
            Calculate & Save
          </button>
        </form>

        {result.totalAmount !== null && (
          <div className='mt-4 p-4 bg-gray-100 border rounded-md'>
            <p className='text-lg font-bold'>
              Total Amount Worth: R{result.totalAmount.toFixed(2)}
            </p>
            <p className='text-lg font-bold text-red-500'>
              Remaining Amount: R{result.remainingAmount.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
