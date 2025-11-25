import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Leaf, Heart, Shield, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding">
        <div className="container-custom text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl font-light text-balance animate-fade-in">
            Elevar a rotina diária
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            H2Vita nasceu de uma crença simples: a hidratação pode ser mais do que um gesto automático. 
            Pode ser um ritual consciente de bem-estar físico e mental.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-spacing section-padding bg-muted/30">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-light">
                O nosso propósito
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Vivemos numa era de aceleração constante. Stress, multitarefa, burnout. 
                Criámos H2Vita para ajudar as pessoas a recuperarem o controlo – através 
                de momentos simples, mas intencionais, de hidratação funcional.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Cada produto é uma ferramenta para responder às necessidades reais do teu 
                corpo e da tua mente. Não é só uma bebida. É um momento para ti.
              </p>
            </div>

            <div className="border-l-2 border-focus pl-6 py-2">
              <p className="text-xl font-light italic text-foreground/70">
                "A hidratação é o ato mais básico de autocuidado. 
                Torná-la funcional é transformá-la em bem-estar."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing section-padding">
        <div className="container-custom max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-16">
            Os nossos valores
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-focus-light rounded-2xl">
                <Leaf className="h-7 w-7 text-focus" />
              </div>
              <h3 className="font-display text-2xl font-medium">Bem-estar integral</h3>
              <p className="text-foreground/70 leading-relaxed">
                Acreditamos que corpo e mente são inseparáveis. Os nossos produtos 
                foram desenhados para nutrir ambos, porque o equilíbrio verdadeiro 
                só acontece quando os dois estão alinhados.
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-immunity-light rounded-2xl">
                <Shield className="h-7 w-7 text-immunity" />
              </div>
              <h3 className="font-display text-2xl font-medium">Simplicidade intencional</h3>
              <p className="text-foreground/70 leading-relaxed">
                Menos é mais. Escolhemos cada ingrediente com propósito. Sem químicos 
                desnecessários, sem promessas vazias. Apenas o essencial para o teu 
                bem-estar funcionar.
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-relax-light rounded-2xl">
                <Heart className="h-7 w-7 text-relax" />
              </div>
              <h3 className="font-display text-2xl font-medium">Sustentabilidade como padrão</h3>
              <p className="text-foreground/70 leading-relaxed">
                O planeta é a nossa casa partilhada. Usamos apenas embalagens recicláveis, 
                compensamos a nossa pegada de carbono e trabalhamos com parceiros que 
                respeitam os mesmos princípios.
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-glow-light rounded-2xl">
                <Sparkles className="h-7 w-7 text-glow" />
              </div>
              <h3 className="font-display text-2xl font-medium">Transparência total</h3>
              <p className="text-foreground/70 leading-relaxed">
                Sabemos exatamente o que bebes e porquê. Partilhamos todas as doses, 
                origens e estudos. Acreditamos que tens o direito de saber o que 
                entra no teu corpo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ritual */}
      <section className="section-spacing section-padding bg-gradient-to-br from-focus-light via-relax-light to-glow-light">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Mais que uma bebida, um ritual
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            H2Vita não é consumo passivo. É um momento consciente. Uma pausa 
            intencional no ritmo do dia. Seja para ganhar foco antes de uma 
            reunião, desacelerar após o trabalho, ou nutrir o corpo com o que 
            ele precisa – cada garrafa é um convite para cuidares de ti.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Porque a hidratação não é só física. É mental. É emocional. É um 
            gesto de autocuidado que merece atenção.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
