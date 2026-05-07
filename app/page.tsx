import Navbar from "@/components/Navbar";

const researchItems = [
  {
    title: "Trade Surveillance Whitepaper",
    description:
      "Framework for detecting market abuse using surveillance rules, analytics, and explainable alerting.",
    link: "/research/trade-surveillance-whitepaper.pdf",
  },
  {
    title: "Model Governance & AI Risk",
    description:
      "Research on model risk controls, AI governance, validation, and monitoring aligned with financial services expectations.",
    link: "/research/model-governance-ai-risk.pdf",
  },
  {
    title: "SSRN Publication",
    description:
      "Published research work covering analytics, risk, and governance topics.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6576018",
  },
];

const blogPosts = [
  {
    title: "How AI Is Changing Trade Surveillance",
    description:
      "Thoughts on LLMs, alert triage, market abuse detection, and explainable surveillance workflows.",
    link: "/blog/ai-trade-surveillance",
  },
  {
    title: "Credit Risk Modeling with Python",
    description:
      "PD, LGD, EAD, stress scenarios, and model monitoring explained from a practical banking perspective.",
    link: "/blog/credit-risk-python",
  },
  {
    title: "Market Risk, PnL, and DV01",
    description:
      "A practical explanation of risk measures used in FICC trading and risk reporting.",
    link: "/blog/market-risk-dv01",
  },
];

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

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-10">
      <Navbar />

      <section className="max-w-5xl mx-auto pt-12 pb-16">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">
          Risk Analytics • Trade Surveillance • AI Governance
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-5">
          Rohan Kumar
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mb-6">
          I build data-driven risk, compliance, and governance solutions for
          financial institutions using Python, SQL, cloud platforms, and AI-enabled analytics.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/resume/Rohan_Kumar_Resume.pdf"
            target="_blank"
            className="rounded-lg bg-white text-black px-5 py-3 font-semibold hover:bg-gray-200"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/rohanksingh"
            target="_blank"
            className="rounded-lg border border-gray-700 px-5 py-3 font-semibold hover:bg-gray-900"
          >
            View GitHub
          </a>
        </div>
      </section>

      <section id="research" className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6">Research</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {researchItems.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              className="block rounded-xl border border-gray-800 bg-gray-900/70 p-5 hover:border-blue-400 hover:-translate-y-1 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
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
      </section>

<section id="blog" className="max-w-5xl mx-auto mb-16">
  <h2 className="text-3xl font-bold mb-6">Blog & Insights</h2>

  <div className="grid md:grid-cols-3 gap-5">
    {blogPosts.map((post) => (
      <a
        key={post.title}
        href={post.link}
        className="block rounded-xl border border-gray-800 bg-gray-900/70 p-5 hover:border-blue-400 hover:-translate-y-1 transition"
      >
        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{post.description}</p>
        <span className="text-sm underline text-blue-300">Read More →</span>
      </a>
    ))}
  </div>
</section>

      <section
        id="contact"
        className="max-w-5xl mx-auto border-t border-gray-800 pt-8 pb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>

        <div className="flex flex-wrap gap-4 text-gray-300">
          <a
            href="https://www.linkedin.com/in/rohanksingh/"
            target="_blank"
            className="underline hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/rohanksingh"
            target="_blank"
            className="underline hover:text-white"
          >
            GitHub
          </a>
        </div>
      </section>

<section
  id="contact"
  className="max-w-5xl mx-auto border-t border-gray-800 pt-8 pb-12"
>
  <h2 className="text-3xl font-bold mb-4">Contact</h2>

  <form
    action="https://formspree.io/f/YOUR_FORM_ID"
    method="POST"
    className="grid gap-4 max-w-2xl"
  >
    <input
      type="text"
      name="name"
      placeholder="Your name"
      required
      className="rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white"
    />

    <input
      type="email"
      name="email"
      placeholder="Your email"
      required
      className="rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white"
    />

    <textarea
      name="message"
      placeholder="Your message"
      required
      rows={5}
      className="rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white"
    />

    <button
      type="submit"
      className="rounded-lg bg-white text-black px-5 py-3 font-semibold hover:bg-gray-200 w-fit"
    >
      Send Message
    </button>
  </form>
</section>
    </main>
  );
}