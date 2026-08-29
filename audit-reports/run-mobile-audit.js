const fs = require('fs');
const path = require('path');
const lighthouse = require('lighthouse').default;
const chromeLauncher = require('chrome-launcher');
const { chromium } = require('playwright');

const BASE_URL = 'http://localhost:3000';
const REPORTS_DIR = path.join(__dirname, 'mobile-audit');
const SCREENSHOTS_DIR = path.join(REPORTS_DIR, 'screenshots');

const URLS = [
  // Tier 1 — Conversion
  `${BASE_URL}/`,
  `${BASE_URL}/pricing`,
  `${BASE_URL}/request-a-demo`,
  `${BASE_URL}/app-download`,
  `${BASE_URL}/playstore-app-download`,

  // Tier 2 — Core product / solution pages
  `${BASE_URL}/core-functions`,
  `${BASE_URL}/visual-form-builder`,
  `${BASE_URL}/ai-detection`,
  `${BASE_URL}/ai-detection-api`,
  `${BASE_URL}/field-inspection-software`,
  `${BASE_URL}/construction-inspection-software`,
  `${BASE_URL}/site-inspection-software`,
  `${BASE_URL}/digitize-paper-forms`,
  `${BASE_URL}/reports`,
  `${BASE_URL}/access-control`,
  `${BASE_URL}/integrations`,
  `${BASE_URL}/hosting`,
  `${BASE_URL}/offline-field-inspection-app`,

  // Tier 3 — Templates (one representative per family)
  `${BASE_URL}/construction-software`,
  `${BASE_URL}/field-data-capture-software`,
  `${BASE_URL}/compare/procore`,
  `${BASE_URL}/compare/fieldwire`,
  `${BASE_URL}/alternatives/revizto`,
  `${BASE_URL}/industries/construction`,
  `${BASE_URL}/who-we-serve/general-contractors`,
  `${BASE_URL}/tools/construction-cost-calculator`,
  `${BASE_URL}/tools/labor-cost-calculator`,
  `${BASE_URL}/blog/ai-in-construction`,
  `${BASE_URL}/glossary/field-inspection`,
  `${BASE_URL}/locations/field-inspection-software-california`,

  // Tier 4 — Lab / special / marketing
  `${BASE_URL}/lab/mobile-performance`,
  `${BASE_URL}/lab/privacy`,
  `${BASE_URL}/technology/computer-vision`,
  `${BASE_URL}/about-us`,
  `${BASE_URL}/customers`,
  `${BASE_URL}/social-media`,
];

const VIEWPORTS = [
  { name: 'iPhoneSE', width: 375, height: 667 },
  { name: 'iPhone14', width: 390, height: 844 },
  { name: 'iPhoneMax', width: 414, height: 896 },
  { name: 'iPad', width: 768, height: 1024 },
];

function safePath(url) {
  const u = new URL(url);
  const slug = (u.pathname + u.search).replace(/^\//, '').replace(/\/$/, '');
  return slug ? slug.replace(/[^a-zA-Z0-9_-]/g, '_') : 'home';
}

function writeLog(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync(path.join(REPORTS_DIR, 'audit.log'), line);
  console.log(line.trim());
}

async function runLighthouse(url, chrome) {
  const flags = {
    port: chrome.port,
    output: ['json', 'html'],
    logLevel: 'error',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  };
  const result = await lighthouse(url, flags);
  const base = path.join(REPORTS_DIR, 'lighthouse', safePath(url));
  fs.mkdirSync(base, { recursive: true });
  fs.writeFileSync(path.join(base, 'report.json'), result.report[0]);
  fs.writeFileSync(path.join(base, 'report.html'), result.report[1]);

  const audits = result.lhr.audits;
  const categories = result.lhr.categories;

  return {
    performance: categories.performance ? Math.round(categories.performance.score * 100) : null,
    accessibility: categories.accessibility ? Math.round(categories.accessibility.score * 100) : null,
    bestPractices: categories['best-practices'] ? Math.round(categories['best-practices'].score * 100) : null,
    seo: categories.seo ? Math.round(categories.seo.score * 100) : null,
    firstContentfulPaint: audits['first-contentful-paint'] ? audits['first-contentful-paint'].numericValue : null,
    largestContentfulPaint: audits['largest-contentful-paint'] ? audits['largest-contentful-paint'].numericValue : null,
    totalBlockingTime: audits['total-blocking-time'] ? audits['total-blocking-time'].numericValue : null,
    cumulativeLayoutShift: audits['cumulative-layout-shift'] ? audits['cumulative-layout-shift'].numericValue : null,
    speedIndex: audits['speed-index'] ? audits['speed-index'].numericValue : null,
    viewportAudit: audits.viewport ? audits.viewport.score : null,
    tapTargets: audits['tap-targets'] ? { score: audits['tap-targets'].score, details: audits['tap-targets'].details } : null,
    contentWidth: audits['content-width'] ? audits['content-width'].score : null,
  };
}

async function runPlaywright(url) {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
    });
    const page = await context.newPage();
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(1000);

      const base = path.join(SCREENSHOTS_DIR, safePath(url));
      fs.mkdirSync(base, { recursive: true });
      const screenshotPath = path.join(base, `${vp.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });

      const docMetrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
        clientHeight: document.documentElement.clientHeight,
      }));

      const overflowX = docMetrics.scrollWidth > docMetrics.clientWidth;
      const overflowY = docMetrics.scrollHeight > docMetrics.clientHeight; // expected

      results.push({
        viewport: vp.name,
        width: vp.width,
        height: vp.height,
        screenshot: screenshotPath,
        overflowX,
        scrollWidth: docMetrics.scrollWidth,
        clientWidth: docMetrics.clientWidth,
      });
    } catch (err) {
      results.push({
        viewport: vp.name,
        width: vp.width,
        height: vp.height,
        error: err.message,
      });
    } finally {
      await context.close();
    }
  }
  await browser.close();
  return results;
}

async function main() {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

  writeLog('Launching Chrome for Lighthouse...');
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox'],
  });
  writeLog(`Chrome launched on port ${chrome.port}`);

  const summary = [];
  for (let i = 0; i < URLS.length; i++) {
    const url = URLS[i];
    writeLog(`[${i + 1}/${URLS.length}] Auditing ${url}`);
    const entry = { url, slug: safePath(url), index: i + 1 };
    try {
      entry.lighthouse = await runLighthouse(url, chrome);
      writeLog(`  Lighthouse done: perf=${entry.lighthouse.performance} a11y=${entry.lighthouse.accessibility} bp=${entry.lighthouse.bestPractices} seo=${entry.lighthouse.seo}`);
    } catch (err) {
      entry.lighthouseError = err.message;
      writeLog(`  Lighthouse ERROR: ${err.message}`);
    }

    try {
      entry.screenshots = await runPlaywright(url);
      const overflowList = entry.screenshots.filter(s => s.overflowX).map(s => s.viewport);
      writeLog(`  Screenshots done. Horizontal overflow: ${overflowList.length ? overflowList.join(', ') : 'none'}`);
    } catch (err) {
      entry.screenshotsError = err.message;
      writeLog(`  Screenshots ERROR: ${err.message}`);
    }

    summary.push(entry);
  }

  await chrome.kill();
  fs.writeFileSync(path.join(REPORTS_DIR, 'summary.json'), JSON.stringify(summary, null, 2));
  writeLog(`Audit complete. Summary written to ${path.join(REPORTS_DIR, 'summary.json')}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
