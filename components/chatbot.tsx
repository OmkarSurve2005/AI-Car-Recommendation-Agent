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
    <Card className="w-80 h-[400px] flex flex-col bg-card/90 backdrop-blur-sm border border-border shadow-lg">
      <CardHeader className="p-4 border-b border-border">
        <CardTitle className="text-lg text-primary">Car AI Chatbot</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-4 overflow-hidden">
        <ScrollArea className="h-full pr-2">
          <div className="flex flex-col gap-3">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm">Ask me anything about the suggested cars!</div>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[70%] p-2 rounded-lg",
                    msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[70%] p-2 rounded-lg bg-muted text-muted-foreground animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 border-t border-border flex gap-2">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !loading) {
              handleSendMessage()
            }
          }}
          className="flex-1 bg-input border-border text-foreground focus-visible:ring-primary"
          disabled={loading}
        />
        <Button
          onClick={handleSendMessage}
          disabled={loading}
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Send
        </Button>
      </CardFooter>
    </Card>
  )
}
