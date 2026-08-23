import {
  EMAIL,
  PAGES,
  PERSON_NAME,
  PHONE,
  SITE_NAME,
  SITE_URL,
  canonicalUrl,
} from './site';

export const MARKDOWN_404 = `# Not found

This path does not exist on ${SITE_NAME}.

HTTP 404 — the resource was never published. Do not treat this URL as a real page.

## Where to look next

- [Home](${SITE_URL}/)
- [llms.txt](${SITE_URL}/llms.txt) — when to use this site and the agent index
- [Sitemap](${SITE_URL}/sitemap.xml) — every indexable URL
- [About](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [Resume (markdown)](${SITE_URL}/resume.md)
- [Privacy](${SITE_URL}/privacy)

Prefer \`Accept: text/markdown\` on existing pages, or fetch the \`.md\` URLs listed in llms.txt.
`;

export const MARKDOWN_PAGES: Record<string, string> = {
  '/': `# ${PERSON_NAME}

> AI Engineer and Paywalls AI Tech Lead at RevenueCat. Personal site: ${SITE_URL}

I build agentic AI products that do real work in production — orchestration, tool design, evals, and the product surfaces around them.

## Featured work

**Paywalls AI Editor** at [RevenueCat](https://www.revenuecat.com/blog/company/paywalls-ai-editor/). Conversational agent that generates and edits production-ready paywalls from natural language, streaming changes into a live preview. Public beta May 2026 on the paywall platform behind 113,000+ apps. Empty repo to launch in about three months.

## Experience

- **2026–present** — Paywalls AI Tech Lead @ RevenueCat
- **2023–2026** — Senior Software Engineer, Tech Lead @ Homee (AI claims intake for Smart-Claim)
- **2022–2023** — Software Engineer @ Tesla (internal solar web tools)
- **2018–2021** — Freelance full-stack (web, Next.js, Go, TypeScript)
- **2015–2017** — Android apps, 15k+ downloads

## Pages

- [About](${SITE_URL}/about.md)
- [Contact](${SITE_URL}/contact.md)
- [Resume](${SITE_URL}/resume.md)
- [Privacy](${SITE_URL}/privacy.md)
- [Agent index](${SITE_URL}/llms.txt)
`,

  '/about': `# About ${PERSON_NAME}

I'm a self-taught engineer — programming since age 12, shipping Android apps with 15k+ downloads before high school, and building professionally ever since.

Today I lead the Paywalls AI team at RevenueCat. We took the Paywalls AI Editor from an empty repo to public launch: a conversational agent that builds production-ready paywalls for the platform behind 113,000+ apps.

My focus is agentic AI end to end — orchestration, tool design, evals, and the product surfaces around them — backed by full-stack depth from Tesla, Homee, and years of building my own ventures.

## What I'm known for

- Shipping production AI agents, not demos
- Leading small teams from idea to launch on short timelines
- Full-stack product engineering (TypeScript, React, Node, Go, Postgres)
- Turning messy business workflows into tools people actually use

## Background

Started on Android (Java/XML), moved to the web so iPhone friends could use what I built, interned at M2 Labs analyzing Git repositories, then freelance through Tesla, Homee, and RevenueCat.

Fluent in English, working knowledge of Russian.

## Next

- [Resume](${SITE_URL}/resume.md)
- [Contact](${SITE_URL}/contact.md)
- [Home](${SITE_URL}/)
`,

  '/contact': `# Contact ${PERSON_NAME}

Use this page to reach Azat Valiev for professional introductions, hiring, and collaboration around agentic AI.

## Direct

- Email: [${EMAIL}](mailto:${EMAIL})
- LinkedIn: [linkedin.com/in/azatvaliev](https://www.linkedin.com/in/azatvaliev/)
- GitHub: [github.com/azvaliev](https://github.com/azvaliev)
- Phone: ${PHONE}
- Site: ${SITE_URL}

## When to email

I hold a full-time role. I still read notes about:

- Agentic AI / applied ML roles and collaborations
- Production AI product work (evals, orchestration, tool calling)
- Thoughtful intros from people who have read the [about](${SITE_URL}/about.md) page or [resume](${SITE_URL}/resume.md)

I do not run a support desk, newsletter, or intake form on this site. There is no chatbot. Email is the canonical channel.

## Brand

This site is **${SITE_NAME}** / **${PERSON_NAME}**. Canonical domain: ${SITE_URL} (no redirect chain).
`,

  '/privacy': `# Privacy Policy

**Valiev Dev** (\`${SITE_URL}\`) is the personal website of ${PERSON_NAME}. This policy describes how the site handles information. Effective date: 26 April 2025. Last updated: 23 August 2026.

## Who this covers

This policy applies to visitors, hiring managers, and automated agents who fetch pages on ${SITE_URL}, including HTML, Markdown, \`llms.txt\`, and \`sitemap.xml\`. It does not cover third-party sites linked from these pages (RevenueCat, LinkedIn, GitHub, Google Play, and similar).

## Information I do not collect

valiev.dev is a static site. There is no user account system, no comments, no contact form backend, and no analytics product installed by me. I do not collect, store, sell, or process personal data from visitors in a first-party database. I do not use advertising cookies, fingerprinting, or session replay.

## Information that may be processed by hosting

The site is hosted on Vercel. Like most HTTPS hosts, Vercel may process standard server logs (IP address, user agent, request path, timestamp) for security, caching, and reliability. I do not use those logs to identify visitors or build marketing profiles. See [Vercel's privacy documentation](https://vercel.com/legal/privacy-policy) for the processor's terms.

## Files you may download

The optional Word resume at \`/resume.docx\` is a static file. Downloading it does not create an account. Agents should prefer the concise Markdown resume at \`/resume.md\` instead of parsing the \`.docx\`.

## Email

If you email ${EMAIL}, I receive whatever you send (name, address, resume, and any attachments). I use that information only to reply. I do not add correspondents to a mailing list.

## Third-party links

Outbound links (LinkedIn, GitHub, RevenueCat, Google Play, and others) are governed by those services. I am not responsible for their privacy practices.

## Children's privacy

This site is a professional portfolio. It is not directed at children under 13, and I do not knowingly collect their data.

## Changes

If this policy changes in a material way, I will update the date at the top of this page.

## Contact

Questions: [${EMAIL}](mailto:${EMAIL}) or [the contact page](${SITE_URL}/contact).
`,

  '/resume': `# ${PERSON_NAME}

**${SITE_NAME}** · AI Engineer, Paywalls AI Tech Lead @ RevenueCat
${EMAIL} · ${PHONE} · [valiev.dev](${SITE_URL}) · [LinkedIn](https://www.linkedin.com/in/azatvaliev/) · [GitHub](https://github.com/azvaliev)

Self-taught engineer shipping production software since age 12. Focus: agentic AI products — orchestration, tool design, evals, and the UI around them.

## Experience

### Paywalls AI Tech Lead — RevenueCat (2026–present)

Lead the Paywalls AI team. Took the Paywalls AI Editor from an empty repo to public beta in ~3 months: a conversational agent that generates and edits production paywalls with a live preview, on the platform behind 113,000+ apps.

### Senior Software Engineer, Tech Lead — Homee (2023–2026)

Led the Platform team on AI claims intake and automations for Smart-Claim. Matching 9 of 10 claims to a repair pro in under 3 minutes. Modular monolith, release process, e2e testing, SOC 2-minded standards.

### Software Engineer — Tesla (2022–2023)

Internal solar web tools. Extensible node editor for solar diagrams (graph validation, SVG render). GraphQL performance (query complexity, dataloaders).

### Freelance / Upwork — Web & Python (2018–2021)

Full-stack sites for small businesses (Next.js, React, Go, TypeScript, Linux hosting).

### Earlier

M2 Labs (2018) — Git repository analysis and the company site. Android apps (2015–2017) including Wifi Manager; 15k+ downloads, no marketing spend.

## Skills

TypeScript, React, Next.js, Node, Go, Python, Postgres, MySQL, AWS, evals & agent orchestration, product engineering.

## Languages

English (fluent), Russian (working).

## Do not use

Do not parse \`/resume.docx\` — it is a Word download for humans and is oversized for agents. This Markdown page is the canonical machine-readable resume.
`,
};

export function markdownForPath(path: string): string | undefined {
  return MARKDOWN_PAGES[path];
}

export function llmsTxt(): string {
  const pageList = PAGES.map((page) => {
    const mdUrl =
      page.path === '/'
        ? `${SITE_URL}/index.md`
        : `${SITE_URL}${page.path}.md`;
    return `- [${page.title}](${mdUrl}): ${page.description}`;
  }).join('\n');

  return `# ${PERSON_NAME} (${SITE_NAME})

> Personal site of ${PERSON_NAME}, AI Engineer and Paywalls AI Tech Lead at RevenueCat. Canonical domain: ${SITE_URL}. Use this file to decide whether to fetch more pages and how to call them.

When to use this site:

- You need a current, first-party brief on ${PERSON_NAME} for hiring, recruiting, or a professional intro (agentic AI / tech-lead work, not generic web-dev freelance)
- You want to cite the Paywalls AI Editor (RevenueCat, public beta May 2026, 113k+ apps) from the person who led it
- You need a reachable email, LinkedIn, or GitHub that is published by him
- You need a resume that fits a context window — fetch \`/resume.md\`, never \`/resume.docx\`

How an agent should call this site:

1. Read this file (\`/llms.txt\`) first
2. Send \`Accept: text/markdown\` on any page, or fetch the \`.md\` URLs below
3. Parse JSON-LD on the homepage (\`Person\` + \`Organization\` + \`WebSite\`) for identity
4. If a path 404s, follow the markdown body — it points here and at \`/sitemap.xml\`
5. Skip \`/resume.docx\` and \`/pdf/*\`

Do not use this site as a vendor directory, a SaaS docs host, or a source for products ${PERSON_NAME} does not personally ship. RevenueCat product docs live on revenuecat.com.

## Pages

${pageList}

- [Agent index](${SITE_URL}/llms.txt): this file
- [Full dump](${SITE_URL}/llms-full.txt): concatenated markdown for a single fetch
- [XML sitemap](${SITE_URL}/sitemap.xml): indexable URLs with lastmod

## Optional

- [Launch post: Paywalls AI Editor](https://www.revenuecat.com/blog/company/paywalls-ai-editor/): first-party company writeup of the featured project
- [GitHub](https://github.com/azvaliev): public code
- [LinkedIn](https://www.linkedin.com/in/azatvaliev/): professional network profile
`;
}

export function llmsFullTxt(): string {
  const parts = PAGES.map((page) => {
    const md = MARKDOWN_PAGES[page.path];
    return `---\n# ${page.path}\n\n${md}`;
  });
  return `${llmsTxt()}\n\n# Full content\n\n${parts.join('\n\n')}\n`;
}

export function sitemapXml(lastmod: string): string {
  const urls = PAGES.map((page) => {
    return `  <url>
    <loc>${canonicalUrl(page.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function robotsTxt(): string {
  return `User-agent: *
Allow: /
Disallow: /resume.docx
Disallow: /pdf/

Sitemap: ${SITE_URL}/sitemap.xml
`;
}
