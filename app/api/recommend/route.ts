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

    // Parse the Python script output - it may contain debug information
    // Look for the actual recommendations data (should be a list of dictionaries)
    const lines = data.split("\n").map(line => line.trim()).filter(line => line.length > 0)

    let recommendationsString = null

    // Find the line that contains the recommendations (should look like a Python list)
    for (const line of lines) {
      if (line.startsWith("[") && line.includes("{")) {
        recommendationsString = line
        break
      }
    }

    if (!recommendationsString) {
      console.error("[v0] No recommendations string found in Python script output:", data)
      return NextResponse.json({ error: "No recommendations found" }, { status: 500 })
    }

    // Convert Python-style dictionary/list to JSON
    const jsonString = recommendationsString
      .replace(/'/g, '"')  // Replace single quotes with double quotes
      .replace(/True/g, 'true')  // Convert Python booleans
      .replace(/False/g, 'false')
      .replace(/None/g, 'null')

    const recommendations = JSON.parse(jsonString)

    return NextResponse.json({ recommendations })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
