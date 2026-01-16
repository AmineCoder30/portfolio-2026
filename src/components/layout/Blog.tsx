
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
  return (
    <section id="blog" className="py-24 bg-bg-main">
      <div className="container mx-auto px-6 max-w-4xl">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-4">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <p className="text-text-muted">
              Thoughts on technology, design, and everything in between.
            </p>
         </div>

         {/* Minimal List Layout */}
         <div className="flex flex-col gap-6">
            {posts.map((post, index) => (
              <a 
                key={index} 
                href="#"
                className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-[24px] bg-bg-surface hover:bg-bg-surface border-2 border-black/10 hover:border-black/20 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:scale-[1.01] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]"
              >
                 <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 text-sm text-text-muted">
                       <span>{post.date}</span>
                       <span className="w-1 h-1 bg-primary rounded-full" />
                       <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-main group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                 </div>
                 
                 <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                       <svg className="w-5 h-5 text-text-main group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
