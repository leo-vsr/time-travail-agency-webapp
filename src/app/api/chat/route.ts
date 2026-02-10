import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the luxury virtual assistant of TimeTravel Agency, a high-end time travel company. You advise customers on destinations Paris 1889, Cretaceous period, and Florence 1504. You are professional, warm, enthusiastic, and passionate about history. You provide travel advice, suggest destinations, invent reasonable pricing, and answer FAQs.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { reply: "AI service is not configured. Please set the AI_API_KEY environment variable." },
        { status: 500 }
      );
    }

    const apiBase = process.env.AI_API_BASE || "https://openrouter.ai/api/v1";
    const model = process.env.AI_MODEL || "mistralai/mistral-small:free";

    const response = await fetch(`${apiBase}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "TimeTravel Agency Project",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("AI API error:", errorData);
      return NextResponse.json(
        { reply: "I'm having trouble connecting to my knowledge base. Please try again." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
