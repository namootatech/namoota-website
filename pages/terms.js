import Head from 'next/head';
import Link from 'next/link';

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-xl font-semibold text-sky-700 mb-4">{title}</h2>
    <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
  </section>
);

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Namoota</title>
        <meta name="description" content="Namoota Terms of Service. Terms and conditions for using our website and services." />
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
        <h1 className="text-3xl font-bold text-sky-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: March 2025</p>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using the Namoota Technology website and services (“Services”), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Services.
          </p>
        </Section>

        <Section title="2. Use of Services">
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the Services only for lawful purposes</li>
            <li>Provide accurate information when required</li>
            <li>Not misuse, disrupt, or attempt to gain unauthorised access to our systems or data</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </Section>

        <Section title="3. Intellectual Property">
          <p>
            Content, designs, logos, and materials on our website and in our Services are owned by Namoota Technology or our licensors. You may not copy, modify, or distribute them without our written permission.
          </p>
        </Section>

        <Section title="4. Quotes and Projects">
          <p>
            Quotes and proposals we provide are estimates and may be subject to change based on scope. Formal agreements for projects will be set out in separate contracts or statements of work.
          </p>
        </Section>

        <Section title="5. Disclaimer">
          <p>
            Our Services are provided “as is”. We do not warrant that the Services will be uninterrupted, error-free, or fit for a particular purpose. We are not liable for indirect, incidental, or consequential damages arising from your use of the Services.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, our total liability for any claims relating to the Services shall not exceed the amount you paid us in the twelve months preceding the claim (or, if no payment, R1,000).
          </p>
        </Section>

        <Section title="7. Privacy">
          <p>
            Your use of the Services is also governed by our <Link href="/privacy" className="text-sky-600 hover:underline">Privacy Policy</Link>. By using the Services, you consent to the collection and use of information as described there.
          </p>
        </Section>

        <Section title="8. Termination">
          <p>
            We may suspend or terminate your access to the Services at any time for breach of these Terms or for any other reason we deem appropriate.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms are governed by the laws of South Africa. Any disputes shall be subject to the exclusive jurisdiction of the courts of South Africa.
          </p>
        </Section>

        <Section title="10. Changes">
          <p>
            We may update these Terms from time to time. The “Last updated” date at the top reflects the latest version. Continued use of the Services after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            For questions about these Terms: <a href="mailto:info@namoota.co.za" className="text-sky-600 hover:underline">info@namoota.co.za</a>. You can also visit our <Link href="/contact" className="text-sky-600 hover:underline">Contact</Link> page.
          </p>
        </Section>
      </div>
    </>
  );
}
