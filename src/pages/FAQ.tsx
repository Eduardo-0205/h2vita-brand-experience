import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const faqCategories = [
  {
    title: "Produtos & Ingredientes",
    items: [
      {
        question: "O que são ingredientes funcionais?",
        answer: "Ingredientes funcionais são compostos bioativos que, além de nutrir, proporcionam benefícios específicos para a saúde quando consumidos regularmente. Na H2Vita, usamos L-teanina, magnésio, vitamina C, biotina e outros ingredientes cientificamente validados em dosagens eficazes."
      },
      {
        question: "Os produtos H2Vita contêm alergénios?",
        answer: "Não. Todos os produtos H2Vita são livres dos principais alergénios: sem glúten, sem lactose, sem frutos secos, sem soja. São seguros para pessoas com alergias alimentares comuns. Se tens alguma alergia específica não mencionada, contacta-nos para confirmação."
      },
      {
        question: "Qual a diferença entre Focus, Relax, Immunity e Glow?",
        answer: "Cada produto foi formulado para um objetivo específico: Focus (clareza mental e concentração com cafeína + L-teanina), Relax (desaceleração e calma com magnésio + L-teanina), Immunity (fortalecimento imunitário com vitamina C), e Glow (beleza interior com biotina e colagénio)."
      },
      {
        question: "Posso consumir H2Vita todos os dias?",
        answer: "Sim! Os nossos produtos foram desenvolvidos para consumo diário. As dosagens de todos os ingredientes estão dentro de limites seguros para uso prolongado. Recomendamos 1-2 garrafas por dia, dependendo das tuas necessidades."
      },
      {
        question: "H2Vita é adequado para vegetarianos e veganos?",
        answer: "Sim, todos os produtos H2Vita são 100% vegetarianos e veganos. Não utilizamos ingredientes de origem animal em nenhuma das nossas formulações."
      }
    ]
  },
  {
    title: "Origem & Transparência",
    items: [
      {
        question: "De onde vem a água H2Vita?",
        answer: "A nossa água provém de nascentes naturais protegidas em Portugal. Utilizamos um sistema de filtração natural que preserva os minerais essenciais, sem adição de químicos. 100% água nacional de qualidade premium."
      },
      {
        question: "Onde são produzidos os produtos H2Vita?",
        answer: "Todos os produtos H2Vita são produzidos em Portugal, em instalações certificadas que seguem os mais altos padrões de qualidade e segurança alimentar. Apoiamos a produção local sempre que possível."
      },
      {
        question: "Os ingredientes funcionais são naturais?",
        answer: "A maioria dos nossos ingredientes funcionais são de origem natural (como a L-teanina do chá verde). Alguns, como as vitaminas, são sintetizados em laboratório para garantir pureza e dosagem precisa, mas são bioidênticos aos encontrados na natureza."
      },
      {
        question: "Como garantem a qualidade dos ingredientes?",
        answer: "Trabalhamos apenas com fornecedores certificados, todos os ingredientes são testados por laboratórios independentes para pureza e potência, e seguimos protocolos rigorosos de controlo de qualidade em todas as fases de produção."
      }
    ]
  },
  {
    title: "Envios & Entregas",
    items: [
      {
        question: "Quanto custa o envio?",
        answer: "Envios gratuitos para Portugal Continental em compras superiores a 30€. Para compras inferiores, o custo de envio é de 4,90€. Ilhas e internacional têm custos adicionais calculados no checkout."
      },
      {
        question: "Quanto tempo demora a entrega?",
        answer: "Em Portugal Continental, a entrega demora 2-3 dias úteis. Para Açores e Madeira, 5-7 dias úteis. Encomendas feitas até às 14h são processadas no mesmo dia."
      },
      {
        question: "Fazem envios internacionais?",
        answer: "Sim! Enviamos para toda a União Europeia. Os custos e prazos variam consoante o destino. Podes verificar a disponibilidade e custos no checkout."
      },
      {
        question: "Como posso acompanhar a minha encomenda?",
        answer: "Assim que a tua encomenda for enviada, receberás um email com o código de tracking. Podes acompanhar o estado da entrega em tempo real através do link fornecido."
      },
      {
        question: "E se não estiver em casa no momento da entrega?",
        answer: "A transportadora tentará entrega 2-3 vezes. Se não for possível, a encomenda fica disponível para levantamento num ponto de recolha próximo. Receberás notificação com todas as instruções."
      }
    ]
  },
  {
    title: "Devoluções & Trocas",
    items: [
      {
        question: "Qual é a política de devolução?",
        answer: "Tens 30 dias para devolver produtos não abertos, desde que estejam nas condições originais. Produtos abertos só podem ser devolvidos se houver defeito de fabrico. O reembolso é processado em 5-7 dias úteis após recebermos a devolução."
      },
      {
        question: "Como faço para devolver um produto?",
        answer: "Contacta-nos através do email ou formulário de contacto para solicitar uma devolução. Enviaremos instruções e, se elegível, uma etiqueta de envio gratuita. Embala bem o produto e envia para o endereço indicado."
      },
      {
        question: "Posso trocar por outro produto?",
        answer: "Sim! Se preferires trocar em vez de devolver, indica-nos qual o produto desejado e trataremos da troca sem custos adicionais (desde que o valor seja igual ou superior)."
      },
      {
        question: "E se o produto chegar danificado?",
        answer: "Se receberes um produto danificado, contacta-nos imediatamente com fotos do dano. Enviaremos uma substituição gratuita ou processaremos o reembolso total, incluindo custos de envio."
      }
    ]
  },
  {
    title: "Subscrições",
    items: [
      {
        question: "Como funcionam as subscrições?",
        answer: "Escolhe os produtos que queres receber regularmente, define a frequência (semanal, quinzenal ou mensal) e receberás automaticamente as tuas garrafas H2Vita. Podes pausar, saltar entregas ou cancelar a qualquer momento, sem compromisso."
      },
      {
        question: "Qual é o desconto para subscritores?",
        answer: "Subscritores recebem 15% de desconto em todas as entregas, acesso antecipado a novos produtos, conteúdos exclusivos (masterclasses, workshops) e envio gratuito em todas as encomendas."
      },
      {
        question: "Posso alterar os produtos da minha subscrição?",
        answer: "Sim! Podes alterar produtos, quantidades e frequência a qualquer momento através da tua conta. As alterações entram em vigor na próxima entrega."
      },
      {
        question: "Como cancelo a subscrição?",
        answer: "Sem complicações! Podes cancelar a qualquer momento através da tua conta ou contactando-nos. Não há taxas de cancelamento nem período mínimo de compromisso."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding section-spacing pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-focus-light text-focus-foreground border-focus/20">
              Perguntas Frequentes
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6 text-balance">
              Temos as respostas que procuras
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Encontra informação sobre os nossos produtos, ingredientes, envios, devoluções e muito mais. Transparência total sobre tudo o que fazemos.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-display font-light mb-6 text-center md:text-left">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem 
                      key={itemIndex} 
                      value={`${categoryIndex}-${itemIndex}`}
                      className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-muted/30"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="font-medium pr-4">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section-padding py-24 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-focus-light mb-6">
              <MessageCircle className="w-8 h-8 text-focus-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
              Ainda tens dúvidas?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A nossa equipa está disponível para te ajudar. Entra em contacto connosco e responderemos rapidamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contacto">
                  Falar Connosco
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:contacto@h2vita.pt">
                  Enviar Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-light mb-6 text-center">
              Links Úteis
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link 
                to="/blog/ingredientes-funcionais"
                className="p-4 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors text-center"
              >
                <h4 className="font-medium mb-1">Guia de Ingredientes</h4>
                <p className="text-sm text-muted-foreground">
                  Aprende sobre cada ingrediente funcional
                </p>
              </Link>
              <Link 
                to="/sustentabilidade"
                className="p-4 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors text-center"
              >
                <h4 className="font-medium mb-1">Sustentabilidade</h4>
                <p className="text-sm text-muted-foreground">
                  O nosso compromisso com o planeta
                </p>
              </Link>
              <Link 
                to="/sobre"
                className="p-4 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors text-center"
              >
                <h4 className="font-medium mb-1">Sobre a H2Vita</h4>
                <p className="text-sm text-muted-foreground">
                  A nossa história e valores
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
