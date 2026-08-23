import type { PropsWithChildren } from 'react';
import Footer from './footer';
import Navbar from './navbar';
import { NAV_ITEMS } from '../lib/site';

type InteriorProps = PropsWithChildren<{
  title: string;
}>;

function Interior({ title, children }: InteriorProps): JSX.Element {
  return (
    <>
      <Navbar items={[...NAV_ITEMS]} />
      <main className="relative z-10 bg-white min-h-[calc(100svh-3rem)] md:min-h-[calc(100svh-4rem)]">
        <article className="py-10 md:py-16 w-[90%] md:w-[70%] lg:w-1/2 mx-auto text-xl font-light">
          <h1 className="text-4xl md:text-5xl font-[everettultralight] text-center">
            {title}
          </h1>
          <div className="mt-10 space-y-6 text-left leading-relaxed">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Interior;
