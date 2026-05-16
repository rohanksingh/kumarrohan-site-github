
export async function GET() {
if (process.env.NODE_ENV === "production") {
  return Response.json({
    lastUpdated: new Date().toISOString(),
    insights: [
      {
        title: "AI Governance in Financial Services",
        detail:
          "Financial institutions are increasing focus on AI model validation, explainability, and compliance monitoring.",
        category: "Governance",
      },
      {
        title: "Agentic AI for Surveillance",
        detail:
          "Agentic AI workflows are emerging for alert triage, context retrieval, and explainable investigation summaries.",
        category: "Trade Surveillance",
      },
    ],
  });
}
  try {
    const prompt = `
Generate exactly 6 market insight cards for a financial services portfolio website.

Return valid JSON only in this exact shape:
{
  "insights": [
    {
      "title": "Rates & Credit Risk",
      "detail": "Higher rates continue to pressure funding costs and credit quality.",
      "signal": "Credit pressure"
    }
  ]
}

Focus areas:
- rates and credit risk
- banking risk analytics
- trade surveillance
- capital markets
- regulatory environment
- data and technology
`;

    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.1",
        prompt,
        stream: false,
        format: "json",
      }),
    });

    const data = await res.json();
    const parsed = JSON.parse(data.response);

    return Response.json({
      lastUpdated: new Date().toISOString(),
      insights: parsed.insights || [],
    });
  } catch (error: any) {
    return Response.json({
      lastUpdated: new Date().toISOString(),
      error: error?.message || "Local Llama failed",
      insights: [
        {
          title: "Rates & Credit Risk",
          detail:
            "Higher rates continue to pressure funding costs, credit spreads, and borrower affordability.",
          signal: "Credit pressure",
        },
      ],
    });
  }
}