export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">Rohan Kumar</h1>

        <p className="text-xl text-gray-400 mb-8">
          Risk Analytics | Trade Surveillance | AI Governance | Data Engineering
        </p>

        <p className="text-gray-300 mb-10">
          I build data-driven risk, compliance, and governance solutions for financial institutions.
        </p>

        {/* Research */}
        <div className="mb-10">
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

        {/* Projects */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Projects</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="https://github.com/rohanksingh/agentic-trade-surveillance" target="_blank" className="underline">
                Agentic Trade Surveillance System
              </a>
            </li>
            <li>
              <a href="https://github.com/rohanksingh/credit-risk-platform" target="_blank" className="underline">
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

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-300">
            Add your LinkedIn, GitHub, and email here.
          </p>
        </div>

      </div>
    </main>
  );
}