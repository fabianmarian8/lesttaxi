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
    title: "Taxi Lešť | Taxislužba Pliesovce | 24/7 preprava Zvolen",
    description: "Taxi Lešť - spoľahlivá 24/7 taxislužba v Lešti, Pliesovciach a okolí. Letiskové transfery, mestská preprava, nákupy, lekár. Volajte +421 919 040 118",
    keywords: "taxi Lešť, taxi Pliesovce, taxi Zvolen, taxislužba Lešť, preprava Lešť, taxi okolie Zvolen, letisko transfer, taxi na zavolanie Lešť",
    canonical: "https://www.lesttaxi.com/taxi-lest",
    jsonLd: structuredData
  });

  return (
    <main className="min-h-screen bg-background">
      <StandardHero
        title="Taxi Lešť - Vaša lokálna taxislužba"
        description="24/7 spoľahlivá taxislužba v Lešti, Pliesovciach a okolí. Profesionálne služby s fixnými cenami. Letiskové transfery, mestská preprava, nákupy."
        primaryButtonText="Objednať na WhatsApp"
        secondaryButtonText="Volať +421 919 040 118"
      />

      {/* Služby */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-center mb-12 combat-text">
            Naše taxislužby v Lešti
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="tactical-card">
              <CardContent className="p-6 text-center">
                <Car className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--military-gold))]">Letiskové transfery</h3>
                <p className="text-muted-foreground mb-4">
                  • Letisko Sliač - 25€<br/>
                  • Bratislava airport - 120€<br/>
                  • Viedeň airport - 150€<br/>
                  • Budapešť airport - 140€
                </p>
              </CardContent>
            </Card>

            <Card className="tactical-card">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--tactical-orange))]" />
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--tactical-orange))]">Mestská preprava</h3>
                <p className="text-muted-foreground mb-4">
                  • Lešť - Zvolen - 8€<br/>
                  • Lešť - Banská Bystrica - 15€<br/>
                  • Lešť - Pliesovce - 5€<br/>
                  • Okolité obce - podľa dohody
                </p>
              </CardContent>
            </Card>

            <Card className="tactical-card">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--combat-green))]" />
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--combat-green))]">24/7 dostupnosť</h3>
                <p className="text-muted-foreground mb-4">
                  • Nákupy Tesco, Kaufland<br/>
                  • Odvoz k lekárovi<br/>
                  • Cesty na úrady<br/>
                  • Osobné potreby
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
            Cenník taxi služieb
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="tactical-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[hsl(var(--military-gold))]">
                      <Euro className="inline h-5 w-5 mr-2" />
                      Lokálne cesty
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Lešť - Pliesovce: 5€</li>
                      <li>• Lešť - Zvolen: 8€</li>
                      <li>• Lešť - Banská Bystrica: 15€</li>
                      <li>• Nákupy v Zvolene: 10€</li>
                      <li>• Lekár Zvolen: 12€</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[hsl(var(--military-gold))]">
                      <Car className="inline h-5 w-5 mr-2" />
                      Letiskové transfery
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Letisko Sliač: 25€</li>
                      <li>• Bratislava airport: 120€</li>
                      <li>• Viedeň airport: 150€</li>
                      <li>• Budapešť airport: 140€</li>
                      <li>• Košice airport: 180€</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-[hsl(var(--military-gold))]/10 rounded-lg">
                  <p className="text-center text-sm">
                    <strong>Fixné ceny • Žiadne skryté poplatky • Platba v hotovosti alebo kartou</strong>
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
            Často kladené otázky - Taxi Lešť
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="tactical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Koľko stojí taxi z Lešti do Zvolena?</h3>
                <p className="text-muted-foreground">
                  Taxi z Lešti do Zvolena stojí 8€. Cena je fixná a nezávisí od času jazdy či dopravnej situácie.
                </p>
              </CardContent>
            </Card>

            <Card className="tactical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Ako si objednám taxi v Lešti?</h3>
                <p className="text-muted-foreground">
                  Taxi si môžete objednať telefonicky na +421 919 040 118 alebo cez WhatsApp. Sme dostupní 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="tactical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Jazdia taxi z Lešti na letisko Sliač?</h3>
                <p className="text-muted-foreground">
                  Áno, poskytujeme transfery na letisko Sliač za 25€. Rezervácia vopred je odporúčaná.
                </p>
              </CardContent>
            </Card>

            <Card className="tactical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Môžem platiť kartou v taxi?</h3>
                <p className="text-muted-foreground">
                  Áno, akceptujeme platby kartou aj hotovosť. Všetky ceny sú konečné bez dodatočných poplatkov.
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
            Kontakt - Taxi Lešť
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
              Sme k dispozícii 24 hodín denne, 7 dní v týždni<br/>
              Obsluha v slovenčine, angličtine a češtine
            </p>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
};

export default TaxiLest;