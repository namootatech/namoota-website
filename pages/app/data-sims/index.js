import { Bell, ChevronDown, Menu, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { addSimcard, getUserSimcards, getSimcard } from '@/util/simcards';
import { useAuth } from '@/util/auth/context';
import FeatureSurvey from '@/components/featureSurvey';
import { useState, useEffect } from 'react';
import { flatten, isNil, values, without } from 'ramda';
import { networkPackages, dataPackages } from '@/config/data';
import { Checkbox } from '@/components/ui/checkbox';
import { isEmpty, validate } from 'validate.js';
import { FaTrash } from 'react-icons/fa';

const deliveryConstraints = {
  idNumber: {
    presence: { allowEmpty: false },
    type: 'string',
  },
  fullName: {
    presence: { allowEmpty: false },
    type: 'string',
  },
  cellphone: {
    presence: { allowEmpty: false },
    type: 'string',
  },
  email: {
    presence: { allowEmpty: false },
    type: 'string',
  },
  unit: {
    presence: { allowEmpty: false },
    type: 'string',
  },
  streetAddress: {
    presence: { allowEmpty: false },
    type: 'string',
  },
  suburb: {
    presence: { allowEmpty: false },
    type: 'string',
  },
  city: {
    presence: { allowEmpty: false },
    type: 'string',
  },
  province: {
    presence: { allowEmpty: false },
    type: 'string',
  },
  postalCode: {
    presence: { allowEmpty: false },
    type: 'string',
  },
};

const exists = (i) => !isEmpty(i) && !isNil(i);

export default function AppDashboard() {
  const { currentUser } = useAuth();
  const [showSimSelection, setshowSimSelection] = useState(false);
  const [error, setError] = useState(null);
  const [simcards, setSimcards] = useState([]);
  const [selectedSims, setSelectedSims] = useState([]);
  const [showBilling, setshowBilling] = useState(false);
  const [fullName, setFullName] = useState(currentUser.displayName);
  const [email, setEmail] = useState(currentUser.email);
  const [cellphone, setCellphone] = useState(currentUser.phoneNumber);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [province, setProvince] = useState('');
  const [suburb, setSuburb] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [unit, setUnit] = useState('');
  const [building, setBuilding] = useState('');
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
  async function getSimcards() {
    console.log('Getting user simcards');
    const data = await getUserSimcards(currentUser.uid);
    setSimcards(data);
  }

  useEffect(() => {
    getSimcards();
  }, [currentUser]);

  const handleInputChange = (field, value) => {
    setSimcardDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = () => {
    setshowBilling(true);
  };

  const saveOrder = async (features) => {
    console.log('Handle save features', features);
    const updatedSimcard = {
      ...simcardDetails,
      survey: features,
      userId: currentUser.uid,
      lastUpdated: new Date(),
      lastUpdatedBy: currentUser.uid,
    };
    try {
      console.log('...addiing');
      await addSimcard(updatedSimcard); // Assuming `addSimcard` handles saving to the backend
      setshowBilling(false);
      setshowSimSelection(false);
      setSimcardDetails({
        title: '',
        description: '',
        deadline: '',
        mission: '',
        survey: {},
        type: '',
        tags: '',
      });
      setError(null);
      getSimcards();
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const totalSimcards = simcards.length;
  const totalActiveSimcards = simcards.filter(
    (p) => p.status === 'in-development'
  ).length;

  const isSelected = (id) => {
    return exists(selectedSims.find((i) => i === id));
  };
  const select = (simId) => setSelectedSims([...selectedSims, simId]);
  const unSelect = (simId) => setSelectedSims(without([simId], selectedSims));

  const toggleSelection = (simId) => {
    if (isSelected(simId)) {
      return unSelect(simId);
    }
    select(simId);
  };

  const payWith = (id) => {
    const delivery = {
      fullName,
      idNumber,
      email,
      cellphone,
      unit,
      address,
      suburb,
      city,
      province,
      postalCode,
    };
    const errors = validate(delivery, deliveryConstraints);
  };

  return (
    <div className='container mx-auto px-6 py-8'>
      <div className='flex gap-4 items-center justify-between w-full'>
        <h3 className='text-gray-700 text-3xl font-medium'>Data Sims</h3>
        <div className='flex gap-4 items-center'>
          <Input
            type='text'
            placeholder='Search for simcards'
            icon={<Search />}
            className='w-72 border-gray-300 border-solid'
          />
          <Button
            className='bg-gray-500 text-white p-4 flex items-center justify-center'
            onClick={() => setshowSimSelection(true)}
          >
            Order Data Sim
          </Button>
        </div>
      </div>
      {showSimSelection && !showBilling && (
        <div className='my-12 flex flex-col justify-end items-end gap-4 w-full'>
          <div className='w-full flex flex-col items-center justify-center gap-2'>
            <h2 className='text-gray-500 text-lg'>Step 1</h2>
            <h2 className='text-xl text-cyan-800 font-bold'>
              Simcard Selection
            </h2>
          </div>

          <div className='w-full relative flex'>
            <div className='w-2/3 p-4 sticky h-full overflow-scroll rounded-md'>
              {networkPackages.map((p) => (
                <section className='bg-white p-8 rounded-md shadow-sm'>
                  <header className='bg-gray-600 text-lg text-gray-100 font-bold p-4 rounded-md'>
                    {p.title}
                  </header>
                  <p className='text-base text-gray-600 p-4'>{p.description}</p>
                  <ol className='list p-4'>
                    {p.sellingPoints.map((s) => (
                      <li className='text-base text-gray-600 py-2'>- {s}</li>
                    ))}
                  </ol>
                  <div className='p-4'>
                    <Table className='p-8 text-xs text-gray-700 rounded-md bg-gray-300'>
                      <TableHeader>
                        <TableRow>
                          <TableHead></TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Speed</TableHead>
                          <TableHead>Terms</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {dataPackages[p.id]?.map((dp, index) => (
                          <TableRow>
                            <TableCell>
                              <Checkbox
                                className='data-[state=checked]:bg-sky-800 border-sky-800'
                                checked={isSelected(
                                  p.id + '-' + dp.data_size_gb
                                )}
                              />
                            </TableCell>
                            <TableCell className='font-medium'>
                              {dp.data_size_gb} GB
                            </TableCell>
                            <TableCell>R{dp.selling_price}</TableCell>
                            <TableCell className='w-40 text-wrap'>
                              {dp.max_bandwidth_mbps === 'Unknown'
                                ? '50'
                                : dp.max_bandwidth_mbps}
                              mbps
                            </TableCell>
                            <TableCell className='w-40 text-wrap'>
                              {dp.terms === 'Unknown'
                                ? 'Standard network terms'
                                : dp.terms}
                            </TableCell>
                            <TableCell className='w-20'>
                              <Button
                                className='bg-sky-700'
                                onClick={() =>
                                  toggleSelection(p.id + '-' + dp.data_size_gb)
                                }
                              >
                                Select
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </section>
              ))}
            </div>
            <div className='w-1/3 p-4 h-full overflow-scroll sticky top-0'>
              <div className='bg-white shadow-md rounded-md  h-1/3 overflow-scroll text-sm flex flex-col shadow-md text-gray-100 w-72  p-4'>
                <h4 className='font-manrope prose my-4 text-gray-600'>
                  Selected
                </h4>
                <div className='flex flex-col prose'>
                  {selectedSims.map((s) => {
                    const id = s.split('-')[0];
                    const size = s.split('-')[1];
                    const name = networkPackages.find((n) => n.id === id).title;
                    return (
                      <p className='transition-all ease-in-out transform hover:scale-105 hover:bg-sky-900 hover:shadow-xl m-0 shadow-md text-xs bg-gray-800 rounded-sm  text-gray-50 my-1 grid grid-cols-6'>
                        <span className='col-span-3 border-r rounded-tl-sm rounded-bl-sm  bg-sky-100 text-sky-900 border-solid border-gray-500 flex justify-start items-center p-2'>
                          {name}
                        </span>
                        <span className=' col-span-2  border-r  border-solid border-orange-400 flex justify-start px-4 font-bold text-sm items-center p-1 text-gray-100'>
                          {size} GB
                        </span>
                        <span
                          onClick={() => unSelect(s)}
                          className='col-span-1 px-2 flex rounded-tr-sm rounded-br-sm bg-orange-500 justify-center items-center'
                        >
                          <FaTrash className='text-orange-100' />
                        </span>
                      </p>
                    );
                  })}
                  {!exists(selectedSims) && (
                    <p className='text-xs w-full text-center text-gray-400 p-4'>
                      No selected sim cards
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className='w-1/3 p-4 h-full overflow-scroll sticky top-0'>
              <Button
                className='bg-orange-500 text-white'
                onClick={handleFormSubmit}
              >
                Next: Billing
              </Button>
            </div>
          </div>
        </div>
      )}

      {showBilling && (
        <div className='mt-8 flex flex-col justify-center items-center gap-4'>
          <h2 className='text-xl text-cyan-800 font-bold'>Billing</h2>
          <div className='w-full flex justify-center items-center'>
            <div className='w-2/3 bg-gray-50 rounded p-4 shadow-sm'>
              <h3 className='text-gray-800 text-lg my-4'>Delivery Address</h3>
              <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col gap-4 my-4'>
                  <Label className='text-gray-600'>Deliver to</Label>
                  <Input
                    className='bg-white p-2 focus:border-sky-500 focus:outline-sky-500 focus:border-2  focus-visible:ring-sky-200 transition-all ease-in-out focus-visible:ring-2'
                    placeholder='Enter full name'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col gap-4 my-4'>
                  <Label className='text-gray-600'>ID Number</Label>
                  <Input
                    className='bg-white p-2 focus:border-sky-500 focus:outline-sky-500 focus:border-2  focus-visible:ring-sky-200 transition-all ease-in-out focus-visible:ring-2'
                    placeholder='Enter full name'
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                  />
                </div>
                <div className='flex flex-col gap-4 my-4'>
                  <Label className='text-gray-600'>Email</Label>
                  <Input
                    className='bg-white p-2 focus:border-sky-500 focus:outline-sky-500 focus:border-2  focus-visible:ring-sky-200 transition-all ease-in-out focus-visible:ring-2'
                    placeholder='e.g 7602'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col gap-4 my-4'>
                  <Label className='text-gray-600'>Cellphone Number</Label>
                  <Input
                    className='bg-white p-2 focus:border-sky-500 focus:outline-sky-500 focus:border-2  focus-visible:ring-sky-200 transition-all ease-in-out focus-visible:ring-2'
                    placeholder='e.g 0672023083'
                    value={cellphone}
                    onChange={(e) => setCellphone(e.target.value)}
                  />
                </div>
                <div className='flex flex-col gap-4 my-4'>
                  <Label className='text-gray-600'>Unit Number</Label>
                  <Input
                    className='bg-white p-2 focus:border-sky-500 focus:outline-sky-500 focus:border-2  focus-visible:ring-sky-200 transition-all ease-in-out focus-visible:ring-2'
                    placeholder='e.g 7602'
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </div>
                <div className='flex flex-col gap-4 my-4'>
                  <Label className='text-gray-600'>Building</Label>
                  <Input
                    className='bg-white p-2 focus:border-sky-500 focus:outline-sky-500 focus:border-2  focus-visible:ring-sky-200 transition-all ease-in-out focus-visible:ring-2'
                    placeholder='e.g Madiba House'
                    value={building}
                    onChange={(e) => setBuilding(e.target.value)}
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col gap-4 my-4'>
                  <Label className='text-gray-600'>Street Address</Label>
                  <Input
                    className='bg-white p-2 focus:border-sky-500 focus:outline-sky-500 focus:border-2  focus-visible:ring-sky-200 transition-all ease-in-out focus-visible:ring-2'
                    placeholder='e.g 12 Sakhwe Road'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className='flex flex-col gap-4 my-4'>
                  <Label className='text-gray-600'>Suburb</Label>
                  <Input
                    className='bg-white p-2 focus:border-sky-500 focus:outline-sky-500 focus:border-2  focus-visible:ring-sky-200 transition-all ease-in-out focus-visible:ring-2'
                    placeholder='e.g Khayelitsha'
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                  />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col gap-4 my-4'>
                  <Label className='text-gray-600'>City</Label>
                  <Input
                    className='bg-white p-2 focus:border-sky-500 focus:outline-sky-500 focus:border-2  focus-visible:ring-sky-200 transition-all ease-in-out focus-visible:ring-2'
                    placeholder='e.g Umtata'
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                </div>
                <div className='flex flex-col gap-4 my-4'>
                  <Label className='text-gray-600'>Province</Label>
                  <select
                    className='w-full border p-2  focus:border-sky-500 focus:outline-sky-500 focus:border-2  focus-visible:ring-sky-200 transition-all ease-in-out focus-visible:ring-2 p-2  rounded-md text-sm'
                    onChange={(e) => setProvince(e.target.value)}
                    required
                  >
                    <option value=''>Choose a province</option>
                    {provinces.map((province) => (
                      <option
                        className='bg-white text-sky-700 p-4'
                        key={province}
                        value={province}
                      >
                        {province}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col gap-4 my-4'>
                  <Label className='text-gray-600 '>Postal Code</Label>
                  <Input
                    className='bg-white focus:border-sky-500 focus:outline-sky-500 focus:border-2  focus-visible:ring-sky-200 transition-all ease-in-out focus-visible:ring-2'
                    placeholder='Enter full name'
                  />
                </div>
              </div>
              <h3 className='text-gray-800 text-lg my-4'>Pay with</h3>
              <div className='flex gap-4 my-4'>
                <Button
                  className='bg-red-500 text-white'
                  onClick={() => payWith('payfast')}
                >
                  Payfast
                </Button>
                <Button
                  className='bg-yellow-400 text-white'
                  onClick={() => payWith('ikhokha')}
                >
                  Ikhoka
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {!showSimSelection && !showBilling && (
        <>
          <div className='mt-8'>
            <Card>
              <CardHeader>
                <CardTitle>Simcards</CardTitle>
              </CardHeader>
              <CardContent>
                {!simcards ||
                  (simcards.length === 0 && (
                    <div className='flex flex-col items-center justify-center p-4 w-full'>
                      <h2 className='text-lg text-gray-800'>
                        No simcards found
                      </h2>
                      <p className='text-sm text-gray p-4'>
                        You do not have any sims yet, Click{' '}
                        <strong>"Order Sim"</strong>
                        to add one
                      </p>
                    </div>
                  ))}
                {simcards && simcards.length > 0 && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Simcard Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead>Deadline</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {simcards.map((p) => (
                        <TableRow>
                          <TableCell className='font-medium'>
                            {p.title}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                status === 'pending-review'
                                  ? 'warning'
                                  : 'default'
                              }
                            >
                              {p.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {p.lastUpdated.toDate().toString()}
                          </TableCell>
                          <TableCell>{p.deadline}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
