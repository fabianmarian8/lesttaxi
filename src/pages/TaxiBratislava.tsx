import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, MessageCircle, Car, Users, Euro, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const TaxiBratislava = () => {
  useSEO({
    title: "Taxi Bratislava – rýchle spojenie po celom meste | LEST TAXI",
    description: "Profesionálne taxi služby v Bratislave. Rýchle spojenie po celom meste, na letisko a okolie. Fixné ceny, spoľahlivé služby 24/7. Rezervácia cez WhatsApp +421 919 040 118",
    keywords: "taxi Bratislava, taxi služby Bratislava, letisko Bratislava, Staré Mesto taxi, prevoz Bratislava, taxi na letisko",
    canonical: "https://lesttaxi.com/taxi-bratislava",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "LEST TAXI - Taxi Bratislava",
      "description": "Profesionálne taxi služby v Bratislave a okolí",
      "url": "https://lesttaxi.com/taxi-bratislava",
      "telephone": "+421919040118",
      "serviceArea": {
        "@type": "City",
        "name": "Bratislava",
        "addressCountry": "SK",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Bratislavský kraj"
        }
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Staré Mesto, Bratislava"
        },
        {
          "@type": "Place", 
          "name": "Nové Mesto, Bratislava"
        },
        {
          "@type": "Place",
          "name": "Ružinov, Bratislava"
        },
        {
          "@type": "Place",
          "name": "Petržalka, Bratislava"
        },
        {
          "@type": "Place",
          "name": "Letisko M. R. Štefánika"
        }
      ],
      "priceRange": "€15-€45",
      "availableLanguage": ["Slovak", "English"],
      "openingHours": "Mo-Su 00:00-23:59"
    }
  });

  const districts = [
    {
      name: "Staré Mesto",
      description: "Historické centrum s pamiatkami",
      price: "€15-20",
      attractions: ["Bratislavský hrad", "Hlavné námestie", "Michalská brána"]
    },
    {
      name: "Nové Mesto", 
      description: "Obchodné centrum a nákupné zóny",
      price: "€18-25",
      attractions: ["Eurovea", "Central", "Aupark"]
    },
    {
      name: "Ružinov",
      description: "Moderné bývanie a kancelárie",
      price: "€20-30",
      attractions: ["Avion Shopping Park", "Ondrej Nepela Arena"]
    },
    {
      name: "Petržalka",
      description: "Najväčšia mestská časť",
      price: "€25-35",
      attractions: ["Aupark", "Sad Janka Kráľa", "Shopping Palace"]
    }
  ];

  const faqs = [
    {
      question: "Ako dlho trvá jazda z centra na letisko?",
      answer: "Jazda z centra Bratislavy na letisko M. R. Štefánika trvá približne 20-30 minút v závislosti od dopravnej situácie."
    },
    {
      question: "Aké sú ceny za taxi v Bratislave?",
      answer: "Naše ceny sú fixné a transparentné. Jazda po centre €15-20, na letisko €25-30, do vzdialenejších častí €25-45."
    },
    {
      question: "Môžem si rezervovať taxi vopred?",
      answer: "Áno, môžete si rezervovať taxi vopred cez WhatsApp alebo telefonicky. Ponúkame aj pravidelné prevozné služby."
    },
    {
      question: "Pracujete 24 hodín denne?",
      answer: "Áno, naše služby sú dostupné 24/7, vrátane víkendov a sviatkov."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] text-background py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <OptimizedImage 
              src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
              alt="LEST TAXI Logo" 
              className="h-16 w-16 rounded-full bg-white/10 p-2"
              width={64}
              height={64}
            />
            <span className="font-bold text-xl">LEST TAXI</span>
          </Link>
          <Button variant="whatsapp" size="sm" onClick={() => window.open('https://wa.me/421919040118', '_blank')}>
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--card))] to-[hsl(var(--muted))]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 combat-text">
              Taxi Bratislava – Rýchle spojenie po celom meste
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Profesionálne taxi služby v Bratislave a okolí. Spoľahlivé prevozné služby 
              do všetkých mestských častí, na letisko a do okolitých miest.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={() => window.open('https://wa.me/421919040118', '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Rezervovať cez WhatsApp
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/price-list">
                  <Euro className="h-5 w-5 mr-2" />
                  Cenník
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mestské časti Bratislavy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {districts.map((district, index) => (
              <Card key={index} className="tactical-card hover-scale">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--military-gold))]">{district.name}</CardTitle>
                  <CardDescription>{district.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Euro className="h-4 w-4 text-[hsl(var(--military-gold))]" />
                      <span className="font-semibold">{district.price}</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Hlavné atrakcie:</h4>
                      <ul className="text-sm space-y-1">
                        {district.attractions.map((attraction, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-[hsl(var(--military-gold))]" />
                            {attraction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--muted))] to-[hsl(var(--card))]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Prečo si vybrať naše taxi služby?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                <CardTitle>24/7 Dostupnosť</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Naše služby sú dostupné nepretržite, každý deň v roku.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Euro className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                <CardTitle>Fixné ceny</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transparentné cenníky bez skrytých poplatkov.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Car className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                <CardTitle>Moderný vozový park</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Čisté, pohodlné vozidlá s profesionálnymi vodičmi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Často kladené otázky</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--whatsapp-green))] to-[hsl(var(--tactical-orange))] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Potrebujete taxi v Bratislave?</h2>
          <p className="text-xl mb-8 opacity-90">
            Kontaktujte nás pre rýchlu a spoľahlivú prepravu po celej Bratislave
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-[hsl(var(--whatsapp-green))] hover:bg-white/90"
              onClick={() => window.open('https://wa.me/421919040118', '_blank')}
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              WhatsApp +421 919 040 118
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-[hsl(var(--tactical-orange))] hover:bg-white/90"
              asChild
            >
              <Link to="/">
                <Phone className="h-6 w-6 mr-3" />
                Hlavná stránka
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </div>
  );
};

export default TaxiBratislava;