import { useRef } from "react";
import { Card } from "../ui/Card";

import { services } from "../../constants";
import CustomText from "../ui/CustomText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".card-background",
      {
        scaleX: 0,
      },
      {
        scaleX: 1,

        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "top top",
        },
        ease: "power3.out",
        duration: 1.2,
        transformOrigin: "left center",
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full h-screen flex items-center justify-center"
    >
      <div
        ref={contentRef}
        className="container mx-auto px-8 md:px-12 h-full flex flex-col items-center justify-center pt-32 pb-16 relative z-10"
      >
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <CustomText textOne="My Superpowers" />
          <p className="text-white/80 text-base">
            I combine technical skills with creative design to deliver impactful
            solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`service-card col-span-1  ${service.span} bg-bg-main group overflow-hidden  shadow-2xl  backdrop-blur-xl   transition-all duration-300`}
              style={{ transform: "translateY(20px)" }}
            >
              <div
                className={`absolute -z-1 card-background    inset-0 w-full h-full ${service.background}  `}
              />
              <div className="w-14 h-14 bg-white/10 rounded-xl border-2 border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
