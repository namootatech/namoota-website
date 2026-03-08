'use client';

import { useState } from 'react';
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

const CHAT_NOW_URL = 'https://wa.me/27603116777';
const CHAT_NOW_PREFILL = encodeURIComponent(
  'Hi, I just used the Namoota quote tool and would like to discuss my project.'
);

// Group by app type / relation, sort each group by complexity (easiest to hardest)
function buildGroupedAndSortedFeatures() {
  const byComplexity = (a, b) =>
    a.complexity !== b.complexity
      ? a.complexity - b.complexity
      : (a.days_to_complete || 0) - (b.days_to_complete || 0);

  const appGroups = appData.app_types.map((appType) => ({
    label: appType.type,
    features: [...appType.features].sort(byComplexity),
  }));

  const websiteFeatures = websiteData.features.map((f) => ({
    ...f,
    id: f.name.toLowerCase().replace(/ /g, '-'),
    survey_question: `Would you like ${f.name.toLowerCase()}?`,
  }));
  const websiteGroup = {
    label: websiteData.type || 'Static Website',
    features: websiteFeatures.sort(byComplexity),
  };

  const groups = [...appGroups, websiteGroup];
  return groups.flatMap((g) =>
    g.features.map((f) => ({ ...f, groupLabel: g.label }))
  );
}

const allFeatures = buildGroupedAndSortedFeatures();

export default function GetAQuote() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [buildTime, setBuildTime] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [wantNamootaToBuild, setWantNamootaToBuild] = useState(null);
  const [projectDetailsSent, setProjectDetailsSent] = useState(false);
  const [buildRequestForm, setBuildRequestForm] = useState({
    name: '',
    email: '',
    cellphone: '',
    projectDetails: '',
  });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

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

  const getQuoteSummaryText = () => {
    const { time, price, totalComplexity } = calculateTotals();
    const desiredTime = parseInt(buildTime) || time;
    const timeMultiplier = time / desiredTime;
    const adjustedPrice = Math.round(price * timeMultiplier);
    const featureNames = selectedFeatures
      .map((id) => allFeatures.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');
    return [
      `Selected features: ${featureNames || 'None'}`,
      `Estimated price (our time): R${price.toLocaleString()}`,
      `Estimated price (desired time): R${adjustedPrice.toLocaleString()}`,
      `Build time: ${Math.round(time)} days | Desired: ${Math.round(desiredTime)} days`,
    ].join('\n');
  };

  const handleBuildRequestSubmit = async (e) => {
    e.preventDefault();
    if (!buildRequestForm.name?.trim() || !buildRequestForm.email?.trim()) {
      setSubmitError('Please enter your name and email.');
      return;
    }
    setSubmitError(null);
    setSubmitLoading(true);
    try {
      const message = [
        buildRequestForm.projectDetails?.trim() || '(No additional details provided)',
        '',
        '--- Quote summary ---',
        getQuoteSummaryText(),
      ].join('\n');
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: buildRequestForm.name.trim(),
          email: buildRequestForm.email.trim(),
          cellphone: buildRequestForm.cellphone?.trim() || '',
          subject: 'Quote / Build request',
          selected: 'build-request',
          message,
        }),
      });
      if (!response.ok) throw new Error('Failed to send');
      setProjectDetailsSent(true);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. You can use Chat now to reach us.');
    } finally {
      setSubmitLoading(false);
    }
  };

  const renderFeatures = () => {
    const startIndex = currentPage * featuresPerPage;
    const endIndex = startIndex + featuresPerPage;
    const pageFeatures = allFeatures.slice(startIndex, endIndex);

    // Preserve order of groups as they appear on this page
    const groupOrder = [...new Set(pageFeatures.map((f) => f.groupLabel))];
    const byGroup = {};
    pageFeatures.forEach((f) => {
      if (!byGroup[f.groupLabel]) byGroup[f.groupLabel] = [];
      byGroup[f.groupLabel].push(f);
    });

    return groupOrder.map((groupLabel) => (
      <div key={groupLabel} className='mb-4'>
        <div className='mb-2 text-sm font-semibold text-cyan-700 border-b border-cyan-200 pb-1'>
          {groupLabel}
        </div>
        <div className='space-y-1'>
          {byGroup[groupLabel].map((feature) => (
            <div
              key={feature.id}
              className='flex items-center border-b-2 border-gray-100 space-x-3 bg-gray-50 p-2 shadow-sm hover:shadow-md rounded-md hover:scale-105 hover:bg-gray-100 transition-all ease-in-out'
            >
              <Checkbox
                id={feature.id}
                checked={selectedFeatures.includes(feature.id)}
                onCheckedChange={() => handleFeatureToggle(feature.id)}
              />
              <label className='text-sm text-cyan-900' htmlFor={feature.id}>
                {feature.survey_question}
              </label>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const renderSummary = () => {
    const { complexity, time, price, totalComplexity } = calculateTotals();
    const desiredTime = parseInt(buildTime) || time;
    const timeMultiplier = time / desiredTime;
    const adjustedPrice = Math.round(price * timeMultiplier);
    const complexityPerc = Math.round((complexity / totalComplexity) * 100);

    const chatNowHref = `${CHAT_NOW_URL}?text=${CHAT_NOW_PREFILL}`;
    const ChatNowButton = () => (
      <a
        href={chatNowHref}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors'
      >
        Chat now
      </a>
    );

    return (
      <div className='w-full max-w-6xl mx-auto space-y-6'>
        <Card>
          <CardHeader>
            <h2 className='text-xl text-cyan-800 font-bold'>Summary</h2>
            <p className='text-base text-cyan-600'>
              Here's a summary of your selected features and estimated costs
            </p>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <p>
                <strong>How complex your App is:</strong> {Math.round(complexity)}
                / {Math.round(totalComplexity)} = {complexityPerc}%
              </p>
              <p className='font-manrope text-emerald-500 text-sm italic'>
                {complexityPerc <= 20
                  ? 'Easy Peasy, App so easy, We gonna build it today and launch it tomorrow 😋😘, When do we start?😅'
                  : complexityPerc <= 40
                  ? 'This app has the mantle of a YOUNG DISRUPTOR 😁💪🏽, our kind of language, MAXIMUM IMPACT!'
                  : complexityPerc <= 60
                  ? "BIG BOSS MOVES 🤔🫡, respek! luckily we've got our heads in the game, how would you like us to move today?"
                  : complexityPerc <= 80
                  ? "GAME CHANGER 🔥🔥🔥, Rock on 🤘🏾 We're always into blazing new trails!"
                  : 'Pure ROCKET SCIENCE 🫨😱😭, infact not even science, science so advanced it has morphed into MAGIC ✨🤯 Time to bring out the BIG Guns 😛💪 To which planet Mr Musk?'}
              </p>
              <p>
                <strong>How long Namoota will take to build:</strong>{' '}
                {Math.round(time)} days
              </p>
              <p>
                <strong>How long you'd like Namoota to take to build:</strong>{' '}
                {Math.round(desiredTime)} days
              </p>
              <p>
                <strong>Estimated price at Namoota's time:</strong> R
                {price.toLocaleString()}
              </p>
              <p>
                <strong>Estimated price at the desired time:</strong> R
                {adjustedPrice.toLocaleString()}
              </p>
            </div>
            <h3 className='text-xl text-cyan-800 font-bold mt-6 mb-2'>
              Selected Features
            </h3>
            <p className='text-base text-cyan-600'>
              Here's a breakdown of your selected features with complexity, time
              and cost.
            </p>
            <div className='flex flex-col mt-6'>
              <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                  <div className='overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg'>
                    <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                      <thead className='bg-gray-50 dark:bg-gray-800'>
                        <tr>
                          <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            Name
                          </th>
                          <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            Complexity (out of 5)
                          </th>
                          <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            Days to build (8hr/d)
                          </th>
                          <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            Our time (Hr)
                          </th>
                          <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            Your time (Hr)
                          </th>
                          <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            Our Price
                          </th>
                          <th className='capitalize font-bold px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            Your Price
                          </th>
                        </tr>
                      </thead>
                      <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
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
          <CardFooter>
            <Button onClick={() => setShowSummary(false)}>Back to Survey</Button>
          </CardFooter>
        </Card>

        {/* Post-summary: Namoota build? */}
        {wantNamootaToBuild === null && (
          <Card>
            <CardHeader>
              <h3 className='text-lg text-cyan-800 font-bold'>
                Would you like Namoota to build this project?
              </h3>
            </CardHeader>
            <CardContent className='flex flex-wrap gap-3'>
              <Button
                onClick={() => setWantNamootaToBuild(true)}
                className='bg-emerald-600 hover:bg-emerald-700'
              >
                Yes, I'd like to share details
              </Button>
              <Button
                variant='outline'
                onClick={() => setWantNamootaToBuild(false)}
              >
                No, thanks
              </Button>
            </CardContent>
          </Card>
        )}

        {wantNamootaToBuild === false && (
          <Card>
            <CardContent className='pt-6'>
              <p className='text-cyan-700 mb-4'>
                Thanks for using our quote tool. If you change your mind or have
                questions, we're here.
              </p>
              <ChatNowButton />
            </CardContent>
          </Card>
        )}

        {wantNamootaToBuild === true && !projectDetailsSent && (
          <Card>
            <CardHeader>
              <h3 className='text-lg text-cyan-800 font-bold'>
                Share your project details
              </h3>
              <p className='text-sm text-cyan-600'>
                We'll email your details and quote summary to our team. You can
                also chat with us on WhatsApp.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBuildRequestSubmit} className='space-y-4'>
                <div>
                  <Label htmlFor='build-name'>Name *</Label>
                  <Input
                    id='build-name'
                    value={buildRequestForm.name}
                    onChange={(e) =>
                      setBuildRequestForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder='Your name'
                    className='mt-1'
                    required
                  />
                </div>
                <div>
                  <Label htmlFor='build-email'>Email *</Label>
                  <Input
                    id='build-email'
                    type='email'
                    value={buildRequestForm.email}
                    onChange={(e) =>
                      setBuildRequestForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder='your@email.com'
                    className='mt-1'
                    required
                  />
                </div>
                <div>
                  <Label htmlFor='build-cellphone'>Phone (optional)</Label>
                  <Input
                    id='build-cellphone'
                    type='tel'
                    value={buildRequestForm.cellphone}
                    onChange={(e) =>
                      setBuildRequestForm((prev) => ({
                        ...prev,
                        cellphone: e.target.value,
                      }))
                    }
                    placeholder='+27 ...'
                    className='mt-1'
                  />
                </div>
                <div>
                  <Label htmlFor='build-details'>Project details</Label>
                  <textarea
                    id='build-details'
                    value={buildRequestForm.projectDetails}
                    onChange={(e) =>
                      setBuildRequestForm((prev) => ({
                        ...prev,
                        projectDetails: e.target.value,
                      }))
                    }
                    placeholder='Tell us about your project, timeline, or any questions...'
                    rows={4}
                    className='mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                  />
                </div>
                {submitError && (
                  <p className='text-sm text-red-600'>{submitError}</p>
                )}
                <div className='flex flex-wrap gap-3'>
                  <Button
                    type='submit'
                    disabled={submitLoading}
                    className='bg-cyan-600 hover:bg-cyan-700'
                  >
                    {submitLoading ? 'Sending...' : 'Send project details'}
                  </Button>
                  <ChatNowButton />
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {wantNamootaToBuild === true && projectDetailsSent && (
          <Card>
            <CardContent className='pt-6'>
              <p className='text-emerald-600 font-medium mb-2'>
                Your project details have been sent. We'll be in touch soon.
              </p>
              <p className='text-cyan-700 text-sm mb-4'>
                Want to chat now? Open WhatsApp and we can discuss your project.
              </p>
              <ChatNowButton />
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  if (showSummary) {
    return renderSummary();
  }

  return (
    <Card className='w-full max-w-3xl mx-auto p-4'>
      <CardHeader>
        <h2 className='text-xl text-cyan-800 font-bold'>
          Quote Estimation Survey
        </h2>
        <p className='text-base text-cyan-600'>
          Please answer any of the following that apply for your app
        </p>
        <CardDescription>My app should be able to:</CardDescription>
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

