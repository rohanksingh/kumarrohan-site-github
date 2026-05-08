import Navbar from "@/components/Navbar";

const researchItems = [
  {
    title: "Trade Surveillance Whitepaper",
    description:
      "Framework for detecting market abuse using surveillance rules, analytics, and explainable alerting.",
    link: "/research/trade-surveillance-whitepaper.pdf",
    tag: "Whitepaper",
  },
  {
    title: "Model Governance & AI Risk",
    description:
      "Research on model risk controls, AI governance, validation, and monitoring aligned with financial services expectations.",
    link: "/research/model-governance-ai-risk.pdf",
    tag: "Whitepaper",
  },
  {
    title: "SSRN Publication",
    description:
      "Published research covering analytics, risk, and governance topics in financial services.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6576018",
    tag: "Publication",
  },
];

const topics = [
  "Trade Surveillance & Market Abuse Detection",
  "Credit Risk Modeling (PD / LGD / EAD)",
  "AI Governance & Model Risk Management",
  "Stress Testing & CCAR Scenarios",
  "Data Engineering for Risk Analytics",
  "Explainability in Financial ML Models",
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-10">
      <Navbar />

      <section className="max-w-5xl mx-auto pt-12 pb-10">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
          Research & Publications
        </p>
        <h1 className="text-5xl font-bold mb-4">Research</h1>
        <p className="text-gray-300 max-w-3xl">
          Frameworks, whitepapers, and published work on risk analytics, trade
          surveillance, model governance, and AI in financial services.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {researchItems.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-gray-800 bg-gray-900/70 p-6 hover:border-blue-400 hover:-translate-y-1 transition"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
                {item.tag}
              </span>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{item.description}</p>
              <span className="text-sm text-blue-300 underline">Read →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Research Focus Areas</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {topics.map((topic) => (
            <li
              key={topic}
              className="flex items-start gap-3 rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-sm text-gray-300"
            >
              <span className="mt-0.5 text-blue-400">▸</span>
              {topic}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}