/**
 * HOME-CONTENT.md §4 — the corrected bibliography, verified against cover art
 * rather than the press release (see Appendix A for the nine factual fixes).
 *
 * Purchase URLs are still outstanding ("Needed: purchase URL for each title").
 * Until the real links arrive, `find` resolves to an Amazon search for the exact
 * title and author, which is truthful and functional. Replace `search` with a
 * `url` field per book when the client supplies the canonical links.
 */
const amazon = (q) =>
  `https://www.amazon.com/s?k=${encodeURIComponent(q)}&i=stripbooks`;

export const LEAD_BOOK = {
  title: 'Escape Velocity from Human Aging',
  subtitle: 'Breaking the Biological Speed Limit',
  cover: 'escape-velocity.webp',
  authors: 'With Victor Urzola, MD · Liz Parrish, MBA',
  blurb:
    'The case for treating aging as an information problem. Written with Victor Urzola, MD and Liz Parrish, MBA, it sets out what epigenetic reprogramming, cellular restoration, and measured biological age already make possible.',
  search: amazon('Escape Velocity from Human Aging Giampapa'),
};

export const BOOKS = [
  {
    title: 'Breaking the Aging Code',
    // Not "Breaking the Age Code" — that is Becca Levy's book. Appendix A #3.
    subtitle: 'Your Personal Blueprint for Optimal Health and Longevity',
    meta: 'Basic Health, 2003',
    cover: 'breaking-the-aging-code.webp',
    search: amazon('Breaking the Aging Code Giampapa'),
  },
  {
    title: 'The Gene Makeover',
    subtitle: 'The 21st Century Anti-Aging Breakthrough',
    meta: 'With Buechel & Karatoprak',
    cover: 'gene-makeover.webp',
    search: amazon('The Gene Makeover Giampapa'),
  },
  {
    title: 'Younger Today',
    subtitle: 'The Cell Solution to Youthful Aging and Improved Health',
    meta: 'With Carol Alt',
    cover: 'younger-today.webp',
    search: amazon('Younger Today Giampapa Carol Alt'),
  },
  {
    title: 'Quantum Longevity',
    subtitle: 'Living to 100 and Beyond',
    meta: 'Basic Health, 2001',
    cover: 'quantum-longevity.webp',
    search: amazon('Quantum Longevity Giampapa'),
  },
  {
    title: 'The Anti-Aging Solution',
    subtitle: '5 Simple Steps to Looking and Feeling Young',
    meta: 'Wiley, 2004',
    cover: 'anti-aging-solution.webp',
    search: amazon('The Anti-Aging Solution Giampapa Pero Zimmerman'),
  },
  {
    title: 'Pro-Hormone Nutrition',
    subtitle: 'Optimum Aging & Maximum Health Span',
    meta: 'With Paul Yanick Jr., PhD',
    cover: 'prohormone-nutrition.webp',
    search: amazon('Pro-Hormone Nutrition Giampapa Yanick'),
  },
  {
    title: 'Basic Principles & Practice of Anti-Aging Medicine',
    subtitle: 'And Age Management',
    meta: 'River Publishing, 2012',
    cover: 'textbook.webp',
    badge: 'For physicians',
    search: amazon('Basic Principles and Practice of Anti-Aging Medicine Giampapa'),
  },
];
