import { useEffect, useState } from "react";
import { useSEO } from "@/hooks/useSEO";

const Sitemap = () => {
  const [paths, setPaths] = useState<string[]>([]);

  useSEO({
    title: "Sitemap | LEST TAXI",
    description: "Zoznam všetkých stránok webu podľa sitemap.xml.",
    canonical: "https://www.lesttaxi.com/sitemap",
  });

  useEffect(() => {
    const loadSitemap = async () => {
      try {
        const res = await fetch("/sitemap.xml", { cache: "no-store" });
        const xmlText = await res.text();
        const doc = new DOMParser().parseFromString(xmlText, "application/xml");
        const locs = Array.from(doc.getElementsByTagName("loc"))
          .map((n) => n.textContent?.trim() || "")
          .filter(Boolean);

        const toPath = (loc: string) => {
          try {
            const u = new URL(loc);
            return u.pathname || "/";
          } catch {
            // Fallback: strip domain manually
            return (
              "/" + loc.replace(/^https?:\/\/[^/]+/, "").replace(/^\/*/, "")
            );
          }
        };

        const uniqueSorted = Array.from(new Set(locs.map(toPath))).sort(
          (a, b) => a.localeCompare(b)
        );

        // Move KFC and McDonalds links to the end
        const hiddenAtEnd = ["/kfc-delivery", "/mcdonalds-delivery"];
        const others = uniqueSorted.filter(p => !hiddenAtEnd.includes(p));
        const endOnes = hiddenAtEnd.filter(p => uniqueSorted.includes(p));
        setPaths([...others, ...endOnes]);
      } catch (e) {
        setPaths([]);
      }
    };

    loadSitemap();
  }, []);

  return (
    <main>
      <section aria-labelledby="sitemap-heading" className="container mx-auto px-6 py-12">
        <h1 id="sitemap-heading" className="text-3xl font-bold mb-8">Sitemap</h1>
        <ul className="grid gap-6 md:grid-cols-2">
          {paths.map((p) => {
            const hideLikeBg = p === "/kfc-delivery" || p === "/mcdonalds-delivery";
            const descriptions: Record<string, string> = {
              "/": "Domovská stránka LEST TAXI s informáciami o službách a objednávkou jazdy.",
              "/airport-transfer": "Letiskové transfery do/z Viedne, Budapešti, Bratislavy a ďalších letísk s fixnými cenami.",
              "/price-list": "Aktuálny cenník taxi a letiskových transferov s prehľadnými tarifami.",
              "/taxi-bratislava": "Taxi Lešť – Bratislava a späť, pohodlné spojenie pre vojakov aj civilistov.",
              "/taxi-vienna-airport": "Priame spojenie na Letisko Viedeň-Schwechat, monitoring letov a spoľahlivé vyzdvihnutie.",
              "/airport-transport-slovakia": "Doprava na všetky slovenské letiská a späť – na čas, bezpečne a za férové ceny.",
              "/taxi-banska-bystrica": "Taxi služby v Banskej Bystrici a okolí s rýchlym dojazdom a čistými vozidlami.",
              "/banska-bystrica-military-taxi": "Špecializované taxi pre vojakov a personál pri Základni Lešť a v Banskej Bystrici.",
              "/airport-military": "Koordinované transfery pre vojenské jednotky medzi letiskami a Základňou Lešť.",
            };
            const label = p;
            const desc = descriptions[p] || `Stránka ${p} – informácie o našich službách a možnostiach prepravy.`;
            return (
              <li key={p} className="space-y-1">
                <a href={p} className={hideLikeBg ? "text-background" : "text-primary hover:underline"}>{label}</a>
                <p className={hideLikeBg ? "text-background" : "text-muted-foreground text-sm"}>{desc}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Sitemap;

