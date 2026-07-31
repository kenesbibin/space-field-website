# A/B Test Recommendations

> **Project:** SpaceCapture (spacecapture.ai)
> **Created:** July 30, 2026
> **Purpose:** Conversion optimization testing plan for landing pages

---

## Priority Tests

### Test 1: CTA Button Copy

**Hypothesis:** Changing CTA copy from generic to action-oriented increases clicks.

| Variant | CTA Text | Goal |
|---------|----------|------|
| A (Control) | "Request a Demo" | Baseline |
| B | "Start Free — No Credit Card" | Measure click-through rate |
| C | "Get Started Free" | Measure click-through rate |

**Metric:** CTA click rate
**Traffic split:** 33/33/34
**Duration:** 2 weeks minimum

---

### Test 2: Social Proof Placement

**Hypothesis:** Showing review score near CTA increases conversion.

| Variant | Description | Goal |
|---------|-------------|------|
| A (Control) | No review score near CTA | Baseline |
| B | "4.8 from 120+ construction teams" below CTA | Measure form submissions |

**Metric:** Form submission rate
**Traffic split:** 50/50
**Duration:** 2 weeks

---

### Test 3: Hero Headline Length

**Hypothesis:** Shorter, punchier headline outperforms longer descriptive one.

| Variant | Headline | Goal |
|---------|----------|------|
| A (Control) | "Stop Juggling 5 Tools" | Baseline |
| B | "One App for Field Inspections" | Measure engagement |

**Metric:** Scroll depth + CTA clicks
**Traffic split:** 50/50
**Duration:** 2 weeks

---

### Test 4: Mid-Page CTA

**Hypothesis:** Adding a mid-page CTA captures users who don't scroll to bottom.

| Variant | Description | Goal |
|---------|-------------|------|
| A (Control) | CTA only at bottom | Baseline |
| B | CTA at mid-point + bottom | Measure total conversions |

**Metric:** Total conversions per page view
**Traffic split:** 50/50
**Duration:** 2 weeks

---

### Test 5: FAQ Schema Impact

**Hypothesis:** Pages with FAQ schema earn more SERP real estate and clicks.

| Variant | Description | Goal |
|---------|-------------|------|
| A (Control) | FAQ section visible, no schema | Baseline |
| B | FAQ section with FAQPage schema | Measure organic CTR |

**Metric:** Organic click-through rate from Google
**Traffic split:** N/A (monitor via Search Console)
**Duration:** 4 weeks

---

## Secondary Tests

### Test 6: Trust Signal Copy

- Variant A: "Trusted by 120+ construction teams"
- Variant B: "Join 120+ teams already using SpaceCapture"
- Variant C: "Rated 4.8 by construction professionals"

### Test 7: Pricing Mention in Hero

- Variant A: No pricing mention in hero
- Variant B: "Free tier available — upgrade when ready"

### Test 8: Comparison Table Position

- Variant A: Comparison table below features
- Variant B: Comparison table above features

---

## Measurement

### Tools

- Google Optimize or Vercel Analytics for A/B split
- Google Analytics 4 for conversion tracking
- Google Search Console for organic CTR

### Key Metrics

| Metric | Definition |
|--------|------------|
| CTA Click Rate | Clicks on CTA / Page views |
| Form Submission Rate | Form completions / Page views |
| Scroll Depth | % of users reaching each section |
| Bounce Rate | Single-page sessions / Total sessions |
| Time on Page | Average session duration |

---

## Notes

- Run one test at a time per page to avoid contamination
- Minimum 2 weeks per test for statistical significance
- Document results in this file after each test
- Prioritize tests that affect all 5 landing pages

---

*Document version: 1.0 - Created July 30, 2026*
