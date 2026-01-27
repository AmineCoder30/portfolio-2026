import { navLinks } from "../../constants";
import { useState, useRef, useEffect } from "react";
import { CustomButton } from "../ui/CustomButton";
import gsap from "gsap";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const backdropRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!menuRef.current || !backdropRef.current) return;

    if (isMenuOpen) {
      // Open animation
      gsap.set(backdropRef.current, { display: "block" });
      gsap.set(menuRef.current, { display: "flex" });

      const tl = gsap.timeline();

      // Animate backdrop
      tl.fromTo(
        backdropRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
      );

      // Animate menu container
      tl.fromTo(
        menuRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2",
      );

      // Stagger menu items
      tl.fromTo(
        menuItemsRef.current.filter(Boolean),
        {
          opacity: 0,
          y: -10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.2",
      );

      // Animate button
      if (buttonRef.current) {
        tl.fromTo(
          buttonRef.current,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
          },
          "-=0.1",
        );
      }
    } else {
      // Close animation
      const tl = gsap.timeline({
        onComplete: () => {
          if (menuRef.current && backdropRef.current) {
            gsap.set(menuRef.current, { display: "none" });
            gsap.set(backdropRef.current, { display: "none" });
          }
        },
      });

      tl.to(menuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
      });

      tl.to(
        backdropRef.current,
        {
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        },
        "-=0.15",
      );
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleHideMenu = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const threshold = 100; // Show navbar when mouse is within 100px from top

      if (mouseY <= threshold) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }

      return () => {
        window.removeEventListener("mousemove", handleHideMenu);
      };
    };
    window.addEventListener("mousemove", handleHideMenu);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : -100,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  return (
    <nav className="flex z-50 bg-bg-main fixed top-0 left-0 items-center w-full justify-between px-6 py-3  text-text-main text-sm  ">
      <img src="/logo.png" alt="Logo" className="w-12 h-12" />
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
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleMenuToggle}
        className="w-full h-screen bg-bg-main/80 backdrop-blur-sm hidden md:hidden absolute top-20 left-0 z-40"
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        id="mobileMenu"
        className="absolute top-20 left-0 w-full hidden md:hidden z-50 flex-col items-center gap-6 p-8 bg-bg-main font-medium shadow-2xl border-t border-border"
      >
        {navLinks.map((link, index) => (
          <a
            ref={(el) => {
              menuItemsRef.current[index] = el;
            }}
            className="text-lg text-text-main hover:text-primary transition-colors font-bold"
            href={link.link}
            key={link.label}
            onClick={handleMenuToggle}
          >
            {link.label}
          </a>
        ))}

        <div ref={buttonRef}>
          <CustomButton size="md" variant="primary" fullWidth>
            Download CV
          </CustomButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
