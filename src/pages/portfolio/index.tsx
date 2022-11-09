/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Navbar from "../../components/navbar";
import portfolioData, { titleToIconsMapping } from "./data";

const navitems = [{
  link: '/',
  text: 'Home',
}, {
  link: '/#about',
  text: 'About',
}, {
  link: '/#contact',
  text: 'Contact',
}];

function Portfolio(): JSX.Element {
  return (
    <>
      <Navbar items={navitems} />
      <h1 className="text-5xl text-center font-medium font-everett-regular underline mt-4 -mb-4 md:mb-0">
        Portfolio
      </h1>
      <main>
        {portfolioData.map((portfolioItem, idx) => (
          <div
            key={portfolioItem.title}
            className={
              `flex items-center justify-around mt-14 rounded-sm flex-col
               ${idx % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`
             }
          >
            <div
            className={`
              flex flex-col items-center w-[90%] md:w-[70%] lg:w-[40%] text-center
              py-2 px-4 shadow-xl mb-8 lg:mb-0
            `}>
              <h2 className="text-3xl font-everett-regular">
                {portfolioItem.title}
              </h2>
              <hr className="bg-black w-full h-[2px] my-1"/>
              <p className="text-lg mt-2">
                {portfolioItem.desc}
              </p>
              <div className="flex gap-2 my-6">
                {portfolioItem.links.map(({ link, name }, idx) => (
                  <a
                    key={link}
                    href={link}
                    className={
                      `btn text-2xl font-everett-light
                      px-4 py-2 border-[1px] rounded-md transition-colors
                      ${idx % 2 &&
                        `text-white bg-blue-500 !border-blue-500
                         hover:bg-blue-600 hover:border-blue-600`
                      }`
                    }
                  >
                    {name}
                  </a>
                ))}
              </div>
              <h3 className="text-2xl font-everett-regular mb-3 underline">
                Technologies Used
              </h3>
              <div
                className={`
                flex flex-row flex-wrap gap-2 mb-4 max-w-[65%]
                md:max-w-[80%] lg:max-w-[90%] mx-auto justify-between
                `}>
                {portfolioItem.tech.map((tech) => (
                  <img
                    key={`${portfolioItem.title}-${portfolioItem.tech}`}
                    alt={tech}
                    title={tech}
                    src={titleToIconsMapping[tech]}
                    className="m-1 h-[8.75vw] w-[8.75vw] sm:w-[6vw] sm:h-[6vw] md:h-[4.5vw] md:w-[4.5vw] lg:h-[2.75vw] lg:w-[2.75vw]"
                  />
                ))}
              </div>
            </div>
            <div className="w-5/6 lg:w-1/2">
              <img
                src={portfolioItem.img}
                className="w-full h-full object-contain"
                alt={portfolioItem.title}
              />
            </div>
          </div>
        ))}
      </main>
    </>
  )
}

export default Portfolio;
