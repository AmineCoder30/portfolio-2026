import { CustomButton } from "../ui/CustomButton";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
];

function About() {
  return (
    <section id="about" className="py-24  relative overflow-hidden">
        {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-l-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-square rounded-full border-2 border-dashed border-primary/30 p-4 animate-spin-slow">
               <div className="w-full h-full bg-gradient-to-br from-bg-main to-bg-surface rounded-full flex items-center justify-center p-8 overflow-hidden relative">
                   {/* Abstract representation of "self" or code */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full" />
                   <div className="text-secondary font-mono text-9xl opacity-20 select-none">
                     {"{A}"}
                   </div>
               </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute bottom-0 right-10 bg-bg-main border border-white/10 p-4 rounded-xl shadow-xl">
               <span className="text-3xl">🚀</span>
               <p className="text-xs text-text-muted mt-1 font-medium">Available for work</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 flex flex-col gap-6">
             <h2 className="text-3xl md:text-5xl font-bold text-text-main">
               Crafting digital <span className="text-primary">masterpieces</span>.
             </h2>
             <p className="text-text-muted leading-relaxed">
               I am a passionate software engineer with a knack for turning complex problems into elegant, user-friendly solutions. My journey involves a deep dive into modern web technologies, always staying ahead of the curve.
             </p>
             <p className="text-text-muted leading-relaxed">
               When I'm not coding, you can find me exploring 3D design to bring a new dimension to web interfaces.
             </p>

             {/* Stats */}
             <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border mt-4">
               {stats.map((stat) => (
                 <div key={stat.label}>
                   <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                     {stat.value}
                   </h4>
                   <p className="text-sm text-text-muted mt-1">{stat.label}</p>
                 </div>
               ))}
             </div>
             
             <div className="pt-4">
                <CustomButton variant="outline">Read My Story</CustomButton>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
