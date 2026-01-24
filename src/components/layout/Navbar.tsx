import { navLinks } from "../../constants";
import { useState } from "react";
import { CustomButton } from "../ui/CustomButton";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex z-50 bg-bg-main fixed top-0 left-0 items-center w-full justify-between px-6 py-3  text-text-main text-sm  ">
      <h1 className="font-bold text-white text-3xl text-gradient">Amine</h1>
      <div className="hidden md:flex items-center gap-6 ml-7 font-medium">
        {navLinks.map((link) => (
          <a
            href={link.link}
            key={link.label}
            className="relative overflow-hidden h-6 group hover:text-primary transition-colors duration-300"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              {link.label}
            </span>
            <span className="block absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-primary font-bold">
              {link.label}
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
        className={`absolute top-20 left-0 w-full flex-col items-center gap-6 p-8 bg-bg-main  font-medium transition-all duration-300 ${
          isMenuOpen
            ? "flex md:hidden opacity-100 scale-100"
            : "hidden opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            className="text-lg text-text-main hover:text-primary transition-colors font-bold"
            href={link.link}
            key={link.label}
          >
            {link.label}
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
