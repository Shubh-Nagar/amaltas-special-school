#!/usr/bin/env node
/**
 * Content snapshot — pulls the live text of every page on amaltasspecialschool.in
 * into ./content-snapshot/<slug>.txt so you can compare it, word for word, against
 * the strings in /src/data (search for "VERIFY" comments).
 *
 * Usage:  npm run content:snapshot
 * Needs:  Node 18+ and internet access to amaltasspecialschool.in
 */
import { mkdir, writeFile } from 'node:fs/promises';

const BASE = 'https://amaltasspecialschool.in';
const PAGES = [
  '', 'about-us', 'vision-mission', 'founder-chairman-message', 'chairman-message', 'principals-message',
  'our-team', 'why-us', 'awards-achievements', 'therapies', 'facilities-and-infrastructure',
  'activities-events', 'upcoming-events', 'amaltas-special-school-in-news', 'photogallery',
  'gift-distribution', 'happy-parents', 'students', 'contact-us', 'privacy-policy', 'terms-conditions',
  'courses/occupational-therapy', 'courses/physiotherapy', 'courses/speech-therapy__trashed-2',
  'courses/counselling', 'courses/yoga-therapy', 'courses/dance-therapy', 'courses/bhajan-therapy',
];

/** Very small HTML → text converter: keeps headings, paragraphs and list items on their own lines. */
function toText(html) {
  return html
    .replace(/<(script|style|noscript|svg)[\s\S]*?<\/\1>/gi, '')
    .replace(/<\/(h[1-6]|p|li|div|section|br)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8212;|&mdash;/g, '—')
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#\d+;/g, '')
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join('\n');
}

await mkdir('content-snapshot', { recursive: true });
for (const slug of PAGES) {
  const url = `${BASE}/${slug}${slug ? '/' : ''}`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'content-snapshot/1.0' } });
    const text = toText(await res.text());
    const file = `content-snapshot/${slug ? slug.replace(/\//g, '__') : 'home'}.txt`;
    await writeFile(file, `# ${url}\n\n${text}\n`);
    console.log(`✓ ${file}`);
  } catch (err) {
    console.error(`✗ ${url} — ${err.message}`);
  }
}
console.log('\nDone. Now search the codebase for "VERIFY" and compare with these files.');
