import { CustomButton } from "../ui/CustomButton";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { projects } from "../../constants";
import { sections } from "../../constants";

interface Projects {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  xtranslate: number;
}

function Projects({ 
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
        scaleX: 1,
        borderBottomLeftRadius: "0%",
        borderTopLeftRadius: "0%",
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
      .to(".project-card", {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      }, "-=0.2");
    } else {
      // Animate to inactive state
      tl.to(".project-card", {
        opacity: 0,
        x: 50,
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
            scaleX: 0,
        borderBottomLeftRadius: "100%",
        borderTopLeftRadius: "100%",
        duration: 0.6,
        // ease: "power2.inOut",
        transformOrigin: "right",
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
      id="projects"
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
        {/* Wave pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="white" strokeWidth="2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)" />
          </svg>
        </div>

        {/* Floating orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div 
          ref={contentRef}
          className="container mx-auto px-8 md:px-12 h-full flex flex-col items-center justify-center pt-32 pb-16 relative z-10"
        >
          <div className="flex flex-row  justify-between items-end mb-10 gap-4 w-full max-w-5xl">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                Selected <span className="text-white/90">Works</span>
              </h2>
              <p className="text-white/80 text-base">
                Here are some of the projects I've worked on recently.
              </p>
            </div>
            <CustomButton variant="outline" size="sm">View All Projects</CustomButton>
          </div>

          {/* Projects Grid */}
          <div className="flex  gap-4 max-w-5xl w-full">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: Projects;
}) {
  return (
    <div
      className="group project-card w-full rounded-[24px] overflow-hidden bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:border-white/40 hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] opacity-0"
      style={{ transform: 'translateX(50px)' }}
    >
      <div
        className={`aspect-video w-full ${project.image} relative overflow-hidden text-white`}
      >
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CustomButton variant="secondary" size="sm">
            View Case Study
          </CustomButton>
        </div>
      </div>
      <div className="p-6">
        <span className="text-white text-xs font-bold uppercase tracking-wider border border-white/30 bg-white/10 px-3 py-1 rounded-full">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-white mt-4 mb-3">
          {project.title}
        </h3>
        <p className="text-white/70 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default Projects;
