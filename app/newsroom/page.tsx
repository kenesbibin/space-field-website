import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, BriefcaseBusiness, Megaphone, Sparkles } from 'lucide-react';
import { BLOG_ARTICLES } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Newsroom and Company Updates',
  description:
    'Read SpaceCapture product updates, customer stories, and field operations insights from our team.',
  alternates: {
    canonical: 'https://spacecapture.ai/newsroom',
  },
};

const newsroomSlugs = [
  { slug: 'spacecapture-playstore-launch', label: 'Product update', icon: Sparkles },
  { slug: 'reduce-rework-ai-case-study', label: 'Customer story', icon: BriefcaseBusiness },
  { slug: 'ai-in-construction', label: 'Industry insight', icon: BookOpen },
  { slug: 'end-of-digital-paper', label: 'Company perspective', icon: Megaphone },
];

export default function NewsroomPage() {
  const stories = newsroomSlugs
    .map((item) => {
      const article = BLOG_ARTICLES.find((entry) => entry.slug === item.slug);
      return article ? { ...item, article } : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-36 text-white sm:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(59,130,246,0.32),transparent_35%),radial-gradient(circle_at_15%_90%,rgba(99,102,241,0.22),transparent_35%)]" />
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
            <Megaphone className="h-4 w-4" /> Newsroom
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            Updates from the field—and the people building for it.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Product announcements, customer stories, and fresh thinking on how teams inspect, document, and deliver better work.
          </p>
          <Link href="mailto:contact@spacecapture.ai?subject=SpaceCapture%20press%20inquiry" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 transition hover:bg-blue-50">
            Press & media enquiries <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-700">Company updates</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Stories and announcements</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900">
            Browse all insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {stories.map(({ article, label, icon: Icon }) => (
            <article key={article.slug} className="group flex min-h-64 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400" />
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-600">
                    <Icon className="h-3.5 w-3.5 text-blue-700" /> {label}
                  </span>
                  <time className="text-xs font-medium text-slate-400">{article.date}</time>
                </div>
                <h3 className="mt-6 text-2xl font-bold leading-tight text-slate-950 group-hover:text-blue-700">{article.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className="mt-7 inline-flex items-center gap-2 font-bold text-blue-700">
                  Read the story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-7 sm:flex sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">Talk to our team</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950">Looking for product details or a media contact?</h2>
            <p className="mt-2 text-slate-600">We can help route your question to the right SpaceCapture team.</p>
          </div>
          <Link href="/request-a-demo" className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800 sm:mt-0">
            Contact SpaceCapture <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
