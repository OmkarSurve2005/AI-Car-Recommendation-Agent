// scripts/ollama-keepalive.js
// Keeps Ollama model loaded in memory for fast responses

const fetch = require('node-fetch');

const OLLAMA_URL = 'http://localhost:11434/api/generate';
const MODEL = 'llama3';
const INTERVAL_MINUTES = 4; // Ping every 4 minutes

async function pingOllama() {
  try {
    await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: MODEL, prompt: 'ping', stream: false })
    });
    console.log(`[Ollama Keep-Alive] Pinged at ${new Date().toLocaleTimeString()}`);
  } catch (err) {
    console.error('[Ollama Keep-Alive] Error:', err.message);
  }
}

setInterval(pingOllama, INTERVAL_MINUTES * 60 * 1000);
pingOllama(); // Initial ping
