import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a taxi from Lešť Military Base?",
      answer: "Booking is easy! You can contact us via WhatsApp at +421 919 040 118, call us directly, or use our online booking form. We recommend booking 30 minutes in advance for base pickups to coordinate with security protocols."
    },
    {
      question: "Where do you pick up passengers from the base?",
      answer: "We meet you at the tennis court parking area near the upper gate. We do not have clearance to enter the military facility, so please walk to the tennis court parking area where our driver will be waiting for you."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept EUR cash, plus all major credit cards including Visa, Mastercard, American Express, Military Star Cards, and USAA cards. Payment is due at the end of your journey."
    },
    {
      question: "How much notice do you need for airport transfers?",
      answer: "For airport transfers, we recommend booking at least 2 hours in advance. For international flights, we suggest 3-4 hours notice. We track your flight status and adjust pickup times for delays automatically."
    },
    {
      question: "Do you provide 24/7 service for emergencies?",
      answer: "Absolutely! We operate 24/7, 365 days a year. For emergency transport, medical appointments, or urgent travel needs, call us anytime. We understand military schedules don't follow normal business hours."
    },
    {
      question: "Are there discounts for military units or group bookings?",
      answer: "Yes! We offer 10% discount for 5+ rides, 15% for 10+ rides, and 20% for monthly service contracts. Perfect for unit deployments, group airport transfers, or regular base transportation needs."
    }
  ];

  // JSON-LD structured data for FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
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
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Questions Soldiers Ask Most
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get quick answers to the most common questions about our taxi service for military personnel. 
              Can't find what you're looking for? Contact us directly for personalized assistance.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <HelpCircle className="h-5 w-5" />
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-start gap-3">
                      <HelpCircle className="h-6 w-6 text-[hsl(var(--military-gold))] mt-1 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed pl-9">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Help Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--military-green))]/5 to-[hsl(var(--military-gold))]/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-[hsl(var(--military-gold))]/10 to-[hsl(var(--military-green))]/10">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Still Have Questions?</CardTitle>
                  <CardDescription>We're here to help 24/7</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-muted-foreground">
                    Our team understands the unique needs of military personnel and is always ready to assist with any questions or special requirements you might have.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-background rounded-lg">
                      <h4 className="font-semibold mb-2">WhatsApp Chat</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Instant messaging for quick questions
                      </p>
                      <Button 
                        variant="whatsapp" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open('https://wa.me/421919040118', '_blank')}
                      >
                        Chat Now
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-background rounded-lg">
                      <h4 className="font-semibold mb-2">Phone Call</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Direct line for immediate assistance
                      </p>
                      <Button variant="secondary" size="sm" className="w-full">
                        +421 919 040 118
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-background rounded-lg">
                      <h4 className="font-semibold mb-2">Email Support</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Detailed inquiries and documentation
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        frankotaxi@gmail.com
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Emergency Contact</h4>
                    <p className="text-sm text-muted-foreground">
                      For urgent transport needs outside normal hours, call our 24/7 emergency line: 
                      <span className="font-semibold text-[hsl(var(--military-gold))]"> +421 919 040 118</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Helpful Resources</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/price-list">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2">Price List</h4>
                    <p className="text-sm text-muted-foreground">View all our transparent pricing</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/fleet">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2">Our Fleet</h4>
                    <p className="text-sm text-muted-foreground">See our vehicles and equipment</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/airport-transfer">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2">Airport Transfers</h4>
                    <p className="text-sm text-muted-foreground">Flight tracking and scheduling</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/base-taxi">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2">Base Transport</h4>
                    <p className="text-sm text-muted-foreground">Military base pickup service</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--whatsapp-green))] to-[hsl(142,60%,45%)] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Book Your Ride?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get instant answers and book your taxi in seconds on WhatsApp
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-xl px-12 py-6 h-auto bg-white text-[hsl(var(--whatsapp-green))] hover:bg-white/90"
              onClick={() => window.open('https://wa.me/421919040118', '_blank')}
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Start Chat on WhatsApp
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;