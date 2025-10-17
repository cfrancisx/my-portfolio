import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Briefcase } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Explore my collection of projects showcasing code, design, and creative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="group bg-card/60 backdrop-blur-sm border-border hover:shadow-card-glow hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <Github className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">GitHub Portfolio</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Dive into my code repositories, open-source contributions, and development projects. 
                  See how I build clean, maintainable, and scalable solutions.
                </p>
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground font-medium"
                  asChild
                >
                  <a 
                    href="https://github.com/cfrancisx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    Explore GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-card/60 backdrop-blur-sm border-border hover:shadow-card-glow hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 blur-3xl rounded-full"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm4.5 19h-9v-1.5h9V19zm0-3h-9v-1.5h9V16zm0-3h-9v-1.5h9V13zm0-3h-9V8.5h9V10z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Design Portfolio</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Browse through my graphic design work, UI/UX case studies, and creative projects. 
                  Witness design thinking and visual storytelling in action.
                </p>
                <Button 
                  className="w-full bg-gradient-accent hover:shadow-glow transition-all duration-300 font-medium"
                  asChild
                >
                  <a 
                    href="https://drive.google.com/drive/folders/1lgQie3F6CpfzK7oMMbWNK7T471Qxeupp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View Design Work
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
