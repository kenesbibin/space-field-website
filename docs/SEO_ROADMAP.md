# SEO & GEO Optimization Roadmap — SpaceCapture

> **Project:** `spacecapture.ai` — AI-powered field inspection software for construction, real estate, oil & gas, manufacturing, etc.
> **Stack:** Next.js 16 (App Router), TypeScript, Tailwind, structured data (JSON-LD) already in place.
> **Document purpose:** Explain every priority tier and task in the optimization plan, so it can be reviewed, assigned, and executed by a human team later.
> **Keyword source:** 3 CSV exports of competitor keyword research (`Keyword Stats 2026-06-24 at 16_*.csv`).

---

## 1. Current State Summary

| Area | Status |
|---|---|
| Pages | ~90+ routes under `app/` (industries, personas, blog, locations, tools, compare, alternatives, glossary) |
| Sitemap | Hard-coded in `app/sitemap.ts` (only ~50 of 90+ URLs are listed) |
| Robots | Present in `app/robots.ts` |
| Structured data | `SoftwareApplication`, `Organization`, `FAQPage`, `Article` — but only `FAQPage` is global; most pages don't emit JSON-LD |
| OpenGraph | Present in root + some pages; inconsistent across the site |
| Metadata base | `layout.tsx` uses `spacecapture.ai`, but `robots.ts`/`sitemap.ts` use `NEXT_PUBLIC_SITE_URL` (mismatch) |
| Geo pages | Only 3 (`/locations/[slug]`: Dubai, Singapore, Texas) — strong growth opportunity |
| Glossary | Only 3 entries — major expansion opportunity |
| Analytics | GA4 + GTM installed; no Search Console / Bing / heatmaps / Core Web Vitals monitoring |
| Performance | `next/image` configured with `qualities: [75, 100]` but no `formats: ['avif', 'webp']` |
| Existing P1 keyword coverage | Strong overlap on `field inspections`, `construction`, `home inspection`, `building inspection`, `modular construction`, `bim`, `prefab`, `general contractors` — but mostly via blog posts, not dedicated landing pages |

---

## 2. Keyword Gap Analysis (Top 30 by Volume)

These are the highest-volume queries the competitor dataset reveals. **Bold** rows indicate keywords the site has zero dedicated landing page for.

| Volume | Keyword | Current coverage |
|---|---|---|
| 500,000 | construction | blog + `/industries/construction` only |
| 500,000 | constructions | none |
| 500,000 | industries | none |
| 50,000 | inspections | only in title/H1 |
| 50,000 | building construction | only `/industries/construction` |
| 50,000 | companies construction | none |
| 5,000 | home inspection | blog only |
| 5,000 | house inspection | blog only |
| 5,000 | home inspection services | none |
| 5,000 | house inspection service | none |
| 5,000 | appraiser | none |
| 5,000 | field service | `/field-service-management-software` |
| 5,000 | field service app | none |
| 5,000 | field service software | none |
| 5,000 | field workforce management | `/field-workforce-management` |
| 5,000 | home construction | none |
| 5,000 | construction services | none |
| 5,000 | construction industry | `/industries/construction` |
| 5,000 | construction business | none |
| 5,000 | construction cost | blog + `/tools/construction-cost-calculator` |
| 5,000 | contractors building / buildings contractors / constructions contractors | none |
| 5,000 | home renovation contractors / house renovation contractors / home remodel contractors / home reno contractors / contractors for home renovations | none |
| 5,000 | general contractors / general construction contractors | `/who-we-serve/general-contractors` |
| 5,000 | civil construction / civils contractors / civils in construction | none |
| 5,000 | residential constructions | none |
| 5,000 | bim / building bim | blog only |
| 5,000 | prefab / prefab building / prefab construction / prefab building construction | none |
| 5,000 | prefabricated building / prefabricated construction / prefabricated structures | none |
| 5,000 | pre engineered building / pre engineered building manufacturers | none |
| 5,000 | construction management software / construction software | `/field-data-capture-software` (loose) |

**Key insight:** The brand promise of SpaceCapture — "construction & field inspections" — is literally the exact-match keyword `construction & field inspections` (0 reported volume but topically perfect) and most of its 5,000–500,000-volume neighbours are unclaimed by any dedicated landing page. The site has **strong topical relevance but weak landing-page coverage** for the highest-volume queries.

---

## 3. Priority Tiers Explained

The roadmap is organized into **10 priority tiers (P0 → P10)**. Each tier is grouped by *what kind of work* it is, with an effort estimate and an impact estimate.

| Tier | Theme | Effort | Impact |
|---|---|---|---|
| **P0** | Foundation fixes (metadata, sitemap, scripts, perf) | 1–2 days | High |
| **P1** | New high-volume landing pages | 1–2 weeks | Very High |
| **P2** | Long-tail / programmatic SEO (glossary, geo, industry×geo) | 1 week | High |
| **P3** | Competitor comparison pages | 3–4 days | Medium |
| **P4** | Content / topical authority (pillar pages, blog, FAQ) | 2 weeks | High |
| **P5** | Technical SEO (icons, structured data, caching) | 1 week | Medium-High |
| **P6** | GEO pages (locations, LocalBusiness schema) | 1–2 weeks | Very High |
| **P7** | Programmatic SEO templates | 2–3 days | Medium |
| **P8** | Off-page preparation (Search Console, partners, integrations) | 1 day | Medium |
| **P9** | Analytics & measurement | 1–2 days | Medium |
| **P10** | On-page content polish | 2–3 days | Medium-High |

---

### P0 — Foundation (must-do first; everything else depends on this)

These are low-effort, high-leverage fixes that clean up the technical baseline.

| ID | Task | What it does | Why it matters |
|---|---|---|---|
| **P0.1** | Unify `metadataBase` / canonical to `spacecapture.ai` | Fix the mismatch where `layout.tsx` uses `spacecapture.ai` but `robots.ts` + `sitemap.ts` use `NEXT_PUBLIC_SITE_URL` (which can be `spacecapture.com`). | Mixed canonicals confuse Google about which URL to rank. Also risks duplicate content. |
| **P0.2** | Expand root `keywords` in `layout.tsx` | Add mega-volume terms: `inspections`, `construction`, `building construction`, `home inspection`, `field service`, `appraiser`, `house inspection`, `property inspection`. | Google weighs the `keywords` meta tag less than it used to, but Bing and some AI crawlers still use it. The site has too narrow a keyword footprint at the root. |
| **P0.3** | Add `Article` + `BreadcrumbList` JSON-LD globally | Emit these schemas on every blog post and key landing page. | Rich-result eligibility (article carousels, breadcrumb chips) and stronger E-E-A-T signals. |
| **P0.4** | Move JSON-LD `<script>` out of JSX in `app/faq/page.tsx:101` | The FAQ page injects JSON-LD via `dangerouslySetInnerHTML` inside JSX; you already have a `FaqSchema` component. Use it for SSR-correct emission. | Crawlers sometimes miss JSX-injected JSON-LD. SSR-emitted scripts in `<head>` are 100% reliable. |
| **P0.5** | Auto-generate `sitemap.xml` from `app/` filesystem | Replace the hard-coded `app/sitemap.ts` (~50 URLs) with a build-time enumeration of all routes. | The site has 90+ pages but only ~50 are in the sitemap. The other 40+ are invisible to crawlers. |
| **P0.6** | Add `<link rel="alternate" hreflang>` | Mark `x-default` and `en` on every page. | Cheap insurance for future i18n expansion and prevents geo-targeting confusion. |
| **P0.7** | Audit OG `site_name` / `type` consistency | Some pages set `openGraph.siteName: 'Space Capture'`, others `'Space Field'`. Standardize. | Mixed branding looks unprofessional when shared on LinkedIn/Twitter and reduces click-through. |
| **P0.8** | Defer GTM/GA scripts | Currently 3 blocking scripts in root `<head>`. Move to `next/script` with `strategy="lazyOnload"` or `afterInteractive`. | Blocking 3rd-party scripts hurts LCP/INP, which are ranking factors. |
| **P0.9** | Add E-E-A-T footer microdata | Show "Last updated" + "Operated by SpaceCapture Inc." in footer markup. | Google's Helpful Content system rewards transparency. E-E-A-T is increasingly important. |
| **P0.10** | Add `next/image` `formats: ['avif', 'webp']` | Add to `next.config.ts`. | Cuts image payload by 30–50% on average. Improves Core Web Vitals and ranking. |

---

### P1 — Missing High-Volume Landing Pages (biggest SEO win)

These are **net-new pages** that target the unclaimed high-volume keywords. Each page should follow the same template (you already have `SeoLandingPage.tsx`) and include: unique H1, 600+ word body, 3 feature blocks, FAQ, JSON-LD `Service` or `Product` schema, internal links.

| ID | Page URL | Target keyword(s) | Search vol | Rationale |
|---|---|---|---|---|
| **P1.11** | `/home-inspection-software` | home inspection, house inspection, home inspection services, house inspection service | 5,000×4 | Currently only blog mentions. A real estate inspector / home inspector is a core ICP. |
| **P1.12** | `/property-inspection-software` | property inspections, property field inspections | 500 | Direct match for product. |
| **P1.13** | `/building-inspection-software` | building inspection, building checks, building inspection reports | 500 | Direct match. |
| **P1.14** | `/field-inspection-software` | field inspections, inspection field | 500 | Brand-near. Should probably redirect to `/site-inspection-software` or be a hub. |
| **P1.15** | `/inspection-services-company` | inspection company, the inspection company | 500 | Targets "inspection company" searchers directly. |
| **P1.16** | `/construction-management-software` | construction management software | 5,000 | Mega keyword. |
| **P1.17** | `/construction-software` | construction software | 5,000 | Mega keyword. |
| **P1.18** | `/for-home-renovation-contractors` | home renovation contractors, house renovation contractors, home remodel contractors, home reno contractors, contractors for home renovations | 5,000×5 | You already have `subcontractors` and `general-contractors` personas; this fills a major gap. |
| **P1.19** | `/for-general-contractors` (rename/strengthen) | general contractors, general construction contractors, residential general construction | 5,000×3 | Existing `/who-we-serve/general-contractors` exists but the URL slug is awkward. Consider renaming to a flat URL. |
| **P1.20** | `/civil-construction-software` | civil construction, civils contractors, civils in construction, civils companies | 5,000×4 | No current page. You have `industries/oil-and-gas` but not civil construction (a major vertical). |
| **P1.21** | `/residential-construction-software` | residential constructions, residential general construction | 5,000×2 | No current page. |
| **P1.22** | `/building-construction-software` | building construction, building construction contractors, buildings contractors, constructions contractors, contractors building | 50,000 + 5,000×4 | **Highest-volume gap.** `building construction` alone is 50K. |
| **P1.23** | `/modular-construction-software` | modular construction, modular buildings, modular building construction, modular housing construction | 500×4 | Niche but growing. Relevant for the BIM/modern construction angle. |
| **P1.24** | `/prefab-construction-software` | prefab, prefab building, prefab construction, prefab building construction, prefabricated building, prefabricated construction, prefabricated structures, pre engineered building | 5,000×8 | Mega keyword cluster. |
| **P1.25** | `/bim-construction-software` | bim, bim construction, bim building, building bim, bim in construction industry | 5,000×5 | Mega. You have a blog post on `bim-reality-comparison` but no landing page. |
| **P1.26** | `/sustainable-construction-software` | sustainability in the construction industry, construction and sustainability, eco friendly construction, eco friendly buildings, eco friendly builders, eco friendly building construction | 500×6 | Growing trend; good for thought leadership. |
| **P1.27** | `/construction-robotics-software` | construction robot, robotics in building construction, robotics in construction | 500×3 | Future-facing. Lower priority unless you have product support. |
| **P1.28** | `/cladding-inspection-software` | cladding in construction, cladding for buildings, cladding inspection, cladding inspections | 500×4 | Niche but specific. |
| **P1.29** | `/construction-cost-software` | construction cost, construction cost estimator, construction estimating, building cost | 5,000 + 500×3 | You have a `/tools/construction-cost-calculator` but no SEO landing page targeting the informational intent. |
| **P1.30** | `/home-appraisal-software` | home appraisal, house appraisal, home appraisal estimator, home estimator value | 500×4 | **Caveat:** SpaceCapture is not a property-valuation tool. Only build this if the product has any valuation support. Otherwise redirect to a blog post explaining how SpaceCapture helps *real estate inspectors* prepare for appraisals. |
| **P1.31** | `/house-inspection-reports` | house inspection reports, building inspection reports, property inspection reports, dilapidation reports, property condition reports | 50×5 | All very low volume but extremely low competition and high intent. |
| **P1.32** | `/construction-site-inspections` | construction site inspections, site inspections | 50 + 500 | Low competition, high relevance. |
| **P1.33** | `/pre-construction-inspection` | pre building inspection, pre construction inspection, pre site inspection | 50×3 | Low volume, but buyers search this. |
| **P1.34** | `/construction-and-field-inspections` | construction & field inspections | 0 | **Exact brand match.** 0 reported volume because no one searches for it, but it is the literal product name. Build it for brand consistency and as a hub. |

---

### P2 — Long-Tail / Programmatic SEO

| ID | Task | What it does | Why it matters |
|---|---|---|---|
| **P2.35** | Expand glossary (3 → 100+ entries) | Convert `app/glossary/page.tsx` into `/glossary/[slug]` with a static data file containing all inspection-construction terms from the CSV. Each entry: definition, related links, BlogPosting schema, internal cross-links. | Glossary pages target long-tail definitions with near-zero competition. They build topical authority and feed the sitewide internal-link graph. |
| **P2.36** | Add state/city geo pages | Create 20 US states (NY, CA, FL, IL, PA, OH, GA, NC, MI, NJ, VA, WA, AZ, MA, TN, IN, MO, MD, CO) + 10 international metros (London, Toronto, Sydney, Mumbai, Delhi NCR, Bangalore, Singapore, Dubai, Abu Dhabi, Riyadh, Doha, Berlin, Paris, Amsterdam, Hong Kong). Each page: unique hero, body, local compliance references (OSHA for US, BCA for SG, DM for UAE), LocalBusiness schema, 3 internal links. | The CSV shows heavy `near me` intent. Today you have 3 geo pages. There are ~20–30 obvious plays. |
| **P2.37** | Industry × geo combinations | `/industries/construction-in-{city}` for top 5 cities (Dubai, Singapore, London, NYC, Mumbai). | Long-tail combo keywords with almost no competition. |

---

### P3 — Competitor Comparison Pages

You already have 7 alternatives pages (Procore, Fieldwire, GoCanvas, SafetyCulture, PlanRadar, OpenSpace, Raken). The CSV shows searches for these additional comparison terms:

| ID | Page URL | Target search |
|---|---|---|
| **P3.38** | `/alternatives/iauditor` | safetyculture alternative (iAuditor is the product) |
| **P3.39** | `/alternatives/buildertrend` | buildertrend alternative |
| **P3.40** | `/alternatives/coconstruct` | coconstruct alternative |
| **P3.41** | `/alternatives/autodesk-bim-360` | autodesk bim 360 alternative |
| **P3.42** | `/alternatives/jobsite` | jobsite alternative |
| **P3.43** | `/alternatives/plangrid` | plangrid alternative (you have a blog post but no full page) |
| **P3.44** | `/alternatives/buildern` | buildern alternative |
| **P3.45** | `/alternatives/smartsheet` | smartsheet alternative |
| **P3.46** | `/alternatives/oracle-primavera` | oracle primavera alternative |
| **P3.47** | `/alternatives/microsoft-project` | microsoft project alternative |

Each page: side-by-side feature table (you have `ComparisonTable.tsx`), 5–7 unique pros/cons, "Who should choose SpaceCapture?" verdict, JSON-LD `Product` + `FAQPage` schema.

---

### P4 — Content / Topical Authority

| ID | Task | What it does |
|---|---|---|
| **P4.48** | Build topic-cluster pillar pages | Create 3,000+ word pillar pages at `/blog/construction-field-inspections`, `/blog/home-inspections`, `/blog/building-inspections`, `/blog/construction-management`. Each links to 10+ related blog posts + 5+ solution pages. |
| **P4.49** | Write 15 new blog posts | Long-tail targets: "BIM in construction: a complete guide", "Modular construction vs traditional", "Sustainable construction: green building practices", "How robotics is changing construction", "Cladding inspection: what to look for", "Construction site safety inspection checklist (free PDF)", "Pre-construction inspection checklist", "Construction project management software buyer's guide", "Construction cost estimation in 2026", "Dilapidation report template & guide", "Building inspection report: free sample + template", "Civil construction project management", "For general contractors: how to digitize your jobsite", "For home renovation contractors: client communication & proof of work", "AI in construction: where we are in 2026". |
| **P4.50** | Expand `/faq` with top 50 questions implied by CSV | "What is a field inspection?", "How is a home inspection different from a property inspection?", "What is BIM?", "What is modular construction?", "What is a pre-construction inspection?", "What is cladding inspection?", "What is a dilapidation report?", etc. Each with proper `FAQPage` JSON-LD. |

---

### P5 — Technical SEO

| ID | Task | What it does | Why it matters |
|---|---|---|---|
| **P5.51** | Add verification meta for Bing, Yandex, Pinterest in `layout.tsx` | Add to `metadata.verification` block. | Bing is 2nd largest; Yandex/Pinterest for image/visual search traffic. |
| **P5.52** | Add `app/icon.tsx`, `app/apple-icon.png`, `app/manifest.ts` | Generate PWA manifest. | Mobile app mentions should be backed by an installable PWA. Improves UX signals. |
| **P5.53** | Replace remaining `<img>` with `next/image`; set `priority` on hero images | LCP / lazy loading. | Faster LCP, better ranking. |
| **P5.54** | Audit all internal links | Ensure all routes are interlinked (Navbar/Footer/Hub pages). | Crawl depth and link equity. Pages buried 4+ clicks deep don't rank. |
| **P5.55** | Set `robots` meta overrides | `noindex` for `/lab/*`, `/sitemaps`, `/tools/asphalt-calculator`, `/request-a-demo`. | Thin pages dilute crawl budget. The demo page is transactional; the calculators are OK to keep indexed but the lab is internal. |
| **P5.56** | Add canonical signal for `/blog` ↔ `/blogs` | You have a rewrite but no canonical. | Without canonical, the rewritten URL may compete with the original. |
| **P5.57** | Add `BreadcrumbList` JSON-LD on every non-root page | Standardized breadcrumb schema. | Rich-result eligibility + internal-link clarity for crawlers. |
| **P5.58** | Add `Product`, `HowTo`, `Article` JSON-LD to blog and pillar pages | Where applicable. | Rich-result eligibility. |
| **P5.59** | Add `LocalBusiness` JSON-LD with geo coordinates to location pages | address, areaServed, geo. | Local pack eligibility — Google Maps results. |
| **P5.60** | Add `Review` / `AggregateRating` schema from local case studies | Where you have verifiable ratings. | Star ratings in SERP boost CTR. |
| **P5.61** | Set `Cache-Control` headers in `next.config.ts` for static assets | `public, max-age=31536000, immutable` for `_next/static`. | Repeat-visit performance. |
| **P5.62** | Compress `public/videos/*` and add poster images | Re-encode to H.264/H.265, add poster JPG. | Videos often dominate page weight. |

---

### P6 — GEO Pages (local SEO)

For every `/locations/[slug]` page (existing + new), apply the following enhancements:

| ID | Task | What it does |
|---|---|---|
| **P6.63** | Add unique content per location page | City stats, local compliance references (OSHA, BCA, DM), 3 internal links to relevant product/industry pages, 1,000+ unique words. **Never duplicate content across locations.** |
| **P6.64** | Add `LocalBusiness` JSON-LD with `address`, `areaServed`, `geo` coordinates | Every location page should emit this. |
| **P6.65** | Create downloadable resources per city | E.g., "Construction Inspection Checklist — Dubai" (PDF). |
| **P6.66** | Embed Google Maps iframe with the business location | Visual + ranking signal. |
| **P6.67** | Publish "Top 10 [City] construction companies/projects" listicles | High local SEO + linkable from local press. |
| **P6.68** | Add `/locations/[slug]/faq` per city | 5–10 city-specific questions. |
| **P6.69** | Add city-specific testimonials/case studies | Real or composite; tag with `LocalBusiness` Review schema. |
| **P6.70** | Add `Review` / `AggregateRating` schema | Duplicate of P5.60. Track once. |

---

### P7 — Programmatic SEO Templates

| ID | Task | What it does |
|---|---|---|
| **P7.71** | Extend `SeoLandingPage` template | You already have it; ensure it accepts `metaTitle`, `metaDescription`, `keywords`, `hero`, `features`, `howItWorks`, `faq`, and emits `Service` JSON-LD. Use it for all P1 pages. |
| **P7.72** | Build `LocationTemplate` | Consume `lib/location-data.ts`; emit unique H1, body, `LocalBusiness` schema. Use for new P6 pages. |
| **P7.73** | Extend `PersonaTemplate` with structured data | Add `Person` schema (or `Organization` if B2B) to each persona. |

---

### P8 — Off-Page Preparation

| ID | Task | What it does |
|---|---|---|
| **P8.74** | Submit `sitemap.xml` to Google Search Console & Bing Webmaster Tools | Required for indexing. |
| **P8.75** | Create "Featured in / Partners / Customers" page | List customers with logos + links; emit `Customer` / `Brand` schema. |
| **P8.76** | Create dedicated sub-pages for each integration | E.g., `/integrations/procore`, `/integrations/quickbooks`, etc. Long-tail capture. |

---

### P9 — Analytics & Measurement

| ID | Task | What it does |
|---|---|---|
| **P9.77** | Set up Google Search Console API ingestion | Build `/api/keywords/rank` or dashboard page to track target keyword positions weekly. |
| **P9.78** | Add Core Web Vitals monitoring | Lighthouse CI in pipeline, Vercel Analytics if on Vercel. |
| **P9.79** | Add heatmaps | Hotjar or Microsoft Clarity on landing pages. |
| **P9.80** | Configure GA4 conversion events | demo requests, app downloads, blog reads, calculator uses. |

---

### P10 — On-Page Content Polish

| ID | Task | What it does | Why it matters |
|---|---|---|---|
| **P10.81** | Update homepage H1 to include "construction" + "inspections" + "AI" | Current H1 is brand-heavy. The top 3 mega keywords are `inspections`, `construction`, `building construction` — they need to appear in H1. | H1 is the strongest on-page signal. |
| **P10.82** | Add 200-word "What is a field inspection?" intro block to homepage | Defines the term, targets the 50,000-volume keyword. | Topical relevance for the homepage. |
| **P10.83** | Update meta descriptions on every page | Each description should include at least one high-volume keyword. | Meta description is the SERP ad copy; affects CTR. |
| **P10.84** | Add internal links from blog posts → solution pages | E.g., the "BIM in construction" blog post links to `/bim-construction-software`. | Distributes link equity. |
| **P10.85** | Make every solution page link out to 3–5 relevant blog posts | Topical clustering. | Helps Google understand the topic graph. |
| **P10.86** | Add `lastmod` per page in sitemap entries | Per-page `lastModified`. | Crawl-priority signal. |

---

## 4. Recommended Execution Order

A human team (or a follow-up opencode session) should execute in roughly this order to maximize compounding benefit:

1. **P0** (1–2 days) — fix the foundation first; everything else benefits.
2. **P7** (2–3 days, in parallel) — build the templates, since P1, P2, P6, P3 all consume them.
3. **P1** (1–2 weeks) — biggest SEO win: 24 new high-volume landing pages.
4. **P2** (1 week) — glossary expansion + 20–30 geo pages unlock the most long-tail.
5. **P6** (1–2 weeks) — flesh out the geo pages with local content, schema, maps, downloads.
6. **P5** (1 week) — technical SEO: icons, structured data, caching. Important but won't show results for weeks.
7. **P4** (2 weeks) — pillar pages + blog posts. The compounding effect of content takes months.
8. **P3** (3–4 days) — competitor comparison pages. Quick wins.
9. **P10** (2–3 days) — on-page polish: H1, meta descriptions, internal links.
10. **P8 + P9** (2 days) — submit to search consoles + analytics. Last-mile.

Total realistic effort: **6–8 weeks** for a single developer working full-time, with a writer for the P4 content.

---

## 5. Risks & Caveats

- **`/home-appraisal-software` (P1.30)** — only build if the product has any valuation feature. The CSV has 500+ volume for `home appraisal`, but those searchers want *valuation* tools (Zillow, Redfin, real estate agents), not *inspection* tools. A bad-fit page will hurt bounce rate and trust.
- **PII and trust signals** — SpaceCapture already has `/trust` and `/lab/privacy` pages. Good. Make sure every new landing page links to those.
- **Appraisal/valuation keywords** — many of these are off-topic. The CSV shows `home appraisal`, `appraiser near me`, `real estate appraiser` etc. These are **separate industries**. The site should *not* try to rank for pure appraisal terms unless the product supports them.
- **Top-funnel mega keywords** (`inspections`, `construction`, `building construction`) are extremely competitive. New pages will take 3–6 months to rank even with perfect on-page SEO; they need backlinks, not just content.
- **Geo pages** — don't publish thin or duplicated city pages. Google penalizes templated thin content. Every geo page must have unique, locally-relevant information.

---

## 6. Open Questions for Product/Business

1. **Does SpaceCapture support property valuation / appraisal features?** (Determines P1.30.)
2. **Is there a US sales presence to justify US state pages?** (Determines P2.36 priority.)
3. **Which international markets are commercially active?** Dubai/Singapore/Texas are already live — which others are sales-ready?
4. **Are there real customer case studies we can publish as location-specific proof?** (P6.69.)
5. **What is the budget for content writing vs. dev work?** Affects P4 timing.

---

## 7. Reference: File Touchpoints

| Tier | Primary files / folders to modify |
|---|---|
| P0 | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/faq/page.tsx`, `next.config.ts` |
| P1 | new files under `app/`; consume `SeoLandingPage` template |
| P2 | `app/glossary/`, `app/locations/`, `lib/location-data.ts`, `lib/glossary-data.ts` |
| P3 | `app/alternatives/` |
| P4 | `app/blog/`, `app/faq/` |
| P5 | `app/layout.tsx`, `app/page.tsx`, all page-level metadata, `next.config.ts` |
| P6 | `app/locations/[slug]/page.tsx` |
| P7 | `components/seo/SeoLandingPage.tsx`, `components/templates/LocationTemplate.tsx` (new) |
| P8 | `app/sitemap.xml` submission, `app/partners` (new) |
| P9 | GSC, GA4, Vercel/Lighthouse config |
| P10 | `app/page.tsx`, all page-level `metadata` blocks, internal-link audit |

---

*Document version: 1.0 — generated 2026-06-25 from the opencode SEO audit session. Keep in sync with the todo list as tasks are completed.*
