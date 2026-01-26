import { Sparkles } from "lucide-react";
import { useRef } from "react";
import { CustomButton } from "../ui/CustomButton";
import MorphingText from "../ui/MorphineText";
import icons from "../../constants/icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(
      ".left-tech-icon",

      {
        opacity: 0,
        y: 200,
        x: 200,

        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
    );
    gsap.to(".right-tech-icon", {
      opacity: 0,

      y: 200,
      x: -200,
      willChange: "filter, transform, opacity",
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
 

      {/* Floating Icons */}
      {icons.map(({ Icon, top, left, right }, index) => (
        <div
          key={index}
          className={`absolute hidden md:block
              ${index % 2 ? "left-tech-icon" : "right-tech-icon"} `}
          style={{
            top,
            left,
            right,
          }}
        >
          <Icon className="w-8 h-8 md:w-12 md:h-12 text-primary" />
        </div>
      ))}

      <div className="relative  z-10 max-w-[90rem] w-full text-center mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">
            Available for new projects
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold tracking-tight mb-6 leading-[0.9] text-[clamp(3.5rem,11vw,9rem)]">
          <div className="block">
            <MorphingText texts={["Creative", "Innovative", "Passionate"]} />
          </div>
          <span className="block text-gradient uppercase mt-2">Developer</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed px-4">
          I craft beautiful, performant web experiences that leave lasting
          impressions. Specializing in React, TypeScript, and modern web
          technologies.
        </p>

        {/* CTA CustomButtons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6">
          <CustomButton
            size="lg"
            className="w-full sm:w-auto h-12 px-8 text-base"
          >
            View Work
            <span className="ml-2">→</span>
          </CustomButton>
          <CustomButton
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-12 px-8 text-base"
          >
            Contact Me
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
