import { useRef } from "react";
import CustomText from "../ui/CustomText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    title: "The Future of Web Development in 2026",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    category: "Development",
  },
  {
    title: "Why You Should Learn React 19",
    date: "Sep 28, 2025",
    readTime: "8 min read",
    category: "React",
  },
  {
    title: "Mastering Tailwind CSS v4",
    date: "Sep 15, 2025",
    readTime: "4 min read",
    category: "CSS",
  },
];

function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".blog-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative w-full flex items-center justify-center"
    >
      <div
        ref={contentRef}
        className="container mx-auto section-padding h-full flex flex-col items-center justify-center relative z-10"
      >
        <div className="text-center mb-12">
          <CustomText textOne="Latest Insights" />
          <p className="text-text-muted text-base">
            Thoughts on technology, design, and everything in between.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-col gap-6 w-full max-w-4xl">
          {posts.map((post, index) => (
            <a
              key={index}
              href="#"
              className="blog-card group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-2xl bg-bg-surface border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="flex-1 relative z-10">
                {/* Category badge */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-text-main group-hover:text-primary transition-colors duration-300 mb-3">
                  {post.title}
                </h3>

                {/* Meta info */}
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-text-muted rounded-full" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Arrow icon */}
              <div className="mt-4 md:mt-0 md:ml-6 relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-border bg-bg-main flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300 shadow-lg group-hover:shadow-glow-green">
                  <ArrowRight className="w-5 h-5 text-text-main group-hover:text-bg-main transition-colors duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
