import Head from 'next/head';
import Link from 'next/link';

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-xl font-semibold text-sky-700 mb-4">{title}</h2>
    <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
  </section>
);

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Namoota</title>
        <meta name="description" content="Namoota Privacy Policy. How we collect, use, and protect your personal information." />
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
        <h1 className="text-3xl font-bold text-sky-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: March 2025</p>

        <Section title="1. Introduction">
          <p>
            Namoota Technology (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Contact information (name, email, phone number, address)</li>
            <li>Account and profile data when you register or use our apps</li>
            <li>Usage data (how you use our website and services)</li>
            <li>Device and browser information</li>
            <li>Communications you send to us</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide, operate, and improve our services</li>
            <li>Respond to your enquiries and support requests</li>
            <li>Send relevant updates and marketing (where you have agreed)</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>
        </Section>

        <Section title="4. Cookies and Tracking">
          <p>
            We may use cookies and similar technologies to improve your experience, analyse traffic, and personalise content. You can manage cookie preferences in your browser settings.
          </p>
        </Section>

        <Section title="5. Data Sharing">
          <p>
            We do not sell your personal data. We may share information with service providers who assist us (e.g. hosting, analytics), subject to confidentiality and data protection agreements.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>
            Depending on applicable law, you may have the right to access, correct, delete, or restrict use of your personal data. You may also request a copy of your data or withdraw consent. To exercise these rights or request data deletion, please see our{' '}
            <Link href="/data-deletion" className="text-sky-600 hover:underline">Data Deletion</Link> page or contact us at{' '}
            <a href="mailto:info@namoota.co.za" className="text-sky-600 hover:underline">info@namoota.co.za</a>.
          </p>
        </Section>

        <Section title="7. Security">
          <p>
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse.
          </p>
        </Section>

        <Section title="8. Changes">
          <p>
            We may update this Privacy Policy from time to time. The “Last updated” date at the top reflects the latest version. Continued use of our services after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            For privacy-related questions: <a href="mailto:info@namoota.co.za" className="text-sky-600 hover:underline">info@namoota.co.za</a>. You can also visit our <Link href="/contact" className="text-sky-600 hover:underline">Contact</Link> page.
          </p>
        </Section>
      </div>
    </>
  );
}
