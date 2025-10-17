import { Code2, Palette, Database, Layers, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Express, MongoDB, PostgreSQL",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Sketch, User Research",
    gradient: "from-accent to-primary",
  },
  {
    icon: Layers,
    title: "Graphic Design",
    description: "Adobe Photoshop, Illustrator, Brand Identity",
    gradient: "from-primary to-accent",
  },
  {
    icon: Sparkles,
    title: "Creative Coding",
    description: "Three.js, GSAP, Framer Motion, WebGL",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Web Vitals, SEO, Accessibility, Optimization",
    gradient: "from-accent to-secondary",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-accent font-medium text-sm">What I Do Best</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="bg-gradient-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border hover:shadow-card-glow hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <skill.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
