import { Metadata } from 'next';

import { PersonaTemplate } from '@/components/templates/PersonaTemplate';
import { PERSONAS_DATA } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: PERSONAS_DATA['subcontractors'].title,
  description: PERSONAS_DATA['subcontractors'].description,
};

export default function SubcontractorsPage() {
  const data = PERSONAS_DATA['subcontractors'];

  return (
    <main className="bg-white min-h-screen pt-4"> 
      <div className="max-w-7xl mx-auto px-4 mb-8">

      </div>
      <PersonaTemplate data={data} />
    </main>
  );
}
