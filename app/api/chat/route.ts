import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const ollamaUrl = "http://localhost:11434/api/generate"

    const ollamaRes = await fetch(ollamaUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3:latest",
        prompt: `You are a helpful car recommendation assistant. A user asked: "${message}". Provide a helpful, friendly response about cars and recommend they use the car recommendation feature if relevant. Keep your response concise and helpful.`,
        stream: false,
      }),
    })

    if (!ollamaRes.ok) {
      const err = await ollamaRes.text()
      console.error("Ollama error:", err)
      return NextResponse.json(
        {
          response: "🤖 I'm having trouble connecting to the AI service right now. You can still use the car recommendation feature to find your perfect car!"
        }
      )
    }

    const data = await ollamaRes.json()
    const reply = data.response ?? ""

    return NextResponse.json({ response: reply.trim() })
  } catch (error: any) {
    console.error("[v0] Error in /api/chat:", error)
    return NextResponse.json(
      {
        response: "🤖 I'm currently unavailable, but you can use the car recommendation feature to find amazing cars that match your preferences!"
      }
    )
  }
}
