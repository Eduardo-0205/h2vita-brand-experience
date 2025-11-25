import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import focusImage from "@/assets/focus-product.jpg";
import relaxImage from "@/assets/relax-product.jpg";
import immunityImage from "@/assets/immunity-product.jpg";
import glowImage from "@/assets/glow-product.jpg";
import { Package } from "lucide-react";

const products = [
  { id: "focus", name: "FOCUS", tagline: "Clareza mental", price: 2.99, image: focusImage, color: "focus" as const },
  { id: "relax", name: "RELAX", tagline: "Desacelera", price: 2.99, image: relaxImage, color: "relax" as const },
  { id: "immunity", name: "IMMUNITY", tagline: "Reforço diário", price: 2.99, image: immunityImage, color: "immunity" as const },
  { id: "glow", name: "GLOW", tagline: "Beleza interior", price: 2.99, image: glowImage, color: "glow" as const },
];

const packs = [
  {
    id: "pack-equilibrada",
    name: "Semana Equilibrada",
    description: "7 dias de equilíbrio perfeito com todas as linhas",
    price: 18.99,
    saves: 2.00,
    items: "2x FOCUS, 2x RELAX, 2x IMMUNITY, 1x GLOW",
  },
  {
    id: "pack-workout",
    name: "Pré/Pós-Treino",
    description: "Energia e recuperação para atletas",
    price: 16.99,
    saves: 1.50,
    items: "3x FOCUS, 3x IMMUNITY",
  },
  {
    id: "pack-brilho",
    name: "Brilho & Bem-Estar",
    description: "Beleza e serenidade de dentro para fora",
    price: 15.99,
    saves: 1.50,
    items: "3x GLOW, 3x RELAX",
  },
];

const Shop = () => {
  const { addItem } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom section-padding">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
              A Tua Loja H2Vita
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Escolhe os teus rituais favoritos ou experimenta os nossos packs especiais
            </p>
          </div>

          {/* Individual Products */}
          <section className="mb-20">
            <h2 className="font-display text-3xl font-medium mb-8">Produtos Individuais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Card 
                  key={product.id}
                  className={`bg-${product.color}-light border-${product.color}/20 overflow-hidden group hover:shadow-lg transition-all duration-300`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`font-display text-2xl font-medium mb-1 text-${product.color}-foreground`}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4">{product.tagline}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-medium">€{product.price.toFixed(2)}</span>
                      <Button
                        onClick={() =>
                          addItem({
                            id: product.id,
                            name: product.name,
                            type: "product",
                            color: product.color,
                            price: product.price,
                            image: product.image,
                          })
                        }
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                      >
                        Adicionar
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Themed Packs */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Package className="h-8 w-8 text-primary" />
              <h2 className="font-display text-3xl font-medium">Packs Temáticos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packs.map((pack, index) => (
                <Card 
                  key={pack.id}
                  className="bg-gradient-to-br from-background to-muted/20 border overflow-hidden hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-display text-2xl font-medium">{pack.name}</h3>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                        Poupa €{pack.saves.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/70 mb-4">{pack.description}</p>
                    <div className="bg-muted/30 rounded-lg p-4 mb-6">
                      <p className="text-xs font-medium text-foreground/60 mb-1">Inclui:</p>
                      <p className="text-sm font-medium">{pack.items}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-medium">€{pack.price.toFixed(2)}</span>
                      <Button
                        onClick={() =>
                          addItem({
                            id: pack.id,
                            name: pack.name,
                            type: "pack",
                            color: "mixed",
                            price: pack.price,
                            image: focusImage,
                          })
                        }
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
                      >
                        Adicionar Pack
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Subscription CTA */}
          <section className="mt-20">
            <Card className="bg-gradient-hero border-0 overflow-hidden">
              <div className="p-12 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
                  O meu pack de equilíbrio
                </h2>
                <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                  Cria a tua subscrição personalizada e recebe os teus rituais mensalmente com 15% de desconto
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                  Criar Subscrição
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
