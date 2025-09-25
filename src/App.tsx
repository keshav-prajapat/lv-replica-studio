import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Beauty from "./pages/Beauty";
import Handbags from "./pages/Handbags";
import HandbagDetail from "./pages/HandbagDetail";
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
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/handbags" element={<Handbags />} />
          <Route path="/handbags/:productId" element={<HandbagDetail />} />
          <Route path="/women/handbags" element={<Handbags />} />
          <Route path="/women/handbags/:productId" element={<HandbagDetail />} />
          <Route path="/bags-leather/womens-bags/:productId" element={<HandbagDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
