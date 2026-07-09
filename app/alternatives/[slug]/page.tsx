import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AlternativesTemplate } from '@/components/seo/AlternativesTemplate';
import { ALTERNATIVES_DATA } from '@/lib/alternatives-data';
import StructuredData from '@/components/seo/StructuredData';
import { getFaqSchema } from '@/components/seo/FaqSchema';
import { getServiceSchema } from '@/components/seo/ServiceSchema';
import {
  buildBreadcrumbsFromPath,
  getBreadcrumbListSchema,
} from '@/components/seo/BreadcrumbListSchema';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(ALTERNATIVES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = ALTERNATIVES_DATA[slug];
  if (!data) return { title: 'Alternative Not Found' };
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.metaKeywords,
    alternates: {
      canonical: `https://spacecapture.ai/alternatives/${data.slug}`,
    },
    openGraph: {
      type: 'website',
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://spacecapture.ai/alternatives/${data.slug}`,
      siteName: 'SpaceCapture',
    },
  };
}

export default async function AlternativePage({ params }: Props) {
  const { slug } = await params;
  const data = ALTERNATIVES_DATA[slug];
  if (!data) notFound();

  const faqSchema = getFaqSchema(data.faqs.map((f: { q: string; a: string }) => ({ question: f.q, answer: f.a })));
  const serviceSchema = getServiceSchema({
    name: `${data.competitor} Alternative`,
    description: data.metaDescription,
    url: `https://spacecapture.ai/alternatives/${data.slug}`,
    serviceType: `${data.competitor} Alternative`,
    areaServed: 'Worldwide',
  });
  const breadcrumbSchema = getBreadcrumbListSchema(
    buildBreadcrumbsFromPath(`/alternatives/${data.slug}`)
  );

  return (
    <>
      <AlternativesTemplate
        competitor={data.competitor}
        tagline={data.tagline}
        intro={data.intro}
        heroBadge={data.heroBadge}
        pains={data.pains}
        benefits={data.benefits}
        comparisons={data.comparisons}
        faqs={data.faqs}
        related={data.related}
      />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
        }}
      />
    </>
  );
}
