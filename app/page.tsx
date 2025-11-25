import AiDetectionApiSection from '@/components/AiDetectionApiSection'
import CallToActionSection from '@/components/CallToAction'
import Features from '@/components/Features'
import GuideSection from '@/components/GuideSection'
import HeroSection from '@/components/HeroSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SPACE CAPTURE - Home',
  description: 'Streamline your field operations with SPACE CAPTURE. The ultimate mobile solution for field workers.',
  alternates: {
    canonical: 'https://spacecapture.ai/',
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


