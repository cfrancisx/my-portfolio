import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Twitter, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-4">
            <MessageSquare className="h-4 w-4 text-secondary" />
            <span className="text-secondary font-medium text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Have a project in mind or just want to chat? I'm always excited to discuss 
            new opportunities, creative ideas, and potential collaborations.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto bg-card/60 backdrop-blur-sm border-border shadow-card-glow animate-fade-in">
          <CardContent className="p-8 md:p-10">
            <div className="space-y-5">
              <div className="flex items-center gap-4 p-5 rounded-xl hover:bg-muted/30 transition-all duration-300 border border-transparent hover:border-primary/20">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:chukwuebuka@example.com" className="text-foreground hover:text-primary transition-colors font-medium">
                    talktocfx@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl hover:bg-muted/30 transition-all duration-300 border border-transparent hover:border-secondary/20">
                <div className="w-14 h-14 rounded-2xl bg-gradient-secondary flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-secondary transition-colors font-medium"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl hover:bg-muted/30 transition-all duration-300 border border-transparent hover:border-accent/20">
                <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Twitter className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Twitter</p>
                  <a 
                    href="https://twitter.com/EbukaFrancis13" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors font-medium"
                  >
                    Follow on Twitter
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  size="lg" 
                  asChild
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground font-medium text-base h-14"
                >
                  <a
                    href="https://wa.link/azecne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-full"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Start a Conversation
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
