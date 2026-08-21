/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import timelinedata from './data.json';

function Timeline(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>): JSX.Element {
  return (
    <section className="flex flex-col w-full min-h-screen py-8 scroll-offset" {...props}>
      <h2 className="font-[everettthin] text-4xl md:text-5xl uppercase text-center mb-8">
        Experience
      </h2>
      <ol className="mx-auto w-[95%] md:max-w-[40%] relative border-l border-gray-200 dark:border-gray-700">
        {timelinedata.map((point, idx) => {
          const isCurrent = idx === timelinedata.length - 1;
          return (
          <li className="mb-10 ml-4" key={point.title}>
            <div
              className={`absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 ${
                isCurrent ? 'bg-black dark:bg-gray-200' : 'bg-gray-200 dark:bg-gray-700'
              }`}
             />
            <time
              className="mb-1 text-sm font-normal leading-none text-gray-600"
            >
              {point.date}{point.enddate && ` - ${point.enddate}`}
            </time>
            <h3
              className="text-xl sm:text-2xl font-semibold text-gray-900"
            >
              {point.title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-800">
              {point.desc}
            </p>
            <a
              href={point.cta.link}
              className={`inline-flex items-center py-2 px-4 font-[everettlight] border-[1px] border-black
              transition-colors rounded-md ${
                isCurrent
                  ? 'bg-black text-white hover:bg-white hover:text-black'
                  : 'text-black hover:bg-black hover:text-white'
              }`}
            >
              {point.cta.text}
            </a>
            <div className="flex flex-wrap ml-0 flex-start gap-2 w-[80%] md:w-2/3 lg:w-1/2 xl:w-[40%] mx-auto my-4">
              {point.icons.map((icon, iconIdx) => (
                <img
                  src={`/img/techicons/${icon}.webp`}
                  title={icon}
                  key={iconIdx}
                  alt={icon}
                  className="m-1 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                />
              ))}
            </div>
          </li>
          );
        })}
      </ol>
    </section>
  )
}

export default Timeline;
