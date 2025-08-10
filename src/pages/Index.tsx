import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Car, MessageCircle, HelpCircle, Facebook, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from "react";
import ExchangeRateWidget from "@/components/ExchangeRateWidget";
import { BookingForm } from "@/components/BookingForm";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { FrankoPizzaBanner } from "@/components/FrankoPizzaBanner";
import { RelatedServices } from "@/components/RelatedServices";
import { ServicesNavigation } from "@/components/ServicesNavigation";
import { TextLinksSection } from "@/components/TextLinksSection";
const Index = () => {
  useSEO({
    title: "Taxi Lešť | Lest Base Airport Transfer | 24/7 Slovakia Transport",
    description: "Professional taxi Lešť service - airport transfers, Banská Bystrica, Zvolen, Budapest or anywhere 24/7 availability",
    keywords: "taxi lešť, taxi lest, taxi banská bystrica, taxi airport, slovakia taxi service, airport transfer slovakia, banská bystrica transport, lest base taxi",
    canonical: "https://www.lesttaxi.com/",
    ogImage: "https://www.lesttaxi.com/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.webp",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Taxi Lešť",
      "url": "https://www.lesttaxi.com",
      "telephone": "+421919040118",
      "email": "fabianmarian8@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Zvolenská cesta 52",
        "addressLocality": "Lešť",
        "postalCode": "96263",
        "addressCountry": "SK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.6397",
        "longitude": "19.1342"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "48.6397",
          "longitude": "19.1342"
        },
        "geoRadius": "300000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Military Transportation Services",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Transfer Service",
            "description": "Professional airport transfers from Lešť Base to Budapest, Vienna, and Bratislava airports"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Military Base Transport",
            "description": "Specialized transportation for US military personnel at Lešť Base"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Banská Bystrica Transport",
            "description": "Urban transportation to Banská Bystrica and Slovak cities"
          }
        }]
      },
      "description": "Professional 24/7 taxi service for US military personnel at Lešť Base Slovakia. Specializing in airport transfers, Banská Bystrica transport, and city travel with fixed rates and military protocol understanding."
    }
  });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced Military Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-[#1e3a1e] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#f4c430_0%,transparent_70%)] opacity-10" />
      </div>
      
      {/* Franko Pizza Banner */}
      <FrankoPizzaBanner />
      
      {/* Enhanced Header with Glass Effect */}
      <header className="glass-effect backdrop-blur-xl py-2 sm:py-4 px-4 sm:px-6 relative z-10 border-b border-white/20">
        <nav className="container mx-auto flex justify-between items-center">
              <OptimizedImage src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" alt="LEST TAXI circular logo with military taxi car icon" className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-white/10 p-1 sm:p-2 backdrop-blur-sm border border-white/30 pulse-glow" width={80} height={80} priority={true} />
          
          <div className="flex items-center gap-2 sm:gap-4">
            <ExchangeRateWidget />
            <Link to="/help">
              <button className="glass-effect px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 neon-glow bg-red-600 hover:bg-red-700 text-white border border-red-500/50">
                <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 inline" />
                <span className="hidden sm:inline">Need help?</span>
                <span className="sm:hidden">Help</span>
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative py-6 sm:py-12 md:py-16 lg:py-32 px-3 sm:px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-center sm:text-left slide-up w-full">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 lg:mb-6 xl:mb-8 combat-text leading-tight break-words" itemProp="name">
                Taxi Lešť – 24/7 Transfer Slovakia
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-foreground/90 mb-3 sm:mb-4 lg:mb-6 font-medium break-words">
                24/7 taxi service for U.S. personnel at Lešť (Lest) Military Training Area – fixed rates, gate pickup, and airport transfers.
              </p>
              <p className="text-xs sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 lg:mb-8 leading-relaxed break-words">
                🚁 24h/7days always ready • ⚡ verified and fast taxi • 🎾 Tennis court pickup • 🥡 Food delivery
              </p>
              <div className="flex gap-3 sm:gap-4 lg:gap-6 flex-wrap justify-center sm:justify-start">
                <a href="https://api.whatsapp.com/send?phone=421919040118" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag?.('event', 'whatsapp_click')} className="tactical-card px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-base lg:text-lg font-semibold bg-[hsl(var(--whatsapp-green))] text-white hover:scale-110 transition-all duration-300 neon-glow">
                  <MessageCircle className="h-3 w-3 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-1 sm:mr-2 lg:mr-3 inline" />
                  <span className="hidden sm:inline">Book on </span>WhatsApp
                </a>
                <a href="tel:+421919040118" onClick={() => window.gtag?.('event', 'call_now_click')} className="tactical-card px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-base lg:text-lg font-semibold bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] text-black hover:scale-110 transition-all duration-300">
                  <Phone className="h-3 w-3 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-1 sm:mr-2 lg:mr-3 inline" />
                  <span className="hidden sm:inline">Direct </span>Call
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-center text-center">
              <OptimizedImage src="/lovable-uploads/2c4085f5-69ea-4561-baae-9a987e4939e7.png" alt="Professional white Toyota taxi vehicle ready for military personnel transport at Lest Base" className="rav4-image rounded-xl w-full max-w-xs sm:max-w-md lg:max-w-lg shadow-2xl" width={600} height={450} priority={true} responsive={true} sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 50vw" />
              <p className="mt-3 sm:mt-4 max-w-2xl text-[0.8rem] sm:text-sm text-muted-foreground leading-relaxed">
                LEST TAXI provides fast transfers between Lešť Base and Zvolen or Banská Bystrica, typically to Europa Shopping Center, SNP Square, and the bus/train station. We also operate longer routes to Bratislava, Vienna, and Budapest, including the airports VIE, BTS, BUD. Pricing is transparent with fixed fares on popular routes. We plan with buffer time, monitor traffic, and for airport rides adjust arrival to real conditions. If you don’t need a ride right now, we can buy and deliver what you need—groceries, supplies, goodies, small items—straight to the base or city. With LEST TAXI you’ll get where you’re going on time and safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Services Section */}
      <section className="py-4 sm:py-8 px-3 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--combat-green))]/20 to-[hsl(var(--military-gold))]/10" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-center mb-4 sm:mb-8 lg:mb-12 combat-text">
            Military Transportation Services at Lest Base
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="tactical-card text-center group p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <Car className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-[hsl(var(--military-gold))] text-wrap-mobile">Airport Transfers from Lest Base</h3>
              <p className="text-muted-foreground leading-relaxed text-wrap-mobile">Reliable transportation to Budapest, Vienna, and Bratislava airports with professional punctuality and secure service.</p>
            </div>
            <div className="tactical-card text-center group p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-[hsl(var(--tactical-orange))] to-[hsl(var(--military-bronze))] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-[hsl(var(--tactical-orange))] text-wrap-mobile">US Military Base Transport</h3>
              <p className="text-muted-foreground leading-relaxed text-wrap-mobile">Specialized transport for military personnel with complete base protocol understanding and security clearance.</p>
            </div>
            <div className="tactical-card text-center group p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-[hsl(var(--combat-green))] to-[hsl(var(--military-green))] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-[hsl(var(--military-gold))]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-[hsl(var(--combat-green))] text-wrap-mobile">Slovakia City Transport</h3>
              <p className="text-muted-foreground leading-relaxed text-wrap-mobile">Convenient urban transportation to cities, shopping centers, and important destinations across Slovakia.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Command Center Contact */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/5" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto mb-16">
            <Collapsible open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="taxi" size="lg" className="w-full justify-center h-auto px-6 py-4" onClick={() => {
                window.gtag?.('event', 'booking_form_toggle', {
                  state: !isBookingOpen ? 'open' : 'close'
                });
              }} aria-expanded={isBookingOpen} aria-controls="booking-form-content">
                  Book Your Ride
                  <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${isBookingOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent id="booking-form-content" className="mt-6">
                <BookingForm />
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          
          {/* Google Maps Location */}
          <div className="mt-12 lg:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 text-[hsl(var(--military-gold))]">Your Location in Lešť</h3>
            <div className="tactical-card p-4 mx-auto max-w-4xl">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10606.190694779916!2d19.30634581363969!3d48.34999898836313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476aace20de6e3b3%3A0x34f254bbfa7193c9!2s962%2063%20Lest&#39;!5e0!3m2!1ssk!2ssk!4v1754488714914!5m2!1ssk!2ssk" width="100%" height="300" style={{
              border: 0,
              borderRadius: 'var(--radius)'
            }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Taxi Lešť Location" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation - SEO Friendly Links */}
      <div className="relative z-10">
        <ServicesNavigation />
      </div>

      {/* Text Links Section - SEO Optimization */}
      <div className="relative z-10">
        <TextLinksSection />
      </div>

      {/* Related Services */}
      <div className="relative z-10">
        <RelatedServices category="city" />
      </div>

      <FloatingWhatsApp />

      {/* Populárne trasy (nad footerom) */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-center mb-6 combat-text">Populárne trasy</h2>
          <nav aria-label="Populárne trasy">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <li><a href="/airport-transfer" className="text-base font-medium hover:underline">Airport transfer</a></li>
              <li><a href="/price-list" className="text-base font-medium hover:underline">Price list</a></li>
              <li><a href="/taxi-bratislava" className="text-base font-medium hover:underline">Taxi Bratislava</a></li>
              <li><a href="/taxi-vienna-airport" className="text-base font-medium hover:underline">Taxi Vienna Airport</a></li>
              <li><a href="/airport-transport-slovakia" className="text-base font-medium hover:underline">Airport transport Slovakia</a></li>
              <li><a href="/taxi-banska-bystrica" className="text-base font-medium hover:underline">Taxi Banská Bystrica</a></li>
              <li><a href="/banska-bystrica-military-taxi" className="text-base font-medium hover:underline">Banská Bystrica military taxi</a></li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Quick Contact - compact bottom section */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <nav aria-label="Quick contact" className="grid grid-cols-4 gap-3 max-w-md mx-auto">
            <a href="tel:+421919040118" onClick={() => window.gtag?.('event', 'call_now_click')} className="tactical-card group flex flex-col items-center gap-2 p-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[hsl(var(--military-gold))] text-center">Call</span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=421919040118" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag?.('event', 'whatsapp_click')} className="tactical-card group flex flex-col items-center gap-2 p-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[hsl(var(--whatsapp-green))] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[hsl(var(--whatsapp-green))] text-center">WhatsApp</span>
            </a>
            <a href="mailto:fabianmarian8@gmail.com" className="tactical-card group flex flex-col items-center gap-2 p-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[hsl(var(--tactical-orange))] to-[hsl(var(--military-bronze))] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[hsl(var(--tactical-orange))] text-center">Email</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100090644550474" target="_blank" rel="noopener noreferrer" className="tactical-card group flex flex-col items-center gap-2 p-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--combat-green))] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[hsl(var(--secondary))] text-center">Facebook</span>
            </a>
          </nav>
          
          {/* Feedback Section - moved to bottom */}
          <div className="text-center mt-6">
            <Link to="/feedback" className="tactical-card inline-flex items-center gap-3 px-4 py-2 text-sm font-semibold bg-orange-700 text-white hover:bg-orange-800 hover:scale-110 transition-all duration-300">
              Feedback / Complaint
            </Link>
          </div>
        </div>
      </section>

    </main>;
};
export default Index;