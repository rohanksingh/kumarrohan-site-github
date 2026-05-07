import Navbar from "@/components/Navbar";
import Link from "next/link";

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

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-10">
      <Navbar />

      <section className="max-w-5xl mx-auto pt-12 pb-10">
        <h1 className="text-5xl font-bold mb-4">Blog & Insights</h1>

        <p className="text-gray-300 max-w-3xl">
          Practical writing on risk analytics, trade surveillance, credit risk,
          AI governance, and capital markets technology.
        </p>
      </section>

      <section className="max-w-5xl mx-auto pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.title}
              href={post.link}
              className="block rounded-xl border border-gray-800 bg-gray-900/70 p-6 hover:border-blue-400 hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>

              <p className="text-sm text-gray-400 mb-4">
                {post.description}
              </p>

              <span className="text-sm underline text-blue-300">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}