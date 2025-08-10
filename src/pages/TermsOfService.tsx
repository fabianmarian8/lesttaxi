import { useSEO } from "@/hooks/useSEO";

const TermsOfService = () => {
  useSEO({
    title: "Terms of Service | LEST TAXI",
    description:
      "Terms of Service for LEST TAXI: booking rules, responsibilities, payments, cancellations, and limitations of liability.",
    canonical: "https://www.lesttaxi.com/terms-of-service",
    robots: "index,follow",
  });

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
        <div className="prose prose-invert max-w-3xl text-muted-foreground">
          <h2>Services</h2>
          <p>
            By booking or riding with LEST TAXI, you agree to these terms. We provide taxi and
            transfer services as described on our website. Please ensure all booking details are
            accurate.
          </p>
          <h2>Payments</h2>
          <p>
            Prices are communicated before confirmation. Payment can be made via the accepted
            methods listed on our website or directly to the driver. Any additional charges are
            communicated in advance.
          </p>
          <h2>Cancellations</h2>
          <p>
            Cancellations and changes are subject to our policy communicated at booking; certain
            bookings may have cut‑off times or fees.
          </p>
          <h2>Liability</h2>
          <p>
            We always aim to be punctual, but traffic, weather, and operational factors can
            affect timing. LEST TAXI is not liable for indirect or consequential losses arising
            from delays or missed connections. Passengers must comply with local laws and our
            safety instructions.
          </p>
          <h2>Contact</h2>
          <p>For questions or concerns, contact LEST TAXI at +421 919 040 118.</p>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
