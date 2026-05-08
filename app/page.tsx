import Navbar from "@/components/Navbar";
import Link from "next/link";

const sections = [
  {
    href: "/research",
    label: "Research",
    description:
      "Whitepapers, SSRN publications, and frameworks on trade surveillance, model governance, and AI risk.",
  },
  {
    href: "/projects",
    label: "Projects",
    description:
      "Open-source work in agentic trade surveillance, credit risk modeling, CCAR stress testing, and data engineering.",
  },
  {
    href: "/blog",
    label: "Blog & Insights",
    description:
      "Practical writing on risk analytics, AI in banking, PnL attribution, and capital markets technology.",
  },
  {
    href: "/market-insights",
    label: "Market Insights",
    description:
      "Personal views on rates, credit risk, banking analytics, and trade surveillance trends.",
  },
  {
    href: "/ai-news-radar",
    label: "AI News Radar",
    description:
      "Tracking AI governance, LLMs in banking, and how emerging AI is reshaping financial services.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-10">
      <Navbar />

      {/* Hero */}
      <section className="max-w-5xl mx-auto pt-12 pb-16">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">
          Risk Analytics • Trade Surveillance • AI Governance
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-5">Rohan Kumar</h1>

        <p className="text-xl text-gray-300 max-w-3xl mb-8">
          I build data-driven risk, compliance, and governance solutions for
          financial institutions using Python, SQL, cloud platforms, and
          AI-enabled analytics.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/resume/Rohan_Kumar_Resume.pdf"
            target="_blank"
            className="rounded-lg bg-white text-black px-5 py-3 font-semibold hover:bg-gray-200 transition"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/rohanksingh"
            target="_blank"
            className="rounded-lg border border-gray-700 px-5 py-3 font-semibold hover:bg-gray-900 transition"
          >
            View GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rohanksingh/"
            target="_blank"
            className="rounded-lg border border-gray-700 px-5 py-3 font-semibold hover:bg-gray-900 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Section Cards */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-100">Explore</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block rounded-xl border border-gray-800 bg-gray-900/70 p-6 hover:border-blue-400 hover:-translate-y-1 transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-white">{s.label}</h3>
              <p className="text-sm text-gray-400">{s.description}</p>
              <span className="inline-block mt-4 text-sm text-blue-300 underline">
                View →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="max-w-5xl mx-auto border-t border-gray-800 pt-8 pb-12">
        <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
        <p className="text-gray-400 mb-4">
          Open to risk analytics, trade surveillance, AI governance, and data
          engineering opportunities.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-blue-600 text-white px-5 py-3 font-semibold hover:bg-blue-500 transition"
        >
          Contact Me →
        </Link>
      </section>
    </main>
  );
}