"use client"

import { Chatbot } from "@/components/chatbot"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowLeft } from "lucide-react"

export default function ChatbotPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-[#e0eafc] via-[#cfdef3] to-[#f9fafc] text-gray-900 overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-primary via-accent to-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animate-glow-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-tr from-accent via-primary to-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000 animate-glow-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-tl from-secondary via-primary to-accent rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000 animate-glow-pulse"></div>
      </div>
      {/* Chat container with modern card look */}
  <div className="relative z-10 flex flex-col items-center gap-8 p-8 md:p-12 rounded-2xl shadow-xl bg-white border border-gray-200 w-full max-w-6xl min-h-[70vh] animate-fade-in">
        {/* Back button */}
        <div className="absolute top-4 left-4 z-20">
          <Link href="/" passHref>
            <Button variant="outline" className="flex items-center gap-2 text-primary hover:bg-primary/10 bg-white border-gray-200 shadow-md">
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </Button>
          </Link>
        </div>
        {/* Animated header */}
        <h1 className="flex items-center gap-3 text-4xl md:text-5xl font-extrabold text-primary drop-shadow-lg mb-4 text-balance text-center animate-slide-down">
          <Sparkles className="w-10 h-10 text-accent animate-spin-slow" />
          Chat with AI
        </h1>
  <div className="w-full flex-1 flex flex-col justify-center max-w-5xl mx-auto">
          <Chatbot />
        </div>
        {/* Creative footer */}
        <footer className="w-full text-center text-xs sm:text-sm text-muted-foreground mt-4 opacity-80 animate-fade-in-up">
          <span>🚗 Powered by AI Car Recommendation Agent &mdash; {new Date().getFullYear()}</span>
        </footer>
      </div>
    </main>
  )
}
