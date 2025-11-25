import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, Music, Headphones, Play, Download } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";
import { ScaleOnHover } from "./animations/ScaleOnHover";

interface PlaylistData {
  name: string;
  description: string;
  duration: string;
  tracks: number;
  color: string;
}

interface MeditationData {
  title: string;
  duration: string;
  type: string;
  description: string;
}

interface ProductDigitalExperienceProps {
  productName: string;
  productColor: string;
  playlist: PlaylistData;
  meditations?: MeditationData[];
}

export function ProductDigitalExperience({ 
  productName, 
  productColor,
  playlist,
  meditations 
}: ProductDigitalExperienceProps) {
  return (
    <section className="section-padding py-24">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* QR Code Interactive Section */}
          <FadeIn>
            <div className="bg-gradient-to-br from-muted/50 to-background rounded-3xl p-8 md:p-12 border border-border/50">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 mb-6">
                    <div className={`w-12 h-12 rounded-full bg-${productColor}-light flex items-center justify-center`}>
                      <QrCode className={`w-6 h-6 text-${productColor}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-light">
                      Experiência Digital Exclusiva
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Cada garrafa H2Vita {productName} inclui um QR code único que desbloqueia 
                    acesso a conteúdos personalizados criados especificamente para o teu ritual.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Music className={`w-5 h-5 text-${productColor} flex-shrink-0 mt-1`} />
                      <div>
                        <h3 className="font-medium mb-1">Playlist Personalizada</h3>
                        <p className="text-sm text-muted-foreground">
                          Música curada para o teu momento {productName.toLowerCase()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Headphones className={`w-5 h-5 text-${productColor} flex-shrink-0 mt-1`} />
                      <div>
                        <h3 className="font-medium mb-1">Conteúdos Exclusivos</h3>
                        <p className="text-sm text-muted-foreground">
                          Artigos, guias e ferramentas de bem-estar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-${productColor}-light via-${productColor}-light/50 to-background p-12 rounded-2xl border border-${productColor}/20 flex items-center justify-center`}>
                  <div className="bg-background p-8 rounded-xl shadow-lg">
                    <QrCode className="w-40 h-40 text-foreground" />
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Digitaliza para começar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Playlist Section */}
          <FadeIn delay={0.1}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <Music className={`w-8 h-8 text-${productColor}`} />
                <h2 className="text-3xl md:text-4xl font-display font-light">
                  A Tua Playlist {productName}
                </h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Música selecionada para complementar perfeitamente o teu ritual de hidratação
              </p>
            </div>

            <ScaleOnHover>
              <Card className={`border-${productColor}/20 bg-${productColor}-light/30 overflow-hidden max-w-2xl mx-auto`}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <Badge variant="secondary" className={`bg-${productColor} text-${productColor}-foreground mb-3`}>
                        {productName}
                      </Badge>
                      <h3 className="text-2xl font-display font-light mb-2">
                        {playlist.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {playlist.description}
                      </p>
                    </div>
                    <Play className={`w-12 h-12 text-${productColor} opacity-60`} />
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <span>{playlist.tracks} músicas</span>
                    <span>•</span>
                    <span>{playlist.duration}</span>
                  </div>

                  <Button 
                    className={`w-full bg-${productColor} hover:bg-${productColor}/90 text-${productColor}-foreground`}
                    size="lg"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Ouvir no Spotify
                  </Button>
                </CardContent>
              </Card>
            </ScaleOnHover>
          </FadeIn>

          {/* Meditations Section (if provided) */}
          {meditations && meditations.length > 0 && (
            <FadeIn delay={0.2}>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Headphones className={`w-8 h-8 text-${productColor}`} />
                  <h2 className="text-3xl md:text-4xl font-display font-light">
                    Meditações Recomendadas
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Sessões guiadas para complementar o teu momento {productName.toLowerCase()}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {meditations.map((meditation, index) => (
                  <ScaleOnHover key={index}>
                    <Card className={`border-${productColor}/10 hover:border-${productColor}/30 transition-all`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-medium mb-2">{meditation.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {meditation.description}
                            </p>
                          </div>
                          <Play className={`w-8 h-8 text-${productColor} flex-shrink-0 ml-4`} />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{meditation.duration}</span>
                            <span>•</span>
                            <Badge variant="secondary" className="text-xs">
                              {meditation.type}
                            </Badge>
                          </div>
                          <Button size="sm" variant="ghost" className={`text-${productColor} hover:text-${productColor}/80`}>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                ))}
              </div>
            </FadeIn>
          )}

        </div>
      </div>
    </section>
  );
}
