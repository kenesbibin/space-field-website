import { Metadata } from 'next';

import { PersonaTemplate } from '@/components/templates/PersonaTemplate';
import { PERSONAS_DATA } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: PERSONAS_DATA['property-developers'].title,
  description: PERSONAS_DATA['property-developers'].description,
  alternates: {
    canonical: 'https://spacecapture.ai/who-we-serve/property-developers',
  },
};

export default function PropertyDevelopersPage() {
  const data = PERSONAS_DATA['property-developers'];

  return (
    <main className="bg-white min-h-screen pt-4"> 
      <div className="max-w-7xl mx-auto px-4 mb-8">

      </div>
      <PersonaTemplate data={data} />
    </main>
  );
}
