import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Leaf, Shield, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import focusProduct from "@/assets/focus-product.jpg";
import relaxProduct from "@/assets/relax-product.jpg";
import immunityProduct from "@/assets/immunity-product.jpg";
import glowProduct from "@/assets/glow-product.jpg";

const Index = () => {
  const products = [
    {
      name: "Focus",
      tagline: "Clareza mental sem agitação",
      description: "L-Teanina e Ginseng para concentração natural e sustentada.",
      color: "focus" as const,
      image: focusProduct,
      href: "/produtos/focus",
    },
    {
      name: "Relax",
      tagline: "Recupera e desacelera",
      description: "Magnésio e Passiflora para reduzir tensão física e mental.",
      color: "relax" as const,
      image: relaxProduct,
      href: "/produtos/relax",
    },
    {
      name: "Immunity",
      tagline: "Reforço diário para um corpo resiliente",
      description: "Vitamina C, Zinco e Elderberry para fortalecer as defesas naturais.",
      color: "immunity" as const,
      image: immunityProduct,
      href: "/produtos/immunity",
    },
    {
      name: "Glow",
      tagline: "Beleza de dentro para fora",
      description: "Biotina e Ácido Hialurónico para pele, cabelo e unhas saudáveis.",
      color: "glow" as const,
      image: glowProduct,
      href: "/produtos/glow",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-balance">
                  Eleva a tua rotina
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-light">
                  Hidratação que equilibra corpo e mente.
                </p>
              </div>
              <p className="text-foreground/60 text-lg max-w-xl">
                Transforme cada momento de hidratação num ritual consciente. 
                Ingredientes funcionais que nutrem o teu bem-estar físico e mental.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base group"
                >
                  <Link to="/produtos" className="flex items-center gap-2">
                    Experimenta o teu ritual
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full text-base border-border hover:bg-muted"
                >
                  <Link to="/sobre">Descobre a marca</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroImage}
                alt="H2Vita - Hidratação funcional"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-spacing section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Os teus rituais diários
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quatro fórmulas funcionais. Um propósito: elevar cada momento do teu dia.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why H2Vita Section */}
      <section className="section-spacing section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Porquê H2Vita?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não somos apenas mais uma bebida. Somos um ritual de bem-estar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-focus-light">
                <Leaf className="h-8 w-8 text-focus" />
              </div>
              <h3 className="font-display text-xl font-medium">Natural</h3>
              <p className="text-sm text-muted-foreground">
                Ingredientes funcionais cientificamente validados. Sem químicos desnecessários.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-immunity-light">
                <Shield className="h-8 w-8 text-immunity" />
              </div>
              <h3 className="font-display text-xl font-medium">Funcional</h3>
              <p className="text-sm text-muted-foreground">
                Cada bebida foi desenhada com um propósito claro para o teu bem-estar.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-relax-light">
                <Heart className="h-8 w-8 text-relax" />
              </div>
              <h3 className="font-display text-xl font-medium">Sustentável</h3>
              <p className="text-sm text-muted-foreground">
                Embalagens recicláveis. Compromisso com o planeta e com o futuro.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-glow-light">
                <Sparkles className="h-8 w-8 text-glow" />
              </div>
              <h3 className="font-display text-xl font-medium">Transparente</h3>
              <p className="text-sm text-muted-foreground">
                Fórmulas abertas. Sabemos o que bebes e porquê. Sempre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing section-padding bg-gradient-to-br from-focus-light via-relax-light to-glow-light">
        <div className="container-custom text-center space-y-8">
          <h2 className="font-display text-4xl md:text-5xl font-light text-balance">
            Pronto para elevar a tua rotina?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Começa hoje o teu ritual de bem-estar. Escolhe a fórmula ideal para ti.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base"
          >
            <Link to="/produtos">Descobre os produtos</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
