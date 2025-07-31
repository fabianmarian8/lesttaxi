import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import BaseTaxi from "./pages/BaseTaxi";
import AirportTransfer from "./pages/AirportTransfer";
import PriceList from "./pages/PriceList";
import Fleet from "./pages/Fleet";
import FAQ from "./pages/FAQ";
import KFCDelivery from "./pages/KFCDelivery";
import McdonaldsDelivery from "./pages/McdonaldsDelivery";
import MilitaryShopping from "./pages/MilitaryShopping";
import AirportMilitary from "./pages/AirportMilitary";
import MilitaryBasePickup from "./pages/MilitaryBasePickup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/base-taxi" element={<BaseTaxi />} />
          <Route path="/airport-transfer" element={<AirportTransfer />} />
          <Route path="/price-list" element={<PriceList />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help" element={<Help />} />
          <Route path="/kfc-delivery" element={<KFCDelivery />} />
          <Route path="/mcdonalds-delivery" element={<McdonaldsDelivery />} />
          <Route path="/military-shopping" element={<MilitaryShopping />} />
          <Route path="/airport-military" element={<AirportMilitary />} />
          <Route path="/military-base-pickup" element={<MilitaryBasePickup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
