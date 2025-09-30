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

      let errorMessage = "Could not get a response from AI."

      // Handle specific error cases
      if (error.message?.includes("AI Chat requires more memory")) {
        errorMessage = "🤖 AI Chat needs more memory to run. You can still use the car recommendation feature!"
      } else if (error.message?.includes("AI Chat is currently unavailable")) {
        errorMessage = "🤖 AI Chat is temporarily unavailable. Try the car recommendation feature instead!"
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: errorMessage },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full h-[600px] flex flex-col bg-gray-50 border rounded-2xl overflow-hidden">
      {/* Chat Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">🤖</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">AI Car Assistant</h3>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Active</span>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
        <div className="space-y-6 max-w-4xl mx-auto">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome to AI Car Assistant!</h3>
              <p className="text-gray-600 mb-4">Ask me anything about cars and I'll help you find the perfect match for your needs.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-500">
                <div className="bg-white p-3 rounded-lg">💡 "I need a family car under ₹15,00,000"</div>
                <div className="bg-white p-3 rounded-lg">💡 "What's the best sports car for ₹25,00,000?"</div>
              </div>
            </div>
          )}
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] md:max-w-[70%] p-4 rounded-2xl shadow-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 border border-gray-200"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 border border-gray-200 p-4 rounded-2xl shadow-sm">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">AI is thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="p-6 bg-white border-t">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 items-end">
            <div className="flex-1 relative">
              <input
                placeholder="Ask me about cars, budget, features, or recommendations..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !loading) {
                    handleSendMessage()
                  }
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                disabled={loading}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={loading || input.trim() === ""}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[80px]"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="text-sm font-medium">Send</span>
              )}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Press Enter to send • Get instant car recommendations and advice
          </p>
        </div>
      </div>
    </div>
  )
}
