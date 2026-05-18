export async function GET() {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      return Response.json({
        error: "Missing NEWS_API_KEY",
        radarItems: [],
      });
    }

    const query =
      '("AI governance" OR "model risk management" OR "LLM banking" OR "trade surveillance AI" OR "financial services AI" OR "AI compliance")';

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      query
    )}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    const data = await res.json();

    if (!res.ok) {
      return Response.json({
        error: data.message || "NewsAPI failed",
        radarItems: [],
      });
    }

    const radarItems = (data.articles || [])
      .filter((article: any) => {
        const text = `${article.title || ""} ${
          article.description || ""
        }`.toLowerCase();

        return (
          text.includes("ai") ||
          text.includes("artificial intelligence") ||
          text.includes("llm") ||
          text.includes("model risk") ||
          text.includes("governance") ||
          text.includes("compliance") ||
          text.includes("bank") ||
          text.includes("finance")
        );
      })
      .slice(0, 6)
      .map((article: any) => ({
        title: article.title,
        detail: article.description || "No description available.",
        category: article.source?.name || "AI / Finance",
        url: article.url,
        publishedAt: article.publishedAt,
      }));

    return Response.json({
      lastUpdated: new Date().toISOString(),
      radarItems,
    });
  } catch (error: any) {
    return Response.json({
      error: error?.message || "AI radar API failed",
      radarItems: [],
    });
  }
}