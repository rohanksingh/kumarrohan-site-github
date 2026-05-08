import Navbar from "@/components/Navbar";

// app/ai-news-radar/page.tsx already has this:
import { radarItems1, lastUpdated } from "@/data/ai-news-radar";

const radarItems = [
  {
    title: "AI Governance in Financial Services",
    detail:
      "Financial institutions are increasing focus on AI model validation, explainability, and compliance monitoring. Regulators in the US and EU are issuing guidance on responsible AI use in banking.",
    category: "Governance",
  },
  {
    title: "LLMs in Banking Operations",
    detail:
      "LLMs are being piloted for document review, alert triage, research summarization, and operational automation. Early deployments show promise in reducing manual workload in compliance and risk functions.",
    category: "LLMs",
  },
  {
    title: "Agentic AI for Surveillance",
    detail:
      "Agentic AI workflows are emerging as a tool for trade surveillance — reasoning through alert patterns, pulling context, and generating explainable summaries for human reviewers.",
    category: "Trade Surveillance",
  },
  {
    title: "Skills Signal: What's in Demand",
    detail:
      "Python, data engineering, model risk management, and AI governance skills are converging. Roles at the intersection of quantitative finance, compliance, and ML are growing rapidly.",
    category: "Jobs & Skills",
  },
  {
    title: "Model Risk Management (MRM) + AI",
    detail:
      "Traditional MRM frameworks are being extended to cover AI and ML models. SR 11-7 guidance is being revisited in light of generative AI, and banks are building new validation playbooks.",
    category: "Model Risk",
  },
  {
    title: "Synthetic Data for Risk Modeling",
    detail:
      "Synthetic data generation is gaining traction as a way to train and test risk models while preserving privacy. Applications in credit risk, fraud detection, and stress testing are expanding.",
    category: "Data",
  },
];

export default function AINewsRadarPage() {
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
          Observations are based on publicly available information and personal analysis. Not financial or investment advice.
        </p>
      </section>
    </main>
  );
}