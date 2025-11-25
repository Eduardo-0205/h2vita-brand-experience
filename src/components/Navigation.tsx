import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplet, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

const Navigation = () => {
  const { itemCount } = useCart();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Droplet className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
            <span className="font-display font-semibold text-xl tracking-tight">H2Vita</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/loja" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Loja
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

          <div className="flex items-center gap-4">
            <Link to="/carrinho" className="relative">
              <ShoppingCart className="h-5 w-5 text-foreground/70 hover:text-foreground transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </Link>
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
            >
              <Link to="/loja">Experimenta o teu ritual</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
