import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ProfileCardProps {
  avatarUrl?: string;
  className?: string; 


  iconUrl?: string; 
 
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cells = gsap.utils.toArray(".grid-cell");

      gsap.fromTo(
        cells,
        {
       
          scale: 1,
        },
        {
        
          scale: 0,
          duration: 0.5,
          stagger: {
            each: 0.05,
            from: "random",
            grid: "auto",
          },
            ease: "power2.inOut",
          transformOrigin: "top left",
          scrollTrigger: {
            trigger: containerRef.current,
              start: "top 50%",
            end: "bottom 90%",  
            //   toggleActions: "play none none reverse",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Create a 10x10 grid (100 cells)
  const cells = Array.from({ length: 100 });

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "380px",
        aspectRatio: "0.718", // Keep the aspect ratio
      }}
    >
      {/* Background Image */}
      <img
        src={avatarUrl}
        alt="Profile"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Grid Overlay */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid grid-cols-10 grid-rows-10 z-10"
      >
        {cells.map((_, i) => (
          <div
            key={i}
            className="grid-cell bg-bg-main w-full h-full " // Subtle border for grid effect
            style={{ willChange: "opacity, transform" }}
          />
        ))}
      </div>
      
      {/* Optional: Add a border or inner shadow frame if needed */}
      {/* <div className="absolute inset-0 border border-border/20 rounded-3xl pointer-events-none z-20" /> */}
    </div>
  );
};

export default ProfileCard;
