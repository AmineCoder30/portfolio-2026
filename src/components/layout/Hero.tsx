import { CustomButton } from "../ui/CustomButton";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Content (5 cols) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-text-main">
              Hi There 🖐, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                I'm Amine Mohamed
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A creative developer passionate about building digital experiences that merge clean code with stunning design.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <CustomButton variant="gradient" size="lg">
                Explore Work
              </CustomButton>
              <CustomButton variant="outline" size="lg">
                Contact Me
              </CustomButton>
            </div>
          </div>

          {/* Center: Image (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[400px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-2xl blur-2xl transform rotate-6 scale-90" />
              <img 
                src={heroImage} 
                alt="Amine Mohamed - Creative Developer" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>

          {/* Right: Contact Info (3 cols) */}
          <div className="md:col-span-12 lg:col-span-3 order-3">
             <div className="bg-bg-surface backdrop-blur-md border-2 border-black/10 rounded-[24px] p-6 lg:p-8 flex flex-col gap-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 group">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-text-muted font-bold mb-2">Email</h3>
                  <a href="mailto:code30a@gmail.com" className="text-text-main hover:text-primary transition-colors font-bold text-lg">
                    code30a@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-text-muted font-bold mb-2">Location</h3>
                  <p className="text-text-main font-bold text-lg">
                    Meknes, Morocco
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-text-muted font-bold mb-2">Connect</h3>
                   <div className="flex gap-3">
                      {/* Facebook */}
                      <a href="#" className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-text-main shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:scale-110">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      {/* LinkedIn */}
                      <a href="#" className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-text-main shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:scale-110">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                      {/* GitHub */}
                      <a href="#" className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-text-main shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:scale-110">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                           <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                         </svg>
                      </a>
                      {/* WhatsApp */}
                      <a href="#" className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-text-main shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:scale-110">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                         </svg>
                      </a>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
