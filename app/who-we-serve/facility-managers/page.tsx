import { Metadata } from 'next';

import { PersonaTemplate } from '@/components/templates/PersonaTemplate';
import { PERSONAS_DATA } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: PERSONAS_DATA['facility-managers'].title,
  description: PERSONAS_DATA['facility-managers'].description,
  alternates: {
    canonical: 'https://spacecapture.ai/who-we-serve/facility-managers',
  },
};

export default function FacilityManagersPage() {
  const data = PERSONAS_DATA['facility-managers'];

  return (
    <main className="bg-white min-h-screen pt-4"> 
      <div className="max-w-7xl mx-auto px-4 mb-8">

      </div>
      <PersonaTemplate data={data} />
    </main>
  );
}
