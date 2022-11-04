import Timeline from "../components/timeline";

function Home (): JSX.Element {
  return (
    <>
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
              I'm an Austin based Software Engineer with experience in&nbsp;
              </div>
              <div 
                className="overflow-hidden relative h-10 mx-auto text-center text-lg sm:text-xl md:text-2xl"
              >
                <ul className="w-fit tech-list text-center mx-auto p-0">
                  <li>HTML, CSS, JS, TypeScript and Go</li>
                  <li>Modern Web Frameworks like Next.js</li>
                  <li>Backend Technologies like Express</li>
                  <li aria-hidden="true">HTML, CSS, JS, TypeScript and Go</li>
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
    </>
  );
};

export default Home;
