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


export const metadata: Metadata = {
  title: 'Construction Field Inspection App & Audit Software',
  description: 'The #1 AI Field Inspection Software for construction & maintenance. Automate defect detection, daily reports, and safety compliance. Try it free.',
  alternates: {
    canonical: 'https://spacecapture.ai/',
  },
}
 const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getSoftwareSchema(),
      getOrganizationSchema(),
    ],
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
    </>
  )
}
