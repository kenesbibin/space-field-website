# SpaceCapture Indexing Fix — AI Implementation Plan

> Generated from Google Search Console Coverage Drilldown exports.
> Each phase follows the official Google Search Central documentation.
> Implement phases in order. Do not start the next phase until the previous phase is deployed and validated.

---

## Phase 1 — Fix Canonical Tags (P0)

**Goal**: Every public page must declare a correct, self-referencing, absolute canonical URL so Google indexes each page independently instead of treating them as duplicates of the homepage.

**Google reference**: [How to specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

### Task 1.1 — Remove global canonical from root layout

**File**: `app/layout.tsx`

**Action**: Delete the `alternates` block inside the root `metadata` object.

**Old code to remove**:
```ts
  alternates: {
    canonical: "/",
  },
```

**Resulting metadata block should start like**:
```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://spacecapture.ai"),
  title: {
    default: "Space Capture - Construction Field Inspection App & Site Audit Software",
    template: "%s | SpaceCapture"
  },
  description: "The #1 Field Management App for Construction Teams...",
  // ... rest of metadata, but NO alternates.canonical
};
```

---

### Task 1.2 — Add absolute self-referencing canonicals to flagged pages

**Google reference**: [Canonicalization best practices](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls#best-practices)

For each file below, add `alternates.canonical` using the exact absolute URL shown.

#### File: `app/blog/page.tsx`

**Add inside `export const metadata: Metadata = { ... }`**:
```ts
alternates: {
  canonical: "https://spacecapture.ai/blog",
},
```

#### File: `app/hvac-inspection-software/page.tsx`

**Add inside `export const metadata: Metadata = { ... }`**:
```ts
alternates: {
  canonical: "https://spacecapture.ai/hvac-inspection-software",
},
```

#### File: `app/ai-construction-defect-detection/page.tsx`

**Add inside `export const metadata: Metadata = { ... }`**:
```ts
alternates: {
  canonical: "https://spacecapture.ai/ai-construction-defect-detection",
},
```

#### File: `app/digitize-paper-forms/page.tsx`

**Add inside `export const metadata: Metadata = { ... }`**:
```ts
alternates: {
  canonical: "https://spacecapture.ai/digitize-paper-forms",
},
```

#### File: `app/who-we-serve/facility-managers/page.tsx`

**Add inside `export const metadata: Metadata = { ... }`**:
```ts
alternates: {
  canonical: "https://spacecapture.ai/who-we-serve/facility-managers",
},
```

#### File: `app/blog/ai-insurance-claims/page.tsx`

**Add inside `export const metadata: Metadata = { ... }`**:
```ts
alternates: {
  canonical: "https://spacecapture.ai/blog/ai-insurance-claims",
},
```

#### File: `app/blog/predictive-maintenance/page.tsx`

**Add inside `export const metadata: Metadata = { ... }`**:
```ts
alternates: {
  canonical: "https://spacecapture.ai/blog/predictive-maintenance",
},
```

---

### Task 1.3 — Standardize existing canonicals to absolute URLs

**Files to update** (find any page that already sets `alternates.canonical` with a relative path):

Examples include:
- `app/access-control/page.tsx`
- `app/sample-inspection-reports/page.tsx`
- `app/visual-form-builder/page.tsx`
- `app/request-a-demo/page.tsx`
- `app/reports/page.tsx`
- `app/integrations/page.tsx`
- `app/engagement-flows/page.tsx`
- `app/hosting/page.tsx`
- `app/core-functions/page.tsx`
- `app/industries/*/page.tsx`
- `app/tools/*/page.tsx`
- `app/alternatives/*/page.tsx`
- `app/compare/*/page.tsx`
- `app/locations/[slug]/page.tsx`

**Action**: Convert any relative canonical to absolute.

**Pattern**:
```ts
// Before
alternates: {
  canonical: '/request-a-demo',
}

// After
alternates: {
  canonical: 'https://spacecapture.ai/request-a-demo',
}
```

---

### Task 1.4 — Verification

After deployment, run these commands. Each must output the page's own URL, not `https://spacecapture.ai`.

```bash
curl -s https://spacecapture.ai/blog | grep 'rel="canonical"'
# Expected: <link rel="canonical" href="https://spacecapture.ai/blog">

curl -s https://spacecapture.ai/hvac-inspection-software | grep 'rel="canonical"'
# Expected: <link rel="canonical" href="https://spacecapture.ai/hvac-inspection-software">

curl -s https://spacecapture.ai/ai-construction-defect-detection | grep 'rel="canonical"'
# Expected: <link rel="canonical" href="https://spacecapture.ai/ai-construction-defect-detection">

curl -s https://spacecapture.ai/digitize-paper-forms | grep 'rel="canonical"'
# Expected: <link rel="canonical" href="https://spacecapture.ai/digitize-paper-forms">

curl -s https://spacecapture.ai/who-we-serve/facility-managers | grep 'rel="canonical"'
# Expected: <link rel="canonical" href="https://spacecapture.ai/who-we-serve/facility-managers">

curl -s https://spacecapture.ai/blog/ai-insurance-claims | grep 'rel="canonical"'
# Expected: <link rel="canonical" href="https://spacecapture.ai/blog/ai-insurance-claims">

curl -s https://spacecapture.ai/blog/predictive-maintenance | grep 'rel="canonical"'
# Expected: <link rel="canonical" href="https://spacecapture.ai/blog/predictive-maintenance">
```

**Google Search Console validation**:
1. Open **Page indexing report**.
2. Click **Validate fix** for the issue "Alternate page with proper canonical tag".
3. Use the **URL Inspection tool** to request indexing for each fixed URL.

---

## Phase 2 — Resolve 404 Errors (P0)

**Goal**: Ensure logical parent pages and aliases return 200 (or 301 where appropriate) instead of 404.

**Google reference**: [Page indexing report — Not found (404)](https://support.google.com/webmasters/answer/7440203)

### Task 2.1 — Create `/alternatives` landing page

**File to create**: `app/alternatives/page.tsx`

**Content approach**:
- Title: "Best SpaceCapture Alternatives & Competitors"
- Intro paragraph
- Cards linking to each existing alternative page:
  - `/alternatives/safetyculture`
  - `/alternatives/procore`
  - `/alternatives/gocanvas`
  - `/alternatives/fieldwire`
  - `/alternatives/ai-detection-api`
- Include canonical:
  ```ts
  alternates: {
    canonical: "https://spacecapture.ai/alternatives",
  }
  ```

### Task 2.2 — Create `/compare` landing page

**File to create**: `app/compare/page.tsx`

**Content approach**:
- Title: "SpaceCapture vs Competitors — Comparison Hub"
- Cards linking to each comparison page:
  - `/compare/safety-culture`
  - `/compare/raken`
  - `/compare/planradar`
  - `/compare/openspace`
- Include canonical:
  ```ts
  alternates: {
    canonical: "https://spacecapture.ai/compare",
  }
  ```

### Task 2.3 — Create `/who-we-serve` landing page

**File to create**: `app/who-we-serve/page.tsx`

**Content approach**:
- Title: "Industries & Teams We Serve"
- Cards linking to each persona page:
  - `/who-we-serve/facility-managers`
  - `/who-we-serve/general-contractors`
  - `/who-we-serve/subcontractors`
  - `/who-we-serve/property-developers`
  - `/who-we-serve/architects-engineers`
- Include canonical:
  ```ts
  alternates: {
    canonical: "https://spacecapture.ai/who-we-serve",
  }
  ```

### Task 2.4 — Create real page for `/ai-detection-api`

**File to create**: `app/ai-detection-api/page.tsx`

**Content approach**:
- Re-export or re-use the component/content from `app/alternatives/ai-detection-api/page.tsx`.
- Include canonical:
  ```ts
  alternates: {
    canonical: "https://spacecapture.ai/ai-detection-api",
  }
  ```

**Note**: Remove the broken rewrite from `next.config.ts` if the real page is created, to avoid conflicts.

### Task 2.5 — Remove `/knowledge-base` from sitemap

**File**: `app/sitemap.ts`

**Action**: Delete this line from the `ROUTES` array:
```ts
"/knowledge-base",
```

### Task 2.6 — Verification

```bash
curl -I https://spacecapture.ai/alternatives
curl -I https://spacecapture.ai/compare
curl -I https://spacecapture.ai/who-we-serve
curl -I https://spacecapture.ai/ai-detection-api
# All should return 200, not 404
```

---

## Phase 3 — Complete Sitemap & robots.txt (P1)

**Goal**: Ensure Google can discover all important pages and that the sitemap contains only real, canonical URLs.

**Google references**:
- [Learn about sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)

### Task 3.1 — Convert `app/sitemap.ts` to dynamic generation

**File**: `app/sitemap.ts`

**Approach**:
- At build time, scan the `app/` directory for all `page.tsx` files.
- Convert file paths to URL paths.
- Exclude non-public routes such as `app/lab/` if they are experiments.
- Return the array with `url` and `lastModified`.

**Example structure**:
```ts
import type { MetadataRoute } from "next";
import { globSync } from "glob"; // or use Node fs + path
import path from "path";

const BASE_URL = "https://spacecapture.ai";

const EXCLUDED_SEGMENTS = ["lab"]; // add any non-public segments

function getRoutes(): string[] {
  const files = globSync("app/**/page.tsx", { posix: true });
  return files
    .map((file) => {
      const route = file
        .replace(/^app/, "")
        .replace(/\/page\.tsx$/, "")
        .replace(/\/\([^)]+\)/g, "") // remove route groups
        .replace(/\[([^\]]+)\]/g, ":$1"); // handle dynamic routes if needed
      return route === "" ? "/" : route;
    })
    .filter((route) => !EXCLUDED_SEGMENTS.some((seg) => route.includes(seg)));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();
  return getRoutes().map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    lastModified,
  }));
}
```

**Note**: Adjust dynamic route handling (`[slug]`) based on actual data sources.

### Task 3.2 — Create `public/robots.txt`

**File**: `public/robots.txt`

**Content**:
```txt
User-agent: *
Allow: /

Sitemap: https://spacecapture.ai/sitemap.xml
```

### Task 3.3 — Verification

```bash
curl https://spacecapture.ai/sitemap.xml
# Should list all real pages and no 404 URLs

curl https://spacecapture.ai/robots.txt
# Should show Allow: / and Sitemap line
```

---

## Phase 4 — Internal Linking & Content Quality (P2)

**Goal**: Help pages stuck in "Crawled – currently not indexed" get indexed by improving discoverability and uniqueness.

**Google reference**: [How Google Search works — Crawling](https://developers.google.com/search/docs/fundamentals/how-search-works)

### Task 4.1 — Strengthen `/blog` index links

**File**: `app/blog/page.tsx`

**Action**:
- Confirm every article in `ARTICLES` links to `/blog/{slug}` using Next.js `<Link>` with a real `<a>` tag behavior.
- Ensure no JavaScript-only links.

### Task 4.2 — Add related posts to blog articles

**Files**: Each `app/blog/[slug]/page.tsx`

**Action**:
- Add a "Related articles" section at the bottom linking to 2–3 related posts.

### Task 4.3 — Review persona and alternatives content

**Files**:
- `app/who-we-serve/*/page.tsx`
- `app/alternatives/*/page.tsx`
- `app/compare/*/page.tsx`

**Action**:
- Ensure each page has unique, substantial content.
- Avoid duplicate boilerplate across persona pages.

---

## Phase 5 — Google Search Console Validation (P2)

**Goal**: Tell Google the fixes are in place and request re-crawling.

**Google reference**: [Page indexing report — Validation](https://support.google.com/webmasters/answer/7440203#validation)

### Task 5.1 — Validate fixes

1. Open Google Search Console → **Page indexing report**.
2. Click **Validate fix** for:
   - "Alternate page with proper canonical tag"
   - "Not found (404)"
   - "Crawled – currently not indexed"

### Task 5.2 — Request indexing

1. Use the **URL Inspection tool** on each fixed URL.
2. Click **Request indexing**.

### Task 5.3 — Re-submit sitemap

1. Go to **Sitemaps** report.
2. Remove existing `sitemap.xml`.
3. Re-submit `https://spacecapture.ai/sitemap.xml`.

---

## Acceptance Criteria

- [ ] No page returns `canonical = https://spacecapture.ai` unless it is the homepage.
- [ ] `/alternatives`, `/compare`, `/who-we-serve`, `/ai-detection-api` return HTTP 200.
- [ ] `/knowledge-base` is removed from the sitemap.
- [ ] `https://spacecapture.ai/sitemap.xml` lists every important real page and no 404 URLs.
- [ ] `https://spacecapture.ai/robots.txt` exists and points to the sitemap.
- [ ] GSC shows the three indexing issues declining after validation.
