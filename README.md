# AI-Car-Recommendation-Agent
AI Car Recommendation Agent 🚙 Input: User preferences (budget, mileage, family/sports use). AI Core: Recommender system trained on car specs dataset. Action: Suggests top 3 cars with reasoning. Dataset: CarDekho / Kaggle car price dataset.
# AI Car Recommendation Agent with LLaMA 3 Chatbot

**Project Type:** AI Agent / Full-Stack Web Application  
**Technologies:** Next.js, Tailwind CSS, Python, Ollama, LLaMA 3  
**Author:** Omkar Surve  

---

## Project Overview

This project is an intelligent AI system that combines a **Car Recommendation Engine** with a **local LLaMA 3-powered chatbot**:

- Users can input preferences like **budget, mileage, car type, and usage** to receive top car recommendations.  
- Users can interact with a **natural language AI chatbot** to ask questions, get suggestions, and explore recommendations.  
- The AI runs **completely offline**, leveraging Ollama to execute the LLaMA 3 model locally.  
- Designed for a **user-friendly interface** with modern UI and real-time chat functionality.  

---

## Key Features

1. **Car Recommendation System**  
   - Suggests the top 3 cars based on user preferences.  
   - Provides reasoning behind each recommendation using a trained model.  

2. **LLaMA 3 Chatbot**  
   - Engages users in natural conversation.  
   - Provides advice and answers queries about cars and recommendations.  

3. **Responsive Web Interface**  
   - Built with Next.js and Tailwind CSS for a clean and modern UI.  
   - Fully responsive for desktop and mobile screens.  

4. **Offline AI Integration**  
   - Uses Ollama to run LLaMA 3 locally.  
   - No cloud API key or subscription required.  

5. **Error Handling & User Guidance**  
   - Provides feedback when inputs are missing or invalid.  
   - Shows “AI is typing…” animation during response generation.  

---

## Technical Workflow

1. **Data Collection & Preprocessing**  
   - Car dataset collected from Kaggle / CarDekho.  
   - Preprocessed using Python scripts (`train_model.py`).  
   - Features encoded and stored for efficient recommendation logic.  

2. **Model Training (Optional Advanced Version)**  
   - Simple recommender logic or ML-based ranking system.  
   - Generates top cars based on user constraints like budget, mileage, type.  

3. **API Integration**  
   - Frontend sends POST requests to `/api/chat` with user messages.  
   - API calls local LLaMA 3 model via Ollama CLI.  
   - LLaMA 3 generates AI-based responses in JSON format.  

4. **Frontend Interaction**  
   - `Chatbot.tsx` component handles messages and rendering.  
   - Dynamic UI updates as the user types and receives AI responses.  

---

## Dataset Details

- **Source:** Kaggle / CarDekho dataset  
- **Features:**  
  - Car Name  
  - Budget / Price  
  - Mileage (km/l)  
  - Engine Size (cc)  
  - Seating Capacity  
  - Fuel Type  
  - Car Type (SUV, Sedan, Hatchback, etc.)  
- **Usage:** Features are processed and passed to the recommendation engine.  

---

## Project Structure

AI-Car-Recommendation-Agent/
│
├─ backend/
│ ├─ train_model.py # Preprocess dataset & train model
│ └─ car_dataset.csv # Dataset of car specifications
│
├─ pages/
│ ├─ index.tsx # Car recommendation page
│ ├─ chat.tsx # Chatbot page
│ └─ api/
│ └─ chat.ts # API route to LLaMA 3 chatbot
│
├─ components/
│ └─ Chatbot.tsx # Chatbot UI component
│
├─ styles/
│ └─ globals.css # Tailwind CSS global styles
│
├─ package.json
├─ tailwind.config.js
├─ tsconfig.json
└─ README.md

yaml
Copy code

---

## Prerequisites

- **Node.js** (v18+)  
- **Python** (v3.9+)  
- **Ollama CLI** with `llama3:latest` installed  

Check installed models:

```bash
ollama list
Install LLaMA 3 if missing:

bash
Copy code
ollama pull llama3:latest
Installation & Setup
Clone the repository:

bash
Copy code
git clone <repo-url>
cd AI-Car-Recommendation-Agent
Install frontend dependencies:

bash
Copy code
npm install
Prepare the Python backend (optional for advanced recommender):

bash
Copy code
cd backend
python train_model.py
Run the Next.js application:

bash
Copy code
npm run dev
Open in your browser:

arduino
Copy code
http://localhost:3000
Usage
Car Recommendation Page (/)

Enter budget, mileage, and car type.

View top recommended cars with reasoning.

Chatbot Page (/chat)

Chat naturally with LLaMA 3.

Ask for car recommendations, guidance, or general queries.

Troubleshooting
If the chatbot returns errors:

Ensure Ollama CLI is installed and accessible.

Test manually:

bash
Copy code
ollama run llama3:latest "Hello" --json
On Windows, provide full path to ollama.exe if needed.

Future Improvements
Enhanced Recommendation Engine

Integrate ML-based ranking or collaborative filtering for better suggestions.

Context-aware Chatbot

Keep conversation context to provide personalized recommendations.

UI Enhancements

Add charts, car images, and visual comparison features.

Mobile App Integration

Convert to a React Native app for mobile-friendly deployment.

License
MIT License – free for academic use and modification.

Author
Omkar Surve – Developer & AI Integration
