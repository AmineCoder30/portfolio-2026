import { CustomButton } from "../ui/CustomButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import CustomText from "../ui/CustomText";
import { MoveUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Projects {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  rotate: string;
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
    { scope: sectionRef },
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full   overflow-hidden"
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

      <div
        ref={containerRef}
        className="flex h-full items-start section-padding gap-12 w-fit"
      >
        {/* Intro Text Section */}
        <div className="min-w-[40vw] md:min-w-[30vw] flex flex-col justify-center shrink-0">
          <CustomText textOne="Selected Works" />
          <p className="text-text-muted text-lg md:text-xl max-w-md mb-8">
            Here are some of the projects I've worked on recently. Each one
            crafted with precision and passion.
          </p>
          <div className="mt-3 group flex w-fit rounded-md hover:bg-bg-surface w items-center">
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
      className={`group ${project.rotate}  relative w-[80vw] md:w-[45vw] h-[60vh] shrink-0 rounded-4xl overflow-hidden bg-bg-surface/5 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500`}
    >
      <img
        src={project.image}
        alt={project.title}
        className={`absolute  origin-left duration-150 inset-0 w-full h-full  `}
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />

      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
        <CustomButton variant="secondary" size="sm">
          View Case Study
        </CustomButton>
      </div>

      <div className="absolute bottom-0 left-0 p-8 w-full">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-text-muted border border-border bg-bg-main/20 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
          {project.category}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-text-main mb-3">
          {project.title}
        </h3>
        <p className="text-text-muted text-base md:text-lg line-clamp-2 max-w-xl">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default Projects;
