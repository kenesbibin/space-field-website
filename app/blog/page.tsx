import type { Metadata } from 'next';
import BlogHub from '@/components/blog/BlogHub';
import { BLOG_ARTICLES } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Field Operations Blog',
  description:
    'Field guides, customer stories, and practical insights on construction quality, inspections, and AI-powered operations.',
  alternates: {
    canonical: 'https://spacecapture.ai/blog',
  },
};

export default function BlogIndexPage() {
  return <BlogHub articles={BLOG_ARTICLES} />;
}
