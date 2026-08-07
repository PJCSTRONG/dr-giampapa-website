# drgiampapa.org

Home page for Vincent C. Giampapa, MD, FACS. Built with [Astro](https://astro.build) as a fully
static site — no framework runtime, no client-side router, no third-party requests on load.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

**Deploying to Vercel:** no configuration needed. Framework preset **Astro**, build command
`npm run build`, output directory `dist`.

---

## What this is

A faithful build of the approved design (`Giampapa Home.dc.html` / the bundled
`Dr Vincent Giampapa.html` export — they are the same page). Layout, type, colour, spacing and
copy match the design. What changed is everything underneath it: the design file was a single
2,000-line HTML document with inline styles and a React runtime, and this is a static site with
components, a content layer, structured data and an image pipeline.

All 20 images were recovered from the bundled export at full resolution and now live in
`src/assets/`.

---

## Where the content lives

All copy is data, not markup. Nothing in `src/components` needs editing to change wording.

| File | Contents |
| --- | --- |
| `src/data/site.js` | Name, contact, nav, social, hero copy, SEO defaults |
| `src/data/bio.js` | Belief statement, stats, biography, compliance copy |
| `src/data/books.js` | The corrected bibliography |
| `src/data/ventures.js` | The eight companies and their URLs |
| `src/data/speaking.js` | Keynote videos, topics, stages, media outlets |

---

## Two things that need a decision

**1. The hero headline.** `HOME-CONTENT.md` §1 explicitly retires *"The best way to predict the
future is to create it."* It is a Peter Drucker paraphrase and also Peter Diamandis's signature
line — and diamandis.com was the visual reference for this page, so it carries a real risk of
reading as derivative. The design still uses it, so **the design is what shipped.** The
recommended replacement and the exact three strings to change are written into
`src/data/site.js` above the `HERO` export. It is a two-minute change whenever someone decides.

**2. Book purchase URLs.** Never supplied. Each "Find it" link currently resolves to an Amazon
search for that exact title and author — truthful and functional, but not a real product link.
Swap them in `src/data/books.js`.

Also outstanding, and handled gracefully rather than left broken:

- **Dr. Giampapa's signature** (`src/assets/signature.png`) — the belief statement closes on the
  typeset name alone until it arrives. `ASSET-REQUEST.md` rates this the highest-impact missing
  asset on the page.
- **The Dorada logo** (`src/assets/logos/dorada.png`) — its card renders without a mark.
- **Keynote upload dates** — omitted from the `VideoObject` schema rather than guessed. Google
  wants `uploadDate` for video rich results; adding the real dates unlocks those.
- **`public/og.png`** — a 1200×630 social share card. Links currently preview without an image.
- **The five legal pages** — `ASSET-REQUEST.md` §6 records that none have counsel-approved text.
  Four are honest holding pages, `/disclaimer` carries the compliance statement that *has* been
  drafted, and all five are `noindex`. A dead link would have been worse; invented legal text
  would have been worse still.

Every missing asset resolves through a glob in `src/lib/assets.js` — drop the file in at the path
above and it appears on the next build, with no code change.

---

## Small departures from the design file, and why

Everything here is invisible on the page. Flagged so nothing is a surprise.

1. **The production note is not rendered.** The design carries the line *"Logos normalized to one
   ink — Dorada mark pending"* under the ventures grid. That is a note to the client, not site
   copy.
2. **Venture cards link out.** The spec supplies a URL for all eight companies and the design
   used none of them. The cards look identical; they are now clickable.
3. **A real `/about` page.** The biography button pointed at `#about` — the section it already
   sits in. Same label, but it now goes somewhere, and it gives the long-tail credential queries
   ("Giampapa Nobel nomination", "BioMarker Matrix Profile") a page to land on.
4. **Keynote posters are served locally.** The design pulled them from `i.ytimg.com`; they were
   in the bundle, so they are now local files and cost no third-party round trip.
5. **Card alignment.** "The Global Foundation" wraps to two lines where every other venture name
   fits on one, which dropped that card out of step with its neighbours. Both lines are now
   reserved.

---

## Performance

Static HTML, one stylesheet, five font files, and ~2.4 kB of JavaScript for the entire site.

- **No render-blocking third parties.** Fonts are self-hosted rather than pulled from
  `fonts.googleapis.com`, removing two DNS lookups, two TLS handshakes and a CSS round trip from
  the critical path. The two above-the-fold faces are preloaded by content-hashed URL.
- **Five font files, not 21.** `src/styles/fonts.css` declares Latin and Latin-Extended only. The
  packaged Fontsource entrypoints ship Cyrillic, Vietnamese and symbol subsets this site cannot
  use.
- **Images are re-encoded to WebP** with a responsive `srcset` and explicit `sizes` per usage.
  The hero portrait goes 265 kB → 72 kB; the lead book cover 424 kB → 71 kB. The portrait is
  `fetchpriority="high"`; everything else is lazy.
- **YouTube is a facade.** The keynote players are a static poster and a button. Not a byte of
  YouTube JavaScript loads until someone clicks play, and the embed then uses
  `youtube-nocookie.com`.
- **Media queries, not resize listeners.** The design re-rendered the header and both hero
  variants from a JavaScript `resize` handler, which costs a layout shift on first paint. That is
  now CSS. The mobile hero reorders via `display: contents` rather than duplicating the markup.
- **Reveal-on-scroll cannot strand content.** It only applies once JavaScript has flagged the
  document, it is disabled under `prefers-reduced-motion`, and it runs as a synchronous sweep
  rather than through `IntersectionObserver` or `requestAnimationFrame` — both are tied to the
  frame lifecycle and neither fires in a hidden or throttled tab, which would leave sections
  permanently invisible.

## SEO

- **One JSON-LD `@graph`, cross-referenced by `@id`** — `Person`, `WebSite`, `WebPage`, an
  `ItemList` of all eight `Book`s, and a `VideoObject` per keynote. A crawler resolves them as a
  single entity — "the person who wrote these books and gave these talks" — rather than four
  unrelated blobs. The `Person` node carries `knowsAbout`, `alumniOf`, `affiliation`, `award`,
  `hasOccupation` and `owns`.
- **`speakable`** markers on the headline and the strongest pull quotes, for voice and AI answer
  surfaces.
- **`public/llms.txt`** — a clean, quotable factual summary for AI answer engines, with the
  medical disclaimer attached so the site's own guardrail travels with any quotation.
  `robots.txt` explicitly welcomes `GPTBot`, `ClaudeBot`, `PerplexityBot` and `Google-Extended`;
  being cited as the authoritative source on him is the point of an authority site.
- **Thin pages are `noindex` and excluded from the sitemap**, so the five legal routes and the
  404 cannot dilute the home page.
- Canonical URLs that agree with the sitemap, Open Graph and Twitter cards, semantic landmarks,
  one `h1` per page, a skip link, and real `alt` text throughout.
