import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ProductDigitalExperience } from "@/components/ProductDigitalExperience";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, QrCode, Music, Sparkles } from "lucide-react";
import relaxProduct from "@/assets/relax-product.jpg";

const ProductRelax = () => {
  const ingredients = [
    {
      name: "Passiflora",
      benefit: "Reduz ansiedade e promove relaxamento natural",
    },
    {
      name: "Magnésio",
      benefit: "Relaxa músculos e sistema nervoso",
    },
    {
      name: "Camomila",
      benefit: "Acalma corpo e mente",
    },
    {
      name: "L-Teanina",
      benefit: "Promove relaxamento sem sonolência",
    },
  ];

  const benefits = [
    "Reduz tensão muscular e mental",
    "Promove bem-estar e tranquilidade",
    "Melhora qualidade do sono",
    "Recuperação pós-treino",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-relax-light section-padding section-spacing">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-1 bg-relax/10 rounded-full mb-6">
                  <span className="text-sm font-medium text-relax-foreground">RELAX</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-light mb-6 text-relax-foreground">
                  Recupera e desacelera
                </h1>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  O teu aliado para momentos de pausa consciente. Relaxa o corpo, acalma a mente e prepara-te para uma recuperação profunda.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-relax text-white hover:bg-relax/90 rounded-full px-8">
                    Adicionar ao meu ritual
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-relax/30 text-relax-foreground hover:bg-relax/5">
                    Subscrição mensal
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={relaxProduct}
                  alt="H2Vita Relax"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding section-spacing">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-4xl font-light mb-6">
                Benefícios do Relax
              </h2>
              <p className="text-lg text-foreground/70">
                Fórmula equilibrada para promover relaxamento físico e mental profundo
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 border-relax/20 bg-relax-light/30">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-relax flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-foreground/80">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="bg-muted section-padding section-spacing">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-4xl font-light mb-6">
                Ingredientes Funcionais
              </h2>
              <p className="text-lg text-foreground/70">
                Cada ingrediente tem um propósito claro
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="bg-background rounded-xl p-8 border border-relax/20">
                  <h3 className="font-display text-2xl font-medium mb-3 text-relax-foreground">
                    {ingredient.name}
                  </h3>
                  <p className="text-foreground/70">{ingredient.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Digital Experience Section */}
      <ProductDigitalExperience 
        productName="Relax"
        productColor="relax"
        playlist={{
          name: "Evening Rituals",
          description: "Sons calmantes e frequências para relaxamento profundo",
          duration: "1h 45min",
          tracks: 28,
          color: "relax"
        }}
        meditations={[
          {
            title: "Body Scan Relaxante",
            duration: "15 min",
            type: "Intermédio",
            description: "Varredura corporal para libertar tensão"
          },
          {
            title: "Meditação do Sono",
            duration: "20 min",
            type: "Todos os níveis",
            description: "Indução ao sono profundo e reparador"
          }
        ]}
      />

      <main className="flex-1">
        {/* CTA Section */}
        <section className="bg-relax-light section-padding py-20">
          <div className="container-custom text-center">
            <h2 className="font-display text-4xl font-light mb-6 text-relax-foreground">
              Pronto para desacelerar?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Começa o teu ritual de bem-estar hoje
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-relax text-white hover:bg-relax/90 rounded-full px-8">
                Adicionar ao carrinho
              </Button>
              <Button size="lg" variant="ghost" asChild className="rounded-full px-8 text-relax-foreground hover:bg-relax/10">
                <Link to="/">Ver todos os produtos</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductRelax;
