const BASE_URL = "https://spacecapture.ai";

interface BreadcrumbInput {
  label: string;
  href: string;
}

export const getBreadcrumbListSchema = (items: BreadcrumbInput[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: `${BASE_URL}${item.href.startsWith("/") ? item.href : `/${item.href}`}`,
  })),
});

/**
 * Convenience helper: build a breadcrumb list from a path.
 *   buildBreadcrumbsFromPath('/blog/bim-reality-comparison')
 *     -> [{label:'Home', href:'/'}, {label:'Blog', href:'/blog'}, ...]
 */
const KNOWN_LABELS: Record<string, string> = {
  blog: "Blog",
  industries: "Industries",
  "who-we-serve": "Who We Serve",
  compare: "Compare",
  alternatives: "Alternatives",
  locations: "Locations",
  glossary: "Glossary",
  tools: "Tools",
  resources: "Resources",
  lab: "Lab",
  trust: "Trust",
  pricing: "Pricing",
  faq: "FAQ",
  customers: "Customers",
  integrations: "Integrations",
  about: "About",
  contact: "Contact",
};

export const buildBreadcrumbsFromPath = (path: string): BreadcrumbInput[] => {
  if (path === "/" || !path) {
    return [{ label: "Home", href: "/" }];
  }

  const segments = path.split("/").filter(Boolean);
  const crumbs: BreadcrumbInput[] = [{ label: "Home", href: "/" }];

  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    const label =
      KNOWN_LABELS[seg] ??
      seg
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    crumbs.push({ label, href: acc });
  }
  return crumbs;
};
