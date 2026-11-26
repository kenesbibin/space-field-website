'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, CalendarDays, Search } from 'lucide-react';
import type { BlogArticle } from '@/lib/blog-data';

const FEATURED_SLUG = 'reduce-rework-ai-case-study';

export default function BlogHub({ articles }: { articles: BlogArticle[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(articles.map((article) => article.category)))],
    [articles],
  );
  const featured = articles.find((article) => article.slug === FEATURED_SLUG) ?? articles[0];
  const visibleArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const searchText = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
    return matchesCategory && searchText.includes(query.trim().toLowerCase()) && article.slug !== featured?.slug;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white pb-14 pt-32 sm:pb-20">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              <BookOpen className="h-4 w-4" /> SpaceCapture insights
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
              Better field work starts with <span className="text-blue-600">better insight.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Practical perspectives on construction quality, field inspections, computer vision, and the teams bringing projects to life.
            </p>
          </div>

          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mt-10 grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-1 hover:shadow-2xl md:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="flex min-h-64 flex-col justify-between bg-[radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.65),transparent_35%),linear-gradient(135deg,#0f172a,#172554_55%,#312e81)] p-8 sm:p-10">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-200">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" /> Featured story
                </div>
                <div className="mt-14">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">{featured.category}</p>
                  <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{featured.title}</h2>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="text-lg leading-8 text-slate-300">{featured.excerpt}</p>
                <div className="mt-8 inline-flex items-center gap-2 font-bold text-white group-hover:text-blue-300">
                  Explore the story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">The field guide</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Ideas for work that moves.</h2>
          </div>
          <label className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 lg:max-w-sm">
            <Search className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
            <span className="sr-only">Search articles</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search field insights"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filter by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {visibleArticles.length ? (
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex min-h-72 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-700">{article.category}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400"><CalendarDays className="h-3.5 w-3.5" />{article.date}</span>
                </div>
                <span className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-slate-300">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900 group-hover:text-blue-700">{article.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-slate-900 group-hover:text-blue-700">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-600">
            No articles match that search. Try another keyword or category.
          </div>
        )}
      </section>
    </main>
  );
}
