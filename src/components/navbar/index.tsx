const navitems = [{
  link: '/portfolio',
  text: 'Portfolio',
}, {
  link: '#about',
  text: 'About',
}, {
  link: '#contact',
  text: 'Contact',
}];

function Navbar(): JSX.Element {
  return (
    <nav className="flex w-full h-[10vh] bg-[hsla(0,0%,100%,.88)] items-center justify-around sm:justify-end sm:gap-4 md:gap-8 px-4 z-20 sticky top-0">
      {navitems.map((item) => (
        <a href={item.link} key={item.link} className="text-black text-2xl font-[everettthin] h-fit">
          {item.text}
        </a>
      ))}
      <a
        href="https://www.linkedin.com/in/azatvaliev/"
        rel="noopener noreferrer"
        target="_blank"
        className="h-[10vw] w-[10vw] md:w-[6vw] md:h-[6vw] lg:w-[5vw] lg:h-[5vw] xl:w-[4vw] xl:h-[4vw]"
      >
        <svg focusable="false" aria-label="LinkedIn" viewBox="0 0 24 24" fill="black">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
        </svg>

      </a>
    </nav>
  )
}

export default Navbar;
