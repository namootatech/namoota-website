/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const SOLUTIONS = [
  {
    heading: 'Multi-Vendor Marketplaces',
    kicker:
      'Sell like Amazon/Takealot—vendors onboarded, commissions tracked, and checkout built for SA customers.',
    products: [
      {
        name: 'General Marketplace Platform',
        description:
          'A premium multi-vendor marketplace where vendors list products and you earn commission per order—branded under your Namoota storefront.',
        features: [
          'Multi-vendor storefront with vendor onboarding and brand controls',
          'Commission + admin payout rules with simple tracking',
          'SA-ready payments options (PayFast, Ozow, Yoco) built in',
          'Mobile-first product pages that convert fast on Jozi traffic',
          'Order & vendor dashboards to keep fulfilment moving',
        ],
        targetCustomer:
          'Local entrepreneurs, retail groups, and Jozi traders launching a marketplace.',
        monetizationHint:
          'Monthly subscription (e.g. R999–R2,999/month) + commission (e.g. 5%–15%)',
      },
      {
        name: 'Township Goods Marketplace',
        description:
          'A township-friendly marketplace for fashion, everyday essentials, and value bundles—built for local trust and fast repeat buying.',
        features: [
          'Category hubs designed for quick browsing (low data friendly)',
          'Bundles and promos that lift average order value',
          'WhatsApp-first order updates for customers who prefer chat',
          'Simple vendor setup for spaza and local reseller partnerships',
          'Delivery status tracking so customers feel confident',
        ],
        targetCustomer:
          'Fashion resellers, local retail co-ops, and township entrepreneurs in Gauteng.',
        monetizationHint:
          'Subscription (R499–R1,499/month) + vendor listing fees or commission per sale',
      },
      {
        name: 'Product & Service Hybrid Marketplace',
        description:
          'A hybrid marketplace for businesses that sell goods and services together—one brand, one platform, multiple revenue streams.',
        features: [
          'Unified catalogue for products and service listings in one journey',
          'Bookings requests and product purchases side-by-side',
          'Trust tools: reviews, ratings, and order confirmations',
          'SA payment integrations for smooth checkout (PayFast/Ozow/Yoco)',
          'Admin tools for promotions, bundles, and product-service combos',
        ],
        targetCustomer:
          'Clinics, salons, event organisers, and SMEs offering both goods and services.',
        monetizationHint:
          'Monthly subscription (R999–R2,499/month) + take-rate on transactions',
      },
    ],
  },
  {
    heading: 'Service Marketplaces',
    kicker:
      'Like Fiverr/Uber/SweepSouth—match buyers to trusted providers and automate the money-and-messages flow.',
    products: [
      {
        name: 'Home Services Marketplace',
        description:
          'A multi-category service marketplace that helps customers book and pay, while providers manage jobs from a clean dashboard.',
        features: [
          'Service provider profiles with ratings, jobs, and quick discovery',
          'Job quotes, scheduling requests, and admin approvals',
          'WhatsApp integration for confirmations and customer updates',
          'SA-friendly payments (PayFast/Ozow/Yoco) for trust at checkout',
          'Dispute/ticket tools to keep transactions safe',
        ],
        targetCustomer:
          'Agencies, service networks, and Jozi entrepreneurs launching “services under one app”.',
        monetizationHint:
          'Monthly plan + commission per completed job + lead boost add-ons (e.g. R199–R499)',
      },
      {
        name: 'Tutors & Education Platform',
        description:
          'A tutoring marketplace for learners and training centres—book sessions fast and scale your education brand.',
        features: [
          'Tutor discovery by location, grade, and subject',
          'Session booking with availability management',
          'Payments built for SA learners using PayFast/Ozow/Yoco',
          'WhatsApp reminders and confirmations to reduce no-shows',
          'Packages and pricing tiers to help tutors earn more per learner',
        ],
        targetCustomer:
          'Tuition centres, tutor networks, and education entrepreneurs across Gauteng.',
        monetizationHint:
          'Subscription (R799–R1,999/month) + platform fee per booking or per learner',
      },
      {
        name: 'Home Care & Cleaning Marketplace',
        description:
          'A fast-booking cleaning and home care marketplace built for “I need it today” customers and repeat jobs.',
        features: [
          'Service window booking with instant request flow',
          'Job status tracking with WhatsApp-based customer notifications',
          'Pricing templates by room size, frequency, and add-ons',
          'Provider dashboard for schedules, invoicing, and repeat services',
          'Admin controls for service rules, coverage areas, and promotions',
        ],
        targetCustomer:
          'Cleaning companies, home-care brands, and local service entrepreneurs.',
        monetizationHint:
          'Monthly plan + commission on each job; add premium tiers for top providers',
      },
    ],
  },
  {
    heading: 'Booking & Appointment Systems (Hot in SA)',
    kicker:
      'Cut calls, reduce no-shows, and turn every booking into a repeat customer—mobile-first and WhatsApp-enabled.',
    products: [
      {
        name: 'Salon & Beauty Booking System',
        description:
          'A booking OS for salons, barbers, nail techs, hairstylists, and spas—built to capture leads and confirm appointments quickly.',
        features: [
          'Service menus, staff selection, and availability management',
          'Deposits and secure payments (PayFast/Ozow/Yoco) where applicable',
          'WhatsApp reminders that help reduce no-shows',
          'Customer profiles with booking history and repeat-ready prompts',
          'Admin dashboard for capacity, promotions, and pricing control',
        ],
        targetCustomer:
          'Salon owners and beauty service brands across Johannesburg.',
        monetizationHint:
          'Monthly subscription (R499–R1,499/month) + setup fee (optional) + add-on revenue',
      },
      {
        name: 'Clinic & Doctor Booking Platform',
        description:
          'A trusted appointment system for clinics and healthcare providers—patient-friendly scheduling that works on mobile.',
        features: [
          'Appointments scheduling across multiple doctors and departments',
          'Patient confirmations and reminders via WhatsApp + automated updates',
          'Service packages for consultations, procedures, and follow-ups',
          'Cancel/reschedule tools and waitlist management',
          'Optional SA payment options (PayFast/Ozow/Yoco) for smooth intake',
        ],
        targetCustomer:
          'Clinics, dental practices, physiotherapists, and healthcare groups in Gauteng.',
        monetizationHint:
          'Monthly subscription (R999–R2,499/month) tiered by doctors/locations',
      },
      {
        name: 'Fitness & Trainer Scheduler',
        description:
          'Class and trainer booking for gyms, personal trainers, bootcamps, and wellness studios—built for reliable attendance.',
        features: [
          'Class/session booking with capacity and schedule controls',
          'Trainer profiles, session pricing, and package handling',
          'Mobile payments for packages/session credits (PayFast/Ozow/Yoco)',
          'WhatsApp “you’re in” confirmations to keep members engaged',
          'Admin tools for class management and promo scheduling',
        ],
        targetCustomer:
          'Gym owners, fitness studios, and fitness trainers building consistent demand.',
        monetizationHint:
          'Monthly subscription + package-based fees + optional payment add-ons',
      },
      {
        name: 'Professional Services Booker',
        description:
          'For businesses that win by booked consultations—premium booking pages with WhatsApp confirmations and streamlined onboarding.',
        features: [
          'Consult landing pages and booking flows for packages and time slots',
          'Payment confirmation options for higher show-up rates',
          'WhatsApp-first communication for follow-ups and appointment details',
          'Multiple consultation types (30/60/90 min, packages)',
          'Admin tools for notes, availability, and client onboarding workflows',
        ],
        targetCustomer:
          'Accountants, psychologists, legal service providers, and business consultants.',
        monetizationHint:
          'Monthly subscription (R599–R1,799/month) + optional commission per paid consult',
      },
    ],
  },
  {
    heading: 'On-Demand / Delivery Platforms (Uber-style)',
    kicker:
      'Bring drivers, runners, dispatch, and tracking together in one brand—mobile-first and load-shedding resilient.',
    products: [
      {
        name: 'Food & Grocery Delivery App',
        description:
          'A delivery platform for restaurants and grocery partners—designed for fast ordering, reliable dispatch, and repeat customers.',
        features: [
          'Multi-partner or multi-restaurant ordering with branded menus',
          'Driver/runner delivery workflow with order tracking',
          'Lightweight mobile-first ordering experiences',
          'WhatsApp notifications for dispatch and delivery updates',
          'SA payment support (PayFast/Ozow/Yoco) with clear receipts',
        ],
        targetCustomer:
          'Restaurant groups, grocery stores, and delivery startups in Johannesburg.',
        monetizationHint:
          'Subscription + commission per order + delivery fee share',
      },
      {
        name: 'Niche Delivery System (Meat, Pharmacy & Regulated Categories)',
        description:
          'A category-controlled delivery platform for niche items where trust and speed matter.',
        features: [
          'Category-specific checkout flows and fulfilment rules',
          'Partner verification workflows to protect customer trust',
          'Driver assignment + WhatsApp ETAs and status updates',
          'SA-friendly receipts and payment confirmations (PayFast/Ozow/Yoco)',
          'Admin controls to manage rules, availability, and promotions',
        ],
        targetCustomer:
          'Specialist retailers: butcheries, pharmacies, and other niche delivery operators.',
        monetizationHint:
          'Monthly subscription (R1,299–R3,499/month) + category commission + onboarding fees',
      },
      {
        name: 'Courier & Logistics Platform',
        description:
          'A courier platform for parcels and documents, with driver app experience for assignments and proof-of-delivery.',
        features: [
          'Customer booking with pickup/dropoff details',
          'Driver app workflow for receiving assignments and confirming delivery',
          'Order tracking statuses with automated notifications',
          'Admin dashboard for dispatch, routes, and payout management',
          'SA payment options for smooth customer experiences',
        ],
        targetCustomer:
          'Courier businesses, logistics startups, and driver networks in Gauteng.',
        monetizationHint:
          'Monthly subscription + per-delivery fee + admin commission',
      },
    ],
  },
  {
    heading: 'Business SaaS Tools (Fast Volume Sellers)',
    kicker:
      'These are the easiest platforms to sell in bulk—every business needs CRM, POS, and websites that actually convert.',
    products: [
      {
        name: 'CRM with WhatsApp Integration',
        description:
          'A CRM built for South Africans who sell on WhatsApp: capture leads, automate follow-ups, and track conversions without losing customers.',
        features: [
          'Lead capture forms + WhatsApp lead routing',
          'Pipeline stages, reminders, and follow-up scheduling',
          'Customer history so your team never starts from zero',
          'Analytics snapshots: conversion rates and lead sources',
          'Team access for agencies and sales groups',
        ],
        targetCustomer:
          'Agencies, property managers, clinics, and local SMEs that rely on WhatsApp sales.',
        monetizationHint:
          'Subscription tiers (R499–R1,999/month) based on users/leads + optional onboarding',
      },
      {
        name: 'POS & Inventory for Retail / Spaza',
        description:
          'A complete POS with inventory control—so you sell with clarity and restock with confidence.',
        features: [
          'Fast checkout flow with product search',
          'Inventory tracking with low-stock alerts',
          'Supplier and catalog management tools',
          'Sales reporting for margins and bestsellers',
          'Customer-friendly purchase experience',
        ],
        targetCustomer:
          'Spaza shops, small retailers, restaurants, and micro-supply chains.',
        monetizationHint:
          'Monthly subscription (R999–R2,999/month) + optional hardware bundle pricing',
      },
      {
        name: 'Branded Website Builder + Hosting',
        description:
          'Rebrandable website builder and hosting—like your own Wix—so you can launch client websites fast and confidently.',
        features: [
          'Branded templates for industries: salons, clinics, and services',
          'Mobile-first pages built for conversions',
          'Lead capture + WhatsApp contact modules',
          'Hosting included so clients launch immediately',
          'Admin tools to manage multiple client sites under your brand',
        ],
        targetCustomer:
          'Agencies, branding businesses, and website-as-a-service entrepreneurs.',
        monetizationHint:
          'Monthly client subscription (R599–R1,999/month) + your agency tier (R999–R3,999/month)',
      },
    ],
  },
  {
    heading: 'AI-Powered Tools (New, Easy Money)',
    kicker:
      'AI tools help businesses move faster: fewer manual replies, more listings, and automated marketing that converts.',
    products: [
      {
        name: 'AI Customer Support Chatbot',
        description:
          'A customer support bot that answers FAQs, captures leads, and guides customers—perfect when humans are busy.',
        features: [
          'FAQ automation for bookings, pricing, and service details',
          'Lead capture and referral to your sales process',
          'Local tone templates designed for South African customers',
          'Escalation rules to hand off to your team when needed',
          'Continuous improvement with saved answers and FAQ updates',
        ],
        targetCustomer:
          'Clinics, salons, ecommerce stores, and service providers with repetitive questions.',
        monetizationHint:
          'Subscription (R499–R1,499/month) per brand or usage tier',
      },
      {
        name: 'AI Content & Listing Generator',
        description:
          'Generate product listings, service descriptions, and social posts that sound premium and local—fast.',
        features: [
          'Auto-generate product/service listings and specials',
          'Social captions with SA-friendly tone and clear CTAs',
          'Reusable brand voice templates',
          'Bulk campaign content for weekly promos',
          'SEO-ready structure for better discoverability',
        ],
        targetCustomer:
          'Sellers, marketplaces, salons, tutors, and SMEs that need consistent content.',
        monetizationHint:
          'Monthly subscription (R499–R1,299/month) + pay-as-you-go content credits',
      },
      {
        name: 'AI Marketing Automation Suite',
        description:
          'Turn interest into sales with automated campaigns—built for ecommerce and service businesses that run promotions often.',
        features: [
          'Automated campaign drafts for email and ad creatives',
          'WhatsApp promo workflows for quick conversion messaging',
          'Audience segmentation guidance for local demographics',
          'Campaign analytics snapshots so you improve each cycle',
          'Launch-ready templates for common South African offers',
        ],
        targetCustomer:
          'Ecommerce brands, service businesses, and clinics running regular promotions.',
        monetizationHint:
          'Subscription (R999–R2,499/month) + optional campaign management add-on',
      },
    ],
  },
  {
    heading: 'Fintech Platforms (High Reward, Compliance First)',
    kicker:
      'Money products can be powerful—these are designed to help you run responsibly and transparently (with legal/compliance oversight).',
    products: [
      {
        name: 'Peer-to-Peer Micro Lending Platform',
        description:
          'A lending marketplace that matches lenders with borrowers—built for transparency, tracking, and trust.',
        features: [
          'Loan request onboarding workflow with borrower profile basics',
          'Repayment schedule tracking with automated reminders',
          'Admin dashboard for payouts, repayments, and status management',
          'Structured identity/compliance flows where required',
          'Optional SA payment integration support (PayFast/Ozow/Yoco)',
        ],
        targetCustomer:
          'Fintech startups, savings communities, and lending platforms looking to scale responsibly.',
        monetizationHint:
          'Setup + monthly platform fee (R1,999–R5,999/month) + origination/service fees',
      },
      {
        name: 'Business Wallet & Payments Dashboard',
        description:
          'A clean payments dashboard that helps businesses reconcile transactions, track commissions, and understand cashflow.',
        features: [
          'Transaction history and reporting views',
          'Commission/fees/partner payout views with clearer settlement tracking',
          'Reconciliation-ready summaries and exports',
          'Automated status updates to reduce support tickets',
          'SA payment experience support (PayFast/Ozow/Yoco)',
        ],
        targetCustomer:
          'Marketplace operators, delivery platforms, and service networks managing payments at scale.',
        monetizationHint:
          'Monthly subscription (R999–R3,499/month) tiered by transaction volume',
      },
    ],
  },
  {
    heading: 'Niche Vertical Platforms (Underserved Winners in SA)',
    kicker:
      'Own the vertical, own the demand. These platforms solve everyday admin pain for schools, churches, property, and hiring.',
    products: [
      {
        name: 'School Management System',
        description:
          'A school OS for fees, attendance, and results—built for parents and admins who need clarity fast.',
        features: [
          'Fee tracking with receipts and payment visibility',
          'Attendance tracking and class management workflows',
          'Results management with parent-friendly access',
          'Student profiles with structured admin tools',
          'Mobile-first updates and automated notifications',
        ],
        targetCustomer:
          'Schools, learning centres, and private tuition schools in Gauteng.',
        monetizationHint:
          'Subscription (R999–R2,999/month) per school or tiered by student bands',
      },
      {
        name: 'Church Management & Donations Platform',
        description:
          'Donations, members, and events—one church management platform that reduces admin chaos and increases engagement.',
        features: [
          'Donation tracking and transparent reporting views',
          'Member profiles and event participation tools',
          'Event calendars with reminders and RSVP workflows',
          'WhatsApp integration for announcements and follow-ups',
          'Admin dashboard for roles, events, and engagement insights',
        ],
        targetCustomer: 'Churches, ministries, and faith-based organisations.',
        monetizationHint:
          'Subscription (R599–R1,999/month) + optional support plan',
      },
      {
        name: 'Property Rental & Tenant Manager',
        description:
          'A property marketplace that includes tenant tools—so leads get handled faster and leases happen sooner.',
        features: [
          'Landlord/agent onboarding with branded listings',
          'Tenant inquiry + WhatsApp confirmation workflows',
          'Application and screening steps in a structured flow',
          'Rent schedules and admin tools for requests',
          'Mobile-first browsing for people searching in Gauteng',
        ],
        targetCustomer:
          'Landlords, property agencies, letting agents, and rental networks.',
        monetizationHint:
          'Monthly subscription + listing fees + commission for successful leases',
      },
      {
        name: 'Local Job Board Platform',
        description:
          'A job board built for local hiring—structured applications, shortlists, and messaging that reduces spam.',
        features: [
          'Employer and recruiter dashboards for posting and management',
          'Candidate profiles and structured applications',
          'Shortlisting workflows and recruiter messaging',
          'WhatsApp notifications for interview prompts and status updates',
          'Admin tools to moderate categories, locations, and listings',
        ],
        targetCustomer:
          'SMEs, staffing agencies, and local recruitment platform operators.',
        monetizationHint:
          'Employer posting subscription (R499–R1,999/month) + paid boosts (R199–R499)',
      },
    ],
  },
];

function SolutionCard({ product, onRequestQuote }) {
  return (
    <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-900 dark:border-gray-800'>
      <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
        {product.name}
      </h3>
      <p className='mt-3 text-gray-600 dark:text-gray-300 leading-relaxed'>
        {product.description}
      </p>

      <ul className='mt-5 space-y-2 text-sm text-gray-700 dark:text-gray-200'>
        {product.features.map((f) => (
          <li key={f} className='flex gap-3'>
            <span className='mt-2 h-1.5 w-1.5 rounded-full bg-sky-500 flex-none' />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className='mt-5 space-y-2'>
        <p className='text-xs font-semibold tracking-widest uppercase text-sky-700 dark:text-sky-400'>
          Target customer
        </p>
        <p className='text-sm text-gray-800 dark:text-gray-100'>
          {product.targetCustomer}
        </p>
      </div>

      <p className='mt-3 text-sm font-medium text-gray-900 dark:text-white'>
        Monetization: {product.monetizationHint}
      </p>

      <div className='mt-6'>
        <button
          type='button'
          onClick={() => onRequestQuote(product.name)}
          className='inline-flex items-center justify-center w-full rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition'
        >
          Request Quote
        </button>
      </div>
    </div>
  );
}

export default function BusinessInABoxSolutionsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const modalRef = useRef(null);
  const nameInputRef = useRef(null);
  const lastActiveElementRef = useRef(null);

  // Replace with your Namoota Tech WhatsApp number (no leading + required in wa.me).
  const WHATSAPP_NUMBER = '27603116777';

  const openModal = (productName) => {
    lastActiveElementRef.current = document.activeElement;
    setSelectedProductName(productName);
    setFormState({
      name: '',
      phone: '',
      email: '',
      message: `Hi, I'd like more info about ${productName} for my business.`,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.setTimeout(() => {
      lastActiveElementRef.current?.focus?.();
    }, 0);
  };

  // Esc key close + basic focus restoration.
  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isModalOpen]);

  // Focus first input when modal opens.
  useEffect(() => {
    if (!isModalOpen) return;
    const t = window.setTimeout(() => {
      nameInputRef.current?.focus?.();
    }, 0);
    return () => window.clearTimeout(t);
  }, [isModalOpen, selectedProductName]);

  // Focus trap (basic) for Tab/Shift+Tab.
  useEffect(() => {
    if (!isModalOpen) return;
    const modalEl = modalRef.current;
    if (!modalEl) return;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      const focusable = Array.from(
        modalEl.querySelectorAll(focusableSelector),
      ).filter(
        (el) =>
          !el.hasAttribute('disabled') &&
          el.getAttribute('aria-hidden') !== 'true' &&
          el.tabIndex !== -1,
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    modalEl.addEventListener('keydown', handleKeyDown);
    return () => modalEl.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <section
      id='business-in-a-box'
      className='py-24 bg-sky-50 dark:bg-gray-900'
    >
      <div className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5'>
        <div className='max-w-3xl'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white'>
            Namoota Business-in-a-Box Solutions
          </h2>
          <p className='mt-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
            Don’t build from scratch. Launch fast with Namoota Business-in-a-Box
            — fully rebranded, locally integrated platforms ready for your
            brand. We handle the tech so you can build the empire.
          </p>
          <p className='mt-3 text-gray-700 dark:text-gray-300'>
            Perfect for Jozi entrepreneurs, township-ready operators, and SA
            SMEs who need mobile-first, WhatsApp-friendly, PayFast/Ozow/Yoco
            supported experiences.
          </p>
        </div>

        <div className='mt-14 space-y-14'>
          {SOLUTIONS.map((cat) => (
            <div key={cat.heading}>
              <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white'>
                {cat.heading}
              </h2>
              <p className='mt-3 text-gray-700 dark:text-gray-300'>
                {cat.kicker}
              </p>

              <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {cat.products.map((p) => (
                  <SolutionCard
                    key={p.name}
                    product={p}
                    onRequestQuote={openModal}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 rounded-2xl bg-gradient-to-r from-sky-900 to-cyan-500 text-white p-8 sm:p-10'>
          <h3 className='text-2xl sm:text-3xl font-bold'>
            Ready to Launch Your Empire?
          </h3>
          <p className='mt-3 text-white/90 max-w-2xl leading-relaxed'>
            Tell us which platform you want to launch under your Namoota brand.
            We’ll confirm scope, timeline, and integration details (including
            WhatsApp and SA payment support) and get you started.
          </p>
          <div className='mt-6 flex flex-col sm:flex-row gap-3 max-w-xl'>
            <Link
              href='/get-a-quote'
              className='inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition'
            >
              Get Your Custom Quote Today
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition'
            >
              Talk to a Namoota Specialist
            </Link>
          </div>
          <p className='mt-4 text-sm text-white/80'>
            Typical starts from{' '}
            <span className='font-semibold'>R499–R2,999/month</span> for
            subscriptions (depending on platform and features).
          </p>
        </div>

        {isModalOpen && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'
            role='presentation'
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div
              ref={modalRef}
              role='dialog'
              aria-modal='true'
              aria-labelledby='bizab-modal-title'
              className='relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-900 dark:text-gray-100'
            >
              <button
                type='button'
                onClick={closeModal}
                aria-label='Close modal'
                className='absolute right-3 top-3 inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition dark:text-gray-300 dark:hover:bg-gray-800'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>

              <h3
                id='bizab-modal-title'
                className='text-xl font-extrabold text-gray-900 dark:text-gray-100 pr-8'
              >
                Interested in {selectedProductName}?
              </h3>

              <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
                Share your details and we’ll respond with next steps and a
                launch plan.
              </p>

              <form
                className='mt-5 space-y-4'
                onSubmit={(e) => {
                  e.preventDefault();
                  const payload = {
                    productName: selectedProductName,
                    ...formState,
                  };
                  // eslint-disable-next-line no-console
                  console.log('Message sent!', payload);
                  alert("Sent! We'll reply soon.");
                  closeModal();
                }}
              >
                <input
                  type='hidden'
                  name='productName'
                  value={selectedProductName}
                />

                <div>
                  <label
                    htmlFor='bizab-name'
                    className='block text-sm font-semibold text-gray-900 dark:text-gray-100'
                  >
                    Name
                  </label>
                  <input
                    ref={nameInputRef}
                    id='bizab-name'
                    name='name'
                    type='text'
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((p) => ({
                        ...p,
                        name: e.target.value,
                      }))
                    }
                    className='mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700'
                    autoComplete='name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='bizab-phone'
                    className='block text-sm font-semibold text-gray-900 dark:text-gray-100'
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    id='bizab-phone'
                    name='phone'
                    type='tel'
                    required
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState((p) => ({
                        ...p,
                        phone: e.target.value,
                      }))
                    }
                    placeholder='+27 ...'
                    className='mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700'
                    autoComplete='tel'
                  />
                </div>

                <div>
                  <label
                    htmlFor='bizab-email'
                    className='block text-sm font-semibold text-gray-900 dark:text-gray-100'
                  >
                    Email
                  </label>
                  <input
                    id='bizab-email'
                    name='email'
                    type='email'
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((p) => ({
                        ...p,
                        email: e.target.value,
                      }))
                    }
                    className='mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700'
                    autoComplete='email'
                  />
                </div>

                <div>
                  <label
                    htmlFor='bizab-message'
                    className='block text-sm font-semibold text-gray-900 dark:text-gray-100'
                  >
                    Message / Business Type
                  </label>
                  <textarea
                    id='bizab-message'
                    name='message'
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((p) => ({
                        ...p,
                        message: e.target.value,
                      }))
                    }
                    className='mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700'
                  />
                </div>

                <div className='flex flex-col sm:flex-row gap-3'>
                  <button
                    type='submit'
                    className='flex-1 rounded-xl bg-sky-600 hover:bg-sky-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition'
                  >
                    Send Message
                  </button>

                  <a
                    href={`https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hi Namoota Tech, interested in ${selectedProductName}`,
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800'
                  >
                    Or WhatsApp us
                  </a>
                </div>

                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  By sending this message, you agree to be contacted about your
                  request.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
