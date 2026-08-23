import Interior from '../components/interior';

function NotFound(): JSX.Element {
  return (
    <Interior title="Not found">
      <p>This path does not exist on valiev.dev.</p>
      <p>
        HTTP 404 — the resource was never published. Agents should not treat
        this URL as a real page.
      </p>
      <h2 className="text-2xl font-[everettregular] pt-4">Where to look next</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a className="underline" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="underline" href="/llms.txt">
            llms.txt
          </a>{' '}
          — when to use this site
        </li>
        <li>
          <a className="underline" href="/sitemap.xml">
            sitemap.xml
          </a>
        </li>
        <li>
          <a className="underline" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="underline" href="/contact">
            Contact
          </a>
        </li>
        <li>
          <a className="underline" href="/resume.md">
            Resume (markdown)
          </a>
        </li>
      </ul>
    </Interior>
  );
}

export default NotFound;
