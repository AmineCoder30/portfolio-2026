export const sections = [
  {
    name: "Home",
    id: "hero",
    // Near-black with slight blue tint (best for hero)
    bgGradient: "#0b0f14",
    index: 0,
  },
  {
    name: "About",
    id: "about",
    // Dark navy
    bgGradient: "#0f172a",
    index: 1,
  },
  {
    name: "Projects",
    id: "projects",
    // Blue-black (tech feel)
    bgGradient: "#08121e",
    index: 2,
  },
  {
    name: "Blog",
    id: "blog",
    // Dark emerald-black
    bgGradient: "#081814",
    index: 3,
  },
  {
    name: "Services",
    id: "services",
    // Dark indigo
    bgGradient: "#141024",
    index: 4,
  },

  {
    name: "Contact",
    id: "contact",
    // Dark charcoal with warm tint
    bgGradient: "#140b10",
    index: 5,
  },
];

export const navLinks = [
  { label: "Home", link: "#", ariaLabel: "Home Section" },
  { label: "About", link: "#about", ariaLabel: "About Section" },
  { label: "Projects", link: "#projects", ariaLabel: "Projects Section" },
  { label: "Blog", link: "#blog", ariaLabel: "Blog Section" },
  { label: "Services", link: "#services", ariaLabel: "Services Section" },
  { label: "Contact", link: "#contact", ariaLabel: "Contact Section" },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and accessible websites using modern frameworks like React and Next.js.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    span: "md:col-span-2",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    span: "md:col-span-1",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for iOS and Android.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    span: "md:col-span-1",
  },
  {
    title: "Performance Optimization",
    description: "Speeding up your digital products for better user retention.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    span: "md:col-span-2",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Web App",
    image: "bg-gradient-to-br from-purple-900 to-indigo-900", // Placeholder gradient
    description:
      "A comprehensive dashboard for managing online stores with real-time analytics.",
    rotate: "rotate-6",
  },
  {
    id: 2,
    title: "AI Image Generator",
    category: "AI Tool",
    image: "bg-gradient-to-br from-blue-900 to-cyan-900",
    description: "Generate stunning visuals using the latest diffusion models.",
    rotate: "-rotate-6",
  },
  {
    id: 3,
    title: "Portfolio 2025",
    category: "Website",
    image: "bg-gradient-to-br from-orange-900 to-red-900",
    description:
      "An award-winning portfolio site with immersive 3D interactions.",
    rotate: "rotate-9",
  },
  {
    id: 4,
    title: "Finance Tracker",
    category: "Mobile App",
    image: "bg-gradient-to-br from-green-900 to-emerald-900",
    description: "Track your expenses and investments in one place.",
    rotate: "-rotate-10",
  },
];
