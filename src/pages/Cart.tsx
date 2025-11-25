import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

const Cart = () => {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-24 pb-16">
          <div className="container-custom section-padding">
            <div className="max-w-2xl mx-auto text-center py-20">
              <ShoppingBag className="h-20 w-20 mx-auto mb-6 text-foreground/20" />
              <h1 className="font-display text-3xl font-medium mb-4">
                O teu carrinho está vazio
              </h1>
              <p className="text-foreground/70 mb-8">
                Adiciona produtos ao teu ritual para começar
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                <Link to="/loja">Explorar Produtos</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom section-padding">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-2">
              O Teu Carrinho
            </h1>
            <p className="text-foreground/70 mb-12">
              {itemCount} {itemCount === 1 ? "item" : "items"} no teu ritual
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="p-6">
                    <div className="flex gap-6">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="font-display text-xl font-medium">
                              {item.name}
                            </h3>
                            <p className="text-sm text-foreground/60">
                              {item.type === "pack" ? "Pack temático" : "Produto individual"}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-foreground/60 hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <span className="text-xl font-medium">
                            €{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h2 className="font-display text-2xl font-medium mb-6">
                    Resumo do Pedido
                  </h2>
                  
                  <div className="space-y-3 mb-6">
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
                    asChild
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full mb-4"
                  >
                    <Link to="/checkout">Finalizar Compra</Link>
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    className="w-full"
                  >
                    <Link to="/loja">Continuar a Comprar</Link>
                  </Button>

                  <div className="mt-6 pt-6 border-t space-y-2 text-sm text-foreground/60">
                    <p>✓ Envio grátis em todas as encomendas</p>
                    <p>✓ Pagamento seguro</p>
                    <p>✓ Garantia de satisfação</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
