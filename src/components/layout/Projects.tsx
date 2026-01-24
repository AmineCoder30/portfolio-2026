import { CustomButton } from "../ui/CustomButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Projects {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  xtranslate: number;
}

function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const totalScroll = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-zinc-950"
    >
      <div className="absolute inset-0 origin-center overflow-hidden pointer-events-none">
        {/* Wave pattern background */}
        {/* <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="wave"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 50 Q 25 25, 50 50 T 100 50"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)" />
          </svg>
        </div> */}

        {/* Floating orbs */}
        {/* <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div> */}
      </div>

      <div ref={containerRef} className="flex h-full items-center px-12 gap-12 w-fit">
        {/* Intro Text Section */}
        <div className="min-w-[40vw] md:min-w-[30vw] flex flex-col justify-center shrink-0">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Selected <br />
            <span className="text-white/50">Works</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-md mb-8">
            Here are some of the projects I've worked on recently. Each one
            crafted with precision and passion.
          </p>
          <div className="flex gap-4">
            <CustomButton variant="outline" size="sm">
              View All Projects
            </CustomButton>
          </div>
        </div>

        {/* Projects Cards */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Projects }) {
  return (
    <div
      className="group relative w-[80vw] md:w-[45vw] h-[60vh] shrink-0 rounded-[32px] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
    >
      <div className={`absolute inset-0 w-full h-full ${project.image} bg-cover bg-center transition-transform duration-700 group-hover:scale-110`} />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
         <CustomButton variant="secondary" size="sm">
            View Case Study
         </CustomButton>
      </div>

      <div className="absolute bottom-0 left-0 p-8 w-full">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/80 border border-white/20 bg-black/20 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
          {project.category}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-white/70 text-base md:text-lg line-clamp-2 max-w-xl">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default Projects;
