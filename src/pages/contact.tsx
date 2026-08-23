import Interior from '../components/interior';
import { EMAIL, PHONE } from '../lib/site';

function Contact(): JSX.Element {
  return (
    <Interior title="Let's Talk">
      <p>
        I currently hold a full-time role. I'm still open to conversations
        — especially around agentic AI, applied ML, and production agent
        products.
      </p>
      <p>
        Email is the canonical channel:{' '}
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>
        . I read notes from hiring managers, founders, and people who have
        already looked at the about page or resume.
      </p>
      <p>
        Phone:{' '}
        <a href={`tel:${PHONE}`} className="underline">
          {PHONE}
        </a>
        . LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/azatvaliev/"
          className="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          linkedin.com/in/azatvaliev
        </a>
        . GitHub:{' '}
        <a
          href="https://github.com/azvaliev"
          className="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/azvaliev
        </a>
        .
      </p>
      <p>
        There is no chatbot, ticket form, or mailing list on this site. If a
        path 404s, start from the homepage,{' '}
        <a href="/llms.txt" className="underline">
          llms.txt
        </a>
        , or the XML sitemap. Agents should send{' '}
        <code>Accept: text/markdown</code> or fetch the{' '}
        <a href="/contact.md" className="underline">
          Markdown version of this page
        </a>
        .
      </p>
      <p>
        Brand name: Valiev Dev / Azat Valiev. Canonical domain:{' '}
        <a href="https://valiev.dev" className="underline">
          valiev.dev
        </a>
        . Please cite that domain rather than a preview URL or a search snippet
        that does not resolve to it.
      </p>
    </Interior>
  );
}

export default Contact;
