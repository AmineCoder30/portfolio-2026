import { useRef, useEffect } from "react";
import { Card } from "../ui/Card";
import gsap from "gsap";
import { services } from "../../constants";
import { sections } from "../../constants";

function Services({ 
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
      }, "-=0.3")
      .to(".service-card", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power1.out",
      }, "-=0.2");
    } else {
      // Animate to inactive state
      tl.to(".service-card", {
        opacity: 0,
        y: 20,
        duration: 0.2,
        ease: "power1.in",
      })
      .to(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power1.in",
      }, "-=0.1")
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
      id="services"
      style={{ 
        zIndex: isActive ? 100 : sectionIndex,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      className="fixed inset-0 w-full h-screen flex items-center justify-center"
    >
      <div
        ref={backgroundRef}
        style={{ background: section.bgGradient }}
        className="absolute inset-0 origin-center overflow-hidden"
      >
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />

        <div 
          ref={contentRef}
          className="container mx-auto px-8 md:px-12 h-full flex flex-col items-center justify-center pt-32 pb-16 relative z-10"
        >
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              My <span className="text-white/90">Superpowers</span>
            </h2>
            <p className="text-white/80 text-base">
              I combine technical skills with creative design to deliver impactful
              solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
            {services.map((service, index) => (
              <Card
                key={index}
                className="service-card group border-white/20 hover:border-white/40 shadow-2xl bg-white/10 backdrop-blur-xl hover:bg-white/15 opacity-0 transition-all duration-300"
                style={{ transform: 'translateY(20px)' }}
              >
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
      </div>
    </section>
  );
}

export default Services;
