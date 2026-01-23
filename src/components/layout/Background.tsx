import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Background() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const normalPath =
    "M1500 0H0.5V800H1500C1500 800 1500 800 1500 800C1500 800 1500 0.5 1500 0.5Z";

  const liquidPath =
    "M1500 0H0.5V800H1500C1500 800 1244.5 536.5 1244.5 380.5C1244.5 224.5 1500 0.5 1500 0.5Z";

  useGSAP(
    () => {
      const button = buttonRef.current;
      const path = pathRef.current;
      if (!button || !path) return;

      const enter = () =>
        gsap.to(path, {
          attr: { d: liquidPath },
          duration: 0.3,
          ease: "power2.out",
        });

      const leave = () =>
        gsap.to(path, {
          attr: { d: normalPath },
          duration: 0.3,
          ease: "power2.inOut",
        });

      button.addEventListener("mouseenter", enter);
      button.addEventListener("mouseleave", leave);

      return () => {
        button.removeEventListener("mouseenter", enter);
        button.removeEventListener("mouseleave", leave);
      };
    },
    { dependencies: [] },
  );

  return (
    <div className="max-h-screen bg-white min-h-screen">
      <svg
        width="100%"
        height="100%"
        className="h-screen w-screen absolute top-0 left-0 "
        viewBox="0 0 1494 790"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path ref={pathRef} d={normalPath} fill="black" />
      </svg>

      <button
        className=" absolute w-6 h-6 flex justify-center items-center text-2xl bg-black text-white border border-gray-300 right-0 top-1/2 -translate-y-1/2 rounded-full  "
        ref={buttonRef}
      >
        &lt;
      </button>
    </div>
  );
}

export default Background;
