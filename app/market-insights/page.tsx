import Navbar from "@/components/Navbar";
// app/market-insights/page.tsx already has this:
import { marketInsights, lastUpdated } from "@/data/market-insights";


const insights = [
  {
    title: "Rates & Credit Risk",
    detail:
      "Higher-for-longer rates continue to pressure funding costs, credit spreads, and borrower affordability. Banks are repricing risk accordingly and tightening underwriting standards.",
    signal: "Bearish for credit",
  },
  {
    title: "Banking & Risk Analytics",
    detail:
      "Banks are investing heavily in risk data pipelines, stress testing infrastructure, and model governance controls. Regulatory expectations around model documentation and validation are rising.",
    signal: "Structural shift",
  },
  {
    title: "Trade Surveillance",
    detail:
      "Surveillance teams are moving toward explainable alerts, anomaly detection, and AI-assisted investigation workflows. Regulators are scrutinizing surveillance coverage and alert resolution quality.",
    signal: "Tech-driven upgrade",
  },
  {
    title: "Capital Markets",
    detail:
      "Volatility in rates and FX continues to drive activity in derivatives and hedging. Risk teams are focused on real-time exposure monitoring and collateral management.",
    signal: "Active environment",
  },
  {
    title: "Regulatory Environment",
    detail:
      "Basel IV implementation timelines are creating pressure around capital modeling, data quality, and model validation. Firms are investing in compliance infrastructure ahead of deadlines.",
    signal: "High compliance focus",
  },
  {
    title: "Data & Technology",
    detail:
      "Cloud migration for risk data platforms is accelerating. Real-time data pipelines, lakehouse architectures, and ML-enabled risk analytics are becoming standard at larger institutions.",
    signal: "Investment cycle",
  },
];

export default function MarketInsightsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-10">
      <Navbar />

      <section className="max-w-5xl mx-auto pt-12 pb-10">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
          Personal Views
        </p>
        <h1 className="text-5xl font-bold mb-4">Market Insights</h1>
        <p className="text-gray-300 max-w-3xl">
          My personal views on rates, credit, banking analytics, trade
          surveillance, and financial technology trends. Updated periodically.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-800 bg-gray-900/70 p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="ml-3 shrink-0 text-xs bg-blue-900/60 text-blue-300 border border-blue-800 rounded px-2 py-1">
                  {item.signal}
                </span>
              </div>
              <p className="text-sm text-gray-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto border-t border-gray-800 pt-8 pb-12">
        <p className="text-xs text-gray-600">
          These are personal views only and do not constitute financial advice or
          represent the views of any employer or institution.
        </p>
      </section>
    </main>
  );
}