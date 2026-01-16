import navLinks from "../../constants";
import { useState } from "react";
import { CustomButton } from "../ui/CustomButton";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex z-50 fixed top-6 left-1/2 -translate-x-1/2 items-center w-[calc(100%-3rem)] max-w-2xl md:justify-between px-6 py-3 rounded-full text-text-main text-sm bg-bg-surface/80 backdrop-blur-md border-2 border-black/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-300">
      <a
        href="#"
        className="font-bold text-white text-lg w-10 h-10 flex items-center justify-center rounded-full bg-primary border-2 border-transparent hover:border-black/10 hover:scale-110 transition-all duration-300 shadow-md"
      >
        A
      </a>
      <div className="hidden md:flex items-center gap-6 ml-7 font-medium">
        {navLinks.map((link) => (
          <a
            href={link.href}
            key={link.name}
            className="relative overflow-hidden h-6 group hover:text-primary transition-colors duration-300"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              {link.name}
            </span>
            <span className="block absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-primary font-bold">
              {link.name}
            </span>
          </a>
        ))}
      </div>

      <div className="hidden ml-14 md:flex items-center gap-4">
        <CustomButton size="sm" variant="primary">
          Resume
        </CustomButton>
      </div>
      <button
        id="menuToggle"
        onClick={handleMenuToggle}
        className="md:hidden text-text-main hover:text-primary transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div
        id="mobileMenu"
        className={`absolute top-20 left-0 w-full flex-col items-center gap-6 p-8 bg-bg-surface border-2 border-black/10 rounded-[24px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] font-medium transition-all duration-300 ${
          isMenuOpen ? "flex md:hidden opacity-100 scale-100" : "hidden opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a className="text-lg text-text-main hover:text-primary transition-colors font-bold" href={link.href} key={link.name}>
            {link.name}
          </a>
        ))}

        <CustomButton size="md" variant="primary" fullWidth>
          Download CV
        </CustomButton>
      </div>
    </nav>
  );
}

export default Navbar;
