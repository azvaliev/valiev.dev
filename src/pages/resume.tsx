import Interior from '../components/interior';
import { EMAIL, PERSON_NAME, PHONE, SITE_URL } from '../lib/site';

function Resume(): JSX.Element {
  return (
    <Interior title="Resume">
      <p>
        {PERSON_NAME} · AI Engineer, Paywalls AI Tech Lead @ RevenueCat
        <br />
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>{' '}
        · {PHONE} · {SITE_URL.replace('https://', '')}
      </p>
      <p>
        Self-taught engineer shipping production software since age 12. Focus:
        agentic AI products — orchestration, tool design, evals, and the UI
        around them.
      </p>
      <h2 className="text-2xl font-[everettregular] pt-4">Experience</h2>
      <p>
        <strong>Paywalls AI Tech Lead — RevenueCat (2026–present).</strong> Led
        the Paywalls AI Editor from an empty repo to public beta in about three
        months. Conversational agent that generates and edits production
        paywalls with a live preview, on the platform behind 113,000+ apps.
      </p>
      <p>
        <strong>
          Senior Software Engineer, Tech Lead — Homee (2023–2026).
        </strong>{' '}
        Led Platform on AI claims intake for Smart-Claim. Nine of ten claims
        matched to a repair pro in under three minutes.
      </p>
      <p>
        <strong>Software Engineer — Tesla (2022–2023).</strong> Internal solar
        web tools, including a node editor for solar diagrams and GraphQL
        performance work.
      </p>
      <p>
        Earlier: freelance full-stack (2018–2021), M2 Labs (2018), Android apps
        with 15k+ downloads (2015–2017).
      </p>
      <p>
        <a className="btn inline-block" href="/resume.md">
          Markdown resume
        </a>{' '}
        <a className="btn inline-block" href="/resume.docx" target="_blank" rel="noreferrer">
          Word download
        </a>
      </p>
    </Interior>
  );
}

export default Resume;
