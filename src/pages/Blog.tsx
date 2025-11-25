import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: "gestao-stress",
    title: "Gestão do Stress: Hidratação como Aliado",
    description: "Descobre como a hidratação inteligente pode ajudar a regular os níveis de cortisol e melhorar a tua resposta ao stress diário.",
    category: "Bem-estar Mental",
    readTime: "5 min",
    date: "15 Nov 2024",
    link: "/blog/gestao-stress",
    color: "relax"
  },
  {
    id: "concentracao",
    title: "Concentração e Foco: A Ciência por Trás",
    description: "Entende como ingredientes funcionais específicos podem melhorar a clareza mental e prolongar períodos de foco profundo.",
    category: "Performance Mental",
    readTime: "6 min",
    date: "10 Nov 2024",
    link: "/blog/concentracao",
    color: "focus"
  },
  {
    id: "burnout",
    title: "Prevenir o Burnout: Rituais de Equilíbrio",
    description: "Aprende a identificar sinais de esgotamento e como integrar rituais de hidratação consciente na tua rotina para prevenir burnout.",
    category: "Bem-estar Mental",
    readTime: "7 min",
    date: "5 Nov 2024",
    link: "/blog/burnout",
    color: "immunity"
  },
  {
    id: "ingredientes-funcionais",
    title: "Ingredientes Funcionais: O Que São e Como Funcionam",
    description: "Um guia completo sobre os ingredientes funcionais da H2Vita: L-teanina, magnésio, vitamina C, biotina e os seus benefícios científicos.",
    category: "Nutrição",
    readTime: "8 min",
    date: "1 Nov 2024",
    link: "/blog/ingredientes-funcionais",
    color: "glow"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding section-spacing pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-muted text-muted-foreground border-0">
              Nutrição para a Mente
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6 text-balance">
              Conhecimento para <br />o teu bem-estar
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Explora artigos sobre nutrição funcional, gestão de stress, performance mental e os ingredientes que fazem a diferença no teu equilíbrio diário.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Link 
                key={post.id} 
                to={post.link}
                className="group"
              >
                <Card className="h-full border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className={`h-2 bg-${post.color}`} />
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="font-normal">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-display font-light group-hover:text-primary/80 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Ler artigo →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
