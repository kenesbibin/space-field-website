import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getGlossaryTerm, GLOSSARY_TERMS } from "@/lib/glossary-data";
import StructuredData from "@/components/seo/StructuredData";
import {
  getArticleSchema,
} from "@/components/seo/ArticleSchema";
import {
  buildBreadcrumbsFromPath,
  getBreadcrumbListSchema,
} from "@/components/seo/BreadcrumbListSchema";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return GLOSSARY_TERMS.map((term) => ({ slug: term.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const term = getGlossaryTerm(params.slug);
  if (!term) {
    return { title: "Term Not Found" };
  }
  return {
    title: `What Is ${term.term}? | SpaceCapture Glossary`,
    description: term.definition,
    keywords: [
      `${term.slug} definition`,
      `what is ${term.slug}`,
      `${term.term.toLowerCase()} meaning`,
      `${term.category.toLowerCase()}`,
      "construction glossary",
    ],
    alternates: {
      canonical: `https://spacecapture.ai/glossary/${term.slug}`,
    },
    openGraph: {
      type: "article",
      title: `What Is ${term.term}? | SpaceCapture Glossary`,
      description: term.definition,
      url: `https://spacecapture.ai/glossary/${term.slug}`,
      siteName: "SpaceCapture",
    },
  };
}

export default function GlossaryTermPage({ params }: PageProps) {
  const term = getGlossaryTerm(params.slug);

  if (!term) {
    notFound();
  }

  const related = (term.relatedSlugs || [])
    .map((slug) => getGlossaryTerm(slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const datePublished = "2026-01-01";
  const articleSchema = getArticleSchema({
    headline: `What Is ${term.term}?`,
    description: term.definition,
    url: `https://spacecapture.ai/glossary/${term.slug}`,
    datePublished,
    category: term.category,
    keywords: [term.term, term.category, "glossary"],
  });
  const breadcrumbSchema = getBreadcrumbListSchema(
    buildBreadcrumbsFromPath(`/glossary/${term.slug}`)
  );

  return (
    <main className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 prose prose-lg">
        <nav className="text-sm text-slate-500 not-prose mb-6">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          {" / "}
          <Link href="/glossary" className="hover:text-indigo-600">Glossary</Link>
          {" / "}
          <span className="text-slate-700">{term.term}</span>
        </nav>

        <p className="text-sm uppercase tracking-wider text-indigo-600 font-semibold not-prose">
          {term.category}
        </p>
        <h1>{term.term}</h1>

        <p className="lead text-xl text-slate-800 font-medium">
          {term.definition}
        </p>

        <div dangerouslySetInnerHTML={{ __html: termHtml(term.details) }} />

        {related.length > 0 && (
          <section className="not-prose mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Related Terms
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/glossary/${r.slug}`}
                    className="block bg-slate-50 hover:bg-indigo-50 hover:border-indigo-300 border border-slate-200 p-4 rounded-lg transition"
                  >
                    <span className="font-semibold text-slate-900">
                      {r.term}
                    </span>
                    <p className="text-sm text-slate-600 mt-1 line-clamp-2">
                      {r.definition}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="not-prose mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-700">
            Looking for software that helps your team capture these
            inspections in the field? See our{" "}
            <Link href="/field-inspection-software" className="text-indigo-600 underline">
              field inspection software
            </Link>{" "}
            or{" "}
            <Link href="/construction-inspection-software" className="text-indigo-600 underline">
              construction inspection software
            </Link>
            .
          </p>
        </section>

        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@graph": [articleSchema, breadcrumbSchema],
          }}
        />
      </div>
    </main>
  );
}

// Render the markdown-ish `details` string as HTML. The data uses simple
// `##` / `###` headings and paragraphs separated by blank lines; we parse
// it here so we don't have to ship a markdown lib for static content.
function termHtml(details: string): string {
  const lines = details.split(/\r?\n/);
  let html = "";
  let inUl = false;
  let inOl = false;
  let paraBuf: string[] = [];

  const flushPara = () => {
    if (paraBuf.length === 0) return;
    html += `<p>${paraBuf.join(" ")}</p>`;
    paraBuf = [];
  };
  const flushLists = () => {
    if (inUl) {
      html += "</ul>";
      inUl = false;
    }
    if (inOl) {
      html += "</ol>";
      inOl = false;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushLists();
      continue;
    }
    if (line.startsWith("### ")) {
      flushPara();
      flushLists();
      html += `<h3>${line.slice(4)}</h3>`;
      continue;
    }
    if (line.startsWith("## ")) {
      flushPara();
      flushLists();
      html += `<h2>${line.slice(3)}</h2>`;
      continue;
    }
    if (line.startsWith("- ")) {
      flushPara();
      if (!inUl) {
        flushLists();
        html += "<ul>";
        inUl = true;
      }
      html += `<li>${line.slice(2)}</li>`;
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      flushPara();
      if (!inOl) {
        flushLists();
        html += "<ol>";
        inOl = true;
      }
      html += `<li>${line.replace(/^\d+\.\s/, "")}</li>`;
      continue;
    }
    paraBuf.push(inlineMarkdown(line));
  }
  flushPara();
  flushLists();
  return html;
}

function inlineMarkdown(line: string): string {
  return line
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/_(.+?)_/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}
