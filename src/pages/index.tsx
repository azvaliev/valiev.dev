/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/navbar";
import Section from "../components/section";
import Testimonials from "../components/testimonials";
import Timeline from "../components/timeline";

const navitems = [{
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
      <main className="flex h-[90vh] w-full ">
        <div className="h-[100vh] w-full absolute top-0 left-0 z-0" aria-hidden="true">
          <img
            src="/img/austin.webp"
            alt="Austin City Skyline"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex z-10 bg-[hsla(0,0%,100%,.88)] h-full w-full justify-center items-center">
          <div className="flex flex-col -mt-[15%] md:-mt-[5%]">
            <h1 className="text-3xl text-center font-[everettultralight]">
              Hi, my name is Azat
            </h1>
            <h2 className="text-2xl text-center font-[everettregular] mt-4 mb-3">
              <div className="px-6">
              I&apos;m an Austin based Software Engineer with experience in&nbsp;
              </div>
              <div
                className="overflow-hidden relative h-10 mx-auto text-center text-lg sm:text-xl md:text-2xl"
              >
                <ul className="w-fit tech-list text-center mx-auto p-0">
                  <li>Modern NodeJS w/ TypeScript</li>
                  <li>Backend frameworks like Fastify & Express</li>
                  <li>Working with databases like MySQL & Postgres</li>
                  <li aria-hidden="true">Modern NodeJS w/ TypeScript</li>
                </ul>
              </div>
            </h2>
            <a className="btn" href="/portfolio">
              View My Work
            </a>
          </div>
        </div>
      </main>
      <Timeline />
      <Testimonials />
      <Section
        id="about"
        className="flex flex-col justify-center text-center w-[90%] md:w-[70%] lg:w-1/2 mx-auto text-xl font-light scroll-mt-16 md:scroll-mt-20"
      >
        <h2 className="text-5xl font-[everettultralight]">
          About Me
        </h2>
        <p className="mt-10">
          I&apos;m a self-taught web developer, beginning my education at 12,
          with over 4 years of professional experience as freelance & at several companies.
          While I do specialize in backend currently, I am well capable on the full stack
        </p>
        <br />
        <p>
          Having started multiple businesses myself,
          I am able to bring a unique and valuable perspective along with my skills to the table.
        </p>
      </Section>
      <Section
        id="contact"
        className="flex flex-col justify-center text-center w-full px-[5%] md:px-[15%] lg:px-[25%] mx-auto text-xl font-light"

        dark
      >
        <h2 className="text-5xl font-[everettultralight]">
          Let&apos;s Talk
        </h2>
        <p className="mt-10">
          While I do currently hold a full time position,
          I&apos;m always open to opportunities
        </p>
        <br />
        <p>
          Shoot me an email at <b>valiev.dev@gmail.com</b>.
          <br />
          Alternatively, I am also available on&nbsp;
          <a
            href="https://www.linkedin.com/in/azatvaliev/"
            className="font-medium underline"
            rel="noopener"
          >
            LinkedIn
          </a>
        </p>
      </Section>
    </>
  );
}

export default Home;
