import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <Navbar />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Rohan Kumar</h1>

        <p className="text-xl text-gray-400 mb-8">
          Risk Analytics | Trade Surveillance | AI Governance | Data Engineering
        </p>

        <p className="text-gray-300 mb-10">
          I build data-driven risk, compliance, and governance solutions for financial institutions.
        </p>

        <div id="research" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Research</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/research/trade-surveillance-whitepaper.pdf" target="_blank" className="underline">
                Trade Surveillance Whitepaper
              </a>
            </li>
            <li>
              <a href="/research/model-governance-ai-risk.pdf" target="_blank" className="underline">
                Model Governance & AI Risk
              </a>
            </li>
            <li>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6576018" target="_blank" className="underline">
                SSRN Publications
              </a>
            </li>
          </ul>
        </div>

        <div id="projects" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Projects</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="https://github.com/rohanksingh/agentic-trade-surveillance" target="_blank" className="underline">
                Agentic Trade Surveillance System
              </a>
            </li>
            <li>
              <a href="https://github.com/YOUR_USERNAME/credit-risk-platform" target="_blank" className="underline">
                Credit Risk Modeling Platform
              </a>
            </li>
            <li>
              <a href="https://github.com/rohanksingh" target="_blank" className="underline">
                GitHub Portfolio
              </a>
            </li>
          </ul>
        </div>

        <div id="contact">
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <div className="space-y-2 text-gray-300">
            <a href="https://www.linkedin.com/in/rohanksingh/" target="_blank" className="underline">
              LinkedIn
            </a>
            <br />
            <a href="https://github.com/rohanksingh" target="_blank" className="underline">
              GitHub
            </a>
            <br />
            <a href="mailto:rohandhn@email.com" className="underline">
              Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
