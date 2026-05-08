import Navbar from "@/components/Navbar";

const projects = [
  {
    title: "Agentic Trade Surveillance System",
    description:
      "LLM-driven surveillance workflow for detecting different trading patterns. Uses agentic reasoning to triage alerts and generate explainable findings.",
    link: "https://github.com/rohanksingh/AIAgent",
    tags: ["Python", "LLM", "Trade Surveillance"],
  },
  {
    title: "Credit Risk Modeling Platform",
    description:
      "End-to-end PD modeling platform with feature engineering, stress scenarios, and model monitoring for credit risk analytics aligned with regulatory expectations.",
    link: "https://github.com/rohanksingh/creditrisk",
    tags: ["Python", "Scikit-learn", "Credit Risk"],
  },
  {
    title: "PPNR / CCAR Risk Modeling Platform",
    description:
      "Scenario-based risk platform for stress testing, revenue projection, and CCAR-style analytics. Supports macro scenario overlays and model-based forecasting.",
    link: "https://github.com/rohanksingh/ccar",
    tags: ["Python", "CCAR", "Stress Testing"],
  },
  {
    title: "Enterprise Data Platform Pipeline",
    description:
      "End-to-end data pipeline with bronze, silver, and gold layers including validation, reconciliation, and analytics output for financial data workflows.",
    link: "https://github.com/rohanksingh/Enterprise-data-platform-pipeline",
    tags: ["Python", "SQL", "Data Engineering"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-10">
      <Navbar />

      <section className="max-w-5xl mx-auto pt-12 pb-10">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
          Open Source & Portfolio
        </p>
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <p className="text-gray-300 max-w-3xl">
          Selected work in risk analytics, trade surveillance, credit risk
          modeling, and data engineering. All projects are available on GitHub.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-gray-800 bg-gray-900/70 p-6 hover:border-blue-400 hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-800 text-gray-300 rounded px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-sm text-blue-300 underline">
                View on GitHub →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto border-t border-gray-800 pt-8 pb-12">
        <p className="text-gray-400 mb-4">
          More work available on GitHub including notebooks, experiments, and utilities.
        </p>
        <a
          href="https://github.com/rohanksingh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg border border-gray-700 px-5 py-3 font-semibold hover:bg-gray-900 transition"
        >
          View All on GitHub →
        </a>
      </section>
    </main>
  );
}