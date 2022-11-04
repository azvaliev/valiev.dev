import './timeline.css';

import timelinedata from './data.json';

function Timeline(): JSX.Element {
  return (
    <section className="min-h-screen py-8">
      <h2 className="font-[everettthin] text-5xl uppercase text-center">
        Experience
      </h2>
      <div className="timeline flex flex-col">
        {timelinedata.map((point) => (
          <div
            className="bg-gray-50 p-2 px-4 shadow-2xl w-[22rem] text-center mb-6 rounded-xl"
            key={point.title}
          >
            <h3 className="text-2xl underline font-[everettmedium]">
              {point.title}
            </h3>
            <p className="my-3">
              {point.desc}
            </p>
            <a
              href={point.cta.link}
              rel="noopener noreferrer"
              target="_blank"
              className="btn block w-fit mt-4"
            >
              {point.cta.text}
            </a>
            <div className="flex flex-wrap justify-around w-3/4 sm:w-2/3 md:w-2/3 mx-auto my-4">
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline;
