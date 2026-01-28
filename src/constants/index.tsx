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
    background: "bg-indigo-600",
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
    background: "bg-pink-600",
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
    background: "bg-green-600",
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
    background: "bg-yellow-600",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mernify:Chat App",
    category: "Web App",
    image:
      "https://res.cloudinary.com/djmzvj6yf/image/upload/f_auto,q_auto,w_900/v1745940293/shopco_vzxp78.png", // Placeholder gradient
    description:
      "A real-time chat application built with the MERN stack, featuring user authentication and private messaging.",
    rotate: "rotate-4",
  },
  {
    id: 2,
    title: "Anone:E-commerce",
    category: "AI Tool",
    image:
      "https://res.cloudinary.com/djmzvj6yf/image/upload/f_auto,q_auto,w_900/v1745940312/anon_jezaug.png",
    description:
      "An e-commerce platform built with React and Firebase, featuring product filtering, shopping cart functionality, and secure payment processing.",
    rotate: "-rotate-4",
  },
  {
    id: 3,
    title: "Tasky:task manager",
    category: "Website",
    image:
      "https://res.cloudinary.com/djmzvj6yf/image/upload/f_auto,q_auto,w_900/v1745940268/tasky_tiujuq.png",
    description:
      "A modern task management application with user authentication and real-time updates.",
    rotate: "rotate-4",
  },
  {
    id: 4,
    title: "DeliverEase:Food Delivery",
    category: "Mobile App",
    image:
      "https://res.cloudinary.com/djmzvj6yf/image/upload/f_auto,q_auto,w_900/v1749559388/Slide_16_9_-_11_ikmbgb.png",
    description:
      "A food delivery application that connects users with local restaurants, offering features like real-time order tracking, restaurant ratings, and secure payment options.",
    rotate: "-rotate-4",
  },
];

export default projects;
