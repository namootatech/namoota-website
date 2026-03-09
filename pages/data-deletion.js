import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-xl font-semibold text-sky-700 mb-4">{title}</h2>
    <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
  </section>
);

export default function DataDeletion() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: 'Data Deletion Request',
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ email: '', name: '', message: '' });
      } else {
        alert('Something went wrong. Please email us at info@namoota.co.za.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please email us at info@namoota.co.za.');
    }
  };

  return (
    <>
      <Head>
        <title>Data Deletion - Namoota</title>
        <meta name="description" content="Request deletion of your personal data from Namoota. How we handle data deletion requests." />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="max-w-3xl mx-auto py-12 px-4">
        <nav className="mb-8">
          <Link
            href="/"
            className="text-sky-600 hover:text-sky-700 text-sm font-medium"
          >
            ← Back to home
          </Link>
        </nav>
        <h1 className="text-3xl font-bold text-sky-900 mb-2">Data Deletion</h1>
        <p className="text-gray-500 mb-10">Request deletion of your personal data</p>

        <Section title="Your rights">
          <p>
            You have the right to request deletion of your personal data that we hold. This page explains how to submit a request and what you can expect.
          </p>
        </Section>

        <Section title="What we delete">
          <p>When you request deletion, we will remove or anonymise:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Account and profile information</li>
            <li>Contact details (email, phone, address)</li>
            <li>Messages and support correspondence linked to you</li>
            <li>Other personal data we hold that identifies you</li>
          </ul>
          <p className="pt-2">
            We may retain certain data where we have a legal obligation to do so (e.g. tax, contracts) or where anonymised data is used for analytics. We will not use retained data to identify you.
          </p>
        </Section>

        <Section title="How to request deletion">
          <p>
            Submit the form below or email us at{' '}
            <a href="mailto:info@namoota.co.za" className="text-sky-600 hover:underline">info@namoota.co.za</a> with the subject “Data Deletion Request”. Include the email address associated with your account or data so we can locate your information.
          </p>
        </Section>

        <Section title="What happens next">
          <p>
            We will confirm receipt of your request and aim to complete the deletion within 30 days. We may contact you to verify your identity before processing. You will receive a confirmation once your data has been deleted.
          </p>
        </Section>

        {submitted ? (
          <div className="mb-10 p-4 bg-sky-50 border border-sky-200 rounded-lg text-sky-800">
            <p className="font-medium">Request received</p>
            <p className="text-sm mt-1">
              We have received your data deletion request and will process it as soon as possible. We will contact you at the email you provided if we need to verify your identity or confirm completion.
            </p>
          </div>
        ) : (
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">Submit a request</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email (associated with your account/data)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional details (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="e.g. which services or products you used"
                />
              </div>
              <button
                type="submit"
                className="inline-block rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Submit data deletion request
              </button>
            </form>
          </section>
        )}

        <Section title="Contact">
          <p>
            Questions about data deletion or privacy? See our <Link href="/privacy" className="text-sky-600 hover:underline">Privacy Policy</Link> or <Link href="/contact" className="text-sky-600 hover:underline">Contact</Link> page. Email: <a href="mailto:info@namoota.co.za" className="text-sky-600 hover:underline">info@namoota.co.za</a>.
          </p>
        </Section>
      </div>
    </>
  );
}
