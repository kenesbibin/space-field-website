import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';

export const metadata: Metadata = {
  title: 'Field Data Capture Software | Accurate Construction Data',
  description: 'Capture accurate field data with ease. Our mobile software simplifies forms, photos, and daily logs for construction teams.',
  keywords: ['field data capture software', 'mobile forms', 'data collection app', 'construction data', 'field reporting'],
  alternates: {
    canonical: 'https://spacecapture.ai/field-data-capture-software',
  },
};

export default function Page() {
  const faqs = [
    {
      question: "What kind of data can I capture?",
      answer: "You can capture text, numbers, signatures, GPS coordinates, weather data, photos (with markup), videos, and audio notes."
    },
    {
      question: "Can I digitize my existing paper forms?",
      answer: "Yes, our Visual Form Builder makes it easy to recreate your exact paper forms digitally, preserving the layout your team is used to while adding smart features."
    },
    {
      question: "Is the data secure?",
      answer: "Yes, all data is encrypted both in transit and at rest, and we comply with enterprise security standards including SOC 2 type II."
    },
    {
      question: "Does it work without internet?",
      answer: "Yes, our 'Offline First' architecture ensures you can capture data in basements or remote sites. Data syncs automatically when connection is restored."
    },
    {
      question: "Can I integrate this with PowerBI?",
      answer: "Yes, we provide direct data connectors and APIs that allow you to feed real-time field data into BI tools like PowerBI or Tableau for advanced analytics."
    }
  ];

  return (
    <SeoLandingPage
      title="Accurate Field Data Capture Software"
      subtitle="Garbage in, garbage out. Ensure high-quality data collection from the field with our intuitive mobile capture tools."
    >
      {/* Definition Block */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is Field Data Capture Software?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Field data capture software is a digital solution used to collect, organize, and transmit information from remote job sites to a central database. It replaces manual data entry methods like paper forms or spreadsheets, enabling mobile teams to gather accurate data (photos, logs, inspections) that is instantly accessible for analysis.
        </p>
      </div>

       {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Capture Capabilities</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Work offline in any environment",
            "Smart forms with error validation",
            "Rich media capture (Photo/Video/Audio)",
            "GPS and Timestamp verification"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How to Capture Better Data</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Select Form:</strong> Choose the appropriate smart form from the mobile app menu (e.g., Daily Log, Safety Audit).
        </li>
        <li className="pl-2">
          <strong>Input Data:</strong> Fill in the fields. Dropdowns, checkboxes, and auto-fill features speed up the process.
        </li>
        <li className="pl-2">
          <strong>Add Context:</strong> Snap a photo or record a voice note to add rich detail that text alone cannot convey.
        </li>
        <li className="pl-2">
          <strong>Submit:</strong> Hit submit. The data is validated, geo-tagged, and instantly synced to the cloud server.
        </li>
      </ol>

      <ComparisonTable 
        title="Digital Data Capture vs Manual Entry"
        features={[
          { feature: "Speed", spaceCapture: "Fast (Auto-fill)", competitors: "Slow (Writing)" },
          { feature: "Legibility", spaceCapture: "Perfect Digital Text", competitors: "Handwriting Issues" },
          { feature: "Validation", spaceCapture: "Real-time Error Checks", competitors: "None" },
          { feature: "Context", spaceCapture: "Embedded Photos", competitors: "Separate Attachments" },
        ]}
      />

       <div className="mb-12">
        <h3>Capture Reality, Not Just Reports</h3>
         <p>
        Reliable project data is the foundation of good decision-making. 
        <strong>SpaceCapture</strong> makes it easy for field teams to collect accurate, structured data. 
        </p>
      </div>

      <FaqSection items={faqs} />
    </SeoLandingPage>
  );
}
