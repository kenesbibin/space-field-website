import { Metadata } from 'next';

import { PersonaTemplate } from '@/components/templates/PersonaTemplate';
import { PERSONAS_DATA } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: PERSONAS_DATA['architects-engineers'].title,
  description: PERSONAS_DATA['architects-engineers'].description,
  alternates: {
    canonical: 'https://spacecapture.ai/who-we-serve/architects-engineers',
  },
};

export default function ArchitectsEngineersPage() {
  const data = PERSONAS_DATA['architects-engineers'];

  return (
    <main className="bg-white min-h-screen pt-4"> 
      <div className="max-w-7xl mx-auto px-4 mb-8">

      </div>
      <PersonaTemplate data={data} />
    </main>
  );
}
