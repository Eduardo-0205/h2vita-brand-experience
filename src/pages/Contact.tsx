import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "O nome deve ter menos de 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "O email deve ter menos de 255 caracteres" }),
  phone: z.string()
    .trim()
    .min(9, { message: "Telefone inválido" })
    .max(20, { message: "Telefone deve ter menos de 20 caracteres" })
    .optional()
    .or(z.literal("")),
  subject: z.string()
    .trim()
    .min(3, { message: "O assunto deve ter pelo menos 3 caracteres" })
    .max(200, { message: "O assunto deve ter menos de 200 caracteres" }),
  message: z.string()
    .trim()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "A mensagem deve ter menos de 1000 caracteres" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const locations = [
  {
    name: "Sede - Lisboa",
    address: "Av. da Liberdade, 123",
    city: "1250-140 Lisboa",
    phone: "+351 21 123 4567",
    email: "lisboa@h2vita.pt"
  },
  {
    name: "Loja - Porto",
    address: "Rua de Santa Catarina, 456",
    city: "4000-442 Porto",
    phone: "+351 22 987 6543",
    email: "porto@h2vita.pt"
  }
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log("Form submitted:", validatedData);

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contacto em breve.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          title: "Erro no formulário",
          description: "Por favor, corrige os erros indicados.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding section-spacing pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-focus-light text-focus-foreground border-focus/20">
              Contacto
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6 text-balance">
              Estamos aqui para ti
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Tens dúvidas sobre os nossos produtos ou precisas de ajuda? Entra em contacto connosco através do formulário ou visita uma das nossas lojas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding pb-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-border/50 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-12 h-12 rounded-full bg-focus-light flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-focus-foreground" />
                </div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Resposta em 24h
                </p>
                <a href="mailto:contacto@h2vita.pt" className="text-sm text-focus hover:underline">
                  contacto@h2vita.pt
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-12 h-12 rounded-full bg-focus-light flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-focus-foreground" />
                </div>
                <h3 className="font-medium mb-2">Telefone</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Seg-Sex: 9h-18h
                </p>
                <a href="tel:+351211234567" className="text-sm text-focus hover:underline">
                  +351 21 123 4567
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-12 h-12 rounded-full bg-focus-light flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-focus-foreground" />
                </div>
                <h3 className="font-medium mb-2">Chat ao Vivo</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Disponível agora
                </p>
                <Button variant="link" className="text-sm text-focus p-0 h-auto">
                  Iniciar conversa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Locations */}
      <section className="section-padding py-24 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-display font-light mb-2">
                  Envia-nos uma mensagem
                </h2>
                <p className="text-muted-foreground mb-8">
                  Preenche o formulário e responderemos o mais breve possível.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="O teu nome"
                      className={errors.name ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="o.teu@email.pt"
                      className={errors.email ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone (opcional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+351 912 345 678"
                      className={errors.phone ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="Como podemos ajudar?"
                      className={errors.subject ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Escreve aqui a tua mensagem..."
                      rows={6}
                      className={errors.message ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </div>

              {/* Locations */}
              <div>
                <h2 className="text-3xl font-display font-light mb-2">
                  As nossas lojas
                </h2>
                <p className="text-muted-foreground mb-8">
                  Visita-nos e descobre os nossos produtos presencialmente.
                </p>

                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <Card key={index} className="border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-focus-light flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-focus-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium mb-2">{location.name}</h3>
                            <p className="text-sm text-muted-foreground mb-1">
                              {location.address}
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                              {location.city}
                            </p>
                            <div className="space-y-1">
                              <a 
                                href={`tel:${location.phone.replace(/\s/g, '')}`}
                                className="flex items-center gap-2 text-sm text-focus hover:underline"
                              >
                                <Phone className="w-4 h-4" />
                                {location.phone}
                              </a>
                              <a 
                                href={`mailto:${location.email}`}
                                className="flex items-center gap-2 text-sm text-focus hover:underline"
                              >
                                <Mail className="w-4 h-4" />
                                {location.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Opening Hours */}
                <Card className="border-border/50 mt-6">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-focus-light flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-focus-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-3">Horário de Funcionamento</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex justify-between gap-8">
                            <span>Segunda a Sexta</span>
                            <span className="font-medium text-foreground">9:00 - 19:00</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span>Sábado</span>
                            <span className="font-medium text-foreground">10:00 - 18:00</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span>Domingo</span>
                            <span className="font-medium text-foreground">Fechado</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
