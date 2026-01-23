import {
  Sparkles,
  Code2,
  Zap,
  Palette,
  Rocket,
  Coffee,
  Terminal,
  Layers,
  Globe,
  Cpu,
} from "lucide-react";
import { CustomButton } from "../ui/CustomButton";
import MorphingText from "../ui/MorphineText";

const floatingIcons = [
  { Icon: Code2, top: "15%", left: "10%", delay: 0, duration: 3 },
  { Icon: Zap, top: "25%", right: "15%", delay: 0.5, duration: 4 },
  { Icon: Palette, top: "60%", left: "8%", delay: 1, duration: 3.5 },
  { Icon: Rocket, top: "70%", right: "12%", delay: 0.3, duration: 3.8 },
  { Icon: Coffee, top: "35%", left: "5%", delay: 0.8, duration: 4.2 },
  { Icon: Terminal, top: "80%", left: "20%", delay: 0.2, duration: 3.3 },
  { Icon: Layers, top: "20%", right: "8%", delay: 1.2, duration: 3.7 },
  { Icon: Globe, top: "50%", right: "5%", delay: 0.6, duration: 4.5 },
  { Icon: Cpu, top: "40%", left: "15%", delay: 0.9, duration: 3.6 },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-0 translate-x-36 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0  left-0 -translate-x-36 translate-y-36 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      {/* Floating Icons */}
      {floatingIcons.map(
        ({ Icon, top, left, right, delay, duration }, index) => (
          <div
            key={index}
            className="absolute opacity-20 hover:opacity-40 transition-opacity"
            style={{
              top,
              left,
              right,
              animation: `float ${duration}s ease-in-out ${delay}s infinite`,
            }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12 text-primary" />
          </div>
        ),
      )}

      <div className="relative z-10 container-tight text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">
            Available for new projects
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <MorphingText texts={["Creative", "Innovative", "Passionate"]} />
          <span className="block text-gradient uppercase">Developer</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          I craft beautiful, performant web experiences that leave lasting
          impressions. Specializing in React, TypeScript, and modern web
          technologies.
        </p>

        {/* CTA CustomButtons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CustomButton size="lg" className="group px-8">
            View Work
            <span className="ml-2">→</span>
          </CustomButton>
          <CustomButton variant="outline" size="lg" className="px-8">
            Contact Me
          </CustomButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
