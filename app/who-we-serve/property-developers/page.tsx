import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PersonaTemplate } from '@/components/templates/PersonaTemplate';
import { PERSONAS_DATA } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: PERSONAS_DATA['property-developers'].title,
  description: PERSONAS_DATA['property-developers'].description,
};

export default function PropertyDevelopersPage() {
  const data = PERSONAS_DATA['property-developers'];

  return (
    <main className="bg-white min-h-screen pt-24"> 
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <Breadcrumbs 
          items={[
            { label: 'Who We Serve', href: '#' },
            { label: 'Property Developers', href: '/who-we-serve/property-developers' }
          ]} 
        />
      </div>
      <PersonaTemplate data={data} />
    </main>
  );
}
