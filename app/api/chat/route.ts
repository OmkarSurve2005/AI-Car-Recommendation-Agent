import { type NextRequest, NextResponse } from "next/server"
import { exec } from "child_process"

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Escape quotes for Windows
    const safeMessage = message.replace(/"/g, '\\"')

    // Use `ollama run <model> "<prompt>" --json` without --prompt flag
    return new Promise<NextResponse>((resolve) => {
      exec(`ollama run llama3:latest "${safeMessage}" --json`, (error, stdout, stderr) => {
        if (error) {
          console.error("Ollama error:", error)
          return resolve(
            NextResponse.json({ error: "Failed to get response from LLaMA 3" }, { status: 500 })
          )
        }

        try {
          const output = JSON.parse(stdout)
          resolve(
            NextResponse.json({ response: output.text }, { status: 200 })
          )
        } catch (err) {
          console.error("Parse error:", err)
          resolve(
            NextResponse.json({ error: "Failed to parse LLaMA 3 response" }, { status: 500 })
          )
        }
      })
    })
  } catch (error: any) {
    console.error("[v0] Error in /api/chat:", error)
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 })
  }
}
