# SpaceCapture Indexing Fix — Implementation Tasks

> Generated from Google Search Console Coverage Drilldown exports (`gsc-reports/`).
> All tasks are aligned with the official Google Search Central documentation.

---
 
## 0. Context & Diagnosis  
 
### GSC Issues Found 

| Drilldown Folder | Issue | Example URLs |
|------------------|-------|--------------|
| `gsc-reports/coverage-drilldown-1` | **Crawled – currently not indexed** | `/who-we-serve/facility-managers`, `/blog/ai-insurance-claims`, `/blog/predictive-maintenance`, `/favicon.ico?favicon.9265563f.ico` |
| `gsc-reports/coverage-drilldown-2` | **Alternate page with proper canonical tag** | `/blog`, `/hvac-inspection-software`, `/ai-construction-defect-detection`, `/digitize-paper-forms` |
| `gsc-reports/coverage-drilldown-3` | **Not found (404)** | `/alternatives`, `/knowledge-base`, `/who-we-serve`, `/compare`, `/ai-detection-api` |

### Root Causes

1. **Global canonical bug in `app/layout.tsx`**: it sets `alternates.canonical: "/"`, so every page that does not override it tells Google the homepage is the canonical URL.
2. **Missing parent/category pages**: `/alternatives`, `/compare`, `/who-we-serve`, `/knowledge-base` have no `page.tsx` (or no route at all).
3. **Broken rewrite in production**: `/ai-detection-api` is configured as a rewrite to `/alternatives/ai-detection-api` in `next.config.ts`, but it returns **404 live**.
4. **Incomplete sitemap**: `app/sitemap.ts` omits many real pages (e.g., `/who-we-serve/facility-managers`, `/blog/ai-insurance-claims`) and includes a non-existent `/knowledge-base`.
5. **Missing `robots.txt`**: Google has no crawler guidance and cannot auto-discover the sitemap.

---

## 1. P0 — Fix Canonical Tag Bug

**Why this is P0**: Google treats almost every page as a duplicate of the homepage. Until this is fixed, new content cannot be indexed independently.

### Task 1.1 — Remove the global canonical from the root layout

- **File**: `app/layout.tsx`
- **Action**: Remove the `alternates.canonical: "/"` block from the root `metadata` object.
- **Google reference**: [How to specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- **Verification**: After deploy, `curl -I https://spacecapture.ai/any-page` should not show `link: <https://spacecapture.ai/>; rel="canonical"` unless that page explicitly sets it.

### Task 1.2 — Add self-referencing canonicals to every page

- **Files**: All `app/**/page.tsx` files (especially pages without an explicit `alternates.canonical`).
- **Action**: Add a self-referencing canonical to each page. Because `metadataBase` is already set to `https://spacecapture.ai`, prefer relative paths:
  ```ts
  export const metadata: Metadata = {
    title: "...",
    description: "...",
    alternates: {
      canonical: "/blog", // or "/hvac-inspection-software", etc.
    },
  };
  ```
- **Priority pages to fix first** (flagged by GSC):
  - `app/blog/page.tsx`
  - `app/hvac-inspection-software/page.tsx`
  - `app/ai-construction-defect-detection/page.tsx`
  - `app/digitize-paper-forms/page.tsx`
  - `app/who-we-serve/facility-managers/page.tsx`
  - `app/blog/ai-insurance-claims/page.tsx`
  - `app/blog/predictive-maintenance/page.tsx`
- **Google reference**: [Page indexing report — Alternate page with proper canonical tag](https://support.google.com/webmasters/answer/7440203)
- **Verification**: For each fixed URL, run:
  ```bash
  curl -s https://spacecapture.ai/<path> | grep -i 'rel="canonical"'
  ```
  It should output the page's own URL, not `https://spacecapture.ai`.

### Task 1.3 — Standardize existing canonical formats

- **Files**: Pages that already set `alternates.canonical` (some use absolute URLs, some relative).
- **Action**: Standardize on relative canonical URLs relying on `metadataBase`. Avoid mixing absolute and relative canonicals across the site.
- **Google reference**: [Canonicalization best practices](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls#best-practices)

---

## 2. P0 — Resolve 404 Errors

**Why this is P0**: 404s waste crawl budget and signal poor site quality. If pages are linked or sitemap-listed, they must not 404.

### Task 2.1 — Decide a strategy for each 404 parent page

| URL | Recommended Action | Rationale |
|-----|-------------------|-----------|
| `/alternatives` | **Create a landing page** OR **301 redirect** to `/alternatives/safetyculture` (the most prominent alternative) | Google docs: [Fixing 404 errors](https://support.google.com/webmasters/answer/2445990) |
| `/compare` | **Create a landing page** OR **301 redirect** to `/compare/raken` | Same as above |
| `/who-we-serve` | **Create a landing page** OR **301 redirect** to `/request-a-demo` or `/about-us` | Same as above |
| `/knowledge-base` | **Remove from sitemap** OR **create the page** | It is listed in `app/sitemap.ts` but has no route |
| `/ai-detection-api` | See Task 2.2 | Rewrite is broken in production |

- **Google reference**: [Page indexing report — Not found (404)](https://support.google.com/webmasters/answer/7440203)

### Task 2.2 — Fix `/ai-detection-api` rewrite

- **File**: `next.config.ts`
- **Action**: Investigate why the rewrite works locally/code-wise but returns 404 in production.
  - Check whether the deployment platform supports Next.js rewrites.
  - If using static export (`output: 'export'`), rewrites do not apply — remove the rewrite and create a real page.
  - If the rewrite is correct but cached, purge the CDN/deployment cache.
  - Alternative: create `app/ai-detection-api/page.tsx` that renders the same content as `app/alternatives/ai-detection-api/page.tsx` (or re-exports it), then remove the rewrite.
- **Google reference**: [Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- **Verification**:
  ```bash
  curl -I https://spacecapture.ai/ai-detection-api
  # Should return 200 (or 308/301 if you choose to redirect)
  # Must NOT return 404
  ```

### Task 2.3 — Add redirects for removed/defunct routes (if chosen)

- **File**: `next.config.ts`
- **Action**: If any 404 URL is intentionally gone, add a 301 redirect to the nearest relevant page instead of leaving it 404.
- **Google reference**: [Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects)

---

## 3. P1 — Complete & Correct the Sitemap

**Why this is P1**: The sitemap currently includes a non-existent page and omits many real pages, hurting discoverability.

### Task 3.1 — Audit all real routes

- **Action**: List every `app/**/page.tsx` file and compare it against `app/sitemap.ts`.
- **Missing routes to add** (examples from GSC + code audit):
  - `/who-we-serve/facility-managers`
  - `/blog/ai-insurance-claims`
  - `/blog/predictive-maintenance`
  - All other blog posts in `app/blog/`
  - All other persona pages in `app/who-we-serve/`
  - All other alternatives in `app/alternatives/`
  - All other comparisons in `app/compare/`
  - All tool calculators in `app/tools/`
  - All glossary pages in `app/glossary/`
  - All lab pages in `app/lab/`
  - All resource pages in `app/resources/`
- **Tool**: Run `glob app/**/page.tsx` to get the full list.

### Task 3.2 — Remove non-existent routes from the sitemap

- **File**: `app/sitemap.ts`
- **Action**: Remove `/knowledge-base` unless a page is created for it.

### Task 3.3 — (Recommended) Generate the sitemap dynamically

- **File**: `app/sitemap.ts`
- **Action**: Replace the hardcoded `ROUTES` array with filesystem-based discovery so new pages are automatically included. Example approach:
  - Read `app/**/page.tsx` paths at build time.
  - Convert file paths to URL paths.
  - Exclude non-public routes (e.g., `lab/` if they are experiments).
  - Return the array with `url` and `lastModified`.
- **Google reference**: [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- **Verification**: After build, open `https://spacecapture.ai/sitemap.xml` and confirm it contains every important page and no 404 URLs.

### Task 3.4 — Exclude non-page asset URLs

- **Action**: Ensure static assets like `favicon.ico?...` are never listed in the sitemap and are not reachable as crawlable HTML pages.
- **Google reference**: [File types Google can index](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types)

---

## 4. P1 — Add `robots.txt`

**Why this is P1**: A robots.txt file helps Google discover the sitemap and understand crawl rules.

### Task 4.1 — Create `public/robots.txt`

- **File**: `public/robots.txt`
- **Action**: Add the following content:
  ```txt
  User-agent: *
  Allow: /

  Sitemap: https://spacecapture.ai/sitemap.xml
  ```
- **Google reference**: [Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- **Verification**:
  ```bash
  curl https://spacecapture.ai/robots.txt
  # Should show the rules and sitemap URL
  ```

---

## 5. P2 — Improve Internal Linking & Content Quality

**Why this is P2**: These fixes help move pages from “Crawled – currently not indexed” to “Indexed.”

### Task 5.1 — Strengthen internal links to non-indexed blog posts

- **File**: `app/blog/page.tsx`
- **Action**: Ensure every blog post in the `ARTICLES` array is linked with a clean `<a href="/blog/{slug}">` and that the link is reachable without JavaScript.
- **Google reference**: [Make your links crawlable](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- **Verification**: Use the URL Inspection tool in GSC on `/blog/ai-insurance-claims` and `/blog/predictive-maintenance` after fixing canonicals.

### Task 5.2 — Add related-post links

- **Action**: In each blog post page, add a “Related articles” section linking to 2–3 related posts.
- **Google reference**: [How Google Search works — Crawling](https://developers.google.com/search/docs/fundamentals/how-search-works)

### Task 5.3 — Review content uniqueness

- **Action**: Ensure each persona page (`/who-we-serve/*`) and each comparison/alternatives page has unique, substantial content. If pages are too similar, Google may still choose not to index them even with correct canonicals.
- **Google reference**: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

---

## 6. P2 — Validate Fixes in Google Search Console

### Task 6.1 — Request re-indexing of fixed URLs

- **Action**: In GSC, use the **URL Inspection tool** on each fixed URL and click **Request indexing**.
- **Google reference**: [Ask Google to recrawl your URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)

### Task 6.2 — Start validation for each issue

- **Action**: In GSC Page indexing report, click **Validate fix** for:
  - “Alternate page with proper canonical tag”
  - “Not found (404)”
  - “Crawled – currently not indexed” (after content/canonical fixes)
- **Google reference**: [Page indexing report — Validation](https://support.google.com/webmasters/answer/7440203#validation)

### Task 6.3 — Re-submit the sitemap

- **Action**: In GSC Sitemaps report, remove and re-submit `https://spacecapture.ai/sitemap.xml` after all sitemap changes are deployed.
- **Google reference**: [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

---

## 7. Implementation Order (Recommended)

1. **P0**: Fix root layout canonical (Task 1.1).
2. **P0**: Add self-referencing canonicals to all flagged pages (Task 1.2).
3. **P0**: Fix `/ai-detection-api` rewrite or create a real page (Task 2.2).
4. **P0**: Decide/create/redirect `/alternatives`, `/compare`, `/who-we-serve`, `/knowledge-base` (Task 2.1).
5. **P1**: Audit and update `app/sitemap.ts` (Tasks 3.1–3.3).
6. **P1**: Create `public/robots.txt` (Task 4.1).
7. **P2**: Improve internal linking and content uniqueness (Tasks 5.1–5.3).
8. **P2**: Validate in GSC and request re-indexing (Tasks 6.1–6.3).

---

## 8. Acceptance Criteria

- [ ] No page returns `canonical = https://spacecapture.ai` unless it is actually the homepage.
- [ ] `/alternatives`, `/compare`, `/who-we-serve`, `/ai-detection-api` return 200 or 301 (not 404).
- [ ] `/knowledge-base` is either created or removed from the sitemap.
- [ ] `https://spacecapture.ai/sitemap.xml` lists every important real page and no non-existent pages.
- [ ] `https://spacecapture.ai/robots.txt` exists and points to the sitemap.
- [ ] GSC shows the three indexing issues declining after validation.

---

*Generated: 2026-07-07*
