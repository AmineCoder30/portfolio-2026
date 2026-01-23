import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!dotRef.current || !ringRef.current) return;

    // GSAP quick setters (VERY performant)
    const setDotX = gsap.quickTo(dotRef.current, "x", {
      duration: 0.2,
      ease: "power3.out",
    });
    const setDotY = gsap.quickTo(dotRef.current, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const setRingX = gsap.quickTo(ringRef.current, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    const setRingY = gsap.quickTo(ringRef.current, "y", {
      duration: 0.35,
      ease: "power3.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [role='button']",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover);
      el.addEventListener("mouseleave", handleElementLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, []);

  // Hover animation
  useEffect(() => {
    if (!dotRef.current || !ringRef.current) return;

    gsap.to(dotRef.current, {
      scale: isHovering ? 0.5 : 1,
      duration: 0.15,
      ease: "power2.out",
    });

    gsap.to(ringRef.current, {
      scale: isHovering ? 1.5 : 1,
      duration: 0.2,
      ease: "power2.out",
    });
  }, [isHovering]);

  // Visibility animation
  useEffect(() => {
    if (!dotRef.current || !ringRef.current) return;

    gsap.to([dotRef.current, ringRef.current], {
      opacity: isVisible ? 1 : 0,
      duration: 0.15,
      ease: "power2.out",
    });
  }, [isVisible]);

  // Disable on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-9999 mix-blend-difference hidden md:block"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 0,
        }}
      />

      {/* Cursor ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary/50 pointer-events-none z-9999 hidden md:block"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 0,
        }}
      />
    </>
  );
};
