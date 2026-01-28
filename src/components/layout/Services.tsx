import { useRef } from "react";
import { Card } from "../ui/Card";

import { services } from "../../constants";
import CustomText from "../ui/CustomText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !gridRef.current || isMobile) return;

    const cards = gsap.utils.toArray<HTMLElement>(".service-card");
    const cardInners = gsap.utils.toArray<HTMLElement>(".card-inner");

    // Set initial state - cards as one piece
    // gsap.set(gridRef.current, { gap: "0px" });
    // gsap.set(cards, { borderRadius: "0px" });
    // gsap.set(cardInners, { rotateY: 0 });

    // Timeline for gap increase, border radius, then flip
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "5% top",
        end: "bottom 5%",
        scrub: 1,
        pin: true,
      },
    });

    // Step 1: Increase gap between cards (they separate)
    tl.from(gridRef.current, {
      gap: "0rem",
      duration: 0.4,
      ease: "power2.out",
    })
      // Step 2: Add border radius simultaneously with gap
      .from(
        cards,
        {
          borderRadius: "0rem",
          duration: 0.4,
          ease: "power2.out",
        },
        "<", // Start at the same time as gap
      )
      // Step 3: Flip cards to show content
      .from(
        cardInners,
        {
          rotateY: 0,
          duration: 0.2,

          ease: "power2.inOut",
        },
        "+=0.1", // Small pause after separation
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full flex items-center justify-center"
    >
      <div
        ref={contentRef}
        className="container mx-auto section-padding h-full flex flex-col items-center justify-center relative z-10"
      >
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <CustomText textOne="My Superpowers" />
          <p className="text-text-muted text-base">
            I combine technical skills with creative design to deliver impactful
            solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              hoverEffect={false}
              className={`service-card h-40 col-span-1 rounded-xl
                 relative ${service.span}`}
              style={{
                borderRadius: "0px",
              }}
            >
              {/* Card Inner Wrapper for 3D flip */}
              <div
                className="card-inner absolute inset-0"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                  transform: "rotateY(180deg)",
                }}
              >
                {/* Back face - Shows icon initially */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-bg-main  p-6"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="w-14 h-14 bg-bg-surface/10 rounded-xl border-2 border-border flex items-center justify-center text-text-main mb-6 transition-transform duration-300 shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Front face - Shows title and description after flip */}
                <div
                  className={`absolute inset-0 rounded-xl flex flex-col items-center justify-center ${service.background} p-6`}
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
