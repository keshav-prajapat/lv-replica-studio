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
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ContactUs from "./pages/ContactUs";
import FindStore from "./pages/Services/FindStore";
import PersonalizationServices from "./pages/Services/PersonalizationServices";
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
          
          {/* Auth Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          
          {/* Service Pages */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/stores" element={<FindStore />} />
          <Route path="/services/personalization" element={<PersonalizationServices />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
