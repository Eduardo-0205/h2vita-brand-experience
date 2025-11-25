import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function StressManagement() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="section-padding pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao blog
            </Button>
          </Link>

          {/* Article Header */}
          <div className="mb-12 space-y-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Bem-estar Mental</span>
              <span>•</span>
              <span>5 min de leitura</span>
              <span>•</span>
              <span>15 Nov 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-balance">
              Gestão do Stress: Hidratação como Aliado
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Descobre como a hidratação inteligente pode ajudar a regular os níveis de cortisol e melhorar a tua resposta ao stress diário.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-display font-light mb-4">O Stress e o Corpo</h2>
              <p className="text-muted-foreground leading-relaxed">
                O stress é uma resposta natural do corpo a situações desafiantes. Quando experienciamos stress, o nosso corpo liberta cortisol, a hormona do stress, que em níveis elevados e prolongados pode afetar negativamente a nossa saúde física e mental.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A desidratação crónica, mesmo que ligeira, pode aumentar os níveis de cortisol e intensificar a sensação de stress. Manter uma hidratação adequada é um dos primeiros passos para ajudar o corpo a lidar melhor com situações stressantes.
              </p>
            </section>

            <section className="bg-relax-light p-8 rounded-lg border border-relax/20">
              <h3 className="text-2xl font-display font-light mb-4 text-relax-foreground">Como a Hidratação Ajuda</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Regula a temperatura corporal durante momentos de tensão</li>
                <li>• Melhora a circulação e oxigenação cerebral</li>
                <li>• Suporta a produção de neurotransmissores que regulam o humor</li>
                <li>• Reduz sintomas físicos associados ao stress (dores de cabeça, fadiga)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Ingredientes que Acalmam</h2>
              <p className="text-muted-foreground leading-relaxed">
                A linha <strong>H2Vita Relax</strong> foi formulada especificamente para momentos de tensão. Contém:
              </p>
              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">L-teanina</h3>
                  <p className="text-muted-foreground">
                    Aminoácido naturalmente presente no chá verde, promove relaxamento sem sonolência. Aumenta a produção de GABA, serotonina e dopamina, neurotransmissores que regulam o humor e a ansiedade.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Magnésio</h3>
                  <p className="text-muted-foreground">
                    Mineral essencial que participa em mais de 300 reações bioquímicas. Conhecido como o "mineral anti-stress", ajuda a regular o sistema nervoso e a resposta ao cortisol.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Criar um Ritual Anti-Stress</h2>
              <p className="text-muted-foreground leading-relaxed">
                Transformar a hidratação num ritual consciente pode ser uma ferramenta poderosa de gestão do stress:
              </p>
              <ol className="space-y-3 text-muted-foreground mt-4 list-decimal list-inside">
                <li>Escolhe um momento do dia para pausar (manhã, tarde ou antes de dormir)</li>
                <li>Bebe devagar, focando-te na sensação e no sabor</li>
                <li>Pratica respiração profunda enquanto bebes</li>
                <li>Usa esse momento para desconectar de ecrãs e estímulos externos</li>
              </ol>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-display font-light mb-4">Sinais de Que Precisas de Hidratação Consciente</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dores de cabeça frequentes</li>
                <li>• Dificuldade de concentração</li>
                <li>• Irritabilidade aumentada</li>
                <li>• Fadiga constante</li>
                <li>• Tensão muscular</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Conclusão</h2>
              <p className="text-muted-foreground leading-relaxed">
                A gestão eficaz do stress é multifacetada e requer uma abordagem holística. A hidratação inteligente, combinada com ingredientes funcionais específicos, pode ser uma ferramenta valiosa nessa jornada. Ao criar rituais conscientes de hidratação, não estamos apenas a cuidar do corpo, mas também a cultivar momentos de pausa e autocuidado essenciais para o equilíbrio mental.
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-relax-light border border-relax/20 rounded-lg text-center">
            <h3 className="text-2xl font-display font-light mb-4">Experimenta o Ritual Relax</h3>
            <p className="text-muted-foreground mb-6">
              Descobre como a H2Vita Relax pode fazer parte da tua rotina de gestão do stress.
            </p>
            <Link to="/produtos/relax">
              <Button size="lg" className="bg-relax hover:bg-relax/90 text-relax-foreground">
                Conhecer H2Vita Relax
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
