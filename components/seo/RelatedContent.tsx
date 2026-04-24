import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface RelatedItem {
  title: string;
  href: string;
  description?: string;
}

interface RelatedContentProps {
  title?: string;
  items: RelatedItem[];
}

/**
 * Reusable "Related Content" component for internal linking.
 * Renders a grid of internal links with optional descriptions.
 * Should be placed at the bottom of blog posts, solution pages,
 * and industry pages to improve crawlability and page authority.
 */
export default function RelatedContent({ title = "Related Resources", items }: RelatedContentProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-slate-200">
      <h2 className="text-xl font-bold text-slate-900 mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all"
          >
            <ArrowRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
            <div>
              <span className="text-slate-900 font-medium group-hover:text-blue-700 transition-colors block">
                {item.title}
              </span>
              {item.description && (
                <span className="text-xs text-slate-500 mt-1 block">{item.description}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
