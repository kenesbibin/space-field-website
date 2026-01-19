import Link from 'next/link';
import { IndustryData } from '@/lib/seo-data';

export function IndustryDetails({ data }: { data: IndustryData }) {
  if (!data) return null; // Safety check

  let hasLinkedInspection = false; // Track first occurrence globally for this page render

  return (
    <div className="bg-white pb-20 pt-16 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
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
                      className="block w-full py-3 px-4 bg-slate-900 text-white text-center font-bold rounded-lg hover:bg-slate-800 transition"
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
                     {chapter.paragraphs.map((paragraph, idx) => {
                        // Internal Linking Logic: Link first mention of "inspection"
                        if (!hasLinkedInspection && paragraph.toLowerCase().includes('inspection')) {
                            const regex = /(inspection)/i;
                            const parts = paragraph.split(regex);
                            // Find the matching part index (first occurrence)
                            const matchIndex = parts.findIndex(p => p.toLowerCase() === 'inspection');
                            
                            if (matchIndex !== -1) {
                                hasLinkedInspection = true;
                                return (
                                    <p key={idx} className="text-slate-600 leading-relaxed">
                                        {parts.map((part, i) => {
                                            if (i === matchIndex) {
                                                return (
                                                    <Link key={i} href="/ai-detection" className="text-blue-600 underline font-medium hover:text-blue-800">
                                                        {part}
                                                    </Link>
                                                );
                                            }
                                            return <span key={i}>{part}</span>;
                                        })}
                                    </p>
                                );
                            }
                        }

                        return (
                           <p key={idx} className="text-slate-600 leading-relaxed">
                             {paragraph}
                           </p>
                        );
                     })}
                   </div>
                </div>
              ))}
           </article>
        </div>
      </div>
    </div>
  );
}
