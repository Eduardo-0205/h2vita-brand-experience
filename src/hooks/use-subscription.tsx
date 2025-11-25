import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./use-auth";
import { toast } from "./use-toast";

export interface Subscription {
  id: string;
  status: "active" | "paused" | "cancelled";
  delivery_frequency: "weekly" | "biweekly" | "monthly";
  next_delivery_date: string | null;
  created_at: string;
  paused_at: string | null;
  cancelled_at: string | null;
}

export interface SubscriptionProduct {
  id: string;
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
}

export const useSubscription = () => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [products, setProducts] = useState<SubscriptionProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubscription = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const { data: subData, error: subError } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", user.id)
        .eq("status", "active")
        .maybeSingle();

      if (subError) throw subError;

      if (subData) {
        setSubscription(subData as Subscription);

        const { data: productsData, error: productsError } = await supabase
          .from("subscription_products")
          .select("*")
          .eq("subscription_id", subData.id);

        if (productsError) throw productsError;
        setProducts(productsData || []);
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscription();
  }, [user]);

  const createSubscription = async (
    frequency: "weekly" | "biweekly" | "monthly",
    productsList: Array<{ id: string; name: string; price: number; quantity: number }>
  ) => {
    if (!user) return;

    try {
      const nextDelivery = new Date();
      if (frequency === "weekly") nextDelivery.setDate(nextDelivery.getDate() + 7);
      if (frequency === "biweekly") nextDelivery.setDate(nextDelivery.getDate() + 14);
      if (frequency === "monthly") nextDelivery.setMonth(nextDelivery.getMonth() + 1);

      const { data: subData, error: subError } = await supabase
        .from("subscriptions")
        .insert({
          user_id: user.id,
          status: "active",
          delivery_frequency: frequency,
          next_delivery_date: nextDelivery.toISOString().split("T")[0],
        })
        .select()
        .single();

      if (subError) throw subError;

      const productsToInsert = productsList.map((p) => ({
        subscription_id: subData.id,
        product_id: p.id,
        product_name: p.name,
        quantity: p.quantity,
        price: p.price,
      }));

      const { error: productsError } = await supabase
        .from("subscription_products")
        .insert(productsToInsert);

      if (productsError) throw productsError;

      toast({
        title: "Subscrição criada!",
        description: "O teu pack de equilíbrio está ativo",
      });

      await fetchSubscription();
      return subData;
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const updateFrequency = async (frequency: "weekly" | "biweekly" | "monthly") => {
    if (!subscription) return;

    try {
      const { error } = await supabase
        .from("subscriptions")
        .update({ delivery_frequency: frequency })
        .eq("id", subscription.id);

      if (error) throw error;

      toast({
        title: "Frequência atualizada",
        description: "A tua subscrição foi atualizada com sucesso",
      });

      await fetchSubscription();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const pauseSubscription = async () => {
    if (!subscription) return;

    try {
      const { error } = await supabase
        .from("subscriptions")
        .update({
          status: "paused",
          paused_at: new Date().toISOString(),
        })
        .eq("id", subscription.id);

      if (error) throw error;

      toast({
        title: "Subscrição pausada",
        description: "Podes reativá-la a qualquer momento",
      });

      await fetchSubscription();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const resumeSubscription = async () => {
    if (!subscription) return;

    try {
      const { error } = await supabase
        .from("subscriptions")
        .update({
          status: "active",
          paused_at: null,
        })
        .eq("id", subscription.id);

      if (error) throw error;

      toast({
        title: "Subscrição reativada",
        description: "O teu pack de equilíbrio está ativo novamente",
      });

      await fetchSubscription();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const cancelSubscription = async () => {
    if (!subscription) return;

    try {
      const { error } = await supabase
        .from("subscriptions")
        .update({
          status: "cancelled",
          cancelled_at: new Date().toISOString(),
        })
        .eq("id", subscription.id);

      if (error) throw error;

      toast({
        title: "Subscrição cancelada",
        description: "Esperamos ver-te em breve!",
      });

      await fetchSubscription();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const addProduct = async (productId: string, name: string, price: number, quantity: number = 1) => {
    if (!subscription) return;

    try {
      const { error } = await supabase.from("subscription_products").insert({
        subscription_id: subscription.id,
        product_id: productId,
        product_name: name,
        quantity,
        price,
      });

      if (error) throw error;

      toast({
        title: "Produto adicionado",
        description: `${name} foi adicionado à tua subscrição`,
      });

      await fetchSubscription();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const removeProduct = async (productId: string) => {
    if (!subscription) return;

    try {
      const { error } = await supabase
        .from("subscription_products")
        .delete()
        .eq("id", productId);

      if (error) throw error;

      toast({
        title: "Produto removido",
        description: "O produto foi removido da tua subscrição",
      });

      await fetchSubscription();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const updateProductQuantity = async (productId: string, quantity: number) => {
    if (!subscription) return;

    try {
      const { error } = await supabase
        .from("subscription_products")
        .update({ quantity })
        .eq("id", productId);

      if (error) throw error;

      await fetchSubscription();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return {
    subscription,
    products,
    loading,
    createSubscription,
    updateFrequency,
    pauseSubscription,
    resumeSubscription,
    cancelSubscription,
    addProduct,
    removeProduct,
    updateProductQuantity,
    refetch: fetchSubscription,
  };
};
