import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "Missing OPENAI_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-5.4-mini",
      input: `
Generate 6 concise personal market insight cards for a financial services portfolio website.

Return ONLY valid JSON array.
Each item must have:
title, detail, signal.
`,
    });

    return Response.json({
      lastUpdated: new Date().toISOString(),
      raw: response.output_text,
    });
  } catch (error: any) {
    console.error("OPENAI ERROR:", error);

    return Response.json(
      {
        error: error?.message || "Unknown API error",
        status: error?.status || null,
        type: error?.type || null,
      },
      { status: 500 }
    );
  }
}