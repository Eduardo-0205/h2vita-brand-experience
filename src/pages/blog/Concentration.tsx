import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Concentration() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="section-padding pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao blog
            </Button>
          </Link>

          <div className="mb-12 space-y-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Performance Mental</span>
              <span>•</span>
              <span>6 min de leitura</span>
              <span>•</span>
              <span>10 Nov 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-balance">
              Concentração e Foco: A Ciência por Trás
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Entende como ingredientes funcionais específicos podem melhorar a clareza mental e prolongar períodos de foco profundo.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-display font-light mb-4">O Desafio da Concentração Moderna</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vivemos numa era de distrações constantes. Notificações, multitasking e sobrecarga de informação tornaram o foco profundo um recurso cada vez mais raro e valioso. A neurociência mostra que a nossa capacidade de concentração é como um músculo – pode ser treinada e nutrida.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A hidratação adequada é fundamental para a performance cognitiva. Estudos demonstram que uma desidratação de apenas 2% pode prejudicar significativamente a atenção, memória de trabalho e função executiva.
              </p>
            </section>

            <section className="bg-focus-light p-8 rounded-lg border border-focus/20">
              <h3 className="text-2xl font-display font-light mb-4 text-focus-foreground">Benefícios da Hidratação para o Cérebro</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Melhora a transmissão de sinais entre neurónios</li>
                <li>• Aumenta o fluxo sanguíneo cerebral</li>
                <li>• Otimiza a produção de neurotransmissores</li>
                <li>• Reduz a fadiga mental e aumenta a vigilância</li>
                <li>• Suporta a neuroplasticidade e formação de memórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Ingredientes para Clareza Mental</h2>
              <p className="text-muted-foreground leading-relaxed">
                A linha <strong>H2Vita Focus</strong> combina hidratação com compostos nootrópicos naturais:
              </p>
              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Cafeína Natural</h3>
                  <p className="text-muted-foreground">
                    Proveniente de fontes naturais, bloqueia receptores de adenosina, aumentando a atenção e reduzindo a sensação de fadiga. A dosagem controlada proporciona energia sem jitters.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">L-teanina</h3>
                  <p className="text-muted-foreground">
                    Quando combinada com cafeína, a L-teanina cria um estado de "alerta calmo". Reduz os efeitos secundários da cafeína (ansiedade, tremores) enquanto potencia os benefícios cognitivos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Vitaminas do Complexo B</h3>
                  <p className="text-muted-foreground">
                    Essenciais para a produção de energia celular e síntese de neurotransmissores. As vitaminas B6, B9 e B12 são particularmente importantes para a função cognitiva e memória.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">O Poder do Estado de Flow</h2>
              <p className="text-muted-foreground leading-relaxed">
                O estado de flow – aquela sensação de estar completamente imerso numa tarefa – não acontece por acaso. Requer condições específicas:
              </p>
              <ul className="space-y-3 text-muted-foreground mt-4">
                <li>• Hidratação adequada para função cerebral ótima</li>
                <li>• Níveis equilibrados de neurotransmissores (dopamina, norepinefrina)</li>
                <li>• Ambiente com distrações mínimas</li>
                <li>• Desafio adequado ao nível de competência</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-display font-light mb-4">Protocolo para Sessões de Foco</h3>
              <ol className="space-y-4 text-muted-foreground list-decimal list-inside">
                <li><strong>30 min antes:</strong> Bebe H2Vita Focus para preparação cognitiva</li>
                <li><strong>Define o objetivo:</strong> Uma tarefa específica e mensurável</li>
                <li><strong>Elimina distrações:</strong> Modo avião, ambiente silencioso</li>
                <li><strong>Trabalha em blocos:</strong> 50 min de foco, 10 min de pausa</li>
                <li><strong>Hidrata nas pausas:</strong> Mantém níveis ótimos durante todo o período</li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Sinais de Que Precisas de Suporte Cognitivo</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dificuldade em manter atenção em tarefas complexas</li>
                <li>• Fadiga mental frequente, mesmo após descanso</li>
                <li>• Procrastinação aumentada</li>
                <li>• Sensação de "névoa mental"</li>
                <li>• Dificuldade em reter informação nova</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Conclusão</h2>
              <p className="text-muted-foreground leading-relaxed">
                A concentração profunda é uma competência que pode ser cultivada através da combinação certa de nutrição, hidratação e práticas deliberadas. Os ingredientes funcionais na H2Vita Focus foram selecionados com base em evidência científica para suportar a tua performance cognitiva, sem os compromissos dos estimulantes convencionais. Ao integrar hidratação inteligente nos teus rituais de trabalho, estás a investir no teu recurso mais valioso: a tua mente.
              </p>
            </section>
          </div>

          <div className="mt-16 p-8 bg-focus-light border border-focus/20 rounded-lg text-center">
            <h3 className="text-2xl font-display font-light mb-4">Potencia o Teu Foco</h3>
            <p className="text-muted-foreground mb-6">
              Descobre como a H2Vita Focus pode fazer parte da tua rotina de alta performance.
            </p>
            <Link to="/produtos/focus">
              <Button size="lg" className="bg-focus hover:bg-focus/90 text-focus-foreground">
                Conhecer H2Vita Focus
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
