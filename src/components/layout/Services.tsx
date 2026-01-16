import { Card } from "../ui/Card";

const services = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and accessible websites using modern frameworks like React and Next.js.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    span: "md:col-span-2",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    span: "md:col-span-1",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for iOS and Android.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    span: "md:col-span-1",
  },
  {
    title: "Performance Optimization",
    description: "Speeding up your digital products for better user retention.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    span: "md:col-span-2",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-bg-main">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6">
             My <span className="text-primary">Superpowers</span>
           </h2>
           <p className="text-text-muted">
             I combine technical skills with creative design to deliver impactful solutions.
           </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
             <Card
               key={index}
               className={`group ${service.span} border-black/10 hover:border-primary/50`}
             >
                <div className="w-14 h-14 bg-bg-main rounded-[16px] border-2 border-black/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
             </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
