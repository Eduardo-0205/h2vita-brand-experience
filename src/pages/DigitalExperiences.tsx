import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QrCode, Music, Headphones, Target, Lock, Smartphone, Play, Download } from "lucide-react";
import { Link } from "react-router-dom";

const playlists = [
  {
    product: "Focus",
    name: "Deep Work Sessions",
    description: "Música instrumental e ambient para máxima concentração",
    duration: "2h 30min",
    color: "focus",
    tracks: 42,
    link: "#"
  },
  {
    product: "Relax",
    name: "Evening Rituals",
    description: "Sons calmantes e frequências para relaxamento profundo",
    duration: "1h 45min",
    color: "relax",
    tracks: 28,
    link: "#"
  },
  {
    product: "Immunity",
    name: "Morning Energy",
    description: "Ritmos energizantes para começar o dia com vitalidade",
    duration: "1h 20min",
    color: "immunity",
    tracks: 35,
    link: "#"
  },
  {
    product: "Glow",
    name: "Self-Care Moments",
    description: "Melodias suaves para rituais de autocuidado",
    duration: "1h 15min",
    color: "glow",
    tracks: 30,
    link: "#"
  }
];

const meditations = [
  {
    title: "Respiração Consciente",
    duration: "5 min",
    type: "Iniciante",
    description: "Técnica de respiração para reduzir ansiedade"
  },
  {
    title: "Body Scan Relaxante",
    duration: "15 min",
    type: "Intermédio",
    description: "Varredura corporal para libertar tensão"
  },
  {
    title: "Visualização de Foco",
    duration: "10 min",
    type: "Iniciante",
    description: "Preparação mental para trabalho profundo"
  },
  {
    title: "Meditação do Sono",
    duration: "20 min",
    type: "Todos os níveis",
    description: "Indução ao sono profundo e reparador"
  }
];

const challenges = [
  {
    title: "21 Dias de Hidratação Consciente",
    participants: "2.4k",
    duration: "3 semanas",
    description: "Cria o hábito de hidratação intencional",
    status: "Ativo"
  },
  {
    title: "Semana da Concentração",
    participants: "1.8k",
    duration: "7 dias",
    description: "Melhora o teu foco com rituais diários",
    status: "Brevemente"
  },
  {
    title: "Reset de Bem-Estar",
    participants: "3.1k",
    duration: "30 dias",
    description: "Transforma os teus hábitos de saúde",
    status: "Ativo"
  }
];

export default function DigitalExperiences() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding section-spacing pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-focus-light text-focus-foreground border-focus/20">
              Experiências Digitais
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6 text-balance">
              Mais do que hidratação: uma experiência completa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Cada garrafa H2Vita desbloqueia acesso a conteúdos exclusivos, playlists personalizadas e ferramentas de bem-estar digital.
            </p>
          </div>
        </div>
      </section>

      {/* QR Code Feature */}
      <section className="section-padding pb-24">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-12 h-12 rounded-full bg-focus-light flex items-center justify-center">
                    <QrCode className="w-6 h-6 text-focus-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-light">
                    QR Codes nas Garrafas
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Cada garrafa H2Vita tem um QR code único que desbloqueia uma experiência digital personalizada. Aponta a câmara do teu telemóvel e mergulha num mundo de conteúdos criados especificamente para o teu momento.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-focus flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Acesso Instantâneo</h3>
                      <p className="text-sm text-muted-foreground">
                        Sem apps para descarregar. Digitaliza e acede imediatamente.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-focus flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Conteúdo Personalizado</h3>
                      <p className="text-sm text-muted-foreground">
                        Cada produto desbloqueia playlists, meditações e artigos específicos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-focus flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Desafios Exclusivos</h3>
                      <p className="text-sm text-muted-foreground">
                        Participa em desafios de bem-estar e acompanha o teu progresso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-focus-light via-relax-light to-glow-light p-12 rounded-2xl border border-border/50 flex items-center justify-center">
                <div className="bg-background p-8 rounded-xl shadow-lg">
                  <QrCode className="w-48 h-48 text-foreground" />
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Exemplo de QR Code H2Vita
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotify Playlists */}
      <section className="section-padding py-24 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Music className="w-8 h-8 text-focus" />
                <h2 className="text-4xl md:text-5xl font-display font-light">
                  Playlists Personalizadas
                </h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Cada produto H2Vita tem a sua própria playlist no Spotify, criada para complementar o teu ritual de hidratação.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {playlists.map((playlist) => (
                <Card key={playlist.name} className={`border-${playlist.color}/20 bg-${playlist.color}-light/30 overflow-hidden group hover:border-${playlist.color}/40 transition-all`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className={`bg-${playlist.color} text-${playlist.color}-foreground mb-2`}>
                          {playlist.product}
                        </Badge>
                        <h3 className="text-xl font-display font-light mb-1">
                          {playlist.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {playlist.description}
                        </p>
                      </div>
                      <Play className="w-10 h-10 text-muted-foreground/40 group-hover:text-foreground transition-colors" />
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                      <span>{playlist.tracks} músicas</span>
                      <span>•</span>
                      <span>{playlist.duration}</span>
                    </div>

                    <Button 
                      className={`w-full bg-${playlist.color} hover:bg-${playlist.color}/90 text-${playlist.color}-foreground`}
                      asChild
                    >
                      <a href={playlist.link} target="_blank" rel="noopener noreferrer">
                        Ouvir no Spotify
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guided Meditations */}
      <section className="section-padding py-24">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Headphones className="w-8 h-8 text-relax" />
                <h2 className="text-4xl md:text-5xl font-display font-light">
                  Meditações Guiadas
                </h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Sessões de meditação criadas por especialistas, disponíveis gratuitamente para todos os utilizadores H2Vita.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {meditations.map((meditation, index) => (
                <Card key={index} className="border-border/50 hover:border-relax/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium mb-2">{meditation.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {meditation.description}
                        </p>
                      </div>
                      <Play className="w-8 h-8 text-relax flex-shrink-0 ml-4" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{meditation.duration}</span>
                        <span>•</span>
                        <Badge variant="secondary" className="text-xs">
                          {meditation.type}
                        </Badge>
                      </div>
                      <Button size="sm" variant="ghost" className="text-relax hover:text-relax/80">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Ver Todas as Meditações (24)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Challenges */}
      <section className="section-padding py-24 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Target className="w-8 h-8 text-immunity" />
                <h2 className="text-4xl md:text-5xl font-display font-light">
                  Desafios de Bem-Estar
                </h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Junta-te à comunidade H2Vita e transforma os teus hábitos através de desafios estruturados.
              </p>
            </div>

            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-display font-light">
                            {challenge.title}
                          </h3>
                          <Badge 
                            variant={challenge.status === "Ativo" ? "default" : "secondary"}
                            className={challenge.status === "Ativo" ? "bg-immunity text-immunity-foreground" : ""}
                          >
                            {challenge.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {challenge.description}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span>{challenge.participants} participantes</span>
                          <span>•</span>
                          <span>{challenge.duration}</span>
                        </div>
                      </div>
                      
                      <Button 
                        size="lg"
                        disabled={challenge.status === "Brevemente"}
                        className="bg-immunity hover:bg-immunity/90 text-immunity-foreground disabled:opacity-50"
                      >
                        {challenge.status === "Ativo" ? "Participar Agora" : "Em Breve"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscriber Exclusive Content */}
      <section className="section-padding py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-glow-light via-focus-light to-relax-light p-12 rounded-2xl border border-border/50 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-lg mb-6">
                <Lock className="w-8 h-8 text-foreground" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
                Conteúdos Exclusivos para Subscritores
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Subscreve um pack mensal e desbloqueia acesso a masterclasses de bem-estar, workshops ao vivo, e biblioteca completa de conteúdos premium.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="bg-background/50 p-6 rounded-lg">
                  <h3 className="font-medium mb-2">Masterclasses Mensais</h3>
                  <p className="text-sm text-muted-foreground">
                    Sessões ao vivo com especialistas em nutrição, psicologia e bem-estar
                  </p>
                </div>
                <div className="bg-background/50 p-6 rounded-lg">
                  <h3 className="font-medium mb-2">Biblioteca Premium</h3>
                  <p className="text-sm text-muted-foreground">
                    Acesso a 100+ horas de conteúdo exclusivo e ferramentas digitais
                  </p>
                </div>
                <div className="bg-background/50 p-6 rounded-lg">
                  <h3 className="font-medium mb-2">Comunidade Privada</h3>
                  <p className="text-sm text-muted-foreground">
                    Grupo exclusivo para partilha, suporte e networking
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/loja">
                    Ver Planos de Subscrição
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Saber Mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-24 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
              Começa a tua jornada digital
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Experimenta uma garrafa H2Vita e descobre todas as experiências digitais que te esperam.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/loja">
                Experimentar H2Vita
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
