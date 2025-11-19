import CallToActionSection from '@/components/CallToAction'
import Features from '@/components/Features'
import GuideSection from '@/components/GuideSection'
import HeroSection from '@/components/HeroSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SPACE FIELD - Home',
  description: 'Streamline your field operations with SPACE FIELD. The ultimate mobile solution for field workers.',
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
       <CallToActionSection/>
    </main>
  )
}