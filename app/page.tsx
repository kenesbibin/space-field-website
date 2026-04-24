import AiDetectionApiSection from '@/components/AiDetectionApiSection'
import CallToActionSection from '@/components/CallToAction'
import Features from '@/components/Features'
import GuideSection from '@/components/GuideSection'
import HeroSection from '@/components/HeroSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import FaqSection from '@/components/FaqSection'
import AppDownloadSection from '@/components/AppDownloadSection'

import type { Metadata } from 'next'
import { getSoftwareSchema } from '@/components/seo/SoftwareSchema'
import { getOrganizationSchema } from '@/components/seo/OrganaizationSchema'
import StructuredData from '@/components/seo/StructuredData'
import { faqData } from '@/components/faq-data'


export const metadata: Metadata = {
  title: 'SpaceCapture — AI-Powered Construction Monitoring & Defect Detection App',
  description: 'The #1 AI field inspection software for construction teams. Automate real-time site monitoring, defect detection, daily reports, and safety compliance. Free mobile app for iOS & Android.',
  keywords: [
    'AI construction monitoring',
    'real-time construction monitoring',
    'construction defect detection',
    'field inspection app',
    'construction site management software',
    'AI defect detection construction',
    'construction daily reports',
    'safety inspection software',
    'punch list app',
    'construction field management',
  ],
  alternates: {
    canonical: '/',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    getSoftwareSchema(),
    getOrganizationSchema(),
    {
      "@type": "WebSite",
      "@id": "https://spacecapture.ai/#website",
      "url": "https://spacecapture.ai",
      "name": "SpaceCapture",
      "description": "AI-Powered Construction Monitoring & Field Inspection Software",
      "publisher": {
        "@id": "https://spacecapture.ai/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://spacecapture.ai/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
  ],
};

// Server-side FAQ schema — top 8 items (same ones shown by the client FaqSection)
const homepageFaqs = faqData.slice(0, 8);
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homepageFaqs.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

export default function Home() {
  return (
    <>
      <StructuredData data={schema} />

      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <AppDownloadSection />
        <ShowcaseSection />
        <GuideSection />
        <Features />
        <AiDetectionApiSection />

        <FaqSection />
        <CallToActionSection />
      </main>

      {/* Server-rendered FAQ schema — visible to Google's crawler */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
