import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  try {
    const response = await client.responses.create({
      model: "gpt-5.1-mini",
      input: `
Generate 6 concise AI-in-finance radar cards for a financial services portfolio website.

Focus areas:
- AI governance
- LLMs in banking operations
- agentic AI in surveillance
- model risk management
- synthetic data
- jobs and skills

Return ONLY valid JSON array.
Each item must have:
title, detail, category.

Tone:
professional, banking-focused, practical.
Do not claim breaking news unless sourced.
`,
    });

    const text = response.output_text;
    const data = JSON.parse(text);

    return Response.json({
      lastUpdated: new Date().toISOString(),
      radarItems: data,
    });
  } catch (error) {
    return Response.json(
      {
        lastUpdated: new Date().toISOString(),
        radarItems: [
          {
            title: "AI Governance in Financial Services",
            detail:
              "Financial institutions are increasing focus on AI model validation, explainability, and compliance monitoring.",
            category: "Governance",
          },
        ],
      },
      { status: 200 }
    );
  }
}