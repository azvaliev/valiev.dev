import { NAVBAR_FIXED_HEIGHT } from '../navbar';
import testimonialData from './data.json';

function Testimonials(): JSX.Element {
  return (
    <>
      <div id="testimonials" aria-hidden style={{ position: 'relative', top: `-${NAVBAR_FIXED_HEIGHT}` }}/>
      <section className="flex flex-col w-full py-12 bg-gray-100" >
        <h2 className="font-[everettthin] text-5xl text-center mb-8">
          Testimonials
        </h2>
        <div
          className="grid mx-auto w-[95%] sm:w-[85%] md:w-full grid-cols-1 grid-rows-3
          md:grid-cols-3 md:grid-rows-1 flex-col lg:flex-row justify-between"
        >
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.title}
              className="flex flex-col border-b-[1px] w-[95%] mx-auto pb-4
              mb-8 md:pb-0 md:mb-0 border-gray-300 w-full px-4 text-center md:border-none"
            >
              <blockquote className="font-light text-lg mb-4">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <img
                src={`/img/testimonials/${testimonial.img}`}
                alt={testimonial.author}
                className="w-[70%] mx-auto mb-4 mt-auto rounded-full aspect-square"
              />
              <h3 className="font-[everettregular] text-2xl underline">
                {testimonial.author}
              </h3>
              <h4 className="italic text-xl font-extralight mt-1">
                {testimonial.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Testimonials;
