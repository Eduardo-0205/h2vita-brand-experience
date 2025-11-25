import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, QrCode, Music, Sparkles } from "lucide-react";
import immunityProduct from "@/assets/immunity-product.jpg";

const ProductImmunity = () => {
  const ingredients = [
    {
      name: "Vitamina C",
      benefit: "Fortalece o sistema imunitário naturalmente",
    },
    {
      name: "Zinco",
      benefit: "Proteção celular e resposta imunológica",
    },
    {
      name: "Equinácea",
      benefit: "Estimula as defesas naturais do corpo",
    },
    {
      name: "Gengibre",
      benefit: "Anti-inflamatório e energizante natural",
    },
  ];

  const benefits = [
    "Reforça as defesas naturais do corpo",
    "Protege células do stress oxidativo",
    "Aumenta energia e vitalidade",
    "Ideal para rotinas exigentes",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-immunity-light section-padding section-spacing">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-1 bg-immunity/10 rounded-full mb-6">
                  <span className="text-sm font-medium text-immunity-foreground">IMMUNITY</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-light mb-6 text-immunity-foreground">
                  Reforço diário para um corpo resiliente
                </h1>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  A tua proteção diária. Fortalece as defesas naturais, aumenta a energia e prepara o corpo para qualquer desafio.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-immunity text-white hover:bg-immunity/90 rounded-full px-8">
                    Adicionar ao meu ritual
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-immunity/30 text-immunity-foreground hover:bg-immunity/5">
                    Subscrição mensal
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={immunityProduct}
                  alt="H2Vita Immunity"
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
                Benefícios do Immunity
              </h2>
              <p className="text-lg text-foreground/70">
                Fórmula cientificamente desenvolvida para fortalecer o teu sistema imunitário
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 border-immunity/20 bg-immunity-light/30">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-immunity flex items-center justify-center">
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
                <div key={index} className="bg-background rounded-xl p-8 border border-immunity/20">
                  <h3 className="font-display text-2xl font-medium mb-3 text-immunity-foreground">
                    {ingredient.name}
                  </h3>
                  <p className="text-foreground/70">{ingredient.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ritual Section */}
        <section className="section-padding section-spacing">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-4xl font-light mb-6">
                O ritual ideal para ti
              </h2>
              <p className="text-lg text-foreground/70">
                Manhã ou antes de atividades físicas
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 text-center border-immunity/20 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-immunity-light flex items-center justify-center">
                  <QrCode className="h-8 w-8 text-immunity" />
                </div>
                <h3 className="font-display text-xl font-medium mb-3 text-immunity-foreground">
                  QR Code Interativo
                </h3>
                <p className="text-sm text-foreground/70">
                  Acede a conteúdos de bem-estar e vitalidade
                </p>
              </Card>
              <Card className="p-8 text-center border-immunity/20 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-immunity-light flex items-center justify-center">
                  <Music className="h-8 w-8 text-immunity" />
                </div>
                <h3 className="font-display text-xl font-medium mb-3 text-immunity-foreground">
                  Playlist Energizante
                </h3>
                <p className="text-sm text-foreground/70">
                  Música para começar o dia com energia
                </p>
              </Card>
              <Card className="p-8 text-center border-immunity/20 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-immunity-light flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-immunity" />
                </div>
                <h3 className="font-display text-xl font-medium mb-3 text-immunity-foreground">
                  Rotina Matinal
                </h3>
                <p className="text-sm text-foreground/70">
                  Guia de exercícios e respiração
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-immunity-light section-padding py-20">
          <div className="container-custom text-center">
            <h2 className="font-display text-4xl font-light mb-6 text-immunity-foreground">
              Pronto para fortalecer o teu corpo?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Começa o teu ritual de proteção diária hoje
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-immunity text-white hover:bg-immunity/90 rounded-full px-8">
                Adicionar ao carrinho
              </Button>
              <Button size="lg" variant="ghost" asChild className="rounded-full px-8 text-immunity-foreground hover:bg-immunity/10">
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

export default ProductImmunity;
