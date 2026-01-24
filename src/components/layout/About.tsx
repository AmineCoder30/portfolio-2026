import { CustomButton } from "../ui/CustomButton";
import StatsBar from "../ui/StatsBar";
import { MoveUpRight } from "lucide-react";
import { useRef } from "react";

function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={containerRef}
      id="about"
      className=" w-full relative h-screen flex items-center justify-center"
    >
      {/* Stats Bar at Top */}
      <StatsBar  />

      {/* Modern mesh gradient background */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-125 h-125 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl " />
        <div
          className="absolute bottom-0 left-0 w-125 h-125 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl "
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl "
          style={{ animationDelay: "4s" }}
        />
      </div> */}

      <div className="container mx-auto px-8 md:px-12 h-full flex items-center pt-32 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
          {/* Text Content */}
          <div className=" flex flex-col gap-4" ref={textRef}>
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg text-gradient">
              Crafting digital{" "}
              <span className="text-white/90">masterpieces</span>.
            </h2>
            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              I am a passionate software engineer with a knack for turning
              complex problems into elegant, user-friendly solutions. My journey
              involves a deep dive into modern web technologies, always staying
              ahead of the curve.
            </p>
            <p className="text-white/80 leading-relaxed text-lg">
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

          <div className="relative"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
