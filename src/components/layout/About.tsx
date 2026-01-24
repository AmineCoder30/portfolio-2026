import { CustomButton } from "../ui/CustomButton";
import StatsBar from "../ui/StatsBar";
import { MoveUpRight } from "lucide-react";
import { useRef } from "react";
import ProfileCard from "../ui/ProfileCard";
import hero from "../../assets/hero.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const FirsttextRef = useRef<HTMLDivElement>(null);
  const secondtextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const FirstTextsplit = new SplitText(FirsttextRef.current, {
      type: "words",
    });
    const SecondTextsplit = new SplitText(secondtextRef.current, {
      type: "words",
    });

// First text
gsap.fromTo(
  FirstTextsplit.words,
  {
    filter: "blur(8px)",
    opacity: 0,
    y: 20,
    willChange: "filter, transform, opacity",
  },
  {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    stagger: 0.06,
    ease: "power3.out",
    scrollTrigger: {
      trigger: FirsttextRef.current,
      start: "top 80%",
      end: "top 50%",
      scrub: true,
    },
  }
);

// Second text
gsap.fromTo(
  SecondTextsplit.words,
  {
    filter: "blur(8px)",
    opacity: 0,
    y: 20,
    willChange: "filter, transform, opacity",
  },
  {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    stagger: 0.06,
    ease: "power3.out",
    scrollTrigger: {
      trigger: secondtextRef.current,
      start: "top 80%",
      end: "top 50%",
      scrub: true,
    },
  }
);

  }, { scope: containerRef }); // Added scope for better cleanup
  return (
    <section
      ref={containerRef}
      id="about"
      className=" w-full relative min-h-screen flex items-center justify-center"
    >
      {/* Stats Bar at Top */}
      <StatsBar  />

  

      <div className="container mx-auto px-8 md:px-12 h-full flex items-center pt-28 md:pt-32 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
          {/* Text Content */}
          <div className=" flex flex-col order-2 md:order-1 gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg text-gradient">
              Crafting digital{" "}
              <span className="text-white/90">masterpieces</span>.
            </h2>
            <p className="text-white/80 leading-relaxed text-base md:text-lg" ref={FirsttextRef}>
              I am a passionate software engineer with a knack for turning
              complex problems into elegant, user-friendly solutions. My journey
              involves a deep dive into modern web technologies, always staying
              ahead of the curve.
            </p>
            <p className="text-white/80 leading-relaxed text-lg" ref={secondtextRef} >
              When I'm not coding, you can find me exploring 3D design to bring
              a new dimension to web interfaces.
            </p>

            <div className="pt-3 flex  items-center">
              <CustomButton variant="outline" size="sm">
                Get in Touch
              </CustomButton>
              <button className="bg-bg-surface px-2 py-2 text-sm rounded-md">
                <MoveUpRight size={20} />
              </button>
            </div>
          </div>

          {/* Animated list */}

          <div className="relative order-1 md:order-2">
            <ProfileCard
           
              avatarUrl={hero}
         
           
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
