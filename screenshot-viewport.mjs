import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || 'vp';
const pageId = process.argv[4] || '';
const scrollY = parseInt(process.argv[5] || '0');

const dir = './temporary screenshots';
if (!fs.existsSync(dir)) fs.mkdirSync(dir);
const existing = fs.readdirSync(dir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'));
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || 0)).filter(n => !isNaN(n));
const next = nums.length ? Math.max(...nums) + 1 : 1;
const filename = path.join(dir, `screenshot-${next}-${label}.png`);

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await new Promise(r => setTimeout(r, 1000));

if (pageId) {
  await page.evaluate((id) => {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + id);
    if (target) target.classList.add('active');
    window.scrollTo(0, 0);
  }, pageId);
  await new Promise(r => setTimeout(r, 500));
}

if (scrollY > 0) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  await new Promise(r => setTimeout(r, 400));
}

await page.screenshot({ path: filename, fullPage: false });
await browser.close();
console.log(`Saved: ${filename}`);
