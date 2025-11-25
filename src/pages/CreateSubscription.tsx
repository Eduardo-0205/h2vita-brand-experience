import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleOnHover } from "@/components/animations/ScaleOnHover";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/use-auth";
import { useSubscription } from "@/hooks/use-subscription";
import { Package, Calendar, Check } from "lucide-react";
import focusImage from "@/assets/focus-product.jpg";
import relaxImage from "@/assets/relax-product.jpg";
import immunityImage from "@/assets/immunity-product.jpg";
import glowImage from "@/assets/glow-product.jpg";

const products = [
  { id: "focus", name: "FOCUS", price: 2.99, image: focusImage },
  { id: "relax", name: "RELAX", price: 2.99, image: relaxImage },
  { id: "immunity", name: "IMMUNITY", price: 2.99, image: immunityImage },
  { id: "glow", name: "GLOW", price: 2.99, image: glowImage },
];

const frequencyOptions = [
  { value: "weekly", label: "Semanal", description: "Entrega todas as semanas" },
  { value: "biweekly", label: "Quinzenal", description: "Entrega de 15 em 15 dias" },
  { value: "monthly", label: "Mensal", description: "Entrega todos os meses" },
];

const CreateSubscription = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { createSubscription, subscription } = useSubscription();
  const [frequency, setFrequency] = useState<"weekly" | "biweekly" | "monthly">("monthly");
  const [selectedProducts, setSelectedProducts] = useState<
    Array<{ id: string; quantity: number }>
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (subscription) {
      navigate("/dashboard");
    }
  }, [subscription, navigate]);

  const toggleProduct = (productId: string) => {
    const exists = selectedProducts.find((p) => p.id === productId);
    if (exists) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, { id: productId, quantity: 4 }]);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setSelectedProducts(
      selectedProducts.map((p) => (p.id === productId ? { ...p, quantity } : p))
    );
  };

  const handleCreate = async () => {
    if (selectedProducts.length === 0) return;

    setLoading(true);
    const productsList = selectedProducts.map((sp) => {
      const product = products.find((p) => p.id === sp.id)!;
      return {
        id: sp.id,
        name: product.name,
        price: product.price,
        quantity: sp.quantity,
      };
    });

    await createSubscription(frequency, productsList);
    setLoading(false);
    navigate("/dashboard");
  };

  const totalPerDelivery = selectedProducts.reduce((sum, sp) => {
    const product = products.find((p) => p.id === sp.id)!;
    return sum + product.price * sp.quantity;
  }, 0);

  const discountedTotal = totalPerDelivery * 0.85;
  const savings = totalPerDelivery - discountedTotal;

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground/70">A carregar...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom section-padding">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <Package className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
                Cria o Teu Pack de Equilíbrio
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Personaliza a tua subscrição e poupa 15% em todas as entregas
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left - Configuration */}
            <div className="lg:col-span-2 space-y-8">
              {/* Frequency Selection */}
              <FadeIn direction="up" delay={0.1}>
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="h-6 w-6 text-primary" />
                    <h2 className="font-display text-2xl font-medium">Frequência de Entrega</h2>
                  </div>
                  <RadioGroup value={frequency} onValueChange={(v: any) => setFrequency(v)}>
                    <div className="space-y-3">
                      {frequencyOptions.map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                          onClick={() => setFrequency(option.value as any)}
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                            <div className="font-medium">{option.label}</div>
                            <div className="text-sm text-foreground/60">{option.description}</div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </Card>
              </FadeIn>

              {/* Product Selection */}
              <FadeIn direction="up" delay={0.2}>
                <Card className="p-6">
                  <h2 className="font-display text-2xl font-medium mb-6">Escolhe os Teus Produtos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map((product) => {
                      const selected = selectedProducts.find((p) => p.id === product.id);
                      return (
                        <ScaleOnHover key={product.id} scale={1.02}>
                          <div
                            className={`relative p-4 rounded-lg border-2 transition-all cursor-pointer ${
                              selected
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => toggleProduct(product.id)}
                          >
                            {selected && (
                              <div className="absolute top-2 right-2 h-6 w-6 bg-primary rounded-full flex items-center justify-center">
                                <Check className="h-4 w-4 text-primary-foreground" />
                              </div>
                            )}
                            <div className="flex items-center gap-4">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <h3 className="font-medium">{product.name}</h3>
                                <p className="text-sm text-foreground/60">
                                  €{product.price.toFixed(2)} cada
                                </p>
                              </div>
                            </div>
                            {selected && (
                              <div className="mt-4 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                                <Label className="text-sm">Quantidade por entrega:</Label>
                                <div className="flex items-center gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateQuantity(product.id, Math.max(1, selected.quantity - 1))}
                                  >
                                    -
                                  </Button>
                                  <span className="w-8 text-center font-medium">{selected.quantity}</span>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateQuantity(product.id, selected.quantity + 1)}
                                  >
                                    +
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </ScaleOnHover>
                      );
                    })}
                  </div>
                </Card>
              </FadeIn>
            </div>

            {/* Right - Summary */}
            <div>
              <FadeIn direction="up" delay={0.1}>
                <Card className="p-6 sticky top-24">
                  <h2 className="font-display text-xl font-medium mb-6">Resumo da Subscrição</h2>

                  {selectedProducts.length === 0 ? (
                    <p className="text-center text-foreground/60 py-8">
                      Seleciona os produtos para ver o resumo
                    </p>
                  ) : (
                    <>
                      <div className="space-y-3 mb-6">
                        {selectedProducts.map((sp) => {
                          const product = products.find((p) => p.id === sp.id)!;
                          return (
                            <div key={sp.id} className="flex justify-between text-sm">
                              <span className="text-foreground/70">
                                {product.name} x{sp.quantity}
                              </span>
                              <span className="font-medium">
                                €{(product.price * sp.quantity).toFixed(2)}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="border-t pt-4 mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground/70">Subtotal</span>
                          <span className="font-medium">€{totalPerDelivery.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-foreground/70">Desconto subscrição</span>
                          <span className="font-medium text-primary">-15%</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="font-display text-lg font-medium">Total por entrega</span>
                        <span className="font-display text-2xl font-medium">
                          €{discountedTotal.toFixed(2)}
                        </span>
                      </div>

                      <div className="mt-6 p-4 bg-primary/5 rounded-lg text-center">
                        <p className="text-sm text-foreground/70">
                          Poupas{" "}
                          <span className="font-medium text-primary">
                            €{savings.toFixed(2)}
                          </span>{" "}
                          por entrega
                        </p>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          className="w-full mt-6 bg-primary hover:bg-primary/90"
                          size="lg"
                          onClick={handleCreate}
                          disabled={loading}
                        >
                          {loading ? "A criar..." : "Confirmar Subscrição"}
                        </Button>
                      </motion.div>
                    </>
                  )}
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateSubscription;
