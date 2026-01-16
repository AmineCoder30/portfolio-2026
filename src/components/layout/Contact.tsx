import { CustomButton } from "../ui/CustomButton";

function Contact() {
  return (
    <section id="contact" className="py-24  border-t border-white/5">
       <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-text-main mb-8 leading-tight">
            Have an idea? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Let's build it.
            </span>
          </h2>
          
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-12">
            I'm currently available for freelance projects and open to full-time opportunities.
            If you're interested in working together, please don't hesitate to get in touch.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto bg-bg-surface p-2 rounded-full border-2 border-black/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none transition-all">
             <input 
               type="email" 
               placeholder="Enter your email address" 
               className="flex-1 bg-transparent border-none outline-none text-text-main px-4 py-2 placeholder-text-muted/50 focus:ring-0 font-medium"
             />
             <CustomButton size="lg">
               Send &rarr;
             </CustomButton>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-text-muted text-sm font-medium tracking-wide uppercase">
             <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-primary transition-colors">Twitter</a>
             <a href="#" className="hover:text-primary transition-colors">Instagram</a>
             <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
          
          <div className="mt-24 pt-8 border-t border-white/5 text-text-muted text-sm">
            © 2026 Amine Mohamed. All rights reserved.
          </div>
       </div>
    </section>
  );
}

export default Contact;
