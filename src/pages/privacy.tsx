import Interior from '../components/interior';
import { EMAIL, PERSON_NAME, SITE_NAME, SITE_URL } from '../lib/site';

function Privacy(): JSX.Element {
  return (
    <Interior title="Privacy Policy">
      <p className="text-base text-gray-600">
        Effective 26 April 2025 · Updated 23 August 2026
      </p>
      <p>
        {SITE_NAME} ({SITE_URL}) is the personal website of {PERSON_NAME}. This
        policy explains how the site handles information for visitors, hiring
        managers, and automated agents.
      </p>
      <h2 className="text-2xl font-[everettregular] pt-4">Who this covers</h2>
      <p>
        It applies to HTML, Markdown, llms.txt, and sitemap.xml on this domain.
        It does not cover third-party sites linked from these pages (RevenueCat,
        LinkedIn, GitHub, Google Play, and similar).
      </p>
      <h2 className="text-2xl font-[everettregular] pt-4">
        Information I do not collect
      </h2>
      <p>
        valiev.dev is a static site. There is no account system, comment
        thread, contact-form backend, or first-party analytics product. I do
        not collect, store, sell, or process personal data in a database I
        control. I do not use advertising cookies, fingerprinting, or session
        replay.
      </p>
      <h2 className="text-2xl font-[everettregular] pt-4">Hosting logs</h2>
      <p>
        The site is hosted on Vercel. Like most HTTPS hosts, Vercel may process
        standard server logs (IP address, user agent, request path, timestamp)
        for security, caching, and reliability. I do not use those logs to
        identify visitors or build marketing profiles.
      </p>
      <h2 className="text-2xl font-[everettregular] pt-4">Downloads and email</h2>
      <p>
        The optional Word resume at /resume.docx is a static file. Agents should
        prefer /resume.md. If you email {EMAIL}, I receive whatever you send and
        use it only to reply. I do not add correspondents to a mailing list.
      </p>
      <h2 className="text-2xl font-[everettregular] pt-4">Children</h2>
      <p>
        This is a professional portfolio. It is not directed at children under
        13, and I do not knowingly collect their data.
      </p>
      <p>
        Questions:{' '}
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>
        .
      </p>
    </Interior>
  );
}

export default Privacy;
