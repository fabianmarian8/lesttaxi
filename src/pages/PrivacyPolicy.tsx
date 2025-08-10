import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
  useSEO({
    title: "Privacy Policy | LEST TAXI",
    description:
      "Privacy Policy for LEST TAXI: how we collect, use, and protect your personal data in line with GDPR and best practices.",
    canonical: "https://www.lesttaxi.com/privacy-policy",
    robots: "index,follow",
  });

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose prose-invert max-w-3xl text-muted-foreground">
          <p>
            At LEST TAXI we care deeply about your privacy. This Privacy Policy explains what
            personal data we collect, how we use it, and the choices you have. We process
            personal data in accordance with the General Data Protection Regulation (GDPR) and
            applicable Slovak law.
          </p>
          <p>
            We collect information you provide when booking a ride or contacting us (such as
            name, phone number, email, pickup and drop‑off details), as well as basic technical
            data like IP address and device information for security and analytics.
          </p>
          <p>
            We use this data to provide and improve our services, confirm bookings, send service
            updates, ensure safety, prevent fraud, and comply with legal obligations. We do not
            sell your personal data.
          </p>
          <p>
            We only keep data for as long as necessary for the purposes described. Access to
            personal data is limited to trained staff and trusted service providers (for example,
            hosting, analytics, or payment partners) who are bound by contracts and process the
            data only under our instructions.
          </p>
          <p>
            You have the right to access, correct, erase, or restrict processing of your personal
            data, the right to data portability, and the right to object to certain processing.
            Where we rely on consent, you can withdraw it at any time.
          </p>
          <p>
            We apply appropriate technical and organizational measures to protect your personal
            data against accidental or unlawful destruction, loss, alteration, unauthorized
            disclosure, or access.
          </p>
          <p>
            This policy may be updated to reflect changes in our practices or legal requirements.
            Significant changes will be highlighted on this page. Continued use of our services
            after an update constitutes acceptance of the revised policy.
          </p>
          <p>
            Contact: +421 919 040 118
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
