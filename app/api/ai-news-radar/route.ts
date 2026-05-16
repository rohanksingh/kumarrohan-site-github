
export async function GET() {
if (process.env.NODE_ENV === "production") {
  return Response.json({
    lastUpdated: new Date().toISOString(),
    radarItems: [
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
Generate exactly 6 AI-in-finance radar cards for a financial services portfolio website.

Return valid JSON only in this exact shape:
{
  "radarItems": [
    {
      "title": "AI Governance in Financial Services",
      "detail": "Banks are increasing focus on AI model validation and explainability.",
      "category": "Governance"
    }
  ]
}

Focus areas:
- AI governance
- LLMs in banking operations
- agentic AI in surveillance
- model risk management
- synthetic data
- jobs and skills

Tone:
professional
banking-focused
practical
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
      radarItems: parsed.radarItems || [],
    });
  } catch (error: any) {
    return Response.json({
      lastUpdated: new Date().toISOString(),
      error: error?.message || "Local Llama failed",
      radarItems: [
        {
          title: "AI Governance in Financial Services",
          detail:
            "Financial institutions are increasing focus on AI model validation and explainability.",
          category: "Governance",
        },
      ],
    });
  }
}