import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PersonaTemplate } from '@/components/templates/PersonaTemplate';
import { PERSONAS_DATA } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: PERSONAS_DATA['facility-managers'].title,
  description: PERSONAS_DATA['facility-managers'].description,
};

export default function FacilityManagersPage() {
  const data = PERSONAS_DATA['facility-managers'];

  return (
    <main className="bg-white min-h-screen pt-24"> 
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <Breadcrumbs 
          items={[
            { label: 'Who We Serve', href: '#' },
            { label: 'Facility Managers', href: '/who-we-serve/facility-managers' }
          ]} 
        />
      </div>
      <PersonaTemplate data={data} />
    </main>
  );
}
