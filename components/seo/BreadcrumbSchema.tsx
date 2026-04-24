import React from 'react';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * Renders a BreadcrumbList JSON-LD schema for Google rich results.
 * Also renders a visual breadcrumb trail for users.
 * 
 * Usage:
 *   <BreadcrumbSchema items={[
 *     { name: "Home", href: "/" },
 *     { name: "Blog", href: "/blog" },
 *     { name: "AI Punch Lists", href: "/blog/end-of-manual-punch-lists" },
 *   ]} />
 */
export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const BASE_URL = "https://spacecapture.ai";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${BASE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="container mx-auto max-w-[900px] px-4 pt-24 pb-0 relative z-30">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-slate-500">/</span>}
              {i < items.length - 1 ? (
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.name}
                </a>
              ) : (
                <span className="text-slate-300 font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
