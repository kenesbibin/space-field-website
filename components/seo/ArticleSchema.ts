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

const DEFAULT_AUTHOR = "Bibin Prathap";
const DEFAULT_AUTHOR_SAMEAS = ["https://www.linkedin.com/in/bibin-prathap-4a34a489/"];
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
      "@type": "Person",
      name: authorName,
      url: authorUrl,
      ...(authorName === DEFAULT_AUTHOR ? { sameAs: DEFAULT_AUTHOR_SAMEAS } : {}),
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
