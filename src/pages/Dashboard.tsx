import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/use-auth";
import { useSubscription } from "@/hooks/use-subscription";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleOnHover } from "@/components/animations/ScaleOnHover";
import { motion } from "framer-motion";
import {
  Calendar,
  Package,
  Settings,
  Pause,
  Play,
  X,
  Plus,
  Minus,
  Clock,
  ShoppingBag,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const frequencyLabels = {
  weekly: "Semanal",
  biweekly: "Quinzenal",
  monthly: "Mensal",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const {
    subscription,
    products,
    loading: subLoading,
    updateFrequency,
    pauseSubscription,
    resumeSubscription,
    cancelSubscription,
    updateProductQuantity,
    removeProduct,
  } = useSubscription();

  const [orders, setOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from("orders")
          .select(`
            *,
            order_items (*)
          `)
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(5);

        if (error) throw error;
        setOrders(data || []);
      } catch (error: any) {
        toast({
          title: "Erro",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setLoadingOrders(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (authLoading || subLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground/70">A carregar...</p>
        </div>
      </div>
    );
  }

  if (!subscription) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-24 pb-16">
          <div className="container-custom section-padding">
            <FadeIn direction="up">
              <Card className="max-w-2xl mx-auto p-12 text-center bg-gradient-subtle">
                <Package className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h1 className="font-display text-3xl font-medium mb-4">
                  Ainda não tens uma subscrição ativa
                </h1>
                <p className="text-lg text-foreground/70 mb-8">
                  Cria o teu pack de equilíbrio personalizado e recebe os teus rituais mensalmente
                  com 15% de desconto
                </p>
                <Button
                  size="lg"
                  onClick={() => navigate("/loja")}
                  className="bg-primary hover:bg-primary/90 rounded-full"
                >
                  Criar Subscrição
                </Button>
              </Card>
            </FadeIn>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const totalMonthly = products.reduce((sum, p) => sum + p.price * p.quantity, 0) * 0.85;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom section-padding">
          {/* Header */}
          <FadeIn direction="up">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h1 className="font-display text-4xl font-medium mb-2">O Meu Pack de Equilíbrio</h1>
                <p className="text-foreground/70">Gere a tua subscrição personalizada</p>
              </div>
              <Button variant="outline" onClick={signOut}>
                Sair
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Subscription Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Status Card */}
              <FadeIn direction="up" delay={0.1}>
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="font-display text-2xl font-medium mb-2">Subscrição Ativa</h2>
                      <Badge
                        variant={
                          subscription.status === "active"
                            ? "default"
                            : subscription.status === "paused"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {subscription.status === "active"
                          ? "Ativa"
                          : subscription.status === "paused"
                          ? "Pausada"
                          : "Cancelada"}
                      </Badge>
                    </div>
                    <Settings className="h-6 w-6 text-foreground/50" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-foreground/60">Frequência</p>
                        <p className="font-medium">
                          {frequencyLabels[subscription.delivery_frequency]}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-foreground/60">Próxima entrega</p>
                        <p className="font-medium">
                          {subscription.next_delivery_date
                            ? new Date(subscription.next_delivery_date).toLocaleDateString("pt-PT")
                            : "—"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex gap-3">
                    {subscription.status === "active" ? (
                      <Button
                        variant="outline"
                        onClick={pauseSubscription}
                        className="flex-1"
                      >
                        <Pause className="h-4 w-4 mr-2" />
                        Pausar
                      </Button>
                    ) : subscription.status === "paused" ? (
                      <Button
                        variant="outline"
                        onClick={resumeSubscription}
                        className="flex-1"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Reativar
                      </Button>
                    ) : null}
                    <Button
                      variant="destructive"
                      onClick={cancelSubscription}
                      className="flex-1"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancelar
                    </Button>
                  </div>
                </Card>
              </FadeIn>

              {/* Products */}
              <FadeIn direction="up" delay={0.2}>
                <Card className="p-6">
                  <h2 className="font-display text-2xl font-medium mb-6">Os Meus Produtos</h2>
                  <div className="space-y-4">
                    {products.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ScaleOnHover scale={1.01}>
                          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                            <div className="flex-1">
                              <h3 className="font-medium">{product.product_name}</h3>
                              <p className="text-sm text-foreground/60">
                                €{product.price.toFixed(2)} cada
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() =>
                                  updateProductQuantity(product.id, product.quantity - 1)
                                }
                                disabled={product.quantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">
                                {product.quantity}
                              </span>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() =>
                                  updateProductQuantity(product.id, product.quantity + 1)
                                }
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => removeProduct(product.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </ScaleOnHover>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => navigate("/loja")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Produtos
                  </Button>
                </Card>
              </FadeIn>

              {/* Order History */}
              <FadeIn direction="up" delay={0.3}>
                <Card className="p-6">
                  <h2 className="font-display text-2xl font-medium mb-6">Histórico de Encomendas</h2>
                  {loadingOrders ? (
                    <p className="text-center text-foreground/60">A carregar...</p>
                  ) : orders.length === 0 ? (
                    <p className="text-center text-foreground/60">Ainda não tens encomendas</p>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div
                          key={order.id}
                          className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <ShoppingBag className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium">
                                {new Date(order.created_at).toLocaleDateString("pt-PT")}
                              </p>
                              <p className="text-sm text-foreground/60">
                                {order.order_items?.length || 0} itens
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">€{order.total.toFixed(2)}</p>
                            <Badge variant="secondary">{order.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </FadeIn>
            </div>

            {/* Right Column - Summary */}
            <div>
              <FadeIn direction="up" delay={0.1}>
                <Card className="p-6 sticky top-24">
                  <h2 className="font-display text-xl font-medium mb-6">Resumo Mensal</h2>

                  <div className="space-y-4 mb-6">
                    {products.map((product) => (
                      <div key={product.id} className="flex justify-between text-sm">
                        <span className="text-foreground/70">
                          {product.product_name} x{product.quantity}
                        </span>
                        <span className="font-medium">
                          €{(product.price * product.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/70">Desconto subscrição</span>
                    <span className="font-medium text-primary">-15%</span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="font-display text-lg font-medium">Total mensal</span>
                    <span className="font-display text-2xl font-medium">
                      €{totalMonthly.toFixed(2)}
                    </span>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-center text-foreground/70">
                      Poupas <span className="font-medium text-primary">€
                      {(products.reduce((sum, p) => sum + p.price * p.quantity, 0) * 0.15).toFixed(
                        2
                      )}</span>{" "}
                      por mês
                    </p>
                  </div>
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

export default Dashboard;
