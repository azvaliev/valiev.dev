/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/navbar";
import Section from "../components/section";
import Testimonials from "../components/testimonials";
import Timeline from "../components/timeline";

const navitems = [
{
  link: '#featured',
  text: 'Featured'
},{
  link: '#experience',
  text: 'Experience'
},{
  link: '#about',
  text: 'About',
}, {
  link: '#contact',
  text: 'Contact',
}];

function Home (): JSX.Element {
  return (
    <>
      <Navbar items={navitems} />
      <main className="relative flex h-[calc(100svh-3rem)] md:h-[calc(100svh-4rem)] w-full overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/img/austin.webp"
            alt="Austin City Skyline"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex z-10 bg-[hsla(0,0%,100%,.88)] h-full w-full justify-center items-center">
          <div className="flex flex-col -mt-[15%] md:-mt-[5%] w-full max-w-full px-4">
            <h1 className="text-3xl text-center font-[everettultralight]">
              Hi, my name is Azat
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-center font-[everettregular] mt-4 mb-3">
              <div className="px-2 sm:px-6">
              I'm an AI Engineer with experience in&nbsp;
              </div>
              <div
                className="tech-list-window overflow-hidden relative mx-auto w-full max-w-xl text-center"
              >
                <ul className="w-full tech-list text-center mx-auto py-0">
                  <li>Leading AI products from idea to launch</li>
                  <li>Building agents that do real work</li>
                  <li>Scaling agents with evals & guardrails</li>
                  <li aria-hidden>Leading AI products from idea to launch</li>
                </ul>
              </div>
            </h2>
            <div className="flex flex-row flex-wrap gap-3 justify-center">
              <a className="btn" href="/resume.docx" target="_blank">
                My Resume
              </a>
              <a className="btn" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </main>
      <div className="relative z-10 bg-white">
      <Section
        id="featured"
        className="flex flex-col justify-center text-center w-[90%] md:w-[70%] lg:w-1/2 mx-auto text-xl font-light scroll-offset"
      >
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
          Featured Work
        </p>
        <h2 className="text-4xl md:text-5xl font-[everettultralight]">
          Paywalls AI Editor
        </h2>
        <p className="mt-10">
          I lead the Paywalls AI team at RevenueCat, where we built the Paywalls AI Editor — a conversational AI agent that generates and edits production-ready paywalls from natural language, streaming changes into a live preview.
        </p>
        <br />
        <p>
          Launched in public beta May 2026 on the paywall platform behind <b>113,000+ apps</b> — taken from an empty repo to launch in about three months.
        </p>
        <div className="flex flex-row flex-wrap gap-4 justify-center mt-10">
          <a
            className="btn"
            href="https://www.revenuecat.com/blog/company/paywalls-ai-editor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Launch
          </a>
          <a
            className="btn"
            href="https://www.revenuecat.com/feature/paywalls"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Paywalls
          </a>
        </div>
      </Section>
      <Timeline id="experience" />
      <Testimonials />
      <Section
        id="about"
        className="flex flex-col justify-center text-center w-[90%] md:w-[70%] lg:w-1/2 mx-auto text-xl font-light scroll-offset"
      >
        <h2 className="text-4xl md:text-5xl font-[everettultralight]">
          About Me
        </h2>
        <p className="mt-10">
          I'm a self-taught engineer — programming since age 12, shipping Android apps with 15k+ downloads before high school, and building professionally ever since. Today I'm the tech lead of the Paywalls AI team at RevenueCat, putting AI agents to work in production.
        </p>
        <br />
        <p>
          My focus is agentic AI end to end — orchestration, tool design, evals, and the product surfaces around them — backed by full stack depth from Tesla, Homee, and years of building my own ventures.
        </p>
      </Section>
      <Section
        id="contact"
        className="flex flex-col justify-center text-center w-full px-[5%] md:px-[15%] lg:px-[25%] mx-auto text-xl font-light"
        dark
      >
        <h2 className="text-4xl md:text-5xl font-[everettultralight]">
          Let's Talk
        </h2>
        <p className="mt-10">
          While I do currently hold a full time position, I'm always open to opportunities — especially in agentic AI and applied ML
        </p>
        <br />
        <p>
          <a href="mailto:valiev.dev@gmail.com" className="underline">Shoot me an email</a> at <b>valiev.dev@gmail.com</b>.
          <br />
          Alternatively, I am also available on&nbsp;
          <a href="https://www.linkedin.com/in/azatvaliev/" className="font-medium underline" rel="noopener">
            LinkedIn
          </a>
        </p>
      </Section>
      </div>
    </>
  )
}

export default Home;
