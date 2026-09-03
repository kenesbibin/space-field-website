'use client';

import dynamic from 'next/dynamic';

const AiDetectionApiSection = dynamic(() => import('@/components/AiDetectionApiSection'));
const AiPromptSection = dynamic(() => import('@/components/AiPromptSection'));
const CallToActionSection = dynamic(() => import('@/components/CallToAction'));
const GuideSection = dynamic(() => import('@/components/GuideSection'));
const ShowcaseSection = dynamic(() => import('@/components/ShowcaseSection'));
const FaqSection = dynamic(() => import('@/components/FaqSection'));

interface HomePageClientProps {
  topChildren: React.ReactNode;
  bottomChildren: React.ReactNode;
}

export default function HomePageClient({ topChildren, bottomChildren }: HomePageClientProps) {
  return (
    <main className="w-full overflow-x-hidden">
      {topChildren}
      <ShowcaseSection />
      <GuideSection />
      {bottomChildren}
      <AiDetectionApiSection />
      <FaqSection />
      <CallToActionSection />
      <AiPromptSection />
    </main>
  );
}
