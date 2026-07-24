"use client";

import { useEffect, useState } from "react";

type Article = {
  title: string;
  url: string;
  source: {
    name: string;
  };
  publishedAt: string;
};

export default function SportsFlashNews() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/api/sports-news")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch(() => setArticles([]));
  }, []);

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-6">
        {/* Sports Flash News    */}
        News   
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-blue-500 transition"
          >
            <p className="text-sm text-blue-400 mb-2">
              {article.source.name}
            </p>

            <h3 className="text-lg font-semibold mb-3">
              {article.title}
            </h3>

            <p className="text-sm text-slate-400">
              {new Date(article.publishedAt).toLocaleString()}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}