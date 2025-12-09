import AiDetectionApiSection from '@/components/AiDetectionApiSection'
import CallToActionSection from '@/components/CallToAction'
import Features from '@/components/Features'
import GuideSection from '@/components/GuideSection'
import HeroSection from '@/components/HeroSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Field Operations & Inspection Software | SpaceCapture',
  description: 'Manage field operations with precision. A mobile tracking solution for construction, maintenance, and inspections. Stop chaos and see progress in real-time.',
  alternates: {
    canonical: 'https://spacecapture.ai/',
  },
  keywords: [
    'azure sso',
    'azure ad sso',
    'fulcrum app alternative',
    'fleet maintenance app',
    'vehicle inspection app',
    'inspection app',
    'quality inspection software',
    'building inspection software',
    'construction inspection software',
    'construction daily report app',
    'construction daily log app',
    'site inspection app',
    'site inspection software',
    'heavy equipment maintenance app',
    'equipment inspection software',
    'equipment inventory app',
    'time tracking software',
    'time clock app',
    'construction management software',
    'google sheets dashboard'
  ],
  openGraph: {
    title: 'SpaceCapture | Azure-ready inspection, fleet, and construction software',
    description: 'SpaceCapture unifies Azure AD SSO, inspection forms, fleet maintenance apps, construction reports, and time tracking into one command center.',
    url: 'https://spacecapture.ai',
    siteName: 'SpaceCapture',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
       <HeroSection/>
       <ShowcaseSection/>
       <GuideSection/>
       <Features/>
       <AiDetectionApiSection/>
       <CallToActionSection/>
    </main>
  )
}


