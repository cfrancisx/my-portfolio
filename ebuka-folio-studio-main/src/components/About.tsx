import { Sparkles, Heart, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-secondary font-medium text-sm">Get to know me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card-glow border border-border">
            <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
              <p className="animate-slow-load">
                Hello! I'm a passionate creative technologist who loves bridging the gap between 
                stunning design and powerful code. With expertise spanning <span className="text-primary font-medium">frontend development</span>, 
                <span className="text-secondary font-medium"> fullstack engineering</span>, and <span className="text-accent font-medium">UI/UX design</span>, 
                I bring a unique perspective to every project.
              </p>
              
              <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>
                  My approach combines technical excellence with aesthetic sensibility. I believe that 
                  great software should not only work flawlessly but also delight users with intuitive 
                  interfaces and thoughtful interactions.
                </p>
              </div>
              
              <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Rocket className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <p>
                  Whether I'm crafting pixel-perfect interfaces, architecting scalable systems, or 
                  designing user experiences, I'm driven by the challenge of turning complex problems 
                  into elegant, user-friendly solutions. Let's collaborate and build something extraordinary!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
