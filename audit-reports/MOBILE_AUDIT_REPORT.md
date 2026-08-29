# Mobile Responsiveness Audit Report

**Generated:** 2026-08-03T08:07:43.242Z
**Base URL:** http://localhost:3000 (production build)
**Pages audited:** 36
**Tools:** Lighthouse (mobile), Playwright (iPhone SE, iPhone 14, iPhone Max, iPad)

## Executive summary

| Metric | Average |
|---|---|
| Performance | 38 |
| Accessibility | 91 |
| Best Practices | 73 |
| SEO | 98 |

### Key findings
- **Performance is poor across the board** (average ~38/100). Largest Contentful Paint ranges from ~8.7s to ~21s, and Total Blocking Time is very high (up to 18.5s on the cost calculator). This is the biggest mobile UX problem.
- **Accessibility is generally good** (average ~91/100), but the homepage scores 85 and the cost-calculator tool scores 83 due to form/table issues.
- **Best Practices scores are mostly 75/100**, pulled down by browser errors logged to the console (likely CopilotKit / third-party scripts). The homepage scores 0 because Lighthouse detected a large layout-affecting issue or error; its report HTML should be inspected.
- **Horizontal overflow was detected only on `/lab/mobile-performance`** across all four viewports. Other pages do not show measured overflow, but several contain code patterns that are at risk.
- **The missing `@tailwindcss/typography` plugin** means `prose-*` classes are ignored on blog posts, product pages, and industry pages. This is a silent styling regression.

## Worst performing pages

### Lowest Performance scores
| Page | Performance | LCP | TBT |
|---|---|---|---|
| /access-control | 28 | 13757 ms | 3612 ms |
| /tools/construction-cost-calculator | 34 | 11447 ms | 18555 ms |
| /construction-software | 35 | 18638 ms | 13076 ms |
| /field-data-capture-software | 36 | 18954 ms | 12936 ms |
| /compare/fieldwire | 36 | 18342 ms | 12145 ms |

### Lowest Accessibility scores
| Page | Accessibility |
|---|---|
| /tools/construction-cost-calculator | 83 |
| / | 85 |
| /pricing | 85 |
| /tools/labor-cost-calculator | 86 |
| /app-download | 89 |

## Global issues (affect every page)

- No explicit viewport export in app/layout.tsx (relying on Next.js default).
- Navbar mobile drawer z-30 is below fixed header z-50, so header is not dimmed.
- Mobile nav menu is very long; renders full Products/Industries/Contact tree.
- Breadcrumbs uses hardcoded mt-[72px] offset and undefined no-scrollbar utility.
- WhatsApp + Email fixed buttons may overlap on short viewports.
- SpaceCaptureCopilot popup has no mobile max-width or safe-area handling.
- Undefined Tailwind utilities used site-wide: no-scrollbar, animate-blob, animation-delay-2000, hero-text-animate, animate-in, rounded-2xs, bg-slate-750, custom-scrollbar, line-clamp-2.
- @tailwindcss/typography plugin is missing; all prose-* classes are ignored on blog/SeoLandingPage/Industry pages.

## Template-level issues

- **SeoLandingPage:** Used by ~39 product/solution pages. Missing prose-* typography; hardcoded decorative images.
- **BlogPostLayout:** Used by ~23 blog posts. Missing prose-* typography.
- **IndustryTemplate/IndustryDetails:** Used by ~10 industry pages. Missing prose-* typography; hardcoded decorative images.
- **PersonaTemplate:** Used by 5 who-we-serve pages. Hardcoded decorative images.
- **AlternativesTemplate:** Used by alternatives pages. Hardcoded decorative images.
- **CallToAction:** Used by 72+ pages. Hardcoded mockups; undefined animate-blob.
- **Features:** Used on homepage + feature pages. w-[370px] h-[750px] phone mockup overflows narrow viewports.
- **HeroSection:** Homepage only. w-[280px] phone frame; undefined hero-text-animate.
- **BeforeAfterSlider:** Uses w-[100vw] which can trigger horizontal scroll.

## Per-page audit results

### /

| Score | Value |
|---|---|
| Performance | 41 |
| Accessibility | 85 |
| Best Practices | 0 |
| SEO | 100 |
| First Contentful Paint | 1508 ms |
| Largest Contentful Paint | 14521 ms |
| Total Blocking Time | 3155 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 5178 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses HeroSection/Features/CallToAction with hardcoded device mockups.
- Uses undefined animation classes (animate-blob, hero-text-animate).
- app/page.tsx has overflow-x-hidden (L39).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/home/report.html`
- Screenshots: `mobile-audit/screenshots/home`

### /pricing

| Score | Value |
|---|---|
| Performance | 42 |
| Accessibility | 85 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1553 ms |
| Largest Contentful Paint | 8718 ms |
| Total Blocking Time | 5479 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 4439 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses CallToAction component (undefined animations, hardcoded mockups).
- app/pricing/page.tsx uses flex-shrink-0 (L117, L162).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/pricing/report.html`
- Screenshots: `mobile-audit/screenshots/pricing`

### /request-a-demo

| Score | Value |
|---|---|
| Performance | 41 |
| Accessibility | 93 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1561 ms |
| Largest Contentful Paint | 8875 ms |
| Total Blocking Time | 5234 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 5090 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses CallToAction component.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/request-a-demo/report.html`
- Screenshots: `mobile-audit/screenshots/request-a-demo`

### /app-download

| Score | Value |
|---|---|
| Performance | 41 |
| Accessibility | 89 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1547 ms |
| Largest Contentful Paint | 13098 ms |
| Total Blocking Time | 5178 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 4917 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/app-download/page.tsx: fixed background element (L24), w-[50%] images, max-w-[1200px], flex-shrink-0 (L121).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/app-download/report.html`
- Screenshots: `mobile-audit/screenshots/app-download`

### /playstore-app-download

| Score | Value |
|---|---|
| Performance | 41 |
| Accessibility | 93 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1534 ms |
| Largest Contentful Paint | 13397 ms |
| Total Blocking Time | 6005 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 4751 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/playstore-app-download/page.tsx: fixed background (L103), many absolute offsets, hidden md:/sm: elements, flex-shrink-0, max-w-[1200px].

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/playstore-app-download/report.html`
- Screenshots: `mobile-audit/screenshots/playstore-app-download`

### /core-functions

| Score | Value |
|---|---|
| Performance | 41 |
| Accessibility | 95 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1559 ms |
| Largest Contentful Paint | 15176 ms |
| Total Blocking Time | 5797 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 4781 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/core-functions/page.tsx overflow-x-hidden (L26).
- Uses CoreFunctionSection + SolutionDetails.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/core-functions/report.html`
- Screenshots: `mobile-audit/screenshots/core-functions`

### /visual-form-builder

| Score | Value |
|---|---|
| Performance | 41 |
| Accessibility | 89 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1563 ms |
| Largest Contentful Paint | 15195 ms |
| Total Blocking Time | 5726 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 4881 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/visual-form-builder/page.tsx overflow-x-hidden (L30).
- Uses VisualFormBuilderSection.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/visual-form-builder/report.html`
- Screenshots: `mobile-audit/screenshots/visual-form-builder`

### /ai-detection

| Score | Value |
|---|---|
| Performance | 40 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1553 ms |
| Largest Contentful Paint | 16137 ms |
| Total Blocking Time | 6982 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 5447 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/ai-detection/page.tsx overflow-x-hidden (L30).
- Uses AiDectectionSection + SolutionDetails.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/ai-detection/report.html`
- Screenshots: `mobile-audit/screenshots/ai-detection`

### /ai-detection-api

| Score | Value |
|---|---|
| Performance | 40 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1534 ms |
| Largest Contentful Paint | 13536 ms |
| Total Blocking Time | 5458 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 5581 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses AiDetectionApiSection (hardcoded max-w, absolute offsets).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/ai-detection-api/report.html`
- Screenshots: `mobile-audit/screenshots/ai-detection-api`

### /field-inspection-software

| Score | Value |
|---|---|
| Performance | 40 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1544 ms |
| Largest Contentful Paint | 13498 ms |
| Total Blocking Time | 5570 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 5539 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses SeoLandingPage template; inherits missing prose-* typography.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/field-inspection-software/report.html`
- Screenshots: `mobile-audit/screenshots/field-inspection-software`

### /construction-inspection-software

| Score | Value |
|---|---|
| Performance | 40 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1564 ms |
| Largest Contentful Paint | 12445 ms |
| Total Blocking Time | 5431 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 5579 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses SeoLandingPage template; inherits missing prose-* typography.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/construction-inspection-software/report.html`
- Screenshots: `mobile-audit/screenshots/construction-inspection-software`

### /site-inspection-software

| Score | Value |
|---|---|
| Performance | 40 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1525 ms |
| Largest Contentful Paint | 13382 ms |
| Total Blocking Time | 5332 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 5680 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses SeoLandingPage template; inherits missing prose-* typography.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/site-inspection-software/report.html`
- Screenshots: `mobile-audit/screenshots/site-inspection-software`

### /digitize-paper-forms

| Score | Value |
|---|---|
| Performance | 39 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1560 ms |
| Largest Contentful Paint | 14634 ms |
| Total Blocking Time | 5369 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 5823 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/digitize-paper-forms/page.tsx overflow-x-hidden (L27).
- Uses DigitizePaperSection (absolute left-10/right-10 cards).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/digitize-paper-forms/report.html`
- Screenshots: `mobile-audit/screenshots/digitize-paper-forms`

### /reports

| Score | Value |
|---|---|
| Performance | 42 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1503 ms |
| Largest Contentful Paint | 12800 ms |
| Total Blocking Time | 4063 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 4425 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/reports/page.tsx overflow-x-hidden (L26).
- Uses ReportSection.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/reports/report.html`
- Screenshots: `mobile-audit/screenshots/reports`

### /access-control

| Score | Value |
|---|---|
| Performance | 28 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 6669 ms |
| Largest Contentful Paint | 13757 ms |
| Total Blocking Time | 3612 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7331 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/access-control/page.tsx overflow-x-hidden (L29).
- Uses AcessControlSection.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/access-control/report.html`
- Screenshots: `mobile-audit/screenshots/access-control`

### /integrations

| Score | Value |
|---|---|
| Performance | 43 |
| Accessibility | 95 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1502 ms |
| Largest Contentful Paint | 13660 ms |
| Total Blocking Time | 3669 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 4110 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/integrations/page.tsx overflow-x-hidden (L45).
- Uses IntegrationSection.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/integrations/report.html`
- Screenshots: `mobile-audit/screenshots/integrations`

### /hosting

| Score | Value |
|---|---|
| Performance | 43 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1504 ms |
| Largest Contentful Paint | 13587 ms |
| Total Blocking Time | 3821 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 3698 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/hosting/page.tsx overflow-x-hidden (L27).
- Uses HostingSection.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/hosting/report.html`
- Screenshots: `mobile-audit/screenshots/hosting`

### /offline-field-inspection-app

| Score | Value |
|---|---|
| Performance | 38 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1585 ms |
| Largest Contentful Paint | 14751 ms |
| Total Blocking Time | 8140 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 6937 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses OfflineModeSection.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/offline-field-inspection-app/report.html`
- Screenshots: `mobile-audit/screenshots/offline-field-inspection-app`

### /construction-software

| Score | Value |
|---|---|
| Performance | 35 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 2004 ms |
| Largest Contentful Paint | 18638 ms |
| Total Blocking Time | 13076 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 8884 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses SeoLandingPage template; inherits missing prose-* typography.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/construction-software/report.html`
- Screenshots: `mobile-audit/screenshots/construction-software`

### /field-data-capture-software

| Score | Value |
|---|---|
| Performance | 36 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1692 ms |
| Largest Contentful Paint | 18954 ms |
| Total Blocking Time | 12936 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 8372 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses SeoLandingPage template; inherits missing prose-* typography.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/field-data-capture-software/report.html`
- Screenshots: `mobile-audit/screenshots/field-data-capture-software`

### /compare/procore

| Score | Value |
|---|---|
| Performance | 37 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1638 ms |
| Largest Contentful Paint | 17760 ms |
| Total Blocking Time | 12688 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7463 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Hardcoded compare page layout; absolute -right-10 decorative element (L102).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/compare_procore/report.html`
- Screenshots: `mobile-audit/screenshots/compare_procore`

### /compare/fieldwire

| Score | Value |
|---|---|
| Performance | 36 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1953 ms |
| Largest Contentful Paint | 18342 ms |
| Total Blocking Time | 12145 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7558 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Hardcoded compare page layout; absolute -right-10 decorative element (L102).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/compare_fieldwire/report.html`
- Screenshots: `mobile-audit/screenshots/compare_fieldwire`

### /alternatives/revizto

| Score | Value |
|---|---|
| Performance | 38 |
| Accessibility | 95 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1619 ms |
| Largest Contentful Paint | 11334 ms |
| Total Blocking Time | 12293 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7099 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses AlternativesTemplate (hardcoded w-[600px] h-[600px] decorative images).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/alternatives_revizto/report.html`
- Screenshots: `mobile-audit/screenshots/alternatives_revizto`

### /industries/construction

| Score | Value |
|---|---|
| Performance | 36 |
| Accessibility | 93 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1695 ms |
| Largest Contentful Paint | 20961 ms |
| Total Blocking Time | 13137 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 8998 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses ConstructionSection + IndustryDetails; inherits missing prose-* typography and template image sizing.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/industries_construction/report.html`
- Screenshots: `mobile-audit/screenshots/industries_construction`

### /who-we-serve/general-contractors

| Score | Value |
|---|---|
| Performance | 36 |
| Accessibility | 93 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1942 ms |
| Largest Contentful Paint | 13328 ms |
| Total Blocking Time | 12368 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7842 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses PersonaTemplate (hardcoded w-[600px] h-[600px] decorative images).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/who-we-serve_general-contractors/report.html`
- Screenshots: `mobile-audit/screenshots/who-we-serve_general-contractors`

### /tools/construction-cost-calculator

| Score | Value |
|---|---|
| Performance | 34 |
| Accessibility | 83 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 2077 ms |
| Largest Contentful Paint | 11447 ms |
| Total Blocking Time | 18555 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 10231 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses ConstructionCostCalculator (table min-w-[600px] forces horizontal scroll).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/tools_construction-cost-calculator/report.html`
- Screenshots: `mobile-audit/screenshots/tools_construction-cost-calculator`

### /tools/labor-cost-calculator

| Score | Value |
|---|---|
| Performance | 39 |
| Accessibility | 86 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1579 ms |
| Largest Contentful Paint | 9514 ms |
| Total Blocking Time | 8236 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 6160 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses LaborCostCalculator (table min-w-[700px] forces horizontal scroll).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/tools_labor-cost-calculator/report.html`
- Screenshots: `mobile-audit/screenshots/tools_labor-cost-calculator`

### /blog/ai-in-construction

| Score | Value |
|---|---|
| Performance | 37 |
| Accessibility | 95 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1961 ms |
| Largest Contentful Paint | 10756 ms |
| Total Blocking Time | 11585 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7152 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses BlogPostLayout; inherits missing prose-* typography.
- app/blog/ai-in-construction/page.tsx max-w-[1200px] (L95).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/blog_ai-in-construction/report.html`
- Screenshots: `mobile-audit/screenshots/blog_ai-in-construction`

### /glossary/field-inspection

| Score | Value |
|---|---|
| Performance | 36 |
| Accessibility | 95 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1898 ms |
| Largest Contentful Paint | 10597 ms |
| Total Blocking Time | 11242 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7554 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses BlogPostLayout-like prose; inherits missing prose-* typography.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/glossary_field-inspection/report.html`
- Screenshots: `mobile-audit/screenshots/glossary_field-inspection`

### /locations/field-inspection-software-california

| Score | Value |
|---|---|
| Performance | 37 |
| Accessibility | 95 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1645 ms |
| Largest Contentful Paint | 10616 ms |
| Total Blocking Time | 12037 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7529 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- Uses SeoLandingPage/location template; inherits missing prose-* typography.
- app/locations/[slug]/page.tsx overflow-x-hidden (L119).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/locations_field-inspection-software-california/report.html`
- Screenshots: `mobile-audit/screenshots/locations_field-inspection-software-california`

### /lab/mobile-performance

| Score | Value |
|---|---|
| Performance | 36 |
| Accessibility | 89 |
| Best Practices | 75 |
| SEO | 66 |
| First Contentful Paint | 2017 ms |
| Largest Contentful Paint | 10216 ms |
| Total Blocking Time | 12630 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7971 ms |
| Horizontal overflow detected | iPhoneSE, iPhone14, iPhoneMax, iPad |

**Static-code issues:**
- Horizontal overflow detected on all viewports (scrollWidth > clientWidth).
- app/lab/mobile-performance/page.tsx: w-64 h-[500px] mockup, absolute -right-10.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/lab_mobile-performance/report.html`
- Screenshots: `mobile-audit/screenshots/lab_mobile-performance`

### /lab/privacy

| Score | Value |
|---|---|
| Performance | 37 |
| Accessibility | 89 |
| Best Practices | 75 |
| SEO | 66 |
| First Contentful Paint | 1619 ms |
| Largest Contentful Paint | 11210 ms |
| Total Blocking Time | 11727 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7568 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/lab/privacy/page.tsx: w-[100vw] (critical overflow risk), multiple absolute offsets.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/lab_privacy/report.html`
- Screenshots: `mobile-audit/screenshots/lab_privacy`

### /technology/computer-vision

| Score | Value |
|---|---|
| Performance | 37 |
| Accessibility | 95 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1655 ms |
| Largest Contentful Paint | 11029 ms |
| Total Blocking Time | 11994 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7531 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/technology/computer-vision/page.tsx: w-64 h-64 image.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/technology_computer-vision/report.html`
- Screenshots: `mobile-audit/screenshots/technology_computer-vision`

### /about-us

| Score | Value |
|---|---|
| Performance | 36 |
| Accessibility | 89 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1665 ms |
| Largest Contentful Paint | 17403 ms |
| Total Blocking Time | 12594 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 8103 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/about-us/page.tsx: w-96 h-96 images (L74-75).
- Uses AboutUs component with hardcoded widths/absolute offsets.

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/about-us/report.html`
- Screenshots: `mobile-audit/screenshots/about-us`

### /customers

| Score | Value |
|---|---|
| Performance | 37 |
| Accessibility | 91 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1738 ms |
| Largest Contentful Paint | 11218 ms |
| Total Blocking Time | 12264 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7171 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/customers/page.tsx: w-64 h-64 image (L111).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/customers/report.html`
- Screenshots: `mobile-audit/screenshots/customers`

### /social-media

| Score | Value |
|---|---|
| Performance | 36 |
| Accessibility | 89 |
| Best Practices | 75 |
| SEO | 100 |
| First Contentful Paint | 1926 ms |
| Largest Contentful Paint | 17780 ms |
| Total Blocking Time | 12338 ms |
| Cumulative Layout Shift | 0.0000 |
| Speed Index | 7965 ms |
| Horizontal overflow detected | None |

**Static-code issues:**
- app/social-media/page.tsx: w-96 h-96 images (L287-288).

**Evidence:**
- Lighthouse HTML report: `mobile-audit/lighthouse/social-media/report.html`
- Screenshots: `mobile-audit/screenshots/social-media`

## Prioritised fix plan

### Critical (do first)
1. **Fix performance / Total Blocking Time.** The site is loading 10–20s LCP and multi-second TBT on mobile. Investigate large JS bundles (CopilotKit, Framer Motion), unoptimized images, and render-blocking resources. Use `next/image` sizing and priority loading for hero images.
2. **Install `@tailwindcss/typography`** or replace `prose-*` classes with Tailwind utility classes on blog/SeoLandingPage/Industry pages. This fixes silently broken typography on ~70+ pages.
3. **Fix `/lab/mobile-performance` horizontal overflow.** The page is wider than the viewport on all tested devices.
4. **Fix `/lab/privacy` `w-[100vw]` usage** and review `BeforeAfterSlider` `w-[100vw]` to prevent horizontal scroll.

### High
5. **Add explicit viewport export** in `app/layout.tsx` for audit consistency.
6. **Define missing utility classes** (`no-scrollbar`, `animate-blob`, etc.) or remove them from JSX.
7. **Make device mockups fluid:** `Features.tsx` `w-[370px] h-[750px]`, `HeroSection.tsx` `w-[280px]`, `app/oil-and-gas-inspection-software/page.tsx` `w-[600px] h-[600px]`.
8. **Unify and fix the mobile menu:** raise mobile drawer z-index above the fixed header, consider truncating/expanding the long menu list, and ensure body-scroll-lock cleanup.

### Medium
9. **Review fixed floating buttons** (WhatsApp/Email) for overlap on small screens and add safe-area handling for the Copilot popup.
10. **Make calculator tables more mobile-friendly** or clearly indicate horizontal scrolling.
11. **Consolidate duplicated templates** (SeoLandingPage, ComparisonTable, CTAs) so fixes propagate to all pages automatically.

## Artifacts
- `audit-reports/mobile-audit/summary.json` — raw scores and screenshot metadata.
- `audit-reports/mobile-audit/lighthouse/<page>/report.html` — full Lighthouse HTML report per page.
- `audit-reports/mobile-audit/screenshots/<page>/` — iPhone SE / iPhone 14 / iPhone Max / iPad full-page screenshots.
- `audit-logs/run-audit-v2.log` — execution log.
