import { Link } from "react-router-dom";

export const TextLinksSection = () => {
  const linkCategories = [
    {
      title: "Letiskové transfery",
      links: [
        { text: "Transfer na letisko Viedeň", href: "/taxi-vienna-airport" },
        { text: "Transport na letisko Budapešť", href: "/taxi-budapest-airport" },
        { text: "Letiskový transfer Slovensko", href: "/airport-transport-slovakia" },
        { text: "Transfer na bratislavské letisko", href: "/airport-transfer" }
      ]
    },
    {
      title: "Mestské taxi služby",
      links: [
        { text: "Taxi Banská Bystrica centrum", href: "/taxi-banska-bystrica" },
        { text: "Taxi Bratislava služby", href: "/taxi-bratislava" },
        { text: "Taxi Staré Mesto Bratislava", href: "/taxi-stare-mesto" },
        { text: "Transport Budapešť", href: "/budapest-military-transport" }
      ]
    },
    {
      title: "Vojenské služby",
      links: [
        { text: "Taxi pre vojakov základňa Lešť", href: "/military-base-pickup" },
        { text: "Vojenský nákupný transport", href: "/military-shopping" },
        { text: "Transport pre vojenské ubytovanie", href: "/military-accommodation-transport" },
        { text: "Vojenské letiskové transfery", href: "/airport-military" }
      ]
    },
    {
      title: "Informačné stránky",
      links: [
        { text: "Cenník taxi služieb", href: "/price-list" },
        { text: "Naša flotila vozidiel", href: "/fleet" },
        { text: "Často kladené otázky", href: "/faq" },
        { text: "Pomoc a podpora", href: "/help" }
      ]
    }
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-[hsl(var(--muted))]/50 to-[hsl(var(--muted))]/20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 combat-text">
          Všetky naše taxi služby na Slovensku
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {linkCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-lg font-semibold text-[hsl(var(--military-gold))] border-b border-[hsl(var(--military-gold))]/30 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href}
                      className="text-sm hover:text-[hsl(var(--military-gold))] transition-colors hover:underline block py-1"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};