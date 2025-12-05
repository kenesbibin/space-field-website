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
    canonical: '/',
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


