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
        setPaths(uniqueSorted);
      } catch (e) {
        setPaths([]);
      }
    };

    loadSitemap();
  }, []);

  return (
    <main>
      <h1>Sitemap</h1>
      <ul>
        {paths.map((p) => (
          <li key={p}>
            <a href={p}>{p}</a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Sitemap;

