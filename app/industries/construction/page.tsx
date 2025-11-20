
import ConstructionSection from '@/components/ConstructionSection';
import type { Metadata } from 'next';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Construction Field Management Software | Space Field',
  description: 'Optimize your construction sites with Space Field. Track progress, manage safety inspections, and coordinate labor with our all-in-one mobile app for construction.',
  keywords: ['construction software', 'field management', 'daily logs', 'safety inspections', 'construction app', 'Space Field'],
  alternates: {
    canonical: '/industries/construction',
  },
  openGraph: {
    title: 'Construction Field Management Software | Space Field',
    description: 'Streamline construction operations with real-time tracking and digital reporting.',
    url: '/industries/construction',
    siteName: 'Space Field',
    images: [
      {
        url: '/images/construction.jpg', 
        width: 1200,
        height: 630,
        alt: 'Space Field Construction Management',
      },
    ],
    type: 'website',
  },
};

export default function ConstructionPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <ConstructionSection/>
    </main>
  );
}