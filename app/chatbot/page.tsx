"use client"

import { Chatbot } from "@/components/chatbot"
import Link from "next/link" // Import Link for navigation
import { Button } from "@/components/ui/button" // Import Button component

export default function ChatbotPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animate-glow-pulse"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 animate-glow-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-6000 animate-glow-pulse"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8 p-8 rounded-lg shadow-2xl bg-card/80 backdrop-blur-sm border border-border h-[80vh] w-full max-w-2xl">
        {" "}
        {/* Adjusted height and width for chatbot page */}
        <div className="absolute top-4 left-4 z-20">
          {" "}
          {/* Added back button */}
          <Link href="/" passHref>
            <Button variant="outline" className="text-primary-foreground hover:bg-primary/20 bg-transparent">
              Back to Recommendations
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4 text-balance text-center">Chat with AI</h1>
        <Chatbot />
      </div>
    </main>
  )
}
