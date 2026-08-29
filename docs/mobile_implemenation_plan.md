# SpaceCapture Mobile Responsiveness & Performance Implementation Plan

- **Project:** `C:\Users\USER\space-field-website`
- **Tech stack:** Next.js 16, React 19, Tailwind CSS v4, Framer Motion, CopilotKit
- **Goal:** Fix mobile responsiveness, performance, and accessibility issues using Material Design 3, `marketingskills`, and `small-business-website-skill` guidance.
- **Approach:** Performance-first (Option A), full scope, activate `@tailwindcss/typography`, keep existing content.

---

## 1. Decisions confirmed

| Decision | Choice |
|---|---|
| Priority | **Option A — Performance-first** |
| Scope | All pages: public marketing, `/lab/*`, SEO templates, blog, calculators, forms |
| Typography fix | Activate `@tailwindcss/typography` via Tailwind v4 `@plugin` directive |
| Content changes | **None** — only layout, mobile UX, and performance fixes |

---

## 2. Skills & references applied

| Source | How it guides this work |
|---|---|
| Material Design 3 | Responsive breakpoints, app bars, modal navigation drawer on mobile, 48dp touch targets, type scale, surface/elevation restraint, accessible color contrast |
| small-business-website-skill | Mobile-first phases, mobile menu architecture (drawer as sibling of `<nav>`, inline styles, close handlers), sticky CTA patterns, self-check review cycles |
| marketingskills/site-architecture | Limit primary nav, keep main CTA visible, breadcrumb hierarchy |
| marketingskills/cro | Visible CTAs without obstruction, trust signals near conversion points, form friction reduction |
| marketingskills/signup | Single-column forms, visible labels, 44px+ touch targets, inline validation |
| marketingskills/pricing | Mobile-stacked pricing cards, clear primary tier |
| marketingskills/image | WebP/AVIF, <200KB heroes, lazy loading below fold, explicit width/height |
| marketingskills/video | Proper aspect ratios, captions for silent playback |

---

## 3. Root causes identified

1. **No explicit viewport export** in `app/layout.tsx`
2. **`prose-*` typography classes are inactive** — `@tailwindcss/typography` is not activated
3. **Undefined Tailwind utility classes** are used in JSX
4. **Mobile nav drawer `z-30` is below header `z-50`**
5. **Mobile menu is too long** (all categories, industries, contacts expanded)
6. **Fixed WhatsApp + Email buttons overlap** and lack safe-area handling
7. **Copilot popup is not constrained for mobile**
8. **Hardcoded device mockup sizes** cause overflow
9. **Horizontal overflow** on `/lab/privacy` and `/lab/mobile-performance`
10. **Calculator tables force horizontal scroll**
11. **Heavy JS/animation payload** likely from CopilotKit + Framer Motion
12. **Images lack lazy loading / explicit dimensions**, increasing LCP/CLS

---

## 4. Implementation phases

### Phase 1 — Global foundations & performance

**Goal:** Improve Lighthouse Performance score and fix global CSS/configuration issues.

| # | Change | Files |
|---|---|---|
| 1.1 | Add explicit `export const viewport` with `width=device-width, initial-scale=1` | `app/layout.tsx` |
| 1.2 | Optimize GTM loading strategy; remove or defer the `noscript` iframe | `app/layout.tsx` |
| 1.3 | Activate `@tailwindcss/typography` using the `@plugin` directive | `app/globals.css` |
| 1.4 | Define missing utilities: `no-scrollbar`, `hero-text-animate`, `animate-blob`, `animation-delay-2000`, `rounded-2xs`, `heroFloat` | `app/globals.css` or remove from JSX |
| 1.5 | Add `loading="lazy"` to below-fold images; convert external `<img>` badges to `next/image` with explicit sizes where possible | Components using Wikimedia badge, flagcdn flags |
| 1.6 | Ensure only the LCP image gets `priority`; remove `priority` from non-LCP images | `components/Navbar.tsx`, `components/ShowcaseSection.tsx`, etc. |
| 1.7 | Review hero video/GIF sizes; prefer WebM/AVIF; add `poster` and preload hints | `components/HeroSection.tsx`, `components/AiDetectionApiSection.tsx` |
| 1.8 | Wrap heavy motion sections with `prefers-reduced-motion` fallbacks; audit Framer Motion usage | Multiple components |
| 1.9 | Verify CopilotKit remains lazy-loaded (`ssr: false`) and styles do not block first paint | `components/ClientProviders.tsx`, `components/SpaceCaptureCopilot.tsx` |
| 1.10 | Run `next build` and re-check Lighthouse baseline | Terminal |

**Expected outcome:** Performance score improves significantly; no broken builds.

---

### Phase 2 — Shared shell

**Goal:** Fix navigation, breadcrumbs, floating buttons, and chat widget on mobile.

| # | Change | Files |
|---|---|---|
| 2.1 | Refactor mobile drawer: move as sibling of `<header>`, set `z-[60]`, use inline background style, close on route change | `components/Navbar.tsx` |
| 2.2 | Collapse Products and Industries into accordions on mobile; collapse country contacts | `components/Navbar.tsx` |
| 2.3 | Keep primary CTA (`Try for Free`) visible in the header bar at all times | `components/Navbar.tsx` |
| 2.4 | ✅ Replace flag `<img>` tags with `next/image` or add explicit `width`/`height` | `components/Navbar.tsx` |
| 2.5 | ✅ Replace hardcoded `mt-[72px]` with safer dynamic spacing for breadcrumbs | `components/Breadcrumbs.tsx` |
| 2.6 | ✅ Make breadcrumb list scrollable with a visible hint; define `no-scrollbar` | `components/Breadcrumbs.tsx` |
| 2.7 | Consolidate WhatsApp + Email into a single floating group on mobile; add `env(safe-area-inset-bottom)` | `components/WhatsAppButton.tsx`, `components/EmailButton.tsx` |
| 2.8 | Ensure floating buttons are 48×48 dp and do not overlap footer CTAs | `components/WhatsAppButton.tsx`, `components/EmailButton.tsx` |
| 2.9 | Cap Copilot popup width at `calc(100vw - 2rem)`; add safe-area inset | `components/SpaceCaptureCopilot.tsx` |
| 2.10 | Build + manual mobile check | Terminal |

---

### Phase 3 — Reusable components

**Goal:** Fix the most-used components that appear across many pages.

| # | Change | Files |
|---|---|---|
| 3.1 | Make hero phone frame fluid (`w-full max-w-[320px]`); reposition floating badge to avoid clipping | `components/HeroSection.tsx` |
| 3.2 | Convert hero poster `<img>` to `next/image` with priority and explicit sizes | `components/HeroSection.tsx` |
| 3.3 | Replace fixed `w-[370px] h-[750px]` phone with `w-full max-w-[370px] aspect-[9/19.5]` | `components/Features.tsx` |
| 3.4 | Remove or simplify motion animations that cause reflow on mobile | `components/Features.tsx` |
| 3.5 | Make CTA section mockups fluid; cap container width | `components/CallToAction.tsx` |
| 3.6 | ✅ Convert Play Store badge `<img>` to `next/image` with explicit width/height | `components/AppDownloadSection.tsx`, `components/Footer.tsx` |
| 3.7 | Ensure QR code block wraps on narrow screens | `components/AppDownloadSection.tsx` |
| 3.8 | Convert carousel `<Image fill>` to an explicit aspect-ratio container to reduce CLS | `components/ShowcaseSection.tsx` |
| 3.9 | Make carousel arrows always visible/touchable; increase touch target size | `components/ShowcaseSection.tsx` |
| 3.10 | Convert detection GIF `<img>` to `next/image` or add width/height + lazy load | `components/AiDetectionApiSection.tsx` |
| 3.11 | Cap JSON/pre block overflow on small screens | `components/AiDetectionApiSection.tsx` |
| 3.12 | Build + component-level self-check | Terminal |

---

### Phase 4 — Per-page fixes

**Goal:** Fix specific pages identified in the audit.

| # | Change | Files |
|---|---|---|
| 4.1 | Fix `/lab/mobile-performance` floating badge overflow; use relative widths for thermal phone | `app/lab/mobile-performance/page.tsx` |
| 4.2 | Replace `w-[100vw]` with `w-full` in the before/after slider; make slider handle 44×44 px | `app/lab/privacy/page.tsx` |
| 4.3 | Restructure pricing into mobile-first stacked cards; full-width CTAs on mobile | `app/pricing/page.tsx` |
| 4.4 | Increase form input/button touch targets; add `inputMode`/`autoComplete` | `components/DemoRequest.tsx` |
| 4.5 | Convert construction calculator table to stacked cards on mobile or add scroll hint | `components/tools/ConstructionCostCalculator.tsx` |
| 4.6 | Convert labor calculator table to stacked cards on mobile or add scroll hint | `components/tools/LaborCostCalculator.tsx` |
| 4.7 | Add numeric input modes to calculator fields | `components/tools/ConstructionCostCalculator.tsx`, `components/tools/LaborCostCalculator.tsx` |
| 4.8 | ✅ Review SEO templates (`IndustryTemplate`, `PersonaTemplate`, `SeoLandingPage`, `AlternativesTemplate`) for `prose-*` correctness and overflow | `components/templates/*`, `components/seo/*` |
| 4.9 | ✅ Ensure comparison tables scroll gracefully on mobile | `components/seo/ComparisonTable.tsx`, `components/seo/AlternativesTemplate.tsx` |
| 4.10 | Build + page-level checks | Terminal |

---

### Phase 5 — Heavy JS reduction & third-party deferral

**Goal:** Cut initial bundle size and main-thread blocking to push mobile Performance above 70.

| # | Change | Files |
|---|---|---|
| 5.1 | Remove Framer Motion from the navbar phone-number rotation; keep static text | `components/Navbar.tsx` |
| 5.2 | Convert `HeroSection`, `AppDownloadSection`, and `Features` to server components; extract only the interactive video player into a small client island | `components/HeroSection.tsx`, `components/HeroVideo.tsx`, `components/AppDownloadSection.tsx`, `components/Features.tsx`, `app/page.tsx`, `components/HomePageClient.tsx` |
| 5.3 | Convert `Footer` to a server component so it does not hydrate | `components/Footer.tsx` |
| 5.4 | Move Apollo Client mutation for demo requests to a server action; remove `@apollo/client` from the client bundle | `app/actions/demoRequest.ts`, `components/DemoRequest.tsx` |
| 5.5 | Replace Framer Motion entrance animations in `DemoRequest` with CSS keyframes | `components/DemoRequest.tsx`, `app/globals.css` |
| 5.6 | Lazy-load the CopilotKit chat widget only after the user clicks the floating chat button | `components/ChatButton.tsx`, `components/ClientProviders.tsx`, `components/CopilotShell.tsx`, `components/SpaceCaptureCopilot.tsx` |

### Phase 6 — Verification

**Goal:** Prove the fixes work.

| # | Action |
|---|---|
| 6.1 | Run `next build` cleanly |
| 6.2 | Start production server on `localhost:3000` |
| 6.3 | Re-run Lighthouse mobile audit on the same 36 pages |
| 6.4 | Re-run Playwright iPhone/iPad screenshots |
| 6.5 | Compare new scores to `audit-reports/MOBILE_AUDIT_REPORT.md` |
| 6.6 | Run small-business-website-skill self-check list |
| 6.7 | Update `audit-reports/MOBILE_AUDIT_REPORT.md` or create a new `audit-reports/MOBILE_AUDIT_REPORT_POST_FIX.md` |

---

## 5. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Tailwind v4 plugin syntax differs from v3 | Test build immediately after adding `@plugin "@tailwindcss/typography"`; fallback to manual utility classes if it fails. |
| Framer Motion removal changes feel | Keep animations but gate them behind `prefers-reduced-motion` and reduce expensive `whileInView` variants on mobile. |
| Navbar refactor breaks desktop hover menus | Keep desktop markup unchanged; only refactor the mobile drawer portion. |
| Calculator table-to-cards change affects print view | Preserve print styles and test `window.print()`. |
| Large image/video assets still hurt performance | If assets are >500KB, recommend compression/WebP conversion as a follow-up. |

---

## 6. Success criteria

| Metric | Baseline | Target | 36-page post-fix avg |
|---|---|---|---|
| Performance | ~38 | ≥ 70 | **60.8** |
| Accessibility | ~91 | ≥ 90 | **96.2** |
| Best Practices | ~73 | ≥ 90 | **98.3** |
| SEO | ~98 | ≥ 95 | **96.2** |

- **No horizontal overflow** on iPhone SE / 375px width.
- **All primary CTAs visible and tappable** without overlap on mobile.
- **All forms usable** on a 375px screen without horizontal scroll.

**Notes:**
- Performance avg 60.8 across 36 pages; key marketing pages (pricing, customers, blog) score ≥ 70. Industry and lab pages score lower due to third-party scripts and interactive demos.
- SEO average is capped by `/lab/*` pages, which are intentionally blocked from indexing in `robots.txt`. Allowing `/lab/` in `robots.txt` would raise the SEO average to ~100.
- Best Practices 98.3% — remaining 1.7% is GTM third-party cookie (outside app code).
- Full post-fix report: `audit-reports/MOBILE_AUDIT_REPORT_POST_FIX.md`
