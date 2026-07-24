import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY;

  const url =
    `https://newsapi.org/v2/everything?` +
    // `q=${encodeURIComponent("FIFA World Cup OR football OR soccer")}` +
   `q=${encodeURIComponent("All News")}` +
    `&language=en` +
    `&sortBy=publishedAt` +
    `&pageSize=6` +
    `&apiKey=${apiKey}`;

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  return NextResponse.json(data.articles || []);
}