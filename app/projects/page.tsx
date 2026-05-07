import Navbar from "@/components/Navbar";

const featuredProjects = [
  {
    title: "Agentic Trade Surveillance System",
    description:
      "LLM-driven surveillance workflow for detecting wash trades and suspicious trading patterns.",
    link: "https://github.com/rohanksingh/agentic-trade-surveillance",
  },
  {
    title: "Credit Risk Modeling Platform",
    description:
      "PD modeling, stress scenarios, and model monitoring for credit risk analytics.",
    link: "https://github.com/rohanksingh/credit-risk-platform",
  },
];

<section id="projects" className="max-w-5xl mx-auto mb-16">
  <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>

  <div className="grid md:grid-cols-2 gap-5">
    {featuredProjects.map((project) => (
      <a
        key={project.title}
        href={project.link}
        target="_blank"
        className="block rounded-xl border border-gray-800 bg-gray-900/70 p-6 hover:border-blue-400 hover:-translate-y-1 transition"
      >
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

        <p className="text-sm text-gray-400 mb-4">
          {project.description}
        </p>

        <span className="text-sm underline text-blue-300">
          View Project →
        </span>
      </a>
    ))}
  </div>

  <div className="mt-6">
    <a href="/projects" className="text-blue-300 underline">
      View All Projects →
    </a>
  </div>
</section>