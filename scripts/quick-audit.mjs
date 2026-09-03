import { spawn } from 'child_process';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs/promises';
import path from 'path';
import http from 'http';

const PORT = process.env.PORT || 3001;
const PAGES = ['/', '/pricing', '/request-a-demo', '/tools/construction-cost-calculator', '/lab/privacy', '/lab/mobile-performance'];

function waitForPort(port, timeout = 60000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      const req = http.get(`http://localhost:${port}`, (res) => {
        if (res.statusCode === 200) return resolve(true);
        setTimeout(check, 500);
      });
      req.on('error', () => {
        if (Date.now() - start > timeout) return reject(new Error('Server did not start'));
        setTimeout(check, 500);
      });
      req.setTimeout(1000, () => { req.destroy(); setTimeout(check, 500); });
    };
    check();
  });
}

async function main() {
  console.log(`Starting Next.js production server on port ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], { stdio: 'inherit', shell: true });

  try {
    await waitForPort(PORT);
    console.log('Server ready. Running mobile Lighthouse audits...\n');

    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'] });
    const results = [];

    for (const page of PAGES) {
      const url = `http://localhost:${PORT}${page}`;
      const runnerResult = await lighthouse(url, {
        port: chrome.port,
        output: 'json',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        emulatedFormFactor: 'mobile',
        throttling: { rttMs: 150, throughputKbps: 1.6 * 1024, cpuSlowdownMultiplier: 4 },
      });
      const { performance, accessibility, 'best-practices': bestPractices, seo } = runnerResult.lhr.categories;
      results.push({
        page,
        performance: Math.round(performance.score * 100),
        accessibility: Math.round(accessibility.score * 100),
        bestPractices: Math.round(bestPractices.score * 100),
        seo: Math.round(seo.score * 100),
      });
      console.log(`${page}: P=${Math.round(performance.score * 100)} A=${Math.round(accessibility.score * 100)} BP=${Math.round(bestPractices.score * 100)} SEO=${Math.round(seo.score * 100)}`);
    }

    await chrome.kill();

    const avg = {
      performance: Math.round(results.reduce((a, r) => a + r.performance, 0) / results.length),
      accessibility: Math.round(results.reduce((a, r) => a + r.accessibility, 0) / results.length),
      bestPractices: Math.round(results.reduce((a, r) => a + r.bestPractices, 0) / results.length),
      seo: Math.round(results.reduce((a, r) => a + r.seo, 0) / results.length),
    };
    console.log('\nAverages:', avg);

    await fs.mkdir('audit-reports', { recursive: true });
    await fs.writeFile(path.join('audit-reports', 'quick-audit-post-fix.json'), JSON.stringify({ pages: results, averages: avg }, null, 2));
    console.log('Saved audit-reports/quick-audit-post-fix.json');
  } finally {
    server.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
