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
      '("AI governance" OR "model risk management" OR "financial AI" OR "LLM banking" OR "trade surveillance AI" OR "compliance AI")';

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      query
    )}&language=en&sortBy=publishedAt&pageSize=6&apiKey=${apiKey}`;


    const res = await fetch(url);

    const data = await res.json();

    const blockedSources = [
      "Times of India",
      "Gizmodo",
      "Slashdot",
      "Yahoo",
      "MSN",
    ];

    const radarItems = (data.articles || [])
      .filter((article: any) => {
        const source = article.source?.name || "";

        if (
          blockedSources.some((blocked) =>
            source.toLowerCase().includes(blocked.toLowerCase())
          )
        ) {
          return false;
        }

        const text =
          `${article.title} ${article.description}`.toLowerCase();

        return (
          text.includes("bank") ||
          text.includes("finance") ||
          text.includes("risk") ||
          text.includes("compliance") ||
          text.includes("surveillance") ||
          text.includes("governance") ||
          text.includes("capital markets")
        );
      })
      .slice(0, 6)
      .map((article: any) => ({
        title: article.title,
        detail:
          article.description || "No description available.",
        category: article.source?.name || "AI / Finance",
        url: article.url,
      }));

    return Response.json({
      lastUpdated: new Date().toISOString(),
      radarItems,
    });
  } catch (error: any) {
    return Response.json({
      error: error?.message || "NewsAPI failed",
      radarItems: [],
    });
  }
}