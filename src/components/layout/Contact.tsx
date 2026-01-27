import CustomText from "../ui/CustomText";
import CustomTerminal from "../ui/CustomTerminal";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".terminal", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 20%",
        end: "bottom 20%",
        scrub: 1,
      },
      scale: 0.6,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full  flex-col flex items-center justify-center"
    >
      {/* Diagonal stripes pattern */}
      {/* <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0px, white 2px, transparent 2px, transparent 10px)",
        }}
      /> */}

      <div
        ref={contentRef}
        className="container mx-auto section-padding text-center h-full flex flex-col items-center justify-center relative z-10"
      >
        <CustomText textOne="Have an idea?" textTwo="Let's build it." />

        <p className="text-lg text-text-muted max-w-xl mx-auto mb-10">
          I'm currently available for freelance projects and open to full-time
          opportunities. If you're interested in working together, please don't
          hesitate to get in touch.
        </p>

        <CustomTerminal />

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
    </section>
  );
}

export default Contact;
