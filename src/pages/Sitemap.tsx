import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

const Sitemap = () => {
  const importantLinks = [
    { to: "/", label: "Domov" },
    { to: "/airport-transfer", label: "Letiskové transfery" },
    { to: "/price-list", label: "Cenník taxi Lešť" },
    { to: "/taxi-bratislava", label: "Taxi Lešť → Bratislava" },
    { to: "/taxi-vienna-airport", label: "Taxi Lešť → Vienna Airport (VIE)" },
    { to: "/taxi-budapest-airport", label: "Taxi Lešť → Budapest Airport (BUD)" },
  ];

  const otherLinks = [
    { to: "/taxi-banska-bystrica", label: "Taxi Banská Bystrica" },
    { to: "/fleet", label: "Flotila" },
    { to: "/faq", label: "FAQ" },
    { to: "/help", label: "Help" },
    { to: "/feedback", label: "Feedback" },
  ];

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [...importantLinks, ...otherLinks].map((l, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://www.lesttaxi.com${l.to}`,
      "name": l.label,
    })),
  };

  useSEO({
    title: "Sitemap | LEST TAXI",
    description: "Sitemap – rýchle odkazy na najdôležitejšie stránky: letiskové transfery, cenník, Bratislava, Vienna a Budapest Airport.",
    canonical: "https://www.lesttaxi.com/sitemap",
    jsonLd: itemList,
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="py-10 px-6 bg-gradient-to-br from-[hsl(var(--combat-green))]/20 to-[hsl(var(--military-gold))]/10 border-b">
        <div className="container mx-auto">
          <h1 className="text-4xl font-black combat-text">Sitemap – rýchle odkazy</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Nájdite rýchlo dôležité stránky nášho webu. Všetky odkazy sú interné a bezpečné pre prehliadanie.
          </p>
        </div>
      </header>

      <section className="py-12 px-6">
        <div className="container mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--military-gold))]">Populárne trasy</h2>
            <nav className="grid gap-2">
              {importantLinks.map((l) => (
                <Link key={l.to} to={l.to} className="tactical-card p-4 hover:scale-[1.01] transition">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--military-gold))]">Ďalšie stránky</h2>
            <nav className="grid gap-2">
              {otherLinks.map((l) => (
                <Link key={l.to} to={l.to} className="tactical-card p-4 hover:scale-[1.01] transition">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sitemap;
