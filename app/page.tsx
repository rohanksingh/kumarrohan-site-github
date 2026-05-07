import Navbar from "@/components/Navbar";
import Link from "next/link";

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

      <section id="projects" className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-300 mb-4">
          Selected work in risk analytics, trade surveillance, credit risk, and data engineering.
        </p>
        <Link href="#contact" className="text-blue-300 underline">
          Contact Me →
        </Link>
      </section>

      <section id="contact" className="max-w-5xl mx-auto border-t border-gray-800 pt-8 pb-12">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-300">LinkedIn · GitHub · Email</p>
      </section>
    </main>
  );
}