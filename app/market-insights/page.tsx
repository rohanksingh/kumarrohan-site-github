"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

type Insight = {
  title: string;
  detail: string;
  signal: string;
  url?: string;
  publishedAt?: string;
};

const fallbackInsights: Insight[] = [
  {
    title: "Rates & Credit Risk",
    detail:
      "Higher-for-longer rates continue to pressure funding costs, credit spreads, and borrower affordability.",
    signal: "Credit pressure",
  },
];

export default function MarketInsightsPage() {
  const [insights, setInsights] = useState<Insight[]>(fallbackInsights);
  const [lastUpdated, setLastUpdated] = useState<string>("Static fallback");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/market-insights")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.insights) && data.insights.length > 0) {
          setInsights(data.insights);
        }

        if (data.lastUpdated) {
          setLastUpdated(new Date(data.lastUpdated).toLocaleString());
        }
      })
      .catch(() => {
        setInsights(fallbackInsights);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-10">
      <Navbar />

      <section className="max-w-5xl mx-auto pt-12 pb-10">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
        </p>

        <h1 className="text-5xl font-bold mb-4">Market Insights</h1>

        <p className="text-gray-300 max-w-3xl">
          Tracking rates, credit risk, banking analytics, capital markets,
          regulatory themes, and financial technology trends.
        </p>

        <p className="text-xs text-gray-500 mt-3">
          {loading ? "Loading latest market insights..." : `Last updated: ${lastUpdated}`}
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((item) => (
            <a
              key={item.title}
              href={item.url || "#"}
              target={item.url ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-800 bg-gray-900/70 p-6 hover:border-blue-400 hover:-translate-y-1 transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <span className="ml-3 shrink-0 text-xs bg-blue-900/60 text-blue-300 border border-blue-800 rounded px-2 py-1">
                  {item.signal}
                </span>
              </div>

              <p className="text-sm text-gray-400">{item.detail}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto border-t border-gray-800 pt-8 pb-12">
        <p className="text-xs text-gray-600">
          These insights are based on publicly available news sources and do not
          constitute financial advice or represent the views of any employer or institution.
        </p>
      </section>
    </main>
  );
}