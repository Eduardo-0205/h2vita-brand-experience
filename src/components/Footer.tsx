import { Link } from "react-router-dom";
import { Droplet, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-custom section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Droplet className="h-6 w-6 text-primary" />
              <span className="font-display font-semibold text-lg">H2Vita</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Hidratar o corpo, equilibrar a mente.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:hello@h2vita.pt" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-medium mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/produtos/focus" className="text-muted-foreground hover:text-foreground transition-colors">
                  Focus
                </Link>
              </li>
              <li>
                <Link to="/produtos/relax" className="text-muted-foreground hover:text-foreground transition-colors">
                  Relax
                </Link>
              </li>
              <li>
                <Link to="/produtos/immunity" className="text-muted-foreground hover:text-foreground transition-colors">
                  Immunity
                </Link>
              </li>
              <li>
                <Link to="/produtos/glow" className="text-muted-foreground hover:text-foreground transition-colors">
                  Glow
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium mb-4">A Marca</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/sustentabilidade" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sustentabilidade
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 H2Vita. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
