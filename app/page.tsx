import type { Metadata } from 'next'
import { getSoftwareSchema } from '@/components/seo/SoftwareSchema'
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
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://spacecapture.ai/",
        },
      ],
    },
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
            <section className="py-12 bg-white">
              <div className="container mx-auto max-w-4xl px-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">SpaceCapture at a Glance</h2>
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50">
                      <tr className="text-xs uppercase tracking-wider text-slate-500">
                        <th className="px-5 py-3 font-semibold">Capability</th>
                        <th className="px-5 py-3 font-semibold">What you get</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="px-5 py-3 font-medium text-slate-900">Field inspections</td>
                        <td className="px-5 py-3">Mobile, offline-first inspections with photo evidence</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 font-medium text-slate-900">AI defect detection</td>
                        <td className="px-5 py-3">Computer vision spots construction defects automatically</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 font-medium text-slate-900">Reports</td>
                        <td className="px-5 py-3">Daily reports and instant reports generated from any device</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 font-medium text-slate-900">Safety compliance</td>
                        <td className="px-5 py-3">Automated safety compliance tracking from the field</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 font-medium text-slate-900">Platforms</td>
                        <td className="px-5 py-3">Android &amp; iOS in one mobile-first app</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
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
