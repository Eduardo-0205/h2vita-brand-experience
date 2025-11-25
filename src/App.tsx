import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/hooks/use-cart";
import Index from "./pages/Index";
import ProductFocus from "./pages/ProductFocus";
import ProductRelax from "./pages/ProductRelax";
import ProductImmunity from "./pages/ProductImmunity";
import ProductGlow from "./pages/ProductGlow";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import StressManagement from "./pages/blog/StressManagement";
import Concentration from "./pages/blog/Concentration";
import Burnout from "./pages/blog/Burnout";
import FunctionalIngredients from "./pages/blog/FunctionalIngredients";
import Sustainability from "./pages/Sustainability";
import DigitalExperiences from "./pages/DigitalExperiences";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produtos/focus" element={<ProductFocus />} />
            <Route path="/produtos/relax" element={<ProductRelax />} />
            <Route path="/produtos/immunity" element={<ProductImmunity />} />
            <Route path="/produtos/glow" element={<ProductGlow />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/loja" element={<Shop />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/gestao-stress" element={<StressManagement />} />
            <Route path="/blog/concentracao" element={<Concentration />} />
            <Route path="/blog/burnout" element={<Burnout />} />
            <Route path="/blog/ingredientes-funcionais" element={<FunctionalIngredients />} />
            <Route path="/sustentabilidade" element={<Sustainability />} />
            <Route path="/experiencias-digitais" element={<DigitalExperiences />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
