'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
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
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ProgressSteps } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Info, LayoutGrid, Zap, Rocket, Sparkles, FileText, Calendar, Send, CheckCircle, MessageCircle } from 'lucide-react';

import appData from '@/config/pricing/app.json';
import websiteData from '@/config/pricing/website.json';
import { cn } from '@/lib/utils';

const CHAT_NOW_URL = 'https://wa.me/27603116777';
const CHAT_NOW_PREFILL = encodeURIComponent(
  'Hi, I just used the Namoota quote tool and would like to discuss my project.',
);
const STORAGE_KEY = 'namoota-quote-draft';

// Price never goes below this fraction of the "our time" quote (avoids unreasonably low quotes for very long timelines).
const MIN_PRICE_MULTIPLIER = 0.4;
// Desired build time is capped at (our estimate × this factor) for discount purposes; beyond that the floor applies.
const MAX_DESIRED_TIME_MULTIPLIER = 3;

const WIZARD_STEPS = [
  { label: 'App type', shortLabel: '1. Type', icon: '📱' },
  { label: 'Core features', shortLabel: '2. Core', icon: '⚙️' },
  { label: 'Advanced features', shortLabel: '3. Advanced', icon: '🚀' },
  { label: 'Polish', shortLabel: '4. Polish', icon: '✨' },
  { label: 'Quote & contact', shortLabel: '5. Quote', icon: '📋' },
];

const STAGE_2_TYPES = new Set([
  'auth',
  'auth-claims',
  'entity-crud',
  'user-personal-data-crud',
  'entity-crud-and-entity-state',
  'entity-states',
  'entity-collections',
  'date-entity-range',
  'learning-management-system',
]);

const STAGE_3_TYPES = new Set([
  'payment-api',
  'ecommerce',
  'payment-api-and-entity-crud',
  'entity-aggregates',
  'financial-math',
  'comms',
  'chat',
  'notifications',
  'media',
  'api-intergration',
  'entity-feed-infinite-scroll',
  'entity-metadata-collection-to-new-entity-build',
  'sub-entity-same-entity-type-interaction',
  'voting-and-support',
  'entity-collections-and-claims',
  'entity-query',
  'entity-action-job-scheduling',
  'physical-sensors',
  'gamification',
  'date-time',
  'entity-collections-metadata',
]);

const STAGE_4_TYPES = new Set([
  'entity-configuration',
  'data-conversion',
  'pdf-templating',
  'data-parse',
  'data-read',
  'privacy',
  'ux',
  'data-compliance',
  'performance',
  'content',
]);

const RECOMMENDED_BUNDLES = [
  {
    id: 'starter-invoicing',
    label: 'Starter Invoicing Pack',
    featureIds: ['user-auth', 'invoice-creation', 'client-management'],
    projectTypes: ['Invoicing App'],
  },
  {
    id: 'starter-website',
    label: 'Essential Website',
    featureIds: ['fixed-content', 'basic-navigation', 'responsive-design'],
    projectTypes: ['Static Website'],
  },
];

const CROSS_CUTTING_LABEL = 'Cross-cutting / Common';

// Short helper text shown under each project type card (customer-friendly).
const PROJECT_TYPE_HINTS = {
  'Fintech / Personal Finance App':
    'Banking, savings groups, loans, wallets — money made simple',
  'On-Demand Service / Gig Economy App':
    'Uber, SweepSouth style — book and track local services',
  'Healthcare / Telemedicine App':
    'Video consultations, appointments, patient records',
  'Food Delivery / Restaurant App':
    'Menus, orders, drivers, and delivery tracking',
  'Real Estate / Property Management App':
    'Listings, leases, rent collection, tenant portal',
  'Agriculture / Farm Management App':
    'Fields, crops, weather, and marketplace for produce',
  'Event Management / Ticketing App': 'Tickets, RSVPs, check-in, and seating',
  'Job Board / Recruitment / HR App':
    'Post jobs, track applicants, schedule interviews',
  'Marketplace App': 'Sellers, products, orders, and commissions',
  'Invoicing App': 'Invoices, clients, payments, and reminders',
  'Quotations App': 'Quotes, proposals, e-signatures, and templates',
  'Social Media App': 'Feed, stories, chat, and communities',
  'Project Management App': 'Tasks, timelines, Gantt charts, and team workload',
  'Educational App': 'Courses, progress, certificates, and discussions',
  'Messaging App': 'SMS, email, push, and in-app chat',
  'Fitness App': 'Workouts, GPS, tracking, and personal records',
  'E-commerce App': 'Products, cart, checkout, and wishlists',
  'Static Website': 'Brochure sites, landing pages, and fast static hosting',
  'Custom / Mixed': 'Show every feature (perfect for mixed ideas)',
};

// Emoji per project type for visual flair in the quote wizard.
const PROJECT_TYPE_EMOJI = {
  'Fintech / Personal Finance App': '💳',
  'On-Demand Service / Gig Economy App': '🚗',
  'Healthcare / Telemedicine App': '🏥',
  'Food Delivery / Restaurant App': '🍕',
  'Real Estate / Property Management App': '🏠',
  'Agriculture / Farm Management App': '🌾',
  'Event Management / Ticketing App': '🎫',
  'Job Board / Recruitment / HR App': '💼',
  'Marketplace App': '🛒',
  'Invoicing App': '📄',
  'Quotations App': '📝',
  'Social Media App': '👥',
  'Project Management App': '📊',
  'Educational App': '📚',
  'Messaging App': '💬',
  'Fitness App': '💪',
  'E-commerce App': '🛍️',
  'Static Website': '🌐',
  'Custom / Mixed': '🎯',
};

function buildGroupedAndSortedFeatures() {
  const byComplexity = (a, b) =>
    (a.complexity ?? 0) !== (b.complexity ?? 0)
      ? (a.complexity ?? 0) - (b.complexity ?? 0)
      : (a.days_to_complete || 0) - (b.days_to_complete || 0);

  const appGroups = appData.app_types.map((appType) => ({
    label: appType.type,
    features: [...appType.features]
      .map((f) => ({ ...f, type: f.type || 'entity-crud' }))
      .sort(byComplexity),
  }));

  const websiteFeatures = websiteData.features.map((f) => ({
    ...f,
    id: f.name.toLowerCase().replace(/\s/g, '-'),
    survey_question: `Would you like ${f.name.toLowerCase()}?`,
    type: f.type || 'entity-crud',
  }));
  const websiteGroup = {
    label: websiteData.type || 'Static Website',
    features: websiteFeatures.sort(byComplexity),
  };

  const groups = [...appGroups, websiteGroup];
  return groups.flatMap((g) =>
    g.features.map((f) => ({ ...f, groupLabel: g.label })),
  );
}

const allFeatures = buildGroupedAndSortedFeatures();

function getProjectTypeOptions() {
  const types = appData.app_types.map((t) => t.type);
  return [...types, websiteData.type || 'Static Website', 'Custom / Mixed'];
}

function getFeaturesForStage(selectedProjectTypes, stageNum) {
  if (!selectedProjectTypes?.length) return [];

  const isCustom = selectedProjectTypes.includes('Custom / Mixed');

  if (isCustom) {
    if (stageNum === 2) {
      return allFeatures.filter(
        (f) =>
          f.groupLabel === CROSS_CUTTING_LABEL || STAGE_2_TYPES.has(f.type),
      );
    }
    if (stageNum === 3) {
      return allFeatures.filter(
        (f) =>
          f.groupLabel === CROSS_CUTTING_LABEL || STAGE_3_TYPES.has(f.type),
      );
    }
    if (stageNum === 4) {
      return allFeatures.filter(
        (f) =>
          f.groupLabel === CROSS_CUTTING_LABEL || STAGE_4_TYPES.has(f.type),
      );
    }
    return allFeatures;
  }

  const set = new Set(selectedProjectTypes);
  const filtered = allFeatures.filter(
    (f) => set.has(f.groupLabel) || f.groupLabel === CROSS_CUTTING_LABEL,
  );
  if (stageNum === 2) {
    return filtered.filter(
      (f) => f.groupLabel === CROSS_CUTTING_LABEL || STAGE_2_TYPES.has(f.type),
    );
  }
  if (stageNum === 3) {
    return filtered.filter(
      (f) => f.groupLabel === CROSS_CUTTING_LABEL || STAGE_3_TYPES.has(f.type),
    );
  }
  if (stageNum === 4) {
    return filtered.filter(
      (f) => f.groupLabel === CROSS_CUTTING_LABEL || STAGE_4_TYPES.has(f.type),
    );
  }
  return [];
}

function groupFeaturesByLabel(features) {
  const byGroup = {};
  features.forEach((f) => {
    if (!byGroup[f.groupLabel]) byGroup[f.groupLabel] = [];
    byGroup[f.groupLabel].push(f);
  });
  return byGroup;
}

export default function GetAQuote({
  trustStats = { count: 40, range: 'R45,000–R180,000' },
}) {
  const [wizardStep, setWizardStep] = useState(1);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [buildTime, setBuildTime] = useState('');
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

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.selectedProjectTypes?.length)
        setSelectedProjectTypes(data.selectedProjectTypes);
      if (Array.isArray(data.selectedFeatures))
        setSelectedFeatures(data.selectedFeatures);
      if (data.buildTime != null) setBuildTime(String(data.buildTime));
      if (data.wizardStep >= 1 && data.wizardStep <= 5)
        setWizardStep(data.wizardStep);
    } catch (_) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          selectedProjectTypes,
          selectedFeatures,
          buildTime,
          wizardStep,
        }),
      );
    } catch (_) {}
  }, [selectedProjectTypes, selectedFeatures, buildTime, wizardStep]);

  const calculateTotals = useCallback(() => {
    return selectedFeatures.reduce(
      (acc, featureId) => {
        const feature = allFeatures.find((f) => f.id === featureId);
        if (feature) {
          acc.complexity += feature.complexity ?? 0;
          acc.time += feature.days_to_complete ?? 0;
          acc.price += feature.price_zar ?? 0;
        }
        return acc;
      },
      {
        complexity: 0,
        time: 0,
        price: 0,
        totalComplexity: Math.max(selectedFeatures.length * 5, 1),
      },
    );
  }, [selectedFeatures]);

  const getQuoteSummaryText = useCallback(() => {
    const { time, price } = calculateTotals();
    const desiredTime = parseInt(buildTime, 10) || time || 1;
    const rawMultiplier = time / desiredTime;
    const effectiveMultiplier = Math.max(rawMultiplier, MIN_PRICE_MULTIPLIER);
    const adjustedPrice = Math.round(price * effectiveMultiplier);
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
  }, [selectedFeatures, buildTime, calculateTotals]);

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
        buildRequestForm.projectDetails?.trim() ||
          '(No additional details provided)',
        '',
        '--- Quote summary ---',
        getQuoteSummaryText(),
      ].join('\n');
      const response = await fetch('/api/contact', {
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
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (_) {}
    } catch (err) {
      setSubmitError(
        err.message ||
          'Something went wrong. You can use Chat now to reach us.',
      );
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId],
    );
  };

  const handleGroupSelectAll = (featureIds, checked) => {
    setSelectedFeatures((prev) => {
      const set = new Set(prev);
      featureIds.forEach((id) => (checked ? set.add(id) : set.delete(id)));
      return [...set];
    });
  };

  const applyBundle = (featureIds) => {
    setSelectedFeatures((prev) => {
      const set = new Set(prev);
      featureIds.forEach((id) => set.add(id));
      return [...set];
    });
  };

  const projectTypeOptions = useMemo(() => getProjectTypeOptions(), []);
  const featuresStage2 = useMemo(
    () => getFeaturesForStage(selectedProjectTypes, 2),
    [selectedProjectTypes],
  );
  const featuresStage3 = useMemo(
    () => getFeaturesForStage(selectedProjectTypes, 3),
    [selectedProjectTypes],
  );
  const featuresStage4 = useMemo(
    () => getFeaturesForStage(selectedProjectTypes, 4),
    [selectedProjectTypes],
  );

  const visibleBundles = useMemo(
    () =>
      RECOMMENDED_BUNDLES.filter((b) =>
        b.projectTypes.some((t) => selectedProjectTypes.includes(t)),
      ),
    [selectedProjectTypes],
  );

  const chatNowHref = `${CHAT_NOW_URL}?text=${CHAT_NOW_PREFILL}`;
  const ChatNowButton = () => (
    <a
      href={chatNowHref}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors min-h-[44px] min-w-[44px]'
      aria-label='Chat on WhatsApp'
    >
      <MessageCircle className='h-4 w-4' aria-hidden />
      Chat now
    </a>
  );

  const totals = calculateTotals();
  const desiredTimeNum =
    parseInt(buildTime, 10) || Math.max(1, Math.round(totals.time));
  const timeMultiplier = totals.time / desiredTimeNum;
  const effectiveTimeMultiplier = Math.max(
    timeMultiplier,
    MIN_PRICE_MULTIPLIER,
  );
  const adjustedPrice = Math.round(totals.price * effectiveTimeMultiplier);
  const maxDesiredTimeForDiscount = Math.max(
    Math.ceil(totals.time * MAX_DESIRED_TIME_MULTIPLIER),
    90,
  );
  const showMiniSummary =
    wizardStep >= 2 && wizardStep <= 4 && selectedFeatures.length > 0;
  const isRush = totals.time > 0 && desiredTimeNum < totals.time * 0.6;

  function renderStage1() {
    return (
      <Card className='w-full max-w-4xl mx-auto'>
        <CardHeader>
          <CardTitle className='text-xl text-cyan-800 flex items-center gap-2'>
            <LayoutGrid className='h-5 w-5' aria-hidden />
            What kind of project are you building?
          </CardTitle>
          <CardDescription>
            Pick one or more that best match your idea — or choose &quot;Custom
            / Mixed&quot; if your app combines several things (most people do!)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
            role='group'
            aria-label='Project type'
          >
            {projectTypeOptions.map((type) => {
              const isSelected = selectedProjectTypes.includes(type);
              const emoji = PROJECT_TYPE_EMOJI[type] ?? '📌';
              return (
                <button
                  key={type}
                  type='button'
                  onClick={() => {
                    if (type === 'Custom / Mixed') {
                      setSelectedProjectTypes((prev) =>
                        prev.includes('Custom / Mixed')
                          ? prev.filter((t) => t !== 'Custom / Mixed')
                          : ['Custom / Mixed'],
                      );
                    } else {
                      setSelectedProjectTypes((prev) =>
                        prev.includes(type)
                          ? prev.filter((t) => t !== type)
                          : [...prev, type],
                      );
                    }
                  }}
                  className={cn(
                    'rounded-lg border-2 p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[44px]',
                    isSelected
                      ? 'border-cyan-600 bg-cyan-50 text-cyan-900'
                      : 'border-gray-200 hover:border-cyan-300 bg-white',
                  )}
                  aria-pressed={isSelected}
                >
                  <span className='font-medium'>{emoji} {type}</span>
                  {PROJECT_TYPE_HINTS[type] && (
                    <p className='text-xs text-muted-foreground mt-1'>
                      {PROJECT_TYPE_HINTS[type]}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className='flex justify-end'>
          <Button
            onClick={() => setWizardStep(2)}
            disabled={selectedProjectTypes.length === 0}
            aria-disabled={selectedProjectTypes.length === 0}
          >
            Next: Core features →
          </Button>
        </CardFooter>
      </Card>
    );
  }

  function renderFeatureStage(stageNum, title, subtitle, features, IconComponent) {
    const byGroup = groupFeaturesByLabel(features);
    const groupLabels = Object.keys(byGroup).sort((a, b) => {
      if (a === CROSS_CUTTING_LABEL) return 1;
      if (b === CROSS_CUTTING_LABEL) return -1;
      return a.localeCompare(b);
    });

    const hasFeatures = groupLabels.length > 0;

    return (
      <Card className='w-full max-w-4xl mx-auto'>
        <CardHeader>
          <CardTitle className='text-xl text-cyan-800 flex items-center gap-2'>
            {IconComponent && <IconComponent className='h-5 w-5' aria-hidden />}
            {title}
          </CardTitle>
          <CardDescription>
            {stageNum === 2 && 'The everyday basics your app probably needs'}
            {stageNum === 3 && 'Things that make money or connect people'}
            {stageNum === 4 &&
              'Nice extras that make it feel modern and trustworthy'}
          </CardDescription>
          {visibleBundles.length > 0 && (
            <div className='flex flex-wrap gap-2 pt-2'>
              {visibleBundles.map((bundle) => (
                <Badge
                  key={bundle.id}
                  variant='secondary'
                  className='cursor-pointer hover:bg-cyan-100'
                  onClick={() => applyBundle(bundle.featureIds)}
                  role='button'
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      applyBundle(bundle.featureIds);
                    }
                  }}
                >
                  ✨ Recommended: {bundle.label}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>
        <CardContent>
          {!hasFeatures ? (
            <p className='text-muted-foreground text-sm py-4'>
              No features in this category for your project type. Click Next to
              continue.
            </p>
          ) : (
            <Accordion type='multiple' defaultValue={[]}>
              {groupLabels.map((groupLabel) => {
                const groupFeatures = byGroup[groupLabel];
                const ids = groupFeatures.map((f) => f.id);
                const selectedCount = ids.filter((id) =>
                  selectedFeatures.includes(id),
                ).length;
                const allSelected = selectedCount === ids.length;

                return (
                  <AccordionItem key={groupLabel} value={groupLabel}>
                    <AccordionTrigger
                      value={groupLabel}
                      className='hover:no-underline'
                    >
                      <div className='flex items-center gap-3'>
                        <Checkbox
                          checked={allSelected}
                          onCheckedChange={(checked) =>
                            handleGroupSelectAll(ids, checked === true)
                          }
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Select all ${groupLabel}`}
                        />
                        <span className='font-semibold'>{groupLabel}</span>
                        {selectedCount > 0 && (
                          <span className='text-muted-foreground text-xs'>
                            ({selectedCount} selected)
                          </span>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value={groupLabel}>
                      <ul className='space-y-1'>
                        {groupFeatures.map((feature) => (
                          <li key={feature.id}>
                            <div
                              className={cn(
                                'flex items-center gap-3 rounded-md p-3 min-h-[44px] border border-transparent hover:bg-muted/50 hover:border-muted transition-colors',
                                selectedFeatures.includes(feature.id) &&
                                  'bg-cyan-50/50',
                              )}
                            >
                              <Checkbox
                                id={feature.id}
                                checked={selectedFeatures.includes(feature.id)}
                                onCheckedChange={() =>
                                  handleFeatureToggle(feature.id)
                                }
                                aria-describedby={`${feature.id}-desc`}
                              />
                              <label
                                htmlFor={feature.id}
                                className='flex-1 text-sm text-foreground cursor-pointer'
                                id={`${feature.id}-desc`}
                              >
                                {feature.survey_question}
                              </label>
                              <Popover>
                                <PopoverTrigger
                                  type='button'
                                  className='shrink-0 p-1 rounded hover:bg-muted text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring'
                                  aria-label={`Info about ${feature.name}`}
                                >
                                  <Info className='h-4 w-4' />
                                </PopoverTrigger>
                                <PopoverContent
                                  align='end'
                                  className='max-w-xs'
                                >
                                  <p className='text-sm'>
                                    {feature.survey_question}
                                  </p>
                                  <p className='text-xs text-muted-foreground mt-1'>
                                    Typical cost: R
                                    {feature.price_zar?.toLocaleString() ?? '—'}
                                  </p>
                                  <p className='text-xs text-muted-foreground'>
                                    Common in: {feature.groupLabel}
                                  </p>
                                </PopoverContent>
                              </Popover>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          )}
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant='ghost' onClick={() => setWizardStep(stageNum - 1)}>
            ← Back
          </Button>
          <div className='flex gap-2'>
            <Button
              variant='outline'
              onClick={() => setWizardStep(stageNum + 1)}
            >
              None of these → Next
            </Button>
            <Button onClick={() => setWizardStep(stageNum + 1)}>Next →</Button>
          </div>
        </CardFooter>
      </Card>
    );
  }

  function renderStage5() {
    const { complexity, time, price, totalComplexity } = totals;
    const complexityPerc = Math.round((complexity / totalComplexity) * 100);
    const complexityCopy =
      complexityPerc <= 20
        ? 'Easy Peasy, App so easy, We gonna build it today and launch it tomorrow 😋😘, When do we start?😅'
        : complexityPerc <= 40
          ? 'This app has the mantle of a YOUNG DISRUPTOR 😁💪🏽, our kind of language, MAXIMUM IMPACT!'
          : complexityPerc <= 60
            ? "BIG BOSS MOVES 🤔🫡, respek! luckily we've got our heads in the game, how would you like us to move today?"
            : complexityPerc <= 80
              ? "GAME CHANGER 🔥🔥🔥, Rock on 🤘🏾 We're always into blazing new trails!"
              : 'Pure ROCKET SCIENCE 🫨😱😭, in fact not even science, science so advanced it has morphed into MAGIC ✨🤯 Time to bring out the BIG Guns 😛💪 To which planet Mr Musk?';

    return (
      <div className='w-full max-w-4xl mx-auto space-y-6'>
        <Card>
          <CardHeader>
            <CardTitle className='text-xl text-cyan-800 flex items-center gap-2'>
              <Calendar className='h-5 w-5' aria-hidden />
              Timeline
            </CardTitle>
            <CardDescription>
              How many days would you like us to aim for?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor='buildTime'>Desired build time (days)</Label>
            <Input
              id='buildTime'
              type='number'
              min={1}
              max={maxDesiredTimeForDiscount}
              value={buildTime}
              onChange={(e) => setBuildTime(e.target.value)}
              placeholder={String(Math.max(1, Math.round(totals.time)))}
              className='mt-2 max-w-[120px]'
              aria-describedby='buildTime-hint'
            />
            <p
              id='buildTime-hint'
              className='text-xs text-muted-foreground mt-1'
            >
              Our estimate: {Math.round(totals.time)} days at R
              {totals.price.toLocaleString()}. Longer timelines get a discount
              (price floor applies after {maxDesiredTimeForDiscount} days).
            </p>
          </CardContent>
          <CardFooter>
            <Button variant='outline' onClick={() => setWizardStep(4)}>
              ← Back
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-xl text-cyan-800 flex items-center gap-2'>
              <FileText className='h-5 w-5' aria-hidden />
              Summary
            </CardTitle>
            <CardDescription>
              Your selected features and estimated costs
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p>
              <strong>Complexity:</strong> {Math.round(complexity)} /{' '}
              {Math.round(totalComplexity)} = {complexityPerc}%
            </p>
            <p className='text-emerald-600 text-sm italic'>{complexityCopy}</p>
            <p>
              <strong>Our time:</strong> {Math.round(time)}+ days · R
              {price.toLocaleString()}
            </p>
            <p>
              <strong>Your desired time:</strong> {Math.round(desiredTimeNum)}{' '}
              days · R
              {time === desiredTimeNum
                ? price.toLocaleString()
                : adjustedPrice.toLocaleString()}
            </p>

            {isRush && (
              <div
                className='rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800'
                role='alert'
              >
                ⚡ Faster delivery increases cost; we've applied a rush multiplier.
                Want to discuss timelines?{' '}
                <a
                  href={chatNowHref}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline font-medium'
                >
                  Chat with us
                </a>
              </div>
            )}

            {trustStats && (
              <p className='text-sm text-muted-foreground'>
                📊 We've built {trustStats.count}+ similar apps. Typical range for
                projects like this: {trustStats.range}.
              </p>
            )}

            <div className='overflow-x-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>Complexity</TableHead>
                    <TableHead>Days (our)</TableHead>
                    <TableHead>Hours (our)</TableHead>
                    <TableHead>Hours (desired)</TableHead>
                    <TableHead>Price (our)</TableHead>
                    <TableHead>Price (desired)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedFeatures.map((id) => {
                    const f = allFeatures.find((x) => x.id === id);
                    if (!f) return null;
                    const ourHr = (f.days_to_complete ?? 0) * 8;
                    const desiredHr = Math.round(ourHr / effectiveTimeMultiplier);
                    const priceDesired = Math.round(
                      (f.price_zar ?? 0) * effectiveTimeMultiplier,
                    );
                    return (
                      <TableRow key={f.id}>
                        <TableCell className='font-medium'>{f.name}</TableCell>
                        <TableCell>{f.complexity}</TableCell>
                        <TableCell>{f.days_to_complete}</TableCell>
                        <TableCell>{ourHr}</TableCell>
                        <TableCell>{desiredHr}</TableCell>
                        <TableCell>R{f.price_zar}</TableCell>
                        <TableCell>R{priceDesired}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {wantNamootaToBuild === null && (
          <Card>
            <CardHeader>
              <CardTitle className='text-lg text-cyan-800 flex items-center gap-2'>
                <CheckCircle className='h-5 w-5' aria-hidden />
                Would you like Namoota to build this project?
              </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-wrap gap-3'>
              <Button
                onClick={() => setWantNamootaToBuild(true)}
                className='bg-emerald-600 hover:bg-emerald-700 min-h-[44px]'
              >
                👍 Yes, I'd like to share details
              </Button>
              <Button
                variant='outline'
                onClick={() => setWantNamootaToBuild(false)}
                className='min-h-[44px]'
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
                questions, we're here. 💬
              </p>
              <ChatNowButton />
            </CardContent>
          </Card>
        )}

        {wantNamootaToBuild === true && !projectDetailsSent && (
          <Card>
            <CardHeader>
              <CardTitle className='text-lg text-cyan-800 flex items-center gap-2'>
                <Send className='h-5 w-5' aria-hidden />
                Share your project details
              </CardTitle>
              <CardDescription>
                We'll email your details and quote summary to our team. You can
                also chat with us on WhatsApp.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBuildRequestSubmit} className='space-y-4'>
                <div>
                  <Label htmlFor='build-name'>Name *</Label>
                  <Input
                    id='build-name'
                    value={buildRequestForm.name}
                    onChange={(e) =>
                      setBuildRequestForm((p) => ({
                        ...p,
                        name: e.target.value,
                      }))
                    }
                    placeholder='Your name'
                    className='mt-1 min-h-[44px]'
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
                      setBuildRequestForm((p) => ({
                        ...p,
                        email: e.target.value,
                      }))
                    }
                    placeholder='your@email.com'
                    className='mt-1 min-h-[44px]'
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
                      setBuildRequestForm((p) => ({
                        ...p,
                        cellphone: e.target.value,
                      }))
                    }
                    placeholder='+27 ...'
                    className='mt-1 min-h-[44px]'
                  />
                </div>
                <div>
                  <Label htmlFor='build-details'>Project details</Label>
                  <textarea
                    id='build-details'
                    value={buildRequestForm.projectDetails}
                    onChange={(e) =>
                      setBuildRequestForm((p) => ({
                        ...p,
                        projectDetails: e.target.value,
                      }))
                    }
                    placeholder='Tell us about your project, timeline, or any questions...'
                    rows={4}
                    className='mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                  />
                </div>
                {submitError && (
                  <p className='text-sm text-red-600' role='alert'>
                    {submitError}
                  </p>
                )}
                <div className='flex flex-wrap gap-3'>
                  <Button
                    type='submit'
                    disabled={submitLoading}
                    className='bg-cyan-600 hover:bg-cyan-700 min-h-[44px] inline-flex items-center gap-2'
                  >
                    <Send className='h-4 w-4' aria-hidden />
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
              <p className='text-emerald-600 font-medium mb-2 flex items-center gap-2'>
                <CheckCircle className='h-5 w-5 shrink-0' aria-hidden />
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
  }

  return (
    <div className='relative pb-24'>
      <div className='sticky top-0 z-10 bg-background/95 backdrop-blur py-3 border-b mb-6'>
        <ProgressSteps
          steps={WIZARD_STEPS}
          currentStep={wizardStep}
          onStepClick={(step) => setWizardStep(step)}
          className='max-w-4xl mx-auto px-4'
        />
      </div>

      <div className='px-4'>
        {wizardStep === 1 && renderStage1()}
        {wizardStep === 2 &&
          renderFeatureStage(
            2,
            'Core features',
            'Auth, users, and basic CRUD relevant to your project type.',
            featuresStage2,
            Zap,
          )}
        {wizardStep === 3 &&
          renderFeatureStage(
            3,
            'Advanced features',
            'Payments, integrations, media, and more.',
            featuresStage3,
            Rocket,
          )}
        {wizardStep === 4 &&
          renderFeatureStage(
            4,
            'Polish & cross-cutting',
            'Dark mode, i18n, compliance, and common extras.',
            featuresStage4,
            Sparkles,
          )}
        {wizardStep === 5 && renderStage5()}
      </div>

      {showMiniSummary && (
        <div
          className='fixed bottom-0 left-0 right-0 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-20 bg-card border shadow-lg rounded-lg p-4 sm:rounded-xl'
          role='complementary'
          aria-label='Quote summary'
        >
          <p className='text-sm font-medium'>
            📋 {selectedFeatures.length} features · R
            {totals.price.toLocaleString()} · ~{Math.round(totals.time)} days
          </p>
          <Button
            className='w-full mt-2 min-h-[44px]'
            onClick={() => setWizardStep(5)}
          >
            View full summary →
          </Button>
        </div>
      )}
    </div>
  );
}
