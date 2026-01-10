import AiDetectionApiSection from '@/components/AiDetectionApiSection'
import CallToActionSection from '@/components/CallToAction'
import Features from '@/components/Features'
import GuideSection from '@/components/GuideSection'
import HeroSection from '@/components/HeroSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import FaqSection from '@/components/FaqSection'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'AI-Powered Field Inspection Software | SpaceCapture',
  description: 'The #1 AI Field Inspection Software for construction & maintenance. Automate defect detection, daily reports, and safety compliance with our free mobile app.',
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

       <FaqSection />
       <CallToActionSection/>
    </main>
  )
}


