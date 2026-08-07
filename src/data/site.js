/**
 * Single source of truth for identity, contact and SEO defaults.
 * Imported by astro.config.mjs too, so this file stays plain JS with no Astro imports.
 */
export const SITE = {
  origin: 'https://drgiampapa.org',

  name: 'Vincent C. Giampapa, MD, FACS',
  shortName: 'Dr. Giampapa',
  jobTitle: 'Plastic & Reconstructive Surgeon · Cellular Aging Researcher',
  // HOME-CONTENT.md §1 credential block.
  credential: 'Cellular Aging Expert · Anti-Aging Pioneer',

  tagline: 'Biology is not destiny.',

  title: 'Vincent C. Giampapa, MD, FACS — Cellular Aging & Longevity Medicine',
  description:
    'Vincent C. Giampapa, MD, FACS — board-certified plastic surgeon, co-founder of the American Academy of Anti-Aging Medicine, 2014 Nobel nominee, and author of eight books on cellular aging. Keynote speaker on epigenetic reprogramming and regenerative medicine.',

  contact: {
    email: 'vcg@cellhealth.net',
    phone: '+1 973 943 0576',
    phoneHref: '+19739430576',
    street: '551 Valley Road',
    locality: 'Montclair',
    region: 'NJ',
    postalCode: '07043',
    country: 'US',
  },

  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/DrVincentGiampapa/' },
    { label: 'Instagram', href: 'https://www.instagram.com/drvincentgiampapa/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/drgiampapa/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@Dr.VincentGiampapa' },
  ],

  nav: [
    { label: 'About', href: '/#about' },
    { label: 'Books', href: '/#books' },
    { label: 'Speaking', href: '/#speaking' },
    { label: 'Media', href: '/#keynotes' },
    { label: 'Contact', href: '/#contact' },
  ],

  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Acceptable Use', href: '/acceptable-use' },
  ],
};

/**
 * Hero copy, exactly as it appears in the approved design.
 *
 * ⚠️ One thing worth a decision, not a change I should make on my own:
 * `HOME-CONTENT.md` §1 retires this headline. It is a Peter Drucker paraphrase
 * and also Peter Diamandis's signature line — and diamandis.com was the visual
 * reference for this page, so it carries a real risk of reading as derivative.
 * The doc's recommended replacement is:
 *
 *     headline: "Aging is not a countdown. It's a code",
 *     lede: 'Surgeon, physician-scientist, and inventor. Thirty-four years on a
 *            single question: why do cells age, and what can be done about it?',
 *     cta: 'Book Dr. Giampapa to speak',   // and point hero__cta at #speaking
 *
 * Swapping those three strings is the whole change. Shipping the design as
 * designed until someone decides otherwise.
 */
export const HERO = {
  headline: 'The best way to predict the future is to create it',
  lede: 'Surgeon, artist, anti-aging physician, inventor, entrepreneur — focused on creating a new model of medicine to restore healthspan and lifespan for the global aging population.',
  cta: 'Meet Dr. Giampapa',
};

/**
 * The speaking enquiry destination is still unresolved (HOME-CONTENT.md §6:
 * "does inquiry go to a form, to vcg@cellhealth.net, or to a booking agent?").
 * Until that is answered a pre-filled mailto is the only destination that
 * actually reaches him, so it is defined once here and swapped in one place.
 */
export const SPEAKING_ENQUIRY =
  'mailto:vcg@cellhealth.net' +
  '?subject=' +
  encodeURIComponent('Speaking enquiry — Dr. Giampapa') +
  '&body=' +
  encodeURIComponent(
    [
      'Event:',
      'Date(s):',
      'Location:',
      'Audience and size:',
      'Format (keynote, panel, fireside):',
      'Topic of interest:',
      '',
      'Your name:',
      'Organisation:',
      'Phone:',
    ].join('\n'),
  );
