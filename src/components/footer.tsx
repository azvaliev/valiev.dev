function Footer(): JSX.Element {
  return (
    <footer className="relative z-10 bg-white border-t border-gray-200">
      <nav
        aria-label="Site"
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-6 px-4 text-sm font-[everettlight] text-gray-600"
      >
        <a href="/about" className="hover:text-black">
          About
        </a>
        <a href="/contact" className="hover:text-black">
          Contact
        </a>
        <a href="/privacy" className="hover:text-black">
          Privacy
        </a>
        <a href="/resume" className="hover:text-black">
          Resume
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
