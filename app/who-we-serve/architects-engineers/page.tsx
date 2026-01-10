import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PersonaTemplate } from '@/components/templates/PersonaTemplate';
import { PERSONAS_DATA } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: PERSONAS_DATA['architects-engineers'].title,
  description: PERSONAS_DATA['architects-engineers'].description,
};

export default function ArchitectsEngineersPage() {
  const data = PERSONAS_DATA['architects-engineers'];

  return (
    <main className="bg-white min-h-screen pt-24"> 
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <Breadcrumbs 
          items={[
            { label: 'Who We Serve', href: '#' },
            { label: 'Architects & Engineers', href: '/who-we-serve/architects-engineers' }
          ]} 
        />
      </div>
      <PersonaTemplate data={data} />
    </main>
  );
}
