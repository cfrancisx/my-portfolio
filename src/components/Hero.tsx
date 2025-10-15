import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Briefcase } from "lucide-react";
import profilePlaceholder from "@/assets/WhatsApp Image 2025-10-13 at 05.45.11_839eddc9.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-warm opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Picture */}
            <div className="flex-shrink-0 animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-glow-pulse"></div>
                <img 
                  src={profilePlaceholder}
                  alt="Chukwuebuka Francis - Frontend Developer and Designer"
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-card shadow-card-glow"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <p className="text-primary font-medium text-sm">👋 Welcome to my portfolio</p>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Chukwuebuka Francis</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-3">
                Frontend Developer & Fullstack Vibe Coder
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Graphic Designer • UI/UX Designer
              </p>
              
              <p className="text-base md:text-lg text-foreground/80 mb-10 max-w-2xl">
                I craft beautiful digital experiences that blend stunning design with powerful code. 
                Let's build something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-base font-medium px-8 text-primary-foreground"
                  onClick={() => scrollToSection('portfolio')}
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  View My Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-base font-medium px-8"
                  onClick={() => scrollToSection('contact')}
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll to about section"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
