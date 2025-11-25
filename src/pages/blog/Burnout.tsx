import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Burnout() {
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
              <span>Bem-estar Mental</span>
              <span>•</span>
              <span>7 min de leitura</span>
              <span>•</span>
              <span>5 Nov 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-balance">
              Prevenir o Burnout: Rituais de Equilíbrio
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Aprende a identificar sinais de esgotamento e como integrar rituais de hidratação consciente na tua rotina para prevenir burnout.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-display font-light mb-4">O Que É Realmente o Burnout?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Burnout não é simplesmente estar cansado. É um estado de exaustão física, emocional e mental causado por stress prolongado e não gerido. A OMS reconhece o burnout como um fenómeno ocupacional caracterizado por três dimensões:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>• Sentimentos de esgotamento de energia</li>
                <li>• Aumento do distanciamento mental do trabalho</li>
                <li>• Redução da eficácia profissional</li>
              </ul>
            </section>

            <section className="bg-immunity-light p-8 rounded-lg border border-immunity/20">
              <h3 className="text-2xl font-display font-light mb-4 text-immunity-foreground">Sinais de Alerta Precoce</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Físicos</h4>
                  <p>Fadiga crónica, insónia, dores de cabeça frequentes, tensão muscular, alterações no apetite, imunidade reduzida.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Emocionais</h4>
                  <p>Irritabilidade, ansiedade constante, sensação de desligamento, perda de motivação, cinismo crescente.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Cognitivos</h4>
                  <p>Dificuldade de concentração, procrastinação, esquecimentos frequentes, dificuldade em tomar decisões.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">O Papel da Desidratação no Burnout</h2>
              <p className="text-muted-foreground leading-relaxed">
                Quando estamos sob stress crónico, tendemos a negligenciar necessidades básicas como hidratação. Ironicamente, a desidratação amplifica muitos sintomas de burnout:
              </p>
              <ul className="space-y-3 text-muted-foreground mt-4">
                <li>• Aumenta a fadiga e reduz a energia</li>
                <li>• Prejudica a função cognitiva e tomada de decisões</li>
                <li>• Intensifica a ansiedade e irritabilidade</li>
                <li>• Enfraquece a resposta imunitária</li>
                <li>• Reduz a capacidade de regular emoções</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Construir Rituais Anti-Burnout</h2>
              <p className="text-muted-foreground leading-relaxed">
                A prevenção do burnout não acontece com uma solução única, mas através de pequenos rituais diários que reconstroem a resiliência:
              </p>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">1. Ritual Matinal de Intenção</h3>
                  <p className="text-muted-foreground">
                    Começa o dia com <strong>H2Vita Immunity</strong> ao acordar. Enquanto bebes, define uma intenção para o dia – não uma lista de tarefas, mas como queres sentir-te. Este momento cria uma separação consciente entre sono e ação.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">2. Pausas de Micro-Recuperação</h3>
                  <p className="text-muted-foreground">
                    A cada 90 minutos de trabalho, faz uma pausa de 5 minutos. Usa este tempo para hidratação consciente com <strong>H2Vita Relax</strong>. Não verifiques o telemóvel – respira, bebe devagar, observa o ambiente.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">3. Transição Trabalho-Casa</h3>
                  <p className="text-muted-foreground">
                    Cria um ritual de transição. Pode ser uma caminhada curta, exercícios de respiração, ou simplesmente sentar e beber <strong>H2Vita</strong> sem distrações durante 10 minutos. Este ritual sinaliza ao cérebro que o modo "trabalho" terminou.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">4. Ritual Noturno de Desconexão</h3>
                  <p className="text-muted-foreground">
                    Uma hora antes de dormir, desliga todos os ecrãs. Prepara <strong>H2Vita Relax</strong> e usa este tempo para journaling, leitura leve ou meditação. O magnésio ajuda na preparação para um sono reparador.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-display font-light mb-4">Nutrientes Essenciais para Resiliência</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Vitamina C (Immunity)</h4>
                  <p>Suporta a função adrenal e reduz o cortisol. Essencial para o sistema imunitário frequentemente comprometido no burnout.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Magnésio (Relax)</h4>
                  <p>Regula o sistema nervoso, melhora o sono e reduz a ansiedade. Níveis baixos estão associados a maior vulnerabilidade ao stress.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">L-teanina (Relax & Focus)</h4>
                  <p>Promove relaxamento sem sedação. Aumenta ondas alfa no cérebro, associadas a estados de calma focada.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">O Poder dos Limites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prevenir burnout exige mais do que rituais de autocuidado – requer estabelecer limites claros:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>• Define horários fixos para começar e terminar o trabalho</li>
                <li>• Aprende a dizer não a compromissos não essenciais</li>
                <li>• Reserva tempo não negociável para recuperação</li>
                <li>• Comunica as tuas necessidades claramente</li>
                <li>• Desliga notificações fora do horário de trabalho</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Quando Procurar Ajuda</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se experiencias sintomas persistentes de burnout mesmo após implementar mudanças no estilo de vida, é importante procurar apoio profissional. Terapia, coaching ou consultas com profissionais de saúde mental podem ser essenciais para recuperação completa.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-light mb-4">Conclusão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prevenir o burnout é um ato de coragem e autoconsciência. Num mundo que glorifica a produtividade constante, escolher pausar, hidratar conscientemente e estabelecer limites é radical. Os rituais que constróis hoje são os alicerces da tua resiliência futura. Lembra-te: cuidar de ti não é egoísmo, é sustentabilidade.
              </p>
            </section>
          </div>

          <div className="mt-16 p-8 bg-immunity-light border border-immunity/20 rounded-lg text-center">
            <h3 className="text-2xl font-display font-light mb-4">Constrói a Tua Resiliência</h3>
            <p className="text-muted-foreground mb-6">
              Explora a linha H2Vita e encontra os rituais certos para prevenir o burnout.
            </p>
            <Link to="/loja">
              <Button size="lg" className="bg-immunity hover:bg-immunity/90 text-immunity-foreground">
                Explorar Produtos
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
