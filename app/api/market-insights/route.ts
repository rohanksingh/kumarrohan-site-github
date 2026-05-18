export async function GET() {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      return Response.json({
        error: "Missing NEWS_API_KEY",
        insights: [],
      });
    }

    const query =
      '("Federal Reserve" OR "interest rates" OR "credit risk" OR "bank risk" OR "capital markets" OR "Basel III" OR "stress testing" OR "trade surveillance" OR "Electronic Trading")';

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
        insights: [],
      });
    }

    const blockedSources = [
      "Gizmodo",
      "Slashdot",
      "Yahoo",
      "MSN",
      "Entertainment",
    ];

    const insights = (data.articles || [])
      .filter((article: any) => {
        const source = article.source?.name || "";
        const text = `${article.title || ""} ${article.description || ""}`.toLowerCase();

        if (
          blockedSources.some((blocked) =>
            source.toLowerCase().includes(blocked.toLowerCase())
          )
        ) {
          return false;
        }

        return (
          text.includes("rate") ||
          text.includes("credit") ||
          text.includes("bank") ||
          text.includes("risk") ||
          text.includes("capital") ||
          text.includes("basel") ||
          text.includes("stress testing") ||
          text.includes("surveillance")
        );
      })
      .slice(0, 6)
      .map((article: any) => ({
        title: article.title,
        detail: article.description || "No description available.",
        signal: article.source?.name || "Market Update",
        url: article.url,
        publishedAt: article.publishedAt,
      }));

    return Response.json({
      lastUpdated: new Date().toISOString(),
      insights,
    });
  } catch (error: any) {
    return Response.json({
      error: error?.message || "Market insights API failed",
      insights: [],
    });
  }
}