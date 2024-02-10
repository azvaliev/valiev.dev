/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import timelinedata from './data.json';

function Timeline(): JSX.Element {
  return (
    <section className="flex flex-col w-full min-h-screen py-8">
      <h2 className="font-[everettthin] text-5xl uppercase text-center mb-8">
        Experience
      </h2>
      <ol className="mx-auto w-[95%] md:max-w-[40%] relative border-l border-gray-200 dark:border-gray-700">
        {timelinedata.map((point) => (
          <li className="mb-10 ml-4" key={point.title}>
            <div
              className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
             />
            <time
              className="mb-1 text-sm font-normal leading-none text-gray-600"
            >
              {point.date}{point.enddate && ` - ${point.enddate}`}
            </time>
            <h3
              className="text-2xl font-semibold text-gray-900"
            >
              {point.title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-800">
              {point.desc}
            </p>
            <a
              href={point.cta.link}
              className="inline-flex items-center py-2 px-4 font-[everettlight] border-[1px] border-black
              text-black transition-colors rounded-md hover:bg-black hover:text-white"
            >
              {point.cta.text}
            </a>
            <div className="flex flex-wrap ml-0 flex-start gap-2 w-[60%] md:w-2/3 lg:w-1/2 xl:w-[40%] mx-auto my-4">
              {point.icons.map((icon, idx) => (
                <img
                  src={`/img/techicons/${icon}.webp`}
                  title={icon}
                  key={idx}
                  alt={icon}
                  className="m-1 h-[8.75vw] w-[8.75vw] sm:w-[6vw] sm:h-[6vw] md:h-[4.5vw] md:w-[4.5vw] lg:h-[2.75vw] lg:w-[2.75vw]"
                />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Timeline;
