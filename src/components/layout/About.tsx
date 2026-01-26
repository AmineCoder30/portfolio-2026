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
import CustomText from "../ui/CustomText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const FirsttextRef = useRef<HTMLDivElement>(null);
  const secondtextRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
        },
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
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
      gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          x: 20,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    },
    { scope: containerRef },
  ); // Added scope for better cleanup
  return (
    <section
      ref={containerRef}
      id="about"
      className=" w-full  relative min-h-screen flex items-center justify-center"
    >
      {/* Stats Bar at Top */}
      <StatsBar />

      <div className="container mx-auto section-padding h-full flex items-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
          {/* Text Content */}
          <div className=" flex flex-col order-2 md:order-1 gap-4">
         
              <CustomText textOne="Crafting digital" textTwo="masterpieces." />
         
            <p
              className="text-text-muted leading-relaxed text-base md:text-lg"
              ref={FirsttextRef}
            >
              I am a passionate software engineer with a knack for turning
              complex problems into elegant, user-friendly solutions. My journey
              involves a deep dive into modern web technologies, always staying
              ahead of the curve.
            </p>
            <p
              className="text-text-muted leading-relaxed text-lg"
              ref={secondtextRef}
            >
              When I'm not coding, you can find me exploring 3D design to bring
              a new dimension to web interfaces.
            </p>

            <div
              ref={buttonRef}
              className="mt-3 group flex w-fit rounded-md hover:bg-bg-surface w items-center"
            >
              <CustomButton
                variant="outline"
                className="group-hover:border-none "
                size="sm"
              >
                Get in Touch
              </CustomButton>
              <button className="bg-bg-surface px-2 py-2 text-sm rounded-md ">
                <MoveUpRight
                  size={16}
                  className="group-hover:rotate-45 transition-all duration-300"
                />
              </button>
            </div>
          </div>

          {/* Animated list */}

          <div className="relative order-1 md:order-2">
            <ProfileCard avatarUrl={hero} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
