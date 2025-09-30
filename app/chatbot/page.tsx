"use client"

import { Chatbot } from "@/components/chatbot"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowLeft } from "lucide-react"

export default function ChatbotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">AI Car Assistant</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Chat container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Chat Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">🤖 AI Car Assistant</h2>
            <p className="text-gray-600">Get instant help with car recommendations and advice</p>
          </div>

          {/* Chat Interface */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <Chatbot />
          </div>

          {/* Feature Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="text-2xl mb-2">🚗</div>
              <h3 className="font-semibold text-gray-900 mb-1">Car Recommendations</h3>
              <p className="text-sm text-gray-600">Get personalized car suggestions</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="text-2xl mb-2">💬</div>
              <h3 className="font-semibold text-gray-900 mb-1">Expert Advice</h3>
              <p className="text-sm text-gray-600">Ask questions about any car</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-1">Instant Response</h3>
              <p className="text-sm text-gray-600">Get answers in real-time</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
