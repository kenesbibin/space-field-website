'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { BLOG_ARTICLES } from '@/lib/blog-data';

export function RelatedPosts() {
  const pathname = usePathname();
  const currentSlug = pathname?.replace('/blog/', '').replace(/^\//, '') ?? '';

  const currentArticle = BLOG_ARTICLES.find((article) => article.slug === currentSlug);

  if (!currentArticle) {
    return null;
  }

  // Prefer same category, then fall back to any other articles.
  const sameCategory = BLOG_ARTICLES.filter(
    (article) => article.slug !== currentSlug && article.category === currentArticle.category
  );

  const related =
    sameCategory.length >= 3
      ? sameCategory.slice(0, 3)
      : [
          ...sameCategory,
          ...BLOG_ARTICLES
            .filter((article) => article.slug !== currentSlug && article.slug !== sameCategory[0]?.slug && article.slug !== sameCategory[1]?.slug)
            .slice(0, 3 - sameCategory.length),
        ];

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-8 border-t border-slate-200">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex flex-col bg-slate-50 rounded-lg border border-slate-200 hover:border-indigo-400 hover:bg-white hover:shadow-md transition-all duration-300 p-5 h-full"
          >
            <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded w-fit mb-3">
              {article.category}
            </span>
            <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug flex-grow">
              {article.title}
            </h4>
            <div className="mt-auto pt-3 flex items-center text-xs font-semibold text-slate-600 group-hover:text-indigo-600 transition-colors">
              Read Article <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
