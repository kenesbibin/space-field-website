import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how SpaceCapture collects, uses, shares, and safeguards personal and project information.',
  alternates: {
    canonical: 'https://spacecapture.ai/privacy-policy',
  },
};

const sections = [
  {
    title: 'Information We Collect',
    content: [
      {
        heading: 'Personal Information',
        text: 'When you register for an account, we collect information that can identify you, such as your name, email address, phone number, company name, and payment information.',
      },
      {
        heading: 'Customer Data',
        text: 'We collect and store data you upload to the Service. This may include project plans, schedules, BIM/CAD files, financial data, safety reports, images, and communications related to your construction and field operations projects.',
      },
      {
        heading: 'Usage Data and Log Files',
        text: 'We automatically collect information your browser sends when you use our Service. This may include your IP address, browser type, pages visited, the time and date of your visit, and other diagnostic data.',
      },
      {
        heading: 'Cookies',
        text: 'We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies help us operate and personalize the platform.',
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      {
        heading: 'Service Operations',
        text: 'We use information to provide, operate, and maintain our Service, process transactions, and manage subscriptions.',
      },
      {
        heading: 'AI Development',
        text: 'We use Customer Data and Usage Data to develop and train artificial intelligence models and improve predictive analytics, automate workflows, and improve risk detection features. When data is used for this purpose, it is processed in an aggregated and anonymized form.',
      },
      {
        heading: 'Communication',
        text: 'We use information to communicate with you, including to provide customer service and updates and to send marketing and promotional communications. You may opt out of marketing communications.',
      },
      {
        heading: 'Security and Improvement',
        text: 'We use information to improve, personalize, and expand our Service and to find and prevent fraud.',
      },
    ],
  },
  {
    title: 'How We Share Your Information',
    content: [
      {
        heading: 'Service Providers',
        text: 'We may share information with trusted third-party vendors that perform services for us, such as cloud hosting, payment processing, and data analytics. These providers are obligated not to disclose or use the information for any other purpose.',
      },
      {
        heading: 'Business Transfers',
        text: 'We may share or transfer information in connection with a merger, sale of company assets, or acquisition of all or a portion of our business.',
      },
      {
        heading: 'Legal Compliance',
        text: 'We may disclose information where legally required to comply with applicable law or valid legal process.',
      },
    ],
  },
  {
    title: 'Data Security and Your Rights',
    content: [
      {
        heading: 'Security Measures',
        text: 'We use administrative, technical, and physical security measures to protect personal information. These include encryption of data in transit, access controls, and regular security audits.',
      },
      {
        heading: 'Your Rights',
        text: 'You may have the right to access, update, or delete information we hold about you, correct inaccurate information, object to processing of your personal data, and opt out of marketing communications. To make a request, contact us using the details below.',
      },
      {
        heading: 'Data Retention',
        text: 'We retain personal information only for as long as necessary for the purposes described in this Privacy Policy, including for the duration of your subscription and as required to comply with legal obligations.',
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-20 pt-36 text-slate-800 sm:px-6">
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
        <header className="mb-12 border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            SpaceCapture · Space AI Inc.
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Your privacy and data protection are important to us. This Privacy Policy explains
            how we collect, use, disclose, and safeguard information when you use the SpaceCapture
            platform for field inspections and construction operations.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Last updated: January 15, 2025
          </p>
        </header>

        <div className="space-y-10 leading-7 text-slate-700">
          <section aria-labelledby="introduction">
            <h2 id="introduction" className="mb-3 text-2xl font-bold text-slate-950">
              Introduction
            </h2>
            <p>
              Space AI Inc. (&quot;SpaceCapture,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting
              your privacy. This Privacy Policy describes our data practices when you use our
              AI-powered field inspection platform. By using the Service, you acknowledge the
              data practices described in this policy.
            </p>
          </section>

          {sections.map((section) => (
            <section key={section.title} aria-labelledby={section.title.toLowerCase().replaceAll(' ', '-') }>
              <h2
                id={section.title.toLowerCase().replaceAll(' ', '-')}
                className="mb-4 text-2xl font-bold text-slate-950"
              >
                {section.title}
              </h2>
              <div className="space-y-5">
                {section.content.map((item) => (
                  <div key={item.heading}>
                    <h3 className="mb-1 text-lg font-semibold text-slate-900">{item.heading}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-2">
            <div>
              <h2 className="mb-3 text-xl font-bold text-slate-950">Children&apos;s Privacy</h2>
              <p>
                Our Service is not intended for anyone under the age of 18. We do not knowingly
                collect personally identifiable information from children.
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-xl font-bold text-slate-950">Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated
                policy on this page and revise the “Last updated” date when changes are made.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-slate-100 p-6 sm:p-8" aria-labelledby="contact">
            <h2 id="contact" className="mb-2 text-2xl font-bold text-slate-950">
              Questions About Privacy?
            </h2>
            <p>
              If you have questions or suggestions about this Privacy Policy, contact us at{' '}
              <a
                className="font-semibold text-blue-700 underline underline-offset-4"
                href="mailto:contact@spacecapture.ai"
              >
                contact@spacecapture.ai
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
