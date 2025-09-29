"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (input.trim() === "") return

    const newMessage: Message = { role: "user", content: input }
    setMessages((prevMessages) => [...prevMessages, newMessage])
    setInput("")
    setLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to get response from AI")
      }

      const data = await response.json()
      setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: data.response }])
    } catch (error: any) {
      console.error("[v0] Error sending message:", error)
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: `Error: ${error.message || "Could not get a response."}` },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
  <div className="w-full max-w-7xl h-[600px] flex flex-col bg-white border border-gray-200 shadow-2xl rounded-2xl mx-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-primary">Car AI Chatbot</h2>
      </div>
      <div className="flex-1 px-8 py-4 overflow-hidden flex flex-col justify-end">
        <div className="h-full pr-2 overflow-y-auto flex flex-col justify-end">
          <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm">Ask me anything about the suggested cars!</div>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}> 
                <div
                  className={cn(
                    "max-w-[90%] md:max-w-[70%] p-3 rounded-xl text-base",
                    msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[90%] md:max-w-[70%] p-3 rounded-xl bg-muted text-muted-foreground animate-pulse text-base">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 flex gap-2 justify-center w-full">
        <div className="flex w-full max-w-4xl mx-auto gap-2">
          <input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !loading) {
                handleSendMessage()
              }
            }}
            className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus-visible:ring-primary outline-none text-base"
            disabled={loading}
          />
          <button
            onClick={handleSendMessage}
            disabled={loading}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-3 rounded-lg shadow text-base"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
