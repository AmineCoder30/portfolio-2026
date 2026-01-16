import { CustomButton } from "../ui/CustomButton";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Web App",
    image: "bg-gradient-to-br from-purple-900 to-indigo-900", // Placeholder gradient
    description: "A comprehensive dashboard for managing online stores with real-time analytics.",
  },
  {
    id: 2,
    title: "AI Image Generator",
    category: "AI Tool",
    image: "bg-gradient-to-br from-blue-900 to-cyan-900",
    description: "Generate stunning visuals using the latest diffusion models.",
  },
  {
    id: 3,
    title: "Portfolio 2025",
    category: "Website",
    image: "bg-gradient-to-br from-orange-900 to-red-900",
    description: "An award-winning portfolio site with immersive 3D interactions.",
  },
  {
    id: 4,
    title: "Finance Tracker",
    category: "Mobile App",
    image: "bg-gradient-to-br from-green-900 to-emerald-900",
    description: "Track your expenses and investments in one place.",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 ">
      <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
               <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-4">
                 Selected <span className="text-primary">Works</span>
               </h2>
               <p className="text-text-muted">
                 Here are some of the projects I've worked on recently.
               </p>
            </div>
            <CustomButton variant="outline">View All Projects</CustomButton>
         </div>

         {/* Staggered Grid (Masonry-ish) */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Column 1 */}
            <div className="flex flex-col gap-8 md:gap-12">
               {projects.filter((_, i) => i % 2 === 0).map((project) => (
                  <ProjectCard key={project.id} project={project} />
               ))}
            </div>

            {/* Column 2 - Offset visually on pure grid, but here just stacked. 
                For true offset often need margin-top on the second col. */}
            <div className="flex flex-col gap-8 md:gap-12 md:pt-24">
               {projects.filter((_, i) => i % 2 !== 0).map((project) => (
                   <ProjectCard key={project.id} project={project} />
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group relative rounded-[24px] overflow-hidden bg-bg-main border-2 border-black/10 hover:border-black/20 hover:scale-[1.02] hover:-rotate-1 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
      <div className={`aspect-[4/3] w-full ${project.image} relative overflow-hidden text-white`}>
         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
         {/* Overlay content */}
         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <CustomButton variant="secondary" size="sm">View Case Study</CustomButton>
         </div>
      </div>
      <div className="p-6">
         <span className="text-primary text-xs font-bold uppercase tracking-wider border border-primary px-2 py-1 rounded-full">{project.category}</span>
         <h3 className="text-2xl font-bold text-text-main mt-4 mb-3">{project.title}</h3>
         <p className="text-text-muted text-sm line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
}

export default Projects;
