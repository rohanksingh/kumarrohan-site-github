import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 mb-10">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 text-sm text-gray-300">
        <Link href="/" className="font-semibold text-white hover:text-blue-400 transition">
          Kumar Rohan
        </Link>

        <div className="flex flex-wrap gap-5">
          <Link href="/research" className="hover:text-white transition">Research</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <Link href="/market-insights" className="hover:text-white transition">Market Insights</Link>
          <Link href="/ai-news-radar" className="hover:text-white transition">AI News Radar</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}