'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Assuming the JSON data is imported or fetched
import appData from '@/config/pricing/app.json';
import websiteData from '@/config/pricing/website.json';

const allFeatures = [
  ...appData.app_types.flatMap((appType) => appType.features),
  ...websiteData.features.map((feature) => ({
    ...feature,
    id: feature.name.toLowerCase().replace(/ /g, '-'),
    survey_question: `Would you like ${feature.name.toLowerCase()}?`,
  })),
];

export default function FeatureSurvey({ onSave }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [buildTime, setBuildTime] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const featuresPerPage = 10;
  const totalPages = Math.ceil(allFeatures.length / featuresPerPage);

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const calculateTotals = () => {
    return selectedFeatures.reduce(
      (acc, featureId) => {
        const feature = allFeatures.find((f) => f.id === featureId);
        if (feature) {
          acc.complexity += feature.complexity;
          acc.time += feature.days_to_complete;
          acc.price += feature.price_zar;
        }
        return acc;
      },
      {
        complexity: 0,
        time: 0,
        price: 0,
        totalComplexity: selectedFeatures.length * 5,
      }
    );
  };

  const renderFeatures = () => {
    const startIndex = currentPage * featuresPerPage;
    const endIndex = startIndex + featuresPerPage;
    const pageFeatures = allFeatures.slice(startIndex, endIndex);

    return pageFeatures.map((feature) => (
      <div
        key={feature.id}
        className='flex items-center border-b-2 border-gray-100 space-x-3 bg-gray-50 p-2 shadow-sm hover:shadow-md rounded-md hover:scale-105 hover:bg-gray-100 transition-all ease-in-out'
      >
        <Checkbox
          id={feature.id}
          checked={selectedFeatures.includes(feature.id)}
          onCheckedChange={() => handleFeatureToggle(feature.id)}
        />
        <label className='text-sm  text-cyan-900' htmlFor={feature.id}>
          {feature.survey_question}
        </label>
      </div>
    ));
  };

  const renderSummary = () => {
    const { complexity, time, price, totalComplexity } = calculateTotals();
    const desiredTime = parseInt(buildTime) || time;
    const timeMultiplier = time / desiredTime;
    const adjustedPrice = Math.round(price * timeMultiplier);
    const complexityPerc = Math.round((complexity / totalComplexity) * 100);
    const developmentPackage =
      complexityPerc <= 20
        ? 'EASY-PEASY'
        : complexityPerc <= 40
        ? 'YOUNG-DISRUPTOR'
        : complexityPerc <= 60
        ? 'BIG-BOSS-MOVES'
        : complexityPerc <= 80
        ? 'GAME-CHANGER'
        : 'ROCKET-SCIENCE';

    const handleSave = () => {
      console.log('running handle save');
      const totals = calculateTotals();
      onSave({
        features: selectedFeatures,
        time: buildTime,
        usersTime: desiredTime,
        priceAtUsersTime: adjustedPrice,
        complexityPercent: complexityPerc,
        package: developmentPackage,
        ...totals,
      });
    };

    return (
      <Card className='w-full max-w-6xl mx-auto'>
        <CardHeader>
          <h2 className='text-xl text-cyan-800 font-bold'>Summary</h2>
          <p className='text-base text-cyan-600'>
            Here's a summary of your selected features and estimated costs
          </p>
        </CardHeader>
        <CardContent>
          <div className='space-y-2'>
            <p>
              <strong>Complexity Rating:</strong> {Math.round(complexity)}/{' '}
              {Math.round(totalComplexity)} = {complexityPerc}%
            </p>
            {/* These could be package names, trying to use fun relatable humour angle, not sure about the big boss moves one*/}
            <p className='font-manrope text-emerald-500 text-sm italic'></p>
            <p>
              <strong>Namoota's build time:</strong> {Math.round(time)} days
            </p>
            <p>
              <strong>Desired build time:</strong> {Math.round(desiredTime)}{' '}
              days
            </p>
            <p>
              <strong>Estimated price at Namoota's time:</strong> R
              {price.toLocaleString()}
            </p>
            <p>
              <strong>Estimated price at the desired time:</strong> R
              {adjustedPrice.toLocaleString()}
            </p>
            <p>
              <strong>Package:</strong>{' '}
              <strong className='text-cyan-500'>{developmentPackage}</strong>
            </p>
          </div>
          <h3 className='text-xl text-cyan-800 font-bold mt-6 mb-2'>
            Selected Features
          </h3>
          <p className='text-base text-cyan-600'>
            Breakdown of your selected features with complexity, time and cost.
          </p>
          <div class='flex flex-col mt-6'>
            <div class='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div class='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div class='overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg'>
                  <table class='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                    <thead class='bg-gray-50 dark:bg-gray-800'>
                      <tr>
                        <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                          Name
                        </th>
                        <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                          Complexity (1- 5)
                        </th>
                        <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                          Days to build (8hr/d)
                        </th>
                        <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                          Our time (Hrs)
                        </th>
                        <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                          Your time (Hrs)
                        </th>
                        <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                          {' '}
                          Our Price
                        </th>
                        <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                          {' '}
                          Your Price
                        </th>
                      </tr>
                    </thead>
                    <tbody class='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
                      {selectedFeatures.map((item) => {
                        const feature = allFeatures.find((f) => f.id === item);
                        return (
                          <tr key={feature.id}>
                            <td className='px-4 py-4 text-sm font-medium whitespace-nowrap '>
                              {feature.name}
                            </td>
                            <td className='px-4 py-4 text-sm font-medium whitespace-nowrap '>
                              {feature.complexity}
                            </td>
                            <td className='px-4 py-4 text-sm font-medium whitespace-nowrap '>
                              {feature.days_to_complete}
                            </td>
                            <td className='px-4 py-4 text-sm font-medium whitespace-nowrap '>
                              {feature.days_to_complete * 8}
                            </td>
                            <td className='px-4 py-4 text-sm font-medium whitespace-nowrap '>
                              {Math.round(
                                (feature.days_to_complete * 8) / timeMultiplier
                              )}
                            </td>
                            <td className='px-4 py-4 text-sm font-medium whitespace-nowrap '>
                              R{feature.price_zar}
                            </td>
                            <td className='px-4 py-4 text-sm font-medium whitespace-nowrap '>
                              R{Math.round(feature.price_zar * timeMultiplier)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex gap-4'>
          <Button onClick={() => setShowSummary(false)}>Back to Survey</Button>
          <Button onClick={handleSave} className='bg-green-500 text-white'>
            Save
          </Button>
        </CardFooter>
      </Card>
    );
  };

  if (showSummary) {
    return renderSummary();
  }

  return (
    <Card className='w-full max-w-3xl mx-auto p-4'>
      <CardHeader>
        <p className='text-base text-cyan-600'>
          Please select any of the following that apply for your app
        </p>
        <CardDescription>
          My app or its users should be able to:
        </CardDescription>
      </CardHeader>
      <div className='p-6 pt-0'>
        <p className='text-cyan-800'>
          Page {currentPage} of{' '}
          {Math.round(allFeatures.length / featuresPerPage)}
        </p>
        <div className='border-2 border-gray-100 rounded-md'>
          {renderFeatures()}
        </div>
        {currentPage === totalPages - 1 && (
          <div className='mt-4'>
            <Label htmlFor='buildTime'>Desired build time (in days):</Label>
            <Input
              id='buildTime'
              type='number'
              value={buildTime}
              onChange={(e) => setBuildTime(e.target.value)}
              placeholder='Enter desired build time'
              className='mt-1'
            />
          </div>
        )}
      </div>
      <CardFooter className='flex justify-between'>
        <Button onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </Button>
        <Button onClick={handleNextPage}>
          {currentPage === totalPages - 1 ? 'View Summary' : 'Next'}
        </Button>
      </CardFooter>
    </Card>
  );
}
