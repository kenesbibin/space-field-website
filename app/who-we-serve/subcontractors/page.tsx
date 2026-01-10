import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PersonaTemplate } from '@/components/templates/PersonaTemplate';
import { PERSONAS_DATA } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: PERSONAS_DATA['subcontractors'].title,
  description: PERSONAS_DATA['subcontractors'].description,
};

export default function SubcontractorsPage() {
  const data = PERSONAS_DATA['subcontractors'];

  return (
    <main className="bg-white min-h-screen pt-24"> 
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <Breadcrumbs 
          items={[
            { label: 'Who We Serve', href: '#' },
            { label: 'Subcontractors', href: '/who-we-serve/subcontractors' }
          ]} 
        />
      </div>
      <PersonaTemplate data={data} />
    </main>
  );
}
