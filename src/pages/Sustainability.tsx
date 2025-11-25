import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Package, Users, Droplets, TreePine, Target, ArrowRight } from "lucide-react";

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding section-spacing pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-immunity-light text-immunity-foreground border-immunity/20">
              Compromisso com o Planeta
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6 text-balance">
              Sustentabilidade como padrão, não como extra
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              O nosso compromisso com o planeta é tão sério quanto o nosso compromisso com o teu bem-estar. Transparência total sobre o nosso impacto e as nossas metas.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-padding pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="border-immunity/20 bg-immunity-light/50 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-display font-light text-immunity-foreground mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Garrafas Recicláveis</div>
              </CardContent>
            </Card>
            <Card className="border-immunity/20 bg-immunity-light/50 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-display font-light text-immunity-foreground mb-2">-40%</div>
                <div className="text-sm text-muted-foreground">Emissões CO₂ vs Média</div>
              </CardContent>
            </Card>
            <Card className="border-immunity/20 bg-immunity-light/50 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-display font-light text-immunity-foreground mb-2">80%</div>
                <div className="text-sm text-muted-foreground">Ingredientes Locais</div>
              </CardContent>
            </Card>
            <Card className="border-immunity/20 bg-immunity-light/50 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-display font-light text-immunity-foreground mb-2">0</div>
                <div className="text-sm text-muted-foreground">Plásticos Desnecessários</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottle Lifecycle */}
      <section className="section-padding py-24 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
                O Ciclo da Garrafa H2Vita
              </h2>
              <p className="text-muted-foreground text-lg">
                Cada garrafa é pensada para ter múltiplas vidas
              </p>
            </div>

            {/* Lifecycle Diagram */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-immunity text-immunity-foreground flex items-center justify-center mb-4">
                    <Package className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium mb-2">1. Produção</h3>
                  <p className="text-sm text-muted-foreground">
                    rPET 100% reciclado de garrafas pós-consumo
                  </p>
                </div>
                <ArrowRight className="hidden md:block absolute top-8 -right-6 w-12 h-6 text-muted-foreground/30" />
              </div>

              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-immunity text-immunity-foreground flex items-center justify-center mb-4">
                    <Droplets className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium mb-2">2. Utilização</h3>
                  <p className="text-sm text-muted-foreground">
                    Desfruta do teu ritual diário de hidratação
                  </p>
                </div>
                <ArrowRight className="hidden md:block absolute top-8 -right-6 w-12 h-6 text-muted-foreground/30" />
              </div>

              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-immunity text-immunity-foreground flex items-center justify-center mb-4">
                    <Recycle className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium mb-2">3. Retorno</h3>
                  <p className="text-sm text-muted-foreground">
                    Devolve a garrafa nos pontos de recolha
                  </p>
                </div>
                <ArrowRight className="hidden md:block absolute top-8 -right-6 w-12 h-6 text-muted-foreground/30" />
              </div>

              <div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-immunity text-immunity-foreground flex items-center justify-center mb-4">
                    <TreePine className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium mb-2">4. Nova Vida</h3>
                  <p className="text-sm text-muted-foreground">
                    Reciclagem em novas garrafas ou produtos
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-immunity-light/30 border-immunity/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Leaf className="w-6 h-6 text-immunity flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Programa de Retorno de Embalagens</h4>
                    <p className="text-muted-foreground mb-4">
                      Por cada 10 garrafas devolvidas, recebe 10% de desconto na próxima compra. As garrafas são limpas, verificadas e reintroduzidas no ciclo de produção.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="font-medium">Onde devolver:</span> Lojas parceiras, pontos de recolha H2Vita
                      </div>
                      <div>
                        <span className="font-medium">Condição:</span> Limpas e intactas
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="section-padding py-24">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
                O Nosso Impacto Ambiental
              </h2>
              <p className="text-muted-foreground text-lg">
                Medimos, reduzimos e compensamos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Carbon Footprint */}
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-immunity-light flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-immunity-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-light mb-2">Pegada de Carbono</h3>
                      <p className="text-sm text-muted-foreground">Por garrafa produzida</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Produção</span>
                        <span className="text-muted-foreground">45g CO₂</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-immunity" style={{ width: '45%' }} />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Transporte</span>
                        <span className="text-muted-foreground">30g CO₂</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-immunity" style={{ width: '30%' }} />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Embalagem</span>
                        <span className="text-muted-foreground">25g CO₂</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-immunity" style={{ width: '25%' }} />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span className="text-immunity-foreground">100g CO₂</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        40% inferior à média da indústria (165g CO₂)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Water Usage */}
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-immunity-light flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-6 h-6 text-immunity-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-light mb-2">Gestão de Água</h3>
                      <p className="text-sm text-muted-foreground">Uso responsável de recursos</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Fontes de Água</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        100% proveniente de nascentes naturais protegidas em Portugal
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="h-2 flex-1 bg-immunity rounded-full" />
                        <span className="text-muted-foreground">100%</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Tratamento de Água</h4>
                      <p className="text-sm text-muted-foreground">
                        Sistema de filtração natural sem químicos. Processo minimalista que preserva minerais essenciais.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Conservação</h4>
                      <p className="text-sm text-muted-foreground">
                        Reciclamos 95% da água utilizada no processo de produção através de sistemas de circuito fechado.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section-padding py-24 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
                Parcerias Ecológicas
              </h2>
              <p className="text-muted-foreground text-lg">
                Colaboramos com organizações que partilham os nossos valores
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-immunity-light flex items-center justify-center flex-shrink-0">
                      <TreePine className="w-6 h-6 text-immunity-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-light mb-2">Programa de Reflorestação</h3>
                      <p className="text-muted-foreground mb-4">
                        Por cada pack vendido, plantamos uma árvore nativa em parceria com a associação Plantar uma Árvore. Já plantámos mais de 50.000 árvores em Portugal.
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="secondary" className="bg-immunity-light text-immunity-foreground border-0">
                          50.000+ árvores
                        </Badge>
                        <Badge variant="secondary" className="bg-immunity-light text-immunity-foreground border-0">
                          Espécies nativas
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-immunity-light flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-6 h-6 text-immunity-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-light mb-2">Proteção de Nascentes</h3>
                      <p className="text-muted-foreground mb-4">
                        1% das nossas vendas reverte para a conservação de ecossistemas aquáticos em parceria com a Liga para a Proteção da Natureza (LPN).
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="secondary" className="bg-immunity-light text-immunity-foreground border-0">
                          1% for the Planet
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-immunity-light flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-immunity-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-light mb-2">Comunidade Circular</h3>
                      <p className="text-muted-foreground mb-4">
                        Trabalhamos com cooperativas de reciclagem locais, garantindo condições dignas de trabalho e remuneração justa. Acreditamos em economia circular que beneficia pessoas e planeta.
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="secondary" className="bg-immunity-light text-immunity-foreground border-0">
                          B Corp Certified
                        </Badge>
                        <Badge variant="secondary" className="bg-immunity-light text-immunity-foreground border-0">
                          Fair Trade
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments & Goals */}
      <section className="section-padding py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
                Compromissos para 2025-2030
              </h2>
              <p className="text-muted-foreground text-lg">
                Objetivos ambiciosos, ações concretas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-immunity/30 bg-immunity-light/20">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-3">2025: Neutralidade Carbónica</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Compensação total das emissões através de projetos certificados de captura de carbono e redução contínua da pegada.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-immunity" style={{ width: '75%' }} />
                    </div>
                    <span className="text-xs text-muted-foreground">75%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-immunity/30 bg-immunity-light/20">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-3">2026: 100% Energia Renovável</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Todas as instalações de produção e escritórios alimentados por energia solar e eólica de origem certificada.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-immunity" style={{ width: '60%' }} />
                    </div>
                    <span className="text-xs text-muted-foreground">60%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-immunity/30 bg-immunity-light/20">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-3">2028: Embalagem Zero Plástico</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Transição completa para materiais de base biológica compostáveis ou sistemas de reutilização de garrafas de vidro.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-immunity" style={{ width: '30%' }} />
                    </div>
                    <span className="text-xs text-muted-foreground">30%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-immunity/30 bg-immunity-light/20">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-3">2030: Regenerativa por Natureza</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ir além da neutralidade: contribuir positivamente para a regeneração de ecossistemas. Impacto líquido positivo.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-immunity" style={{ width: '15%' }} />
                    </div>
                    <span className="text-xs text-muted-foreground">15%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-24 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
              Junta-te à nossa jornada
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Cada garrafa H2Vita é uma escolha consciente pelo planeta. Juntos, fazemos a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-immunity hover:bg-immunity/90 text-immunity-foreground">
                Ver Produtos Sustentáveis
              </Button>
              <Button size="lg" variant="outline">
                Relatório de Impacto 2024
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
