import { NextResponse } from "next/server"
import { spawn } from "child_process"

export async function POST(request: Request) {
  try {
    const { budget, mileage, usage } = await request.json()

    if (typeof budget !== "number" || typeof mileage !== "number" || typeof usage !== "string") {
      return NextResponse.json({ error: "Invalid input parameters" }, { status: 400 })
    }

    const pythonProcess = spawn("python", ["scripts/recommendation_model.py", String(budget), String(mileage), usage])

    let data = ""
    for await (const chunk of pythonProcess.stdout) {
      data += chunk.toString()
    }

    let errorData = ""
    for await (const chunk of pythonProcess.stderr) {
      errorData += chunk.toString()
    }

    const exitCode = await new Promise((resolve, reject) => {
      pythonProcess.on("close", resolve)
      pythonProcess.on("error", reject)
    })

    if (exitCode !== 0) {
      console.error(`[v0] Python script exited with code ${exitCode}: ${errorData}`)
      return NextResponse.json(
        { error: "Failed to get recommendations from AI model", details: errorData },
        { status: 500 },
      )
    }

    // The Python script prints the recommendations as a string representation of a list of dicts
    // We need to parse this string to a JSON object.
    // The script currently prints two example usages, so we need to extract the relevant part.
    const recommendationsString = data
      .split("\n")
      .filter((line) => line.startsWith("["))
      .pop()

    if (!recommendationsString) {
      console.error("[v0] No recommendations string found in Python script output:", data)
      return NextResponse.json({ error: "No recommendations found" }, { status: 500 })
    }

    const recommendations = JSON.parse(recommendationsString.replace(/'/g, '"')) // Replace single quotes with double quotes for valid JSON

    return NextResponse.json({ recommendations })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
