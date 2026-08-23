import Interior from '../components/interior';

function About(): JSX.Element {
  return (
    <Interior title="About Me">
      <p>
        I'm a self-taught engineer — programming since age 12, shipping
        Android apps with 15k+ downloads before high school, and building
        professionally ever since. Today I'm the tech lead of the Paywalls
        AI team at RevenueCat, putting AI agents to work in production.
      </p>
      <p>
        My focus is agentic AI end to end — orchestration, tool design, evals,
        and the product surfaces around them — backed by full stack depth from
        Tesla, Homee, and years of building my own ventures.
      </p>
      <p>
        I started on Android so I could ship to a phone in my pocket, moved to
        the web so iPhone friends could use what I built, and have spent the
        years since leading small teams from messy problem to shipped product.
        The through-line is the same: tools people actually use, not demos.
      </p>
      <p>
        Fluent in English, working knowledge of Russian. Work remotely.
      </p>
    </Interior>
  );
}

export default About;
