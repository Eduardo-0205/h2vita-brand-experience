import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductFocus from "./pages/ProductFocus";
import ProductRelax from "./pages/ProductRelax";
import ProductImmunity from "./pages/ProductImmunity";
import ProductGlow from "./pages/ProductGlow";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
