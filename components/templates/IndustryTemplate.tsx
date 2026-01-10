import Link from 'next/link';
import { IndustryData } from '@/lib/seo-data';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { ArrowRight, BarChart3, Wifi, Smartphone } from 'lucide-react';

export function IndustryTemplate({ data }: { data: IndustryData }) {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white pt-24 pb-20 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <Breadcrumbs 
             items={[
               { label: 'Industries', href: '#' },
               { label: data.meta.title.split('|')[0].trim(), href: `/industries/${data.slug}` }
             ]} 
             className="text-slate-400 mb-8"
          />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div>
               <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                 {data.hero.title}
               </h1>
               <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                 {data.hero.subtitle}
               </p>
               <div className="flex flex-wrap gap-8">
                  {data.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-bold text-indigo-400">{stat.value}</div>
                      <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</div>
                    </div>
                  ))}
               </div>
             </div>
             {/* Optional Hero Image Placeholder */}
             <div className="hidden lg:block relative h-[400px] w-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
                <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-bold">
                   Hero Image Visualization
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT GRID */}
      <div className="container mx-auto px-4 max-w-7xl pt-16">
        <div className="grid lg:grid-cols-12 gap-12">
           
           {/* SIDEBAR (Table of Contents) */}
           <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 space-y-2 border-l-2 border-slate-100 pl-4">
                 <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">In this guide</h4>
                 {data.chapters.map((chapter) => (
                   <a 
                     key={chapter.id} 
                     href={`#${chapter.id}`}
                     className="block text-slate-600 hover:text-indigo-600 transition-colors text-sm py-1"
                   >
                     {chapter.title}
                   </a>
                 ))}
                 <div className="pt-6">
                    <Link 
                      href="/request-a-demo" 
                      className="block w-full py-3 px-4 bg-indigo-600 text-white text-center font-bold rounded-lg hover:bg-indigo-700 transition"
                    >
                      Book a Demo
                    </Link>
                 </div>
              </div>
           </aside>

           {/* MAIN ARTICLE CONTENT */}
           <article className="lg:col-span-9 prose prose-lg prose-slate max-w-none">
              {data.chapters.map((chapter) => (
                <div key={chapter.id} id={chapter.id} className="scroll-mt-28 mb-16">
                   <h2 className="text-3xl font-bold text-slate-900 mb-6">{chapter.title}</h2>
                   <div className="space-y-4">
                     {chapter.paragraphs.map((paragraph, idx) => (
                       <p key={idx} className="text-slate-600 leading-relaxed">
                         {paragraph}
                       </p>
                     ))}
                   </div>
                </div>
              ))}
           </article>
        </div>
      </div>
      
    </div>
  );
}
