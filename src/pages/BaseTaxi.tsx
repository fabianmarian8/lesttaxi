import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Shield, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BaseTaxi = () => {
  const priceList = [
    { destination: "Lešť Base to Sliač Airport", price: "€55", time: "40 min" },
    { destination: "Lešť Base to Zvolen City Center", price: "€45", time: "30 min" },
    { destination: "Lešť Base to Banská Bystrica", price: "€70", time: "45 min" },
    { destination: "Lešť Base to Budapest Airport", price: "€200", time: "2.5 hours" },
    { destination: "Gate Pick-up Service", price: "", time: "30-45 min" },
  ];

  const faqItems = [
    {
      question: "What are the base gate hours for taxi pick-up?",
      answer: "We provide 24/7 service. For security reasons, we coordinate with base security for gate access. We recommend scheduling pick-ups at least 30 minutes in advance for smooth processing."
    },
    {
      question: "Do you accept US Dollars and military payment cards?",
      answer: "Yes, we accept both USD and EUR cash payments. We also accept major credit cards including military Star Cards and USAA cards for your convenience."
    },
    {
      question: "Is military ID required for base transportation?",
      answer: "Military ID is required for base access. Our drivers are familiar with base security protocols and will assist with the check-in process at the gate."
    }
  ];

  // JSON-LD structured data for FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(46,90%,45%)] text-white py-3 px-6 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
                alt="FRANKO TAXI Logo" 
                className="h-12 w-12 rounded-full bg-white p-1"
              />
              <span className="font-bold text-lg">LEST TAXI</span>
            </Link>
            <Button variant="whatsapp" size="sm" onClick={() => window.open('https://wa.me/421919040118', '_blank')}>
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-[hsl(var(--military-gold))]/10 via-background to-[hsl(var(--military-green))]/10">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6 text-foreground">
                Taxi to Lešť Military Base 24/7
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Reliable transportation service for American military personnel stationed at Lešť Base. 
                We understand military schedules, base protocols, and provide secure, professional transport 
                24 hours a day, 7 days a week.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  onClick={() => window.open('https://wa.me/421919040118', '_blank')}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Book on WhatsApp
                </Button>
                <Button variant="secondary" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call +421 919 040 118
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Base Taxi Service?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                  <CardTitle>24/7 Availability</CardTitle>
                  <CardDescription>Always ready for your military schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Early morning flights, late night arrivals, or emergency transport - we're always ready to serve our military personnel.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                  <CardTitle>Base Security Clearance</CardTitle>
                  <CardDescription>Familiar with military protocols</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our drivers understand base security requirements and will assist with gate procedures and identification verification.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                  <CardTitle>Gate Pick-up Service</CardTitle>
                  <CardDescription>Direct pickup from base entrance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We pick you up directly at the base gate, saving you time and ensuring smooth transitions for your transportation needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Price List */}
        <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--military-green))]/5 to-[hsl(var(--military-gold))]/5">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Fixed Price List</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Transparent Pricing - No Hidden Fees</CardTitle>
                  <CardDescription>All prices include fuel, tolls, and professional service</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {priceList.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                        <div>
                          <h4 className="font-semibold">{item.destination}</h4>
                          <p className="text-sm text-muted-foreground">Travel time: {item.time}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-[hsl(var(--military-gold))]">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-[hsl(var(--military-gold))]/10 rounded-lg">
                    <p className="text-sm text-center">
                      <strong>Payment Options:</strong> USD Cash • EUR Cash • Credit Cards • Military Star Cards • USAA Cards
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--whatsapp-green))] to-[hsl(142,60%,45%)] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Transport?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your ride now for immediate or scheduled pickup from Lešť Military Base
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-xl px-12 py-6 h-auto bg-white text-[hsl(var(--whatsapp-green))] hover:bg-white/90"
              onClick={() => window.open('https://wa.me/421919040118', '_blank')}
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Book on WhatsApp
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BaseTaxi;