// src/PreOrderForm.js
import React, { useState, useEffect } from 'react';
import { networkPackages, dataPackages } from '../../config/data';
const PreOrderForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [address, setAddress] = useState('');
  const [networkPackage, setNetworkPackage] = useState('');
  const [dataPackage, setDataPackage] = useState('');
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [suburb, setSuburb] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [provinces, setProvinces] = useState([
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'North West',
    'Northern Cape',
    'Western Cape',
  ]);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setErrorMessage('Unable to retrieve location');
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    console.log({
      fullName,
      email,
      cellphone,
      address,
      networkPackage,
      dataPackage,
      location,
      city,
      province,
      suburb,
      postalCode,
    });
  };

  return (
    <section class='py-24 relative'>
      <div class='w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto'>
        <div class='w-full flex-col justify-center items-center gap-4 inline-flex'>
          <h2 class='text-center text-gray-900 text-4xl font-bold font-manrope leading-normal'>
            Pre-order Form
          </h2>
          <p class='text-center text-gray-500 text-base font-normal leading-relaxed'>
            Fill out the form below to pre-order your namoota data sim package.
          </p>
        </div>
        <div class='lg:my-14 my-8 grid lg:grid-cols-2 grid-cols-1 gap-8'>
          <div class='w-full flex-col justify-start items-start gap-6 inline-flex'>
            <h4 class='text-gray-900 text-xl font-semibold leading-8'>
              Basic Information
            </h4>
            <div class='w-full flex-col justify-start items-start gap-8 flex'>
              <div class='w-full flex-col justify-start items-start gap-1.5 flex'>
                <label
                  for=''
                  class='flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed'
                >
                  Full Name
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='7'
                    height='7'
                    viewBox='0 0 7 7'
                    fill='none'
                  >
                    <path
                      d='M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z'
                      fill='#EF4444'
                    />
                  </svg>
                </label>
                <input
                  type='text'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  class='w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex'
                  placeholder='e.g Zinhle Samuels'
                />
              </div>
              <div class='w-full flex-col justify-start items-start gap-1.5 flex'>
                <label
                  for=''
                  class='flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed'
                >
                  Email
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='7'
                    height='7'
                    viewBox='0 0 7 7'
                    fill='none'
                  >
                    <path
                      d='M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z'
                      fill='#EF4444'
                    />
                  </svg>
                </label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  class='w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex'
                  placeholder='you@example.com'
                />
              </div>
              <div class='w-full flex-col justify-start items-start gap-1.5 flex'>
                <label
                  for=''
                  class='flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed'
                >
                  Cellphone Number
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='7'
                    height='7'
                    viewBox='0 0 7 7'
                    fill='none'
                  >
                    <path
                      d='M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z'
                      fill='#EF4444'
                    />
                  </svg>
                </label>
                <input
                  type='tel'
                  value={cellphone}
                  onChange={(e) => setCellphone(e.target.value)}
                  required
                  class='w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex'
                  placeholder='0651234567'
                />
              </div>

              <div class='w-full justify-start items-start gap-7 flex sm:flex-row flex-col'>
                <div class='w-full flex-col justify-start items-start gap-1.5 flex'>
                  <label
                    for=''
                    class='flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed'
                  >
                    Network Sim
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='7'
                      height='7'
                      viewBox='0 0 7 7'
                      fill='none'
                    >
                      <path
                        d='M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z'
                        fill='#EF4444'
                      />
                    </svg>
                  </label>
                  <select
                    value={networkPackage}
                    onChange={(e) => setNetworkPackage(e.target.value)}
                    required
                    class='w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex'
                    placeholder='John'
                  >
                    <option value=''>Choose a package</option>
                    {networkPackages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div class='w-full flex-col justify-start items-start gap-1.5 flex'>
                  <label
                    for=''
                    class='flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed'
                  >
                    Data Size
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='7'
                      height='7'
                      viewBox='0 0 7 7'
                      fill='none'
                    >
                      <path
                        d='M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z'
                        fill='#EF4444'
                      />
                    </svg>
                  </label>
                  <select
                    value={dataPackage}
                    onChange={(e) => setDataPackage(e.target.value)}
                    required
                    class='w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex'
                    placeholder='John'
                  >
                    <option value=''>Choose a data package</option>
                    {dataPackages[networkPackage]?.map((pkg) => {
                      const id =
                        networkPackage +
                        '-' +
                        pkg.data_size_gb +
                        '-' +
                        pkg.selling_price;
                      return (
                        <option key={id} value={id}>
                          {pkg.data_size_night_gb
                            ? pkg.data_size_gb +
                              ' GB & ' +
                              pkg.data_size_night_gb +
                              ' GB Night Data'
                            : pkg.data_size_gb + ' GB'}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class='w-full flex-col justify-start items-start gap-6 inline-flex'>
            <h4 class='text-gray-900 text-xl font-semibold leading-8'>
              Address Informatiom
            </h4>
            <div class='w-full flex-col justify-start items-start gap-8 flex'>
              <div class='w-full flex-col justify-start items-start gap-1.5 flex'>
                <label
                  for=''
                  class='flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed'
                >
                  Address
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='7'
                    height='7'
                    viewBox='0 0 7 7'
                    fill='none'
                  >
                    <path
                      d='M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z'
                      fill='#EF4444'
                    />
                  </svg>
                </label>
                <input
                  type='text'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  class='w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex'
                  placeholder='12 Jongumsobomvu Rd'
                />
              </div>
              <div class='w-full flex-col justify-start items-start gap-1.5 flex'>
                <label
                  for=''
                  class='flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed'
                >
                  Suburb
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='7'
                    height='7'
                    viewBox='0 0 7 7'
                    fill='none'
                  >
                    <path
                      d='M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z'
                      fill='#EF4444'
                    />
                  </svg>
                </label>
                <input
                  type='text'
                  value={suburb}
                  onChange={(e) => setSuburb(e.target.value)}
                  class='w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex'
                  placeholder='Alexandra'
                />
              </div>
              <div class='w-full justify-start items-start gap-7 flex sm:flex-row flex-col'>
                <div class='w-full flex-col justify-start items-start gap-1.5 flex'>
                  <label
                    for=''
                    class='flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed'
                  >
                    City
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='7'
                      height='7'
                      viewBox='0 0 7 7'
                      fill='none'
                    >
                      <path
                        d='M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z'
                        fill='#EF4444'
                      />
                    </svg>
                  </label>
                  <input
                    type='text'
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    class='w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex'
                    placeholder='e.g Johannesburg'
                  />
                </div>
                <div class='w-full flex-col justify-start items-start gap-1.5 flex'>
                  <label
                    for=''
                    class='flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed'
                  >
                    Province
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='7'
                      height='7'
                      viewBox='0 0 7 7'
                      fill='none'
                    >
                      <path
                        d='M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z'
                        fill='#EF4444'
                      />
                    </svg>
                  </label>
                  <select
                    class='w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex'
                    onChange={(e) => setProvince(e.target.value)}
                    required
                  >
                    <option value=''>Choose a province</option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class='w-full justify-start items-start gap-7 flex sm:flex-row flex-col'>
                <div class='w-full flex-col justify-start items-start gap-1.5 flex'>
                  <label
                    for=''
                    class='flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed'
                  >
                    Postal Code
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='7'
                      height='7'
                      viewBox='0 0 7 7'
                      fill='none'
                    >
                      <path
                        d='M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z'
                        fill='#EF4444'
                      />
                    </svg>
                  </label>
                  <input
                    type='text'
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    class='w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex'
                    placeholder='e.g 5050'
                  />
                </div>
                <div class='w-full flex-col justify-start items-start gap-1.5 flex'>
                  <label
                    for=''
                    class='flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed'
                  >
                    Country
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='7'
                      height='7'
                      viewBox='0 0 7 7'
                      fill='none'
                    >
                      <path
                        d='M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z'
                        fill='#EF4444'
                      />
                    </svg>
                  </label>
                  <input
                    type='text'
                    value='South Africa'
                    disabled
                    class='w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex'
                    placeholder='John'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class='mx-auto sm:w-fit w-full px-7 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex'>
          <span class='px-2 text-center text-white text-lg font-semibold leading-8'>
            Order Now
          </span>
        </button>
      </div>
    </section>
  );
};

export default PreOrderForm;
