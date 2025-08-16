import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HolidayStatusWidget } from "@/components/HolidayStatusWidget";
import { BreadcrumbNavigation } from "@/components/BreadcrumbNavigation";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Footer } from "@/components/Footer";
import { Suspense, lazy } from "react";

// Critical routes - loaded immediately for LCP
import Index from "./pages/Index";
import AirportTransfer from "./pages/AirportTransfer";
import PriceList from "./pages/PriceList";
import NotFound from "./pages/NotFound";

// Non-critical routes - lazy loaded for better initial bundle size
const Help = lazy(() => import("./pages/Help"));
const BaseTaxi = lazy(() => import("./pages/BaseTaxi"));
const Fleet = lazy(() => import("./pages/Fleet"));
const FAQ = lazy(() => import("./pages/FAQ"));
const KFCDelivery = lazy(() => import("./pages/KFCDelivery"));
const McdonaldsDelivery = lazy(() => import("./pages/McdonaldsDelivery"));
const MilitaryShopping = lazy(() => import("./pages/MilitaryShopping"));
const AirportMilitary = lazy(() => import("./pages/AirportMilitary"));
const MilitaryBasePickup = lazy(() => import("./pages/MilitaryBasePickup"));
const BanskaBystricaTaxi = lazy(() => import("./pages/BanskaBystricaTaxi"));
const BudapestTransport = lazy(() => import("./pages/BudapestTransport"));
const MilitaryAccommodation = lazy(() => import("./pages/MilitaryAccommodation"));
const Feedback = lazy(() => import("./pages/Feedback"));
const Artemis = lazy(() => import("./pages/Artemis"));
const TaxiBratislava = lazy(() => import("./pages/TaxiBratislava"));
const TaxiStareMesto = lazy(() => import("./pages/TaxiStareMesto"));
const TaxiBudapestAirport = lazy(() => import("./pages/TaxiBudapestAirport"));
const TaxiViennaAirport = lazy(() => import("./pages/TaxiViennaAirport"));
const TaxiBanskaBystrica = lazy(() => import("./pages/TaxiBanskaBystrica"));
const AirportTransportSlovakia = lazy(() => import("./pages/AirportTransportSlovakia"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const queryClient = new QueryClient();

const AppContent = () => {
  useAnalytics();
  
  return (
    <>
      <HolidayStatusWidget />
      <BrowserRouter>
        <BreadcrumbNavigation />
        <Routes>
          {/* Critical routes - no lazy loading for LCP */}
          <Route path="/" element={<Index />} />
          <Route path="/airport-transfer" element={<AirportTransfer />} />
          <Route path="/price-list" element={<PriceList />} />
          
          {/* Non-critical routes - lazy loaded */}
          <Route path="/base-taxi" element={<Suspense fallback={<PageLoader />}><BaseTaxi /></Suspense>} />
          <Route path="/fleet" element={<Suspense fallback={<PageLoader />}><Fleet /></Suspense>} />
          <Route path="/faq" element={<Suspense fallback={<PageLoader />}><FAQ /></Suspense>} />
          <Route path="/help" element={<Suspense fallback={<PageLoader />}><Help /></Suspense>} />
          <Route path="/kfc-delivery" element={<Suspense fallback={<PageLoader />}><KFCDelivery /></Suspense>} />
          <Route path="/mcdonalds-delivery" element={<Suspense fallback={<PageLoader />}><McdonaldsDelivery /></Suspense>} />
          <Route path="/military-shopping" element={<Suspense fallback={<PageLoader />}><MilitaryShopping /></Suspense>} />
          <Route path="/airport-military" element={<Suspense fallback={<PageLoader />}><AirportMilitary /></Suspense>} />
          <Route path="/military-base-pickup" element={<Suspense fallback={<PageLoader />}><MilitaryBasePickup /></Suspense>} />
          <Route path="/banska-bystrica-military-taxi" element={<Suspense fallback={<PageLoader />}><BanskaBystricaTaxi /></Suspense>} />
          <Route path="/budapest-military-transport" element={<Suspense fallback={<PageLoader />}><BudapestTransport /></Suspense>} />
          <Route path="/military-accommodation-transport" element={<Suspense fallback={<PageLoader />}><MilitaryAccommodation /></Suspense>} />
          <Route path="/feedback" element={<Suspense fallback={<PageLoader />}><Feedback /></Suspense>} />
          <Route path="/artemis" element={<Suspense fallback={<PageLoader />}><Artemis /></Suspense>} />
          <Route path="/taxi-bratislava" element={<Suspense fallback={<PageLoader />}><TaxiBratislava /></Suspense>} />
          <Route path="/taxi-stare-mesto" element={<Suspense fallback={<PageLoader />}><TaxiStareMesto /></Suspense>} />
          <Route path="/taxi-budapest-airport" element={<Suspense fallback={<PageLoader />}><TaxiBudapestAirport /></Suspense>} />
          <Route path="/taxi-vienna-airport" element={<Suspense fallback={<PageLoader />}><TaxiViennaAirport /></Suspense>} />
          <Route path="/taxi-banska-bystrica" element={<Suspense fallback={<PageLoader />}><TaxiBanskaBystrica /></Suspense>} />
          <Route path="/airport-transport-slovakia" element={<Suspense fallback={<PageLoader />}><AirportTransportSlovakia /></Suspense>} />
          <Route path="/sitemap" element={<Suspense fallback={<PageLoader />}><Sitemap /></Suspense>} />
          <Route path="/privacy-policy" element={<Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>} />
          <Route path="/terms-of-service" element={<Suspense fallback={<PageLoader />}><TermsOfService /></Suspense>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
