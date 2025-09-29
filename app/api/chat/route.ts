import { type NextRequest, NextResponse } from "next/server"
import fetch from "node-fetch"

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Use Ollama HTTP API for faster responses
    const ollamaUrl = "http://localhost:11434/api/generate"
    const ollamaRes = await fetch(ollamaUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "llama3", prompt: message, stream: false })
    })
    if (!ollamaRes.ok) {
      const err = await ollamaRes.text()
      return NextResponse.json({ error: "Failed to get response from Ollama", details: err }, { status: 500 })
    }
    const data = await ollamaRes.json()
    return NextResponse.json({ response: data.response?.trim() || "" }, { status: 200 })
  } catch (error: any) {
    console.error("[v0] Error in /api/chat:", error)
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 })
  }
}
