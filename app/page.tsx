import type { Metadata } from 'next'
import { getSoftwareSchema } from '@/components/seo/SoftwareSchema'
import { getOrganizationSchema } from '@/components/seo/OrganaizationSchema'
import StructuredData from '@/components/seo/StructuredData'
import HeroSection from '@/components/HeroSection'
import AppDownloadSection from '@/components/AppDownloadSection'
import Features from '@/components/Features'
import HomePageClient from '@/components/HomePageClient'
import IntroVoice from '@/components/IntroVoice'

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
}

export default function Home() {
  return (
    <>
      <StructuredData data={schema} />
      <IntroVoice />
      <HomePageClient
        topChildren={
          <>
            <HeroSection />
            <AppDownloadSection />
          </>
        }
        bottomChildren={
          <>
            <Features />
            <section className="py-12 bg-slate-50">
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore Our Solutions</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/field-inspection-software" className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors">
                    Field Inspection Software
                  </a>
                  <a href="/ai-defect-detection" className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors">
                    AI Defect Detection
                  </a>
                  <a href="/construction-software" className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors">
                    Construction Software
                  </a>
                  <a href="/pricing" className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors">
                    Pricing
                  </a>
                  <a href="/request-a-demo" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors">
                    Request a Demo
                  </a>
                </div>
              </div>
            </section>
          </>
        }
      />
    </>
  )
}
