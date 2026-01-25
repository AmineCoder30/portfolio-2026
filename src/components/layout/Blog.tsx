import { useRef } from "react";
import CustomText from "../ui/CustomText";

const posts = [
  {
    title: "The Future of Web Development in 2026",
    date: "Oct 12, 2025",
    readTime: "5 min read",
  },
  {
    title: "Why You Should Learn React 19",
    date: "Sep 28, 2025",
    readTime: "8 min read",
  },
  {
    title: "Mastering Tailwind CSS v4",
    date: "Sep 15, 2025",
    readTime: "4 min read",
  },
];

function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative w-full h-screen flex items-center justify-center"
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div
        ref={contentRef}
        className="container mx-auto px-8 md:px-12 max-w-4xl h-full flex flex-col items-center justify-center pt-32 pb-16 relative z-10"
      >
        <div className="text-center mb-12">
          <CustomText textOne="Latest Insights" />
          <p className="text-white/80 text-base">
            Thoughts on technology, design, and everything in between.
          </p>
        </div>

        {/* Minimal List Layout */}
        <div className="flex flex-col gap-4 w-full">
          {posts.map((post, index) => (
            <a
              key={index}
              href="#"
              className="blog-post group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-[24px] bg-white/10 backdrop-blur-xl hover:bg-white/15 border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.01] shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)]"
              style={{ transform: "translateY(20px)" }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 text-sm text-white/70">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
                  {post.title}
                </h3>
              </div>

              <div className="mt-4 md:mt-0 md:ml-6">
                <div className="w-10 h-10 rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/50 transition-all shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
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
