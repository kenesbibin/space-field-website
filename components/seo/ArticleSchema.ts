interface ArticleSchemaInput {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  category?: string;
  keywords?: string[];
}

const DEFAULT_AUTHOR = "SpaceCapture Team";
const PUBLISHER_NAME = "SpaceCapture";
const PUBLISHER_LOGO = "https://spacecapture.ai/logo.png";

export const getArticleSchema = (input: ArticleSchemaInput) => {
  const {
    headline,
    description,
    url,
    image = "https://spacecapture.ai/images/og-image.jpg",
    datePublished,
    dateModified,
    authorName = DEFAULT_AUTHOR,
    authorUrl = "https://spacecapture.ai/about-us",
    category,
    keywords = [],
  } = input;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline,
    description,
    image: [image],
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: PUBLISHER_NAME,
      logo: {
        "@type": "ImageObject",
        url: PUBLISHER_LOGO,
      },
    },
    ...(category ? { articleSection: category } : {}),
    ...(keywords.length > 0 ? { keywords: keywords.join(", ") } : {}),
  };
};
