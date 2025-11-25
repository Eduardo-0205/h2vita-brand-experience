import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/hooks/use-cart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { CreditCard, Lock } from "lucide-react";

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate checkout process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Pedido confirmado!",
      description: "Receberás um email com os detalhes do teu pedido.",
    });

    clearCart();
    setLoading(false);
    navigate("/");
  };

  if (items.length === 0) {
    navigate("/carrinho");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom section-padding">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-2">
              Finalizar Compra
            </h1>
            <p className="text-foreground/70 mb-12">
              Completa os teus dados para receberes o teu ritual
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Contact Information */}
                  <Card className="p-6">
                    <h2 className="font-display text-2xl font-medium mb-6">
                      Informação de Contacto
                    </h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">Nome</Label>
                          <Input id="firstName" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Apelido</Label>
                          <Input id="lastName" required className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" type="tel" required className="mt-1" />
                      </div>
                    </div>
                  </Card>

                  {/* Shipping Address */}
                  <Card className="p-6">
                    <h2 className="font-display text-2xl font-medium mb-6">
                      Morada de Envio
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Morada</Label>
                        <Input id="address" required className="mt-1" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">Cidade</Label>
                          <Input id="city" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="postalCode">Código Postal</Label>
                          <Input id="postalCode" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="country">País</Label>
                          <Input id="country" defaultValue="Portugal" required className="mt-1" />
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Payment Method */}
                  <Card className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <CreditCard className="h-5 w-5" />
                      <h2 className="font-display text-2xl font-medium">
                        Método de Pagamento
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Número do Cartão</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required className="mt-1" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Validade</Label>
                          <Input id="expiry" placeholder="MM/AA" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required className="mt-1" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/60 mt-4">
                        <Lock className="h-4 w-4" />
                        <span>Pagamento 100% seguro e encriptado</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="p-6 sticky top-24">
                    <h2 className="font-display text-2xl font-medium mb-6">
                      Resumo do Pedido
                    </h2>
                    
                    <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-foreground/70">
                            {item.quantity}x {item.name}
                          </span>
                          <span className="font-medium">
                            €{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 mb-6 pt-3 border-t">
                      <div className="flex justify-between text-foreground/70">
                        <span>Subtotal</span>
                        <span>€{total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-foreground/70">
                        <span>Envio</span>
                        <span className="text-primary font-medium">Grátis</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between text-xl font-medium">
                        <span>Total</span>
                        <span>€{total.toFixed(2)}</span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                    >
                      {loading ? "A processar..." : "Confirmar Pedido"}
                    </Button>

                    <p className="text-xs text-center text-foreground/60 mt-4">
                      Ao confirmar, aceitas os nossos termos e condições
                    </p>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
