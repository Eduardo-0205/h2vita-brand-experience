import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, QrCode, ShoppingCart } from "lucide-react";
import focusProduct from "@/assets/focus-product.jpg";

const ProductFocus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-focus/10 rounded-3xl blur-3xl -z-10"></div>
              <img
                src={focusProduct}
                alt="H2Vita Focus"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="inline-block px-4 py-2 bg-focus-light rounded-full">
                <span className="text-sm font-medium text-focus-foreground">FOCUS</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-light text-balance">
                Clareza mental sem agitação
              </h1>
              <p className="text-xl text-muted-foreground">
                A tua mente merece a mesma atenção que o teu corpo. Focus é a fórmula ideal 
                para momentos que exigem concentração natural e sustentada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-focus text-white hover:bg-focus/90 rounded-full text-base group"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Adicionar ao ritual
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-base border-focus/30"
                >
                  Subscrever e poupar
                </Button>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-light mb-8 text-center">
              Benefícios do Focus
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-focus-light/50 border-focus/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-focus rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Concentração Natural</h3>
                    <p className="text-sm text-muted-foreground">
                      L-Teanina promove estado de alerta relaxado, sem nervosismo
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-focus-light/50 border-focus/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-focus rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Energia Equilibrada</h3>
                    <p className="text-sm text-muted-foreground">
                      Ginseng fornece energia sustentada ao longo do dia
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-focus-light/50 border-focus/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-focus rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Função Cognitiva</h3>
                    <p className="text-sm text-muted-foreground">
                      Vitaminas do complexo B apoiam a função cerebral normal
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="mb-20 bg-muted/30 rounded-3xl p-8 md:p-12">
            <h2 className="font-display text-3xl font-light mb-8 text-center">
              Ingredientes Funcionais
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-focus rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium mb-1">L-Teanina (100mg)</h4>
                  <p className="text-sm text-muted-foreground">
                    Aminoácido presente no chá verde que promove relaxamento sem sonolência, 
                    melhorando o foco e a concentração.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-focus rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium mb-1">Ginseng (50mg)</h4>
                  <p className="text-sm text-muted-foreground">
                    Adaptogénio natural que aumenta a resistência mental e física, 
                    reduzindo a fadiga.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-focus rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium mb-1">Complexo B (B6, B12)</h4>
                  <p className="text-sm text-muted-foreground">
                    Essencial para o metabolismo energético e função cognitiva normal.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-focus rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium mb-1">Cafeína Natural (30mg)</h4>
                  <p className="text-sm text-muted-foreground">
                    Dose suave para alerta mental sem tremores, equivalente a 1/3 de um café.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Experience */}
          <div className="bg-gradient-to-br from-focus-light to-focus-light/50 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-focus rounded-2xl mb-4">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-display text-3xl font-light">
                O teu ritual Focus
              </h2>
              <p className="text-muted-foreground">
                Cada garrafa inclui um QR code exclusivo para aceder à tua playlist 
                de concentração personalizada. Música cientificamente selecionada para 
                potenciar o teu foco.
              </p>
              <Button
                variant="outline"
                className="border-focus/30 hover:bg-focus/10 rounded-full"
              >
                Descobre a experiência
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductFocus;
