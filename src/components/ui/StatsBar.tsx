import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Star } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
];

const StatsBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // FORCE layout calculation
    gsap.set(container, { x: 0 });

 

    gsap.to(container, {
        scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom -10%",
            scrub: true,
        },
        x: -500,
        duration: 1,
        ease: "power2.out",
      
      });
    
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-20 overflow-hidden">
      <div className="glass-strong p-2">
        <div
          ref={containerRef}
          className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        >
          {[...stats, ...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-gradient">
                  {stat.label}
                </span>
              </div>
              <Star className="w-4 h-4 fill-primary text-gradient" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
