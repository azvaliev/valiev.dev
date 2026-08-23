export const SITE_URL = 'https://valiev.dev';
export const SITE_NAME = 'Valiev Dev';
export const PERSON_NAME = 'Azat Valiev';
export const EMAIL = 'valiev.dev@gmail.com';
export const PHONE = '+1-202-446-4875';
export const JOB_TITLE = 'AI Engineer';
export const DESCRIPTION =
  'Azat Valiev — AI Engineer and tech lead building agentic AI products. Currently leading the Paywalls AI team at RevenueCat.';
export const OG_DESCRIPTION =
  'AI Engineer and tech lead building agentic AI products in production';
export const IMAGE_PATH = '/img/valievdev.png';

export const SAME_AS = [
  'https://github.com/azvaliev',
  'https://www.linkedin.com/in/azatvaliev/',
  'https://x.com/valievdev',
] as const;

export const NAV_ITEMS = [
  { link: '/#featured', text: 'Featured' },
  { link: '/#experience', text: 'Experience' },
  { link: '/#about', text: 'About' },
  { link: '/#contact', text: 'Contact' },
] as const;

export type SitePage = {
  path: string;
  title: string;
  description: string;
  htmlFile: string;
  markdownFile: string;
  changefreq: 'weekly' | 'monthly';
  priority: string;
};

export const PAGES: SitePage[] = [
  {
    path: '/',
    title: 'Azat Valiev — Valiev Dev',
    description: DESCRIPTION,
    htmlFile: 'index.html',
    markdownFile: 'index.md',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/about',
    title: 'About Azat Valiev — Valiev Dev',
    description:
      'Background on Azat Valiev: self-taught engineer, Paywalls AI Tech Lead at RevenueCat, previously Homee and Tesla.',
    htmlFile: 'about.html',
    markdownFile: 'about.md',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/contact',
    title: 'Contact Azat Valiev — Valiev Dev',
    description:
      'Email, LinkedIn, and GitHub for Azat Valiev. Open to agentic AI and applied ML opportunities.',
    htmlFile: 'contact.html',
    markdownFile: 'contact.md',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy — Valiev Dev',
    description:
      'Privacy policy for valiev.dev, the personal website of Azat Valiev.',
    htmlFile: 'privacy.html',
    markdownFile: 'privacy.md',
    changefreq: 'monthly',
    priority: '0.4',
  },
  {
    path: '/resume',
    title: 'Resume — Azat Valiev',
    description:
      'Concise resume for Azat Valiev, AI Engineer and Paywalls AI Tech Lead at RevenueCat.',
    htmlFile: 'resume.html',
    markdownFile: 'resume.md',
    changefreq: 'monthly',
    priority: '0.7',
  },
];

export function pageByPath(path: string): SitePage | undefined {
  const normalized = path === '' ? '/' : path;
  return PAGES.find((page) => page.path === normalized);
}

export function canonicalUrl(path: string): string {
  if (path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function jsonLdGraph(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: PERSON_NAME,
        alternateName: [SITE_NAME, 'azvaliev', 'valievdev'],
        url: SITE_URL,
        image: absoluteUrl(IMAGE_PATH),
        email: EMAIL,
        telephone: PHONE,
        jobTitle: JOB_TITLE,
        description: DESCRIPTION,
        knowsAbout: [
          'Agentic AI',
          'AI product engineering',
          'Evaluations',
          'Full stack engineering',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'RevenueCat',
          url: 'https://www.revenuecat.com',
        },
        sameAs: [...SAME_AS],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: PERSON_NAME,
        url: SITE_URL,
        email: EMAIL,
        telephone: PHONE,
        description:
          'Personal site and professional brand of Azat Valiev, an AI engineer building production agentic products.',
        founder: { '@id': `${SITE_URL}/#person` },
        logo: absoluteUrl(IMAGE_PATH),
        image: absoluteUrl(IMAGE_PATH),
        sameAs: [...SAME_AS],
        contactPoint: {
          '@type': 'ContactPoint',
          email: EMAIL,
          telephone: PHONE,
          contactType: 'professional inquiries',
          url: canonicalUrl('/contact'),
          availableLanguage: ['English', 'Russian'],
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${PERSON_NAME} — ${SITE_NAME}`,
        description: DESCRIPTION,
        inLanguage: 'en',
        publisher: { '@id': `${SITE_URL}/#organization` },
        author: { '@id': `${SITE_URL}/#person` },
      },
    ],
  };
}
