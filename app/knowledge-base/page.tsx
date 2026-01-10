import React from 'react';
import type { Metadata } from 'next';
import { Glossary, GlossaryTerm } from '@/components/Glossary';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import CallToAction from '@/components/CallToAction';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Knowledge Base & Glossary | SpaceCapture',
  description: 'The complete glossary of construction terms, from A/E/C to Zero Punch. Learn the language of modern field operations.',
};

const TERMS: GlossaryTerm[] = [
  { term: 'RFI', definition: 'Request for Information. A formal process used in construction to clarify details in the plans or specifications.', category: 'Project Management' },
  { term: 'Punch List', definition: 'A document listing work that does not conform to contract specifications, usually created towards the end of a project.', category: 'Quality Control' },
  { term: 'Submittal', definition: 'Shop drawings, material data, samples, and product data. Submittals are required primarily for the architect and engineer to verify that the correct products will be installed.', category: 'Project Management' },
  { term: 'BIM', definition: 'Building Information Modeling. A digital representation of physical and functional characteristics of a facility.', category: 'Technology' },
  { term: 'Common Data Environment (CDE)', definition: 'The single source of information for the project, used to collect, manage and disseminate documentation, the graphical model and non-graphical data for the whole project team.', category: 'Technology' },
  { term: 'Defect Detection', definition: 'The process of identifying construction errors, often using AI or computer vision to spot issues like cracks or misalignments automatically.', category: 'AI & Quality' },
  { term: 'Change Order', definition: 'Work that is added to or deleted from the original scope of work of a contract, which alters the original contract amount and/or completion date.', category: 'Contracts' },
  { term: 'Gantt Chart', definition: 'A type of bar chart that illustrates a project schedule, showing the dependency relationships between activities and current status.', category: 'Scheduling' },
  { term: 'Lean Construction', definition: 'A philosophy based on the Toyota Production System that aims to maximize value and minimize waste in construction processes.', category: 'Methodology' },
  { term: 'Digital Twin', definition: 'A virtual model designed to accurately reflect a physical object. In construction, it covers the lifecycle from design to operation.', category: 'Technology' },
  { term: 'As-Built', definition: 'Drawings or models that show the dimensions, geometry, and location of all elements of the work as actually constructed.', category: 'Documentation' },
  { term: 'Daily Log', definition: 'A daily record of job site activity, weather, workforce counts, and progress. Often digitized to improve accuracy.', category: 'Documentation' },
  { term: 'PPE', definition: 'Personal Protective Equipment. Gear such as helmets, goggles, and vests designed to protect the wearer from injury or infection.', category: 'Safety' },
  { term: 'Toolbox Talk', definition: 'A short safety meeting held on the job site to discuss specific hazards and safe work practices.', category: 'Safety' },
  { term: 'VDC', definition: 'Virtual Design and Construction. The management of integrated multi-disciplinary performance models of design-construction projects.', category: 'Technology' },
  { term: 'Work Order', definition: 'A task or job for a customer, that can be scheduled or assigned to someone. Used heavily in facility management.', category: 'Operations' },
  { term: 'Takeoff', definition: 'The process of estimating the quantities of materials required from the project plans.', category: 'Estimation' }
];

export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero */}
        <section className="bg-slate-900 text-white pt-32 pb-20">
            <div className="container mx-auto px-4 text-center">
                 <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-indigo-900/50 border border-indigo-700 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">
                    <BookOpen className="w-4 h-4" /> Field Academy
                 </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Construction Knowledge Base</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Master the terminology of modern construction. From traditional workflows to the AI revolution.
                </p>
            </div>
        </section>

        {/* Content */}
        <div className="container mx-auto max-w-[1000px] px-4 -mt-8 relative z-10 mb-20">
             <Breadcrumbs 
                items={[
                    { label: 'Resources', href: '#' },
                    { label: 'Knowledge Base', href: '/knowledge-base' }
                ]} 
            />
            
            <div className="mt-8">
                <Glossary terms={TERMS} />
            </div>
        </div>

        <CallToAction />
      </main>
    </div>
  );
}
