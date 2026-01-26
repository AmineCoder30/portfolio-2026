import { CustomButton } from "../ui/CustomButton";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { sections } from "../../constants";

function Contact({ 
  currentSectionIndex, 
  sectionIndex 
}: { 
  currentSectionIndex: number;
  sectionIndex: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isActive = currentSectionIndex === sectionIndex;
  const section = sections[sectionIndex];

  // Section transition animation
  useEffect(() => {
    if (!sectionRef.current || !backgroundRef.current || !contentRef.current) return;

    const tl = gsap.timeline();

    if (isActive) {
      // Animate to active state
      tl.to(backgroundRef.current, {
        scaleY: 1,
        borderBottomRightRadius: "0%",
        borderBottomLeftRadius: "0%",
        width: "100%",
        height: "100vh",
        duration: 0.8,
   
        ease: "power2.inOut",
      })
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      }, "-=0.3");
    } else {
      // Animate to inactive state
      tl.to(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power1.in",
      })
      .to(backgroundRef.current, {
            scaleY: 0,
        borderBottomRightRadius: "100%",
        borderBottomLeftRadius: "100%",
        duration: 0.6,
        // ease: "power2.inOut",
        transformOrigin: "top center",
        delay: 0.6,
      }, "-=0.1");
    }

    return () => {
      tl.kill();
    };
  }, [isActive]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{ 
        zIndex: isActive ? 100 : sectionIndex,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      className="absolute inset-0 w-full  flex items-center justify-center"
    >
      <div
        ref={backgroundRef}
        style={{ background: section.bgGradient }}
        className="absolute inset-0 origin-center overflow-hidden"
      >
        {/* Diagonal stripes pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0px, white 2px, transparent 2px, transparent 10px)' }} />

        
   

        <div 
          ref={contentRef}
          className="container mx-auto section-padding text-center h-full flex flex-col items-center justify-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-main mb-6 leading-tight drop-shadow-2xl">
            Have an idea? <br />
            <span className="text-text-muted">
              Let's build it.
            </span>
          </h2>

          <p className="text-lg text-text-muted max-w-xl mx-auto mb-10">
            I'm currently available for freelance projects and open to full-time
            opportunities. If you're interested in working together, please don't
            hesitate to get in touch.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-md mx-auto bg-bg-surface/10 backdrop-blur-xl p-2 rounded-full border border-border active:translate-y-0.5 active:shadow-none transition-all shadow-xl">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent border-none outline-none text-text-main px-4 py-2 placeholder-text-muted focus:ring-0 font-medium"
            />
            <CustomButton size="md">Send &rarr;</CustomButton>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-text-muted text-sm font-medium tracking-wide uppercase">
            <a href="#" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              GitHub
            </a>
          </div>

        </div>
      </div>
          <div className=" fixed left-0 top-1/2 -translate-y-1/2 -rotate-90 text-text-muted text-sm">
            © 2026 Amine Mohamed. All rights reserved.
          </div>
    </section>
  );
}

export default Contact;
