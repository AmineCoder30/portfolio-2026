import { CustomButton } from "../ui/CustomButton";

import { projects } from "../../constants";

import { useRef } from "react";
import CustomText from "../ui/CustomText";
import { MoveUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

  useGSAP(() => {
    if (!sectionRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".project-card");
    const scrollPerCard = 500; // تحكم دقيق
    const totalScroll = scrollPerCard * (cards.length - 1);

    // Create a timeline for sequential animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top -5%",
        end: `+=${totalScroll}`, // Extend scroll distance based on number of cards
        scrub: true,
        pin: true,
      },
    });

    // Animate each card sequentially
    cards.pop(); // Remove the last card from animation
    cards.reverse(); // Reverse the order for correct stacking animation
    cards.forEach((card, index) => {
      gsap.set(card, { zIndex: cards.length - index }); // Ensure proper stacking order
      tl.to(card, {
        yPercent: -120,
        opacity: 0,
        ease: "none",
      });
    });
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative  flex flex-col gap-12 w-full h-fit items-center justify-center section-padding "
    >
      {/* Intro Text Section */}

      <div className="text-center">
        <CustomText textOne="Selected Works" />
        <p className="text-text-muted text-lg md:text-xl max-w-md mb-8">
          Here are some of the projects I've worked on recently. Each one
          crafted with precision and passion.
        </p>
      </div>
      <div className="relative w-full max-w-lg mx-auto h-55">
        {/* Projects Cards */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
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
    </section>
  );
}

function ProjectCard({ project }: { project: Projects }) {
  return (
    <div
      className={`group project-card ${project.rotate}  absolute inset-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:z-10 `}
    >
      {/* Image Layer */}
      <div className="absolute inset-0 bg-black">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full  origin-top-right object-cover transition-all duration-700  group-hover:rotate-2"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20 opacity-60 group-hover:opacity-90 rounded-4xl transition-opacity duration-500" />

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Bottom Content */}
      <div className="absolute bg-bg-main bottom-0 left-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-3 drop-shadow-lg">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-base md:text-lg line-clamp-2 max-w-xl leading-relaxed">
          {project.description}
        </p>

        {/* Decorative Line */}
        <div className="mt-4 w-16 h-1 bg-linear-to-r from-primary to-transparent rounded-full" />
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
    </div>
  );
}

export default Projects;
