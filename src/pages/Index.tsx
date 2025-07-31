import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Car, MessageCircle, HelpCircle, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BookingForm } from "@/components/BookingForm";
import { useSEO } from "@/hooks/useSEO";


const Index = () => {
  useSEO({
    title: "LEST TAXI - Military Base Transport & Airport Transfers Slovakia",
    description: "Professional 24/7 taxi service for US military personnel at Lešť Base. Airport transfers, gate pickup, food delivery. Fixed rates, no hidden fees. WhatsApp +421 919 040 118",
    keywords: "Lest taxi, military taxi Slovakia, airport transfer Sliac, US military transport, gate pickup service, taxi Lešť, taxi near me, Sliač airport transfer",
    canonical: "https://lesttaxi.com",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "LEST TAXI",
      "url": "https://lesttaxi.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://lesttaxi.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
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
              <img 
                src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
                alt="LEST TAXI Logo - Professional Military Taxi Service Slovakia" 
                className="h-20 w-20 rounded-full bg-white/10 p-2 backdrop-blur-sm border border-white/30 pulse-glow"
                width="80"
                height="80"
                loading="eager"
              />
          <Link to="/help">
            <button className="glass-effect px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 neon-glow bg-red-600 hover:bg-red-700 text-white border border-red-500/50">
              <HelpCircle className="h-4 w-4 mr-2 inline" />
              Need help?
            </button>
          </Link>
        </nav>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left slide-up">
              <h1 className="text-6xl lg:text-7xl font-black mb-8 combat-text leading-tight" itemProp="name">
                TAXI SERVICE
                <span className="block text-4xl lg:text-5xl font-bold text-[hsl(var(--accent))]">
                  for military
                </span>
              </h1>
              <p className="text-2xl text-foreground/90 mb-6 font-medium">
                Professional Transportation Service for American Military Personnel
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                🚁 24h/7days always ready • ⚡ verified and fast taxi • 🎾 Tennis court pickup • 🍕 Food delivery
              </p>
              <div className="flex gap-6 flex-wrap">
                <a 
                  href="https://wa.me/421919040118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactical-card px-8 py-4 text-lg font-semibold bg-[hsl(var(--whatsapp-green))] text-white hover:scale-110 transition-all duration-300 neon-glow"
                >
                  <MessageCircle className="h-6 w-6 mr-3 inline" />
                  Book on WhatsApp
                </a>
                <a 
                  href="tel:+421919040118"
                  className="tactical-card px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] text-black hover:scale-110 transition-all duration-300"
                >
                  <Phone className="h-6 w-6 mr-3 inline" />
                  Direct Call
                </a>
              </div>
            </div>
            <div className="floating">
              <div className="tactical-card p-4">
                <img 
                  src="/lovable-uploads/d06e156c-11ad-4666-802d-c6279072dc7f.png" 
                  alt="LEST TAXI professional military taxi service at Lešť Base Slovakia - airport transfers and base transport" 
                  className="rounded-xl w-full shadow-2xl"
                  loading="eager"
                  width="600"
                  height="400"
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
          <h2 className="text-5xl font-black text-center mb-16 combat-text">
            OUR SERVICES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tactical-card text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <Car className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--military-gold))]">Airport Transfers</h3>
              <p className="text-muted-foreground leading-relaxed">Reliable transportation to Budapest, Vienna, and Bratislava airports with professional punctuality and secure service.</p>
            </div>
            <div className="tactical-card text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[hsl(var(--tactical-orange))] to-[hsl(var(--military-bronze))] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--tactical-orange))]">Base Transport</h3>
              <p className="text-muted-foreground leading-relaxed">Specialized transport for military personnel with complete base protocol understanding and security clearance.</p>
            </div>
            <div className="tactical-card text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[hsl(var(--combat-green))] to-[hsl(var(--military-green))] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <MessageCircle className="h-10 w-10 text-[hsl(var(--military-gold))]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--combat-green))]">City Transport</h3>
              <p className="text-muted-foreground leading-relaxed">Convenient urban transportation to cities, shopping centers, and important destinations across Slovakia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Command Center Contact */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/5" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-16 combat-text">
            CONTACT US
          </h2>
          <div className="max-w-2xl mx-auto mb-16">
            <BookingForm />
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="tel:+421919040118"
              className="tactical-card group flex flex-col items-center gap-4 p-8 min-w-[120px]"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="h-8 w-8 text-black" />
              </div>
              <span className="text-lg font-bold text-[hsl(var(--military-gold))]">Call Now</span>
            </a>
            <a 
              href="https://wa.me/421919040118"
              target="_blank"
              rel="noopener noreferrer"
              className="tactical-card group flex flex-col items-center gap-4 p-8 min-w-[120px]"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--whatsapp-green))] to-green-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <span className="text-lg font-bold text-[hsl(var(--whatsapp-green))]">WhatsApp</span>
            </a>
            <a 
              href="mailto:fabianmarian8@gmail.com"
              className="tactical-card group flex flex-col items-center gap-4 p-8 min-w-[120px]"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--tactical-orange))] to-[hsl(var(--military-bronze))] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <span className="text-lg font-bold text-[hsl(var(--tactical-orange))]">Email</span>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100090644550474"
              target="_blank"
              rel="noopener noreferrer"
              className="tactical-card group flex flex-col items-center gap-4 p-8 min-w-[120px]"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Facebook className="h-8 w-8 text-white" />
              </div>
              <span className="text-lg font-bold text-blue-600">Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* Command Footer */}
      <footer className="relative py-12 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--combat-green))] to-[hsl(var(--military-green))] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--military-gold))_0%,transparent_70%)] opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <p className="text-xl font-semibold text-[hsl(var(--military-gold))] tracking-wider">
            © 2024 FRANKO TAXI | Professional Transportation Service
          </p>
        </div>
      </footer>
      
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;