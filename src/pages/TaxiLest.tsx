import { StandardHero } from "@/components/StandardHero";
import { Card, CardContent } from "@/components/ui/card";
import { Car, MapPin, Clock, Euro, Phone, MessageCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const TaxiLest = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "LocalBusiness"],
    "name": "Taxi Lešť",
    "alternateName": "Taxislužba Pliesovce",
    "description": "24/7 taxislužba v Lešti a Pliesovciach. Letiskové transfery, mestská preprava, nákupy.",
    "url": "https://www.lesttaxi.com/taxi-lest",
    "telephone": "+421919040118",
    "address": {
      "@type": "PostalAddress", 
      "addressLocality": "Lešť",
      "addressRegion": "Banská Bystrica Region",
      "postalCode": "96263",
      "addressCountry": "SK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.6397",
      "longitude": "19.1342"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceArea": [
      {
        "@type": "City",
        "name": "Lešť"
      },
      {
        "@type": "City", 
        "name": "Pliesovce"
      },
      {
        "@type": "City",
        "name": "Zvolen"
      },
      {
        "@type": "City",
        "name": "Banská Bystrica"
      }
    ]
  };

  useSEO({
    title: "Taxi Lešť | Airport Transport Slovakia | Professional Service",
    description: "Professional taxi service in Lešť, Pliesovce area. Airport transfers, city transport, shopping services. Fixed prices. Call +421 919 040 118",
    keywords: "taxi Lešť, taxi Lest, taxi airport, taxi banská bystrica, Slovakia taxi service, airport transport Slovakia, taxi zvolen, professional taxi service",
    canonical: "https://www.lesttaxi.com/taxi-lest",
    jsonLd: structuredData
  });

  return (
    <main className="min-h-screen bg-background">
      <StandardHero
        title="Taxi Lešť - Professional Transportation Service"
        description="24/7 reliable taxi service in Lešť, Pliesovce and surrounding areas. Professional services with fixed prices. Airport transfers, city transport, shopping."
        primaryButtonText="Book on WhatsApp"
        secondaryButtonText="Call +421 919 040 118"
      />

      {/* Služby */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-center mb-12 combat-text">
            Our Taxi Services in Lešť
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="tactical-card">
              <CardContent className="p-6 text-center">
                <Car className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--military-gold))]">Airport Transfers</h3>
                <p className="text-muted-foreground mb-4">
                  • Sliač Airport - 25€<br/>
                  • Bratislava Airport - 120€<br/>
                  • Vienna Airport - 150€<br/>
                  • Budapest Airport - 140€
                </p>
              </CardContent>
            </Card>

            <Card className="tactical-card">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--tactical-orange))]" />
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--tactical-orange))]">City Transport</h3>
                <p className="text-muted-foreground mb-4">
                  • Lešť - Zvolen - 8€<br/>
                  • Lešť - Banská Bystrica - 15€<br/>
                  • Lešť - Pliesovce - 5€<br/>
                  • Surrounding areas - by agreement
                </p>
              </CardContent>
            </Card>

            <Card className="tactical-card">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--combat-green))]" />
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--combat-green))]">24/7 Availability</h3>
                <p className="text-muted-foreground mb-4">
                  • Shopping Tesco, Kaufland<br/>
                  • Medical appointments<br/>
                  • Official errands<br/>
                  • Personal needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cenník */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/10">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-center mb-12 combat-text">
            Taxi Service Pricing
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="tactical-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[hsl(var(--military-gold))]">
                      <Euro className="inline h-5 w-5 mr-2" />
                      Local Trips
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Lešť - Pliesovce: 5€</li>
                      <li>• Lešť - Zvolen: 8€</li>
                      <li>• Lešť - Banská Bystrica: 15€</li>
                      <li>• Shopping in Zvolen: 10€</li>
                      <li>• Medical Zvolen: 12€</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[hsl(var(--military-gold))]">
                      <Car className="inline h-5 w-5 mr-2" />
                      Airport Transfers
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Sliač Airport: 25€</li>
                      <li>• Bratislava Airport: 120€</li>
                      <li>• Vienna Airport: 150€</li>
                      <li>• Budapest Airport: 140€</li>
                      <li>• Košice Airport: 180€</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-[hsl(var(--military-gold))]/10 rounded-lg">
                  <p className="text-center text-sm">
                    <strong>Fixed Prices • No Hidden Fees • Cash or Card Payment</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ sekcia optimalizovaná pre SEO */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-center mb-12 combat-text">
            Frequently Asked Questions - Taxi Lešť
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="tactical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How much does taxi from Lešť to Zvolen cost?</h3>
                <p className="text-muted-foreground">
                  Taxi from Lešť to Zvolen costs 8€. The price is fixed and doesn't depend on travel time or traffic conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="tactical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How to book taxi in Lešť?</h3>
                <p className="text-muted-foreground">
                  You can book taxi by calling +421 919 040 118 or via WhatsApp. We are available 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="tactical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you provide taxi from Lešť to Sliač Airport?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide transfers to Sliač Airport for 25€. Advance booking is recommended.
                </p>
              </CardContent>
            </Card>

            <Card className="tactical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Can I pay by card in the taxi?</h3>
                <p className="text-muted-foreground">
                  Yes, we accept both card and cash payments. All prices are final with no additional fees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-16 px-6 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-8 combat-text">
            Contact - Taxi Lešť
          </h2>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="tel:+421919040118"
              className="tactical-card group flex flex-col items-center gap-4 p-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="h-8 w-8 text-black" />
              </div>
              <span className="text-lg font-bold text-[hsl(var(--military-gold))]">+421 919 040 118</span>
            </a>
            
            <a 
              href="https://wa.me/421919040118"
              target="_blank"
              rel="noopener noreferrer"
              className="tactical-card group flex flex-col items-center gap-4 p-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--whatsapp-green))] to-green-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <span className="text-lg font-bold text-[hsl(var(--whatsapp-green))]">WhatsApp</span>
            </a>
          </div>
          
          <div className="mt-8">
            <p className="text-muted-foreground">
              Available 24 hours a day, 7 days a week<br/>
              Service in Slovak, English and Czech
            </p>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
};

export default TaxiLest;