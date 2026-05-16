"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

type RadarItem = {
  title: string;
  detail: string;
  category: string;
};

const fallbackRadarItems: RadarItem[] = [
  {
    title: "AI Governance in Financial Services",
    detail:
      "Financial institutions are increasing focus on AI model validation, explainability, and compliance monitoring.",
    category: "Governance",
  },
];

export default function AINewsRadarPage() {
  const [radarItems, setRadarItems] = useState<RadarItem[]>(fallbackRadarItems);
  const [lastUpdated, setLastUpdated] = useState<string>("Static fallback");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/ai-news-radar")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.radarItems)) {
          setRadarItems(data.radarItems);
        }

        if (data.lastUpdated) {
          setLastUpdated(new Date(data.lastUpdated).toLocaleString());
        }
      })
      .catch(() => {
        setRadarItems(fallbackRadarItems);
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
          Tracking AI in Finance
        </p>

        <h1 className="text-5xl font-bold mb-4">AI News Radar</h1>

        <p className="text-gray-300 max-w-3xl">
          Tracking how artificial intelligence, LLMs, and agentic systems are
          reshaping risk analytics, compliance, and financial services operations.
        </p>

        <p className="text-xs text-gray-500 mt-3">
          {loading ? "Generating latest AI radar..." : `Last updated: ${lastUpdated}`}
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {radarItems.map((item) => (
            <div
              key={item.title} 
              className="rounded-xl border border-gray-800 bg-gray-900/70 p-6"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
                {item.category}
              </span>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              <p className="text-sm text-gray-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto border-t border-gray-800 pt-8 pb-12">
        <p className="text-xs text-gray-600">
          Observations are generated using a local Llama model and are for
          informational purposes only. Not financial or investment advice.
        </p>
      </section>
    </main>
  );
}