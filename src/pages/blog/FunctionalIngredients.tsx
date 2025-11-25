import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function FunctionalIngredients() {
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
              <span>Nutrição</span>
              <span>•</span>
              <span>8 min de leitura</span>
              <span>•</span>
              <span>1 Nov 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-balance">
              Ingredientes Funcionais: O Que São e Como Funcionam
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Um guia completo sobre os ingredientes funcionais da H2Vita: L-teanina, magnésio, vitamina C, biotina e os seus benefícios científicos.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-display font-light mb-4">O Que São Ingredientes Funcionais?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ingredientes funcionais são compostos bioativos que, além de nutrir o corpo, proporcionam benefícios específicos para a saúde quando consumidos regularmente. Ao contrário de nutrientes básicos que apenas previnem deficiências, os ingredientes funcionais melhoram ativamente funções fisiológicas e psicológicas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Na H2Vita, selecionamos cada ingrediente com base em evidência científica robusta, dosagens eficazes e perfis de segurança comprovados. Transparência total sobre o que colocas no teu corpo.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Os Ingredientes H2Vita</h2>
              
              <div className="space-y-10 mt-8">
                {/* L-teanina */}
                <div className="bg-focus-light p-8 rounded-lg border border-focus/20">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-display font-light text-focus-foreground">L-teanina</h3>
                    <span className="text-sm bg-focus text-focus-foreground px-3 py-1 rounded-full">
                      Focus & Relax
                    </span>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">O que é?</h4>
                      <p>Aminoácido não proteico encontrado naturalmente no chá verde (Camellia sinensis). Conhecido por promover relaxamento sem causar sonolência.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Como funciona?</h4>
                      <p>Atravessa a barreira hemato-encefálica e modula neurotransmissores-chave: aumenta GABA (calma), serotonina (bem-estar) e dopamina (motivação). Também promove ondas alfa cerebrais, associadas a estados de relaxamento alerta.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Benefícios científicos</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Reduz ansiedade sem sedação</li>
                        <li>• Melhora qualidade de sono</li>
                        <li>• Potencia foco quando combinada com cafeína</li>
                        <li>• Suporta função cognitiva sob stress</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Dosagem H2Vita</h4>
                      <p>100-200mg por dose, dentro do intervalo clinicamente eficaz (50-250mg).</p>
                    </div>
                  </div>
                </div>

                {/* Magnésio */}
                <div className="bg-relax-light p-8 rounded-lg border border-relax/20">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-display font-light text-relax-foreground">Magnésio</h3>
                    <span className="text-sm bg-relax text-relax-foreground px-3 py-1 rounded-full">
                      Relax
                    </span>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">O que é?</h4>
                      <p>Mineral essencial envolvido em mais de 300 reações enzimáticas no corpo. Crucial para função muscular, nervosa e produção de energia.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Como funciona?</h4>
                      <p>Regula neurotransmissores que enviam sinais pelo sistema nervoso. Bloqueia canais de cálcio que, em excesso, podem causar hiperexcitabilidade neuronal. Liga-se a receptores GABA, promovendo relaxamento.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Benefícios científicos</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Reduz sintomas de ansiedade e stress</li>
                        <li>• Melhora qualidade e duração do sono</li>
                        <li>• Alivia tensão muscular</li>
                        <li>• Suporta ritmo cardíaco saudável</li>
                        <li>• Previne cefaleias de tensão</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Forma utilizada</h4>
                      <p>Magnésio bisglicinato – forma quelada de alta biodisponibilidade, melhor tolerada gastrointestinalmente.</p>
                    </div>
                  </div>
                </div>

                {/* Vitamina C */}
                <div className="bg-immunity-light p-8 rounded-lg border border-immunity/20">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-display font-light text-immunity-foreground">Vitamina C</h3>
                    <span className="text-sm bg-immunity text-immunity-foreground px-3 py-1 rounded-full">
                      Immunity
                    </span>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">O que é?</h4>
                      <p>Vitamina hidrossolúvel essencial, poderoso antioxidante. O corpo não a produz nem armazena, por isso precisa de ingestão diária.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Como funciona?</h4>
                      <p>Neutraliza radicais livres, protegendo células do stress oxidativo. Essencial para síntese de colagénio. Suporta função imunitária estimulando produção e atividade de linfócitos e fagócitos.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Benefícios científicos</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Fortalece sistema imunitário</li>
                        <li>• Reduz duração e severidade de constipações</li>
                        <li>• Suporta produção de colagénio (pele, articulações)</li>
                        <li>• Melhora absorção de ferro</li>
                        <li>• Protege contra dano celular oxidativo</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Dosagem H2Vita</h4>
                      <p>500mg por dose – acima da RDA mas dentro de limites seguros, ótimo para suporte imunitário proativo.</p>
                    </div>
                  </div>
                </div>

                {/* Biotina */}
                <div className="bg-glow-light p-8 rounded-lg border border-glow/20">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-display font-light text-glow-foreground">Biotina (Vitamina B7)</h3>
                    <span className="text-sm bg-glow text-glow-foreground px-3 py-1 rounded-full">
                      Glow
                    </span>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">O que é?</h4>
                      <p>Vitamina B solúvel em água, essencial para metabolismo de macronutrientes. Cofator para enzimas envolvidas na síntese de ácidos gordos e aminoácidos.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Como funciona?</h4>
                      <p>Participa na produção de queratina, proteína estrutural chave para cabelo, pele e unhas. Suporta metabolismo energético celular e renovação de tecidos.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Benefícios científicos</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Fortalece cabelo e reduz queda</li>
                        <li>• Melhora estrutura e crescimento das unhas</li>
                        <li>• Suporta saúde da pele e regeneração celular</li>
                        <li>• Auxilia metabolismo de carboidratos e gorduras</li>
                        <li>• Suporta função nervosa</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Dosagem H2Vita</h4>
                      <p>2500mcg (2.5mg) – dosagem terapêutica demonstrada em estudos para melhorar saúde capilar e unhas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-display font-light mb-4">Sinergias Inteligentes</h3>
              <p className="text-muted-foreground mb-4">
                A eficácia dos ingredientes funcionais muitas vezes aumenta quando combinados estrategicamente:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Cafeína + L-teanina (Focus):</strong> A L-teanina suaviza os efeitos da cafeína, eliminando jitters enquanto potencia clareza mental.
                </li>
                <li>
                  <strong className="text-foreground">Magnésio + L-teanina (Relax):</strong> Ambos modulam GABA, criando efeito sinérgico de relaxamento profundo.
                </li>
                <li>
                  <strong className="text-foreground">Vitamina C + Hidratação (Immunity):</strong> A absorção e eficácia da vitamina C melhoram com hidratação adequada.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Segurança e Qualidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos os ingredientes H2Vita são:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>• Provenientes de fornecedores certificados</li>
                <li>• Testados por terceiros para pureza e potência</li>
                <li>• Dosados dentro de intervalos clinicamente eficazes e seguros</li>
                <li>• Livres de enchimentos artificiais e aditivos desnecessários</li>
                <li>• Adequados para consumo diário prolongado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Conclusão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ingredientes funcionais representam a evolução da nutrição – de meramente prevenir deficiências para otimizar ativamente a saúde e performance. Ao escolher H2Vita, não estás apenas a hidratar, estás a fornecer ao teu corpo compostos cientificamente validados que suportam bem-estar físico e mental. Transparência, eficácia e segurança não são negociáveis – são a nossa promessa.
              </p>
            </section>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-focus-light via-relax-light to-glow-light rounded-lg text-center border border-border/50">
            <h3 className="text-2xl font-display font-light mb-4">Explora a Linha Completa</h3>
            <p className="text-muted-foreground mb-6">
              Encontra a combinação perfeita de ingredientes funcionais para os teus objetivos.
            </p>
            <Link to="/loja">
              <Button size="lg">
                Ver Todos os Produtos
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
