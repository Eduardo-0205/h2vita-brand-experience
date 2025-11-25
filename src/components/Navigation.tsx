import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplet } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Droplet className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
            <span className="font-display font-semibold text-xl tracking-tight">H2Vita</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/produtos" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Produtos
            </Link>
            <Link to="/sobre" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              A Marca
            </Link>
            <Link to="/sustentabilidade" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Sustentabilidade
            </Link>
            <Link to="/blog" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Blog
            </Link>
          </div>

          <Button 
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
          >
            <Link to="/produtos">Experimenta o teu ritual</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
