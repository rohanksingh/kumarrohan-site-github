import Navbar from "@/components/Navbar";

const projects = [
  {
    title: "Agentic Trade Surveillance System",
    description:
      "LLM-driven surveillance workflow for detecting wash trades, spoofing, and suspicious trading patterns.",
    link: "https://github.com/rohanksingh/agentic-trade-surveillance",
  },
  {
    title: "Credit Risk Modeling Platform",
    description:
      "PD modeling, feature engineering, stress scenarios, and model monitoring for credit risk analytics.",
    link: "https://github.com/rohanksingh/credit-risk-platform",
  },
  {
    title: "PPNR / CCAR Risk Modeling Platform",
    description:
      "Scenario-based risk platform for stress testing, revenue projection, and CCAR-style analytics.",
    link: "https://github.com/rohanksingh/ppnr-risk-platform",
  },
  {
    title: "Enterprise Data Platform Pipeline",
    description:
      "End-to-end data pipeline with bronze, silver, gold layers, validation, reconciliation, and analytics output.",
    link: "https://github.com/rohanksingh/Enterprise-data-platform-pipeline",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-10">
      <Navbar />

      {/* HEADER */}
      <section className="max-w-5xl mx-auto pt-12 pb-10">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>

        <p className="text-gray-300 max-w-3xl">
          A selection of projects across risk analytics, trade surveillance,
          credit risk modeling, and data engineering. These projects focus on
          real-world financial systems, scalable data pipelines, and AI-driven
          analytics.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="max-w-5xl mx-auto pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              className="block rounded-xl border border-gray-800 bg-gray-900/70 p-6 hover:border-blue-400 hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>

              <span className="text-sm underline text-blue-300">
                View Project →
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}