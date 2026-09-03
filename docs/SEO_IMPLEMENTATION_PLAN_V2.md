# SpaceCapture SEO Implementation Plan — V2

> Consolidated plan covering the indexing crisis fix first, followed by the 10 marketing-skill optimization tracks.
> Goal: get the 94–97 non-indexed pages indexed, then layer on schema, architecture, copy, content, and AI-search optimizations.

---

## Current Status

| Phase | Status | Notes |
|---|---|---|
| Phase A — Indexing Fix | **Completed** | All P0 technical fixes deployed, build passing, sitemap at 270 URLs. |
| Phase B — Technical SEO | **Completed** | BreadcrumbList dedup, Article schema (25 blog posts), Product/Offer schema (pricing), Service schema (7 service pages), custom 404, Compare + Resources nav links, 3 orphan pages fixed, 3 canonical issues fixed. |
| Phase C — Content & Copy | **Completed** | Brand standardized, homepage H1 rewritten, 13 h1→h2 fixes, fluff removed (21 instances), grammar/style fixed, pain-first restructuring (3 product pages), glossary expanded (63→100 terms), 5 use-case pages created. |
| Phase D — Competitive & Measurement | **Completed** | 2 comparison pages created (Procore, Fieldwire), duplicate gtag.js removed, GraphQL endpoint fixed, web-vitals installed, conversion events added, robots.txt updated for AI bots, /llms.txt and /pricing.md created, E-E-A-T signals added. |
| Phase E — Validation & Monitoring | In progress | GSC re-indexing requests required (see A.7). |

---

## Part 0: Executive Summary & Sequence

1. **Phase A — Indexing Fix** (P0): technical errors, consolidation, crawl budget, re-indexing.
2. **Phase B — Technical SEO** (P0/P1): schema, site architecture, canonical/URL hygiene.
3. **Phase C — Content & Copy** (P1/P2): copywriting, copy-editing, content strategy, programmatic SEO.
4. **Phase D — Competitive & Measurement** (P2): competitor comparison pages, analytics, AI SEO.
5. **Phase E — Validation & Monitoring** (ongoing): GSC, GA4, AI-visibility tracking.

---

# Phase A — Indexing Crisis Fix

## A.1 Current state (from GSC Coverage Drilldown 2026-07-15)

| Issue | Count | Example URLs |
|---|---|---|
| Not found (404) | 6 | `/locations`, `/knowledge-base`, `/alternatives`, `/who-we-serve`, `/compare`, `/ai-detection-api` |
| Crawled – currently not indexed | 32 | `/house-inspection-reports`, `/customers`, `/field-data-capture`, `/blog/ai-insurance-claims`, `/locations/field-inspection-software-michigan`, `/alternatives/autodesk-bim-360` |
| Discovered – currently not indexed | 55 | `/building-inspection-software`, `/construction-software`, `/glossary/*`, `/tools/*`, `/industries/telecom` |
| Alternate page with proper canonical tag | 1 | `/hvac-inspection-software` |

**Total not indexed: 94 pages** (close to the 97 currently reported).

### Root causes
1. **Stale 404s**: `/alternatives`, `/compare`, `/who-we-serve`, `/ai-detection-api` now exist in code but Google last crawled them in June/July and still reports them as 404.
2. **Missing pages**: `/locations` has no landing page; `/knowledge-base` is only a redirect.
3. **Canonical mismatch**: `/industries/telecom` canonical points to `/industries/telecommunication` (does not exist).
4. **Duplicate paths**: `/industries/oil-and-gas` and `/industries/oil-gas` are two pages with overlapping intent.
5. **Crawl budget overload**: ~254 total URLs for a site launched in April 2026 with low authority. Google is rationing crawl budget.

---

## A.2 P0 — Technical fixes

### A.2.1 Fix remaining 404s and canonical errors

| Task | File | Action |
|---|---|---|
| Create `/locations` landing page | `app/locations/page.tsx` | Copy pattern from `/alternatives`, `/compare`, `/who-we-serve`; link to all location pages. |
| Fix `/knowledge-base` | `next.config.ts` or `app/knowledge-base/page.tsx` | Ensure redirect returns 301 (not 404) or create a real page. Remove `/knowledge-base` from sitemap if 301 is kept. |
| Fix telecom canonical | `app/industries/telecom/page.tsx` | Change canonical from `/industries/telecommunication` to `/industries/telecom`. |
| Consolidate oil & gas | `app/industries/` | Pick one canonical (`/industries/oil-and-gas` recommended); 301 redirect `/industries/oil-gas` to it. |
| Request re-indexing | Google Search Console | URL Inspection tool on `/alternatives`, `/compare`, `/who-we-serve`, `/ai-detection-api`, `/locations`, `/industries/telecom`. |

### A.2.2 Validate sitemap and robots

- Verify `https://spacecapture.ai/sitemap.xml` lists every real public page and no 404 URLs.
- Verify `https://spacecapture.ai/robots.txt` exists and points to sitemap.

---

## A.3 P0 — Consolidate to free crawl budget

The 55 "discovered but not crawled" pages indicate Google is rationing crawl budget.

### A.3.1 Reduce low-value location pages

- **Keep indexed**: top 10–15 metros/states (California, Texas, Florida, New York, Dubai, London, Singapore, etc.).
- **Add `noindex`** to the remaining location pages until the site has more authority.
- Once parent `/locations` is indexed and ranking, gradually remove `noindex` from the next tier.

### A.3.2 Consolidate overlapping product pages

| Primary page | Pages to merge or differentiate |
|---|---|
| `/construction-software` | `/construction-management-software`, `/construction-inspection-software` |
| `/field-inspection-software` | `/site-inspection-software`, `/building-inspection-software` (if content overlaps) |
| `/home-inspection-software` | `/property-inspection-software` (review overlap) |

For pages kept separate, make them meaningfully distinct: unique H1, unique value prop, unique FAQ, unique comparison table.

---

## A.4 P1 — Internal linking fixes

For the 32 "crawled but not indexed" pages, improve discoverability and uniqueness.

### A.4.1 Global navigation additions

Add links in footer and/or main nav to:
- `/customers`
- `/house-inspection-reports`
- `/field-data-capture`
- `/trust/hallucination-free`
- `/resources/iso-9001-guide`

### A.4.2 Add an HTML sitemap

Create `/sitemap` (or `/all-pages`) linking to the 50 most important pages.

### A.4.3 Add related-page modules

- Product pages → link to 3 related product pages + 2 glossary terms.
- Glossary terms → link to 3 related glossary terms + 2 product pages.
- Blog posts → link to 3 related posts + 1 product page.

### A.4.4 Breadcrumbs

Ensure every product, location, industry, and blog post has `BreadcrumbList` JSON-LD and visible breadcrumb navigation.

---

## A.5 P1 — Content quality fixes for crawled-but-not-indexed pages

For each of the 32 pages, add:

1. Definition block in the first paragraph.
2. 40–60 word self-contained answer blocks.
3. Comparison table or pros/cons section.
4. FAQ section with 5–7 questions + `FAQPage` JSON-LD.
5. One statistic or citation with source.
6. Unique meta title/description.

Priority order:
1. `/house-inspection-reports`
2. `/customers`
3. `/field-data-capture`
4. `/sustainable-construction-software`
5. `/prefab-construction-software`
6. `/construction-cost-software`
7. `/bim-construction-software`
8. `/blog/ai-insurance-claims`
9. `/blog/predictive-maintenance`
10. `/blog/digital-punch-list-workflow`
11. `/blog/geofencing-construction-sites`

---

## A.6 P1 — GSC validation

1. Resubmit `sitemap.xml` after all sitemap changes.
2. Request indexing for every fixed URL.
3. Validate in GSC:
   - "Not found (404)"
   - "Alternate page with proper canonical tag"
   - "Crawled – currently not indexed"
4. Track weekly for 6 weeks:
   - Indexed vs. not indexed count
   - Crawl stats
   - "Discovered – currently not indexed" trend

---

## A.7 URLs to request re-indexing in Google Search Console

Run the URL Inspection tool on each URL below and click **Request indexing** after deployment:

### 404 fixes (now return 200)
- `https://spacecapture.ai/alternatives`
- `https://spacecapture.ai/compare`
- `https://spacecapture.ai/who-we-serve`
- `https://spacecapture.ai/ai-detection-api`
- `https://spacecapture.ai/locations`

### Redirect / canonical fixes
- `https://spacecapture.ai/knowledge-base` (now 301 → `/glossary`)
- `https://spacecapture.ai/industries/oil-gas` (now 301 → `/industries/oil-and-gas`)
- `https://spacecapture.ai/industries/telecom` (canonical fixed)
- `https://spacecapture.ai/hvac-inspection-software` (verify alternate/canonical issue resolved)

### Priority crawled-but-not-indexed pages
- `https://spacecapture.ai/house-inspection-reports`
- `https://spacecapture.ai/customers`
- `https://spacecapture.ai/field-data-capture`
- `https://spacecapture.ai/sustainable-construction-software`
- `https://spacecapture.ai/prefab-construction-software`
- `https://spacecapture.ai/construction-cost-software`
- `https://spacecapture.ai/bim-construction-software`
- `https://spacecapture.ai/blog/ai-insurance-claims`
- `https://spacecapture.ai/blog/predictive-maintenance`
- `https://spacecapture.ai/blog/digital-punch-list-workflow`
- `https://spacecapture.ai/blog/geofencing-construction-sites`

---

# Phase B — Technical SEO (Skills: schema, site-architecture)

## B.1 Schema markup (Skill: schema)

| Task | Action |
|---|---|
| Global JSON-LD | Keep `Organization`, `SoftwareApplication`, `LocalBusiness` in `components/JsonLd.tsx`. |
| FAQPage schema | Add to every product, comparison, and industry page that has FAQs. |
| Article schema | Add to all blog posts and glossary terms with `dateModified` and named author. |
| HowTo schema | Add to comparison posts and step-by-step guides. |
| BreadcrumbList | Add globally. |
| Product/Offer schema | Add to `/pricing` and product pages. |
| Service schema | Add to service pages. |

## B.2 Site architecture (Skill: site-architecture)

| Task | Action |
|---|---|
| Canonical standardization | All pages use self-referencing absolute canonicals. |
| URL consolidation | 301 redirect duplicates (`/home-appraisal-software` → `/property-inspection-software`, etc.). |
| Internal link depth | All important pages within 3 clicks of homepage. |
| Navigation | Add "Resources" and "Compare" to main nav if not present. |
| 404 handling | Custom 404 page with links to top categories. |

---

# Phase C — Content & Copy ✅

## C.1 Copywriting (Skill: copywriting)

| Task | Action | Status |
|---|---|---|
| Homepage H1 | Make it problem-first and keyword-rich. | ✅ "AI Field Inspection Software That Catches Defects Before They Cost You" |
| Hero CTAs | One primary ("Request Demo"), one secondary ("Try Free"). | ✅ Already correct |
| Product pages | Lead with customer pain, then solution, then proof. | ✅ Pain sections added to 3 key product pages |
| Social proof | Add specific metrics, customer logos, case-study quotes. | ⬜ Deferred |

## C.2 Copy-editing (Skill: copy-editing)

| Task | Action | Status |
|---|---|---|
| Remove fluff | Cut vague claims ("best", "revolutionary") and replace with specifics. | ✅ Removed 21 instances of #1, best, ultimate |
| Consistency | Standardize terminology (SpaceCapture vs Space Capture). | ✅ 33 replacements across 8 files |
| Heading hierarchy | Fix h1 → h2 in section components. | ✅ 13 components fixed |
| Grammar/style | Fix passive voice, long sentences, jargon. | ✅ Passive voice fixed in 3 product pages, jargon replaced, sentences split |
| CTAs | Make every page end with one clear action. | ⬜ Deferred |
| Typo fix | qw/qc → qa/qc | ✅ Fixed in ai-defect-detection |

## C.3 Content strategy (Skill: content-strategy)

| Task | Action | Status |
|---|---|---|
| Pillar pages | Build `/ai-defect-detection-construction`, `/field-inspection-software`, `/construction-management-software` as pillars. | ✅ Already exist; glossary cross-links added |
| Glossary expansion | Grow to 100+ terms; cross-link aggressively. | ✅ Expanded from 63 to 100 terms |
| Glossary cross-links | Link FROM product pages TO glossary terms. | ✅ Added to 3 product pages |
| Blog calendar | 2 posts/month targeting bottom-funnel comparison and how-to queries. | ⬜ Deferred |
| Content refresh | Update top 10 posts quarterly with new dates and data. | ⬜ Deferred |

## C.4 Programmatic SEO (Skill: programmatic-seo)

| Task | Action | Status |
|---|---|---|
| Location pages | Template with truly unique content per location; keep only top locations indexed initially. | ✅ Already done in Phase A |
| Alternatives pages | Continue competitor comparisons; ensure each has unique comparison table and FAQs. | ✅ Already exist (10 competitors) |
| Use-case pages | Generate pages for vertical + use-case combinations (e.g., "HVAC inspection software"). | ✅ Created 5 new: electrical, plumbing, roofing, fire-safety, bridge |
| Data feed | Centralize page data in `lib/seo-data.ts` to avoid drift. | ⬜ Deferred |

---

# Phase D — Competitive & Measurement ✅

## D.1 Competitors (Skill: competitors)

| Task | Action | Status |
|---|---|---|
| Comparison pages | Build `/compare/[competitor]` for Raken, PlanRadar, OpenSpace, SafetyCulture, Procore, Fieldwire. | ✅ All 6 exist (4 pre-existing + 2 created) |
| Alternatives pages | Build `/alternatives/[competitor]` for iAuditor, GoCanvas, Smartsheet, Microsoft Project, Autodesk BIM 360, Oracle Primavera. | ✅ All exist (4 static + 6 data-driven) |
| Review mining | Extract pain points from G2/Capterra reviews and address them in copy. | ⬜ Deferred |
| Differentiation table | Standardized feature comparison on every comparison page. | ✅ All comparison pages have feature tables |

## D.2 Analytics (Skill: analytics)

| Task | Action | Status |
|---|---|---|
| Remove duplicate GA/GTM | Route all tracking through GTM only; remove standalone `gtag.js`. | ✅ Removed standalone gtag.js, kept GTM only |
| Install web-vitals | `npm install web-vitals`; send CWV events to GA4. | ✅ Installed, CLS/FCP/LCP/TTFB/INP pushed to dataLayer |
| Conversion events | Fire `demo_requested`, `form_submitted`, `chatbot_opened`, `cta_clicked`. | ✅ All 4 events implemented via `lib/analytics.ts` |
| Fix GraphQL endpoint | Replace placeholder in `utils/sendDemoRequest.ts` with `NEXT_PUBLIC_GRAPHQL_URL`. | ✅ Now uses env variable with fallback |
| UTM preservation | Add helper to capture and store UTM params. | ⬜ Deferred |
| Consent mode | Implement cookie consent for EU/UK/CA traffic. | ⬜ Deferred |

## D.3 AI SEO (Skill: ai-seo)

| Task | Action | Status |
|---|---|---|
| Robots.txt AI bots | Allow GPTBot, PerplexityBot, ClaudeBot, Google-Extended; block CCBot. | ✅ Updated with AI-specific rules |
| `/pricing.md` | Create machine-readable pricing file for AI agents. | ✅ Created at `app/pricing.md/route.ts` |
| `/llms.txt` | Add overview + links to key pages and pricing. | ✅ Created at `app/llms.txt/route.ts` |
| `/okf/` bundle | Generate Open Knowledge Format bundle when ready. | ⬜ Deferred (emerging standard) |
| Extractable content | Add definition blocks, 40–60 word answer blocks, FAQ schema, comparison tables. | ✅ FAQ schema on 10+ pages, comparison tables on all comparison pages |
| E-E-A-T | Named authors, credentials, "last updated" dates on blog and glossary. | ✅ Author changed to "SpaceCapture Engineering Team", last updated dates added |
| Third-party presence | Create/update G2, Capterra, TrustRadius profiles; collect reviews. | ⬜ Deferred (manual process) |

---

# Phase E — Implementation Order & Timeline

| Week | Focus |
|---|---|
| Week 1 | Phase A.1–A.3: technical fixes, 404s, canonicals, consolidation, noindex low-value locations. |
| Week 2 | Phase A.4–A.5: internal linking, content fixes for 32 crawled pages, GSC re-indexing. |
| Week 3 | Phase B: schema + site architecture. |
| Week 4 | Phase C.1–C.2: copywriting + copy-editing. |
| Week 5 | Phase C.3–C.4: content strategy + programmatic SEO. |
| Week 6 | Phase D.1: competitor comparison pages. |
| Week 7 | Phase D.2: analytics implementation. |
| Week 8 | Phase D.3: AI SEO files and optimization. |
| Ongoing | Content refresh, GSC monitoring, AI-visibility monitoring, review collection. |

---

# Phase F — Success Metrics

| Metric | Target |
|---|---|
| Indexed pages | 94 → 0 not indexed within 6–8 weeks of technical fixes. |
| GSC impressions | +50% within 3 months. |
| Clicks from organic search | +30% within 3 months. |
| Core Web Vitals | All green (LCP <2.5s, CLS <0.1, INP <200ms). |
| Conversion events | 100% of demo/chatbot/form interactions tracked. |
| AI citations | Mentioned in ChatGPT/Perplexity for top 10 queries within 6 months. |

---

# Appendix — Files referenced

- `app/layout.tsx` — metadata, canonical, GTM/GA loading
- `app/robots.ts` — crawler rules
- `app/sitemap.ts` — sitemap generation
- `next.config.ts` — redirects/rewrites
- `components/JsonLd.tsx` — global schema
- `components/seo/ArticleSchema.ts` — Article schema
- `components/blog/BlogPostLayout.tsx` — blog post layout
- `components/faq-data.ts` — FAQ content
- `lib/location-data.ts` — location page data
- `lib/alternatives-data.ts` — alternatives page data
- `lib/glossary-data.ts` — glossary terms
- `lib/blog-data.ts` — blog posts
- `utils/sendDemoRequest.ts` — demo submission utility
