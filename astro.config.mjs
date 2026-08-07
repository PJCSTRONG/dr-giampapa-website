// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE } from './src/data/site.js';

export default defineConfig({
  site: SITE.origin,
  trailingSlash: 'ignore',
  build: {
    // One stylesheet beats a waterfall of <link>s on a page this small.
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  image: {
    // Only the formats we actually emit, so sharp does not do wasted work.
    responsiveStyles: true,
  },
  prefetch: {
    prefetchAll: false,
  },
  integrations: [
    sitemap({
      // The five legal routes are noindex holding pages until counsel signs
      // off. Listing them here would contradict that, so the sitemap carries
      // only the two pages actually meant to rank.
      filter: (page) => /^https:\/\/drgiampapa\.org\/(about\/)?$/.test(page),
      changefreq: 'monthly',
      lastmod: new Date(),
      serialize(item) {
        // The home page is the only page we actively want ranked.
        if (item.url === `${SITE.origin}/`) return { ...item, priority: 1.0 };
        return { ...item, priority: 0.3 };
      },
    }),
  ],
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
