export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 mb-10">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 text-sm text-gray-300">
        <a href="/" className="font-semibold text-white">
          Rohan Kumar
        </a>

        <div className="flex flex-wrap gap-4">
          <a href="#research" className="hover:text-white">Research</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a href="#market-insights" className="hover:text-white">Market Insights</a>
          <a href="#ai-news-radar" className="hover:text-white">AI News Radar</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}