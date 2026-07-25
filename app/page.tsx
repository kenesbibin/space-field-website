import AiDetectionApiSection from '@/components/AiDetectionApiSection'
import AiPromptSection from '@/components/AiPromptSection'
import CallToActionSection from '@/components/CallToAction'
import Features from '@/components/Features'
import GuideSection from '@/components/GuideSection'
import HeroSection from '@/components/HeroSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import FaqSection from '@/components/FaqSection'
import AppDownloadSection from '@/components/AppDownloadSection'
import Link from 'next/link'

import type { Metadata } from 'next'
import { getSoftwareSchema } from '@/components/seo/SoftwareSchema'
import { getOrganizationSchema } from '@/components/seo/OrganaizationSchema'
import StructuredData from '@/components/seo/StructuredData'


export const metadata: Metadata = {
  title: 'Construction Field Inspection App & Audit Software',
  description: 'AI-powered field inspection software for construction & maintenance. Automate defect detection, daily reports, and safety compliance. Try it free.',
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

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore Our Solutions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/field-inspection-software" className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors">
              Field Inspection Software
            </Link>
            <Link href="/ai-defect-detection" className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors">
              AI Defect Detection
            </Link>
            <Link href="/construction-software" className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors">
              Construction Software
            </Link>
            <Link href="/pricing" className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="/request-a-demo" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      <AiDetectionApiSection />

      <FaqSection />
      <CallToActionSection />
      <AiPromptSection />
    </main>
    </>
  )
}
