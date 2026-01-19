import { Metadata } from 'next';

import { PersonaTemplate } from '@/components/templates/PersonaTemplate';
import { PERSONAS_DATA } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: 'Construction Software for General Contractors | SpaceCapture',
  description: 'Manage field operations, subcontractors, and safety compliance in one app.',
};

export default function GeneralContractorsPage() {
  const data = PERSONAS_DATA['general-contractors'];

  return (
    <main className="bg-white min-h-screen pt-4"> 
      <div className="max-w-7xl mx-auto px-4 mb-8">

      </div>
      <PersonaTemplate data={data} />
    </main>
  );
}
