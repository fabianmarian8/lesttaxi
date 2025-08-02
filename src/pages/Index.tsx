import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Car, MessageCircle, HelpCircle, Facebook, Star, Quote, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ExchangeRateWidget from "@/components/ExchangeRateWidget";
import { BookingForm } from "@/components/BookingForm";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";


const Index = () => {
  useSEO({
    title: "LEST TAXI - Military Taxi & Airport Transfer Slovakia",
    description: "Professional 24/7 taxi service for US military personnel at Lešť Base. Airport transfers, gate pickup, food delivery. Fixed rates, no hidden fees. WhatsApp +421 919 040 118",
    keywords: "Lest taxi, military taxi Slovakia, airport transfer Sliac, US military transport, gate pickup service, taxi Lešť, taxi near me, Sliač airport transfer",
    canonical: "https://lesttaxi.com",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "LEST TAXI - Professional Military Transportation",
      "url": "https://lesttaxi.com",
      "telephone": "+421919040118",
      "email": "fabianmarian8@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lešť Military Base Area",
        "addressLocality": "Lešť",
        "addressRegion": "Banská Bystrica Region",
        "postalCode": "96223",
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
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airport Transfer Service",
              "description": "Professional airport transfers from Lešť Base to Budapest, Vienna, and Bratislava airports"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Military Base Transport",
              "description": "Specialized transportation for US military personnel at Lešť Base"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "City Transport Slovakia",
              "description": "Urban transportation to Slovak cities and shopping centers"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "2",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "US Military Personnel"
          },
          "reviewBody": "Great and reliable service. The driver was punctual and professional.",
          "datePublished": "2024-01-15"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "American Soldier"
          },
          "reviewBody": "Excellent ride, comfortable car and friendly driver. Highly recommended!",
          "datePublished": "2024-01-20"
        }
      ],
      "description": "Professional 24/7 taxi service for US military personnel at Lešť Base Slovakia. Specializing in airport transfers, base transport, and city travel with fixed rates and military protocol understanding."
    }
  });

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced Military Pattern Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `url('/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png')`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-[hsl(var(--combat-green))] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--military-gold))_0%,transparent_70%)] opacity-10" />
      </div>
      
      {/* Enhanced Header with Glass Effect */}
      <header className="glass-effect backdrop-blur-xl py-4 px-6 relative z-10 border-b border-white/20">
        <nav className="container mx-auto flex justify-between items-center">
              <OptimizedImage 
                src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
                alt="LEST TAXI Logo - Professional Military Taxi Service Slovakia" 
                className="h-20 w-20 rounded-full bg-white/10 p-2 backdrop-blur-sm border border-white/30 pulse-glow"
                width={80}
                height={80}
                priority={true}
              />
          
          <div className="flex items-center space-x-4">
            <ExchangeRateWidget />
            <Link to="/help">
              <button className="glass-effect px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 neon-glow bg-red-600 hover:bg-red-700 text-white border border-red-500/50">
                <HelpCircle className="h-4 w-4 mr-2 inline" />
                Need help?
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-32 px-6">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left slide-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 combat-text leading-tight break-words" itemProp="name">
                Professional Taxi Service for US Military at Lešť Base Slovakia
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 mb-4 sm:mb-6 font-medium">
                Professional Transportation Service for American Military Personnel
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                🚁 24h/7days always ready • ⚡ verified and fast taxi • 🎾 Tennis court pickup • 🍕 Food delivery
              </p>
              <div className="flex gap-4 sm:gap-6 flex-wrap">
                <a 
                  href="https://wa.me/421919040118"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.gtag?.('event', 'whatsapp_click')}
                  className="tactical-card px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold bg-[hsl(var(--whatsapp-green))] text-white hover:scale-110 transition-all duration-300 neon-glow"
                >
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 inline" />
                  Book on WhatsApp
                </a>
                <a 
                  href="tel:+421919040118"
                  onClick={() => window.gtag?.('event', 'call_now_click')}
                  className="tactical-card px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] text-black hover:scale-110 transition-all duration-300"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 inline" />
                  Direct Call
                </a>
              </div>
            </div>
            <div className="floating">
              <div className="tactical-card p-4">
                <OptimizedImage 
                  src="/lovable-uploads/d06e156c-11ad-4666-802d-c6279072dc7f.png" 
                  alt="LEST TAXI professional military taxi service at Lešť Base Slovakia - airport transfers and base transport" 
                  className="rounded-xl w-full shadow-2xl"
                  width={600}
                  height={400}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Services Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--combat-green))]/20 to-[hsl(var(--military-gold))]/10" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-center mb-8 sm:mb-12 lg:mb-16 combat-text">
            Military Transportation Services at Lešť Base
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="tactical-card text-center group p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <Car className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-[hsl(var(--military-gold))] text-wrap-mobile">Airport Transfers from Lešť Base</h3>
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
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-center mb-8 sm:mb-12 lg:mb-16 combat-text">
            Contact LEST TAXI - Book Your Military Transport
          </h2>
          <div className="max-w-2xl mx-auto mb-16">
            <BookingForm />
          </div>
          
          <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:gap-6">
            <a 
              href="tel:+421919040118"
              onClick={() => window.gtag?.('event', 'call_now_click')}
              className="tactical-card group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 min-w-[100px] sm:min-w-[120px]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-black" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg font-bold text-[hsl(var(--military-gold))] text-center">Call Now</span>
            </a>
            <a 
              href="https://wa.me/421919040118"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.gtag?.('event', 'whatsapp_click')}
              className="tactical-card group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 min-w-[100px] sm:min-w-[120px]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[hsl(var(--whatsapp-green))] to-green-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg font-bold text-[hsl(var(--whatsapp-green))] text-center">WhatsApp</span>
            </a>
            <a 
              href="mailto:fabianmarian8@gmail.com"
              className="tactical-card group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 min-w-[100px] sm:min-w-[120px]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[hsl(var(--tactical-orange))] to-[hsl(var(--military-bronze))] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg font-bold text-[hsl(var(--tactical-orange))] text-center">Email</span>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100090644550474"
              target="_blank"
              rel="noopener noreferrer"
              className="tactical-card group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 min-w-[100px] sm:min-w-[120px]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg font-bold text-blue-600 text-center">Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 px-6 relative" itemScope itemType="https://schema.org/Organization">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--military-green))]/10 to-[hsl(var(--combat-green))]/10" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-center mb-8 sm:mb-12 lg:mb-16 combat-text">
            What Our Military Customers Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Review 1 */}
            <div className="tactical-card group hover-scale animate-fade-in" itemScope itemType="https://schema.org/Review">
              <div className="flex items-center mb-4">
                <div className="flex items-center gap-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[hsl(var(--military-gold))] text-[hsl(var(--military-gold))]" />
                  ))}
                </div>
                <span className="text-sm font-medium text-[hsl(var(--military-gold))]">Google Review</span>
              </div>
              
              <div className="mb-4">
                <Quote className="h-8 w-8 text-[hsl(var(--military-gold))]/30 mb-2" />
                <blockquote className="text-lg leading-relaxed text-foreground" itemProp="reviewBody">
                  "Great and reliable service. The driver was punctual and professional."
                </blockquote>
              </div>
              
              <div className="flex items-center justify-between">
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span className="font-semibold text-[hsl(var(--military-gold))]" itemProp="name">US Military Personnel</span>
                  <p className="text-sm text-muted-foreground">Verified Customer</p>
                </div>
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                </div>
              </div>
              <meta itemProp="datePublished" content="2024-01-15" />
            </div>

            {/* Review 2 */}
            <div className="tactical-card group hover-scale animate-fade-in" itemScope itemType="https://schema.org/Review" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-4">
                <div className="flex items-center gap-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[hsl(var(--military-gold))] text-[hsl(var(--military-gold))]" />
                  ))}
                </div>
                <span className="text-sm font-medium text-[hsl(var(--military-gold))]">Google Review</span>
              </div>
              
              <div className="mb-4">
                <Quote className="h-8 w-8 text-[hsl(var(--military-gold))]/30 mb-2" />
                <blockquote className="text-lg leading-relaxed text-foreground" itemProp="reviewBody">
                  "Excellent ride, comfortable car and friendly driver. Highly recommended!"
                </blockquote>
              </div>
              
              <div className="flex items-center justify-between">
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span className="font-semibold text-[hsl(var(--military-gold))]" itemProp="name">American Soldier</span>
                  <p className="text-sm text-muted-foreground">Verified Customer</p>
                </div>
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                </div>
              </div>
              <meta itemProp="datePublished" content="2024-01-20" />
            </div>
          </div>

          {/* Aggregate Rating Display */}
          <div className="text-center mt-12" itemScope itemType="https://schema.org/AggregateRating">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-[hsl(var(--military-gold))] text-[hsl(var(--military-gold))]" />
                ))}
              </div>
              <span className="text-2xl font-bold text-[hsl(var(--military-gold))]" itemProp="ratingValue">5.0</span>
            </div>
            <p className="text-muted-foreground">
              Based on <span itemProp="reviewCount">2</span> Google Reviews
            </p>
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/5" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-center mb-8 sm:mb-12 lg:mb-16 combat-text">
            Our Service Areas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/taxi-bratislava" className="tactical-card group hover-scale transition-all duration-300">
              <div className="text-center p-4">
                <MapPin className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-[hsl(var(--military-gold))]">Bratislava</h3>
                <p className="text-sm text-muted-foreground">Complete city taxi services</p>
              </div>
            </Link>
            
            <Link to="/taxi-stare-mesto" className="tactical-card group hover-scale transition-all duration-300">
              <div className="text-center p-4">
                <Car className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-[hsl(var(--military-gold))]">Staré Mesto</h3>
                <p className="text-sm text-muted-foreground">Historic center transport</p>
              </div>
            </Link>
            
            <Link to="/taxi-budapest-airport" className="tactical-card group hover-scale transition-all duration-300">
              <div className="text-center p-4">
                <Plane className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-[hsl(var(--military-gold))]">Budapest Airport</h3>
                <p className="text-sm text-muted-foreground">Ferenc Liszt International</p>
              </div>
            </Link>
            
            <Link to="/taxi-vienna-airport" className="tactical-card group hover-scale transition-all duration-300">
              <div className="text-center p-4">
                <Plane className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-[hsl(var(--military-gold))]">Vienna Airport</h3>
                <p className="text-sm text-muted-foreground">Schwechat International</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--stealth-gray))] to-[hsl(var(--night-ops))] opacity-95" />
        <div className="container mx-auto text-center relative z-10">
          <Link 
            to="/feedback"
            className="tactical-card inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-orange-700 text-white hover:bg-orange-800 hover:scale-110 transition-all duration-300"
          >
            Feedback / Complaint
          </Link>
        </div>
      </section>

      {/* Command Footer */}
      <footer className="relative py-12 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--combat-green))] to-[hsl(var(--military-green))] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--military-gold))_0%,transparent_70%)] opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-[hsl(var(--military-gold))] tracking-wider">
            © 2024 FRANKO TAXI | Professional Transportation Service
          </p>
          <div className="mt-4">
            <Link 
              to="/artemis" 
              className="text-xs text-muted-foreground hover:text-[hsl(var(--military-gold))] transition-colors"
            >
              Powered by Artemis Group
            </Link>
          </div>
        </div>
      </footer>
      
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;