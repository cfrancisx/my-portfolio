import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-card/30 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
          © {new Date().getFullYear()} Chukwuebuka Francis.
          <Heart className="h-4 w-4 text-primary fill-primary inline" /> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
