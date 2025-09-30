# 🚗 AI Car Recommendation Agent

> An intelligent car recommendation system powered by AI that helps users find their perfect vehicle based on preferences, combined with a natural language chatbot interface using LLaMA 3.

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org/)
[![Python](https://img.shields.io/badge/Python-3.9+-blue?logo=python)](https://python.org/)
[![Ollama](https://img.shields.io/badge/Ollama-LLaMA_3-green)](https://ollama.ai/)

**Author:** Omkar Surve  
**Project Type:** AI Agent / Full-Stack Web Application  
**Status:** Active Development

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Dataset Information](#dataset-information)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

---

## 🎯 Overview

The AI Car Recommendation Agent is a comprehensive solution that combines machine learning-based car recommendations with conversational AI capabilities. Unlike traditional car shopping platforms, this system:

- **Understands your needs**: Takes into account budget constraints, fuel efficiency requirements, family size, and lifestyle preferences
- **Provides intelligent suggestions**: Uses data-driven analysis to recommend the top 3 most suitable vehicles
- **Explains recommendations**: Offers clear reasoning for each suggestion
- **Enables natural conversations**: Powered by LLaMA 3, users can ask questions in plain language
- **Works offline**: Runs completely locally without requiring cloud services or API subscriptions

This project is ideal for:
- Car buyers seeking data-driven purchase decisions
- Developers learning AI integration and full-stack development
- Researchers exploring recommendation systems and local AI deployment

---

## ✨ Features

### 🎯 Smart Car Recommendations
- **Multi-criteria filtering**: Budget, mileage, fuel type, seating capacity, and car type
- **Top 3 suggestions**: Curated list of best matches with detailed reasoning
- **Data-driven insights**: Recommendations based on real car specifications dataset
- **Personalized results**: Tailored to individual user preferences

### 💬 LLaMA 3 Chatbot Integration
- **Natural language understanding**: Ask questions conversationally
- **Context-aware responses**: The AI understands car-related queries
- **Real-time interaction**: Instant responses with typing indicators
- **Offline operation**: Runs entirely on your local machine via Ollama

### 🎨 Modern User Interface
- **Responsive design**: Optimized for desktop, tablet, and mobile devices
- **Clean aesthetics**: Built with Tailwind CSS for a modern look
- **Interactive elements**: Real-time feedback and smooth animations
- **Accessibility**: Keyboard navigation and screen reader support

### 🔒 Privacy & Performance
- **No data collection**: All processing happens locally
- **Fast responses**: Direct model execution without network latency
- **Secure**: No data sent to external servers
- **Cost-effective**: No API fees or subscription costs

---

## 🔄 How It Works

### Architecture Overview

```
┌─────────────────┐
│   User Input    │
│  (Preferences)  │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────┐
│    Next.js Frontend         │
│  • Form validation          │
│  • UI rendering             │
│  • State management         │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│   Recommendation Engine     │
│  • Filter by constraints    │
│  • Score & rank cars        │
│  • Generate explanations    │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│     Car Database            │
│  • 500+ vehicle records     │
│  • Specs & features         │
│  • Price & availability     │
└─────────────────────────────┘

         ╔═══════════════════╗
         ║   Chatbot Flow    ║
         ╚═══════════════════╝
         
User Query → API Route → Ollama CLI → LLaMA 3 Model → JSON Response → UI Update
```

### Step-by-Step Process

1. **User Input Collection**
   - User enters budget range (e.g., ₹5-8 lakhs)
   - Specifies mileage requirements (e.g., 15+ km/l)
   - Selects car type (SUV, Sedan, Hatchback, etc.)
   - Indicates usage (family, sports, daily commute)

2. **Data Processing**
   - Frontend validates input fields
   - Sends POST request to backend
   - Python script filters dataset based on criteria

3. **Recommendation Generation**
   - Algorithm scores each car based on preference matching
   - Ranks vehicles by suitability score
   - Selects top 3 candidates
   - Generates human-readable explanations

4. **Chatbot Interaction** (Optional)
   - User asks follow-up questions
   - Request sent to `/api/chat` endpoint
   - Ollama executes LLaMA 3 model locally
   - AI generates contextual response
   - Result displayed in chat interface

---

## 🛠️ Technology Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework for server-side rendering | 15+ |
| **TypeScript** | Type-safe JavaScript for better development | 5.0+ |
| **Tailwind CSS** | Utility-first CSS framework | 3.4+ |
| **React** | UI component library | 18+ |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Python** | Data processing & ML model training | 3.9+ |
| **Pandas** | Data manipulation and analysis | Latest |
| **NumPy** | Numerical computing | Latest |
| **Scikit-learn** | Machine learning algorithms (optional) | Latest |

### AI & ML
| Technology | Purpose | Version |
|------------|---------|---------|
| **Ollama** | Local LLM runtime environment | Latest |
| **LLaMA 3** | Large language model for chatbot | 8B/70B |

### Development Tools
- **Node.js**: JavaScript runtime (v18+)
- **npm/yarn**: Package management
- **Git**: Version control
- **ESLint**: Code linting
- **Prettier**: Code formatting

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (v18 or higher)
   ```bash
   # Check your version
   node --version
   
   # Download from: https://nodejs.org/
   ```

2. **Python** (v3.9 or higher)
   ```bash
   # Check your version
   python --version
   
   # Download from: https://www.python.org/downloads/
   ```

3. **Ollama CLI with LLaMA 3**
   ```bash
   # Install Ollama (visit https://ollama.ai/ for instructions)
   
   # Verify installation
   ollama --version
   
   # Pull LLaMA 3 model
   ollama pull llama3:latest
   
   # Verify model is installed
   ollama list
   ```

### System Requirements

- **RAM**: 8GB minimum (16GB recommended for LLaMA 3 70B)
- **Storage**: 5GB free space for model and dependencies
- **OS**: Windows 10/11, macOS 11+, or Linux (Ubuntu 20.04+)

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/AI-Car-Recommendation-Agent.git
cd AI-Car-Recommendation-Agent
```

### Step 2: Install Frontend Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### Step 3: Install Python Dependencies

```bash
cd backend
pip install -r requirements.txt

# If requirements.txt doesn't exist, install manually:
pip install pandas numpy scikit-learn
```

### Step 4: Prepare the Dataset

```bash
# Make sure car_dataset.csv is in the backend folder
# Run preprocessing script
python train_model.py
```

This script will:
- Load and clean the car dataset
- Encode categorical features
- Generate processed data for recommendations
- Save model artifacts (if using ML approach)

### Step 5: Configure Environment Variables (Optional)

Create a `.env.local` file in the root directory:

```env
# Ollama Configuration
OLLAMA_MODEL=llama3:latest
OLLAMA_HOST=http://localhost:11434

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Step 6: Start the Development Server

```bash
# From the root directory
npm run dev
```

The application will be available at `http://localhost:3000`

---

## 📁 Project Structure

```
AI-Car-Recommendation-Agent/
│
├── 📂 backend/                    # Python backend for ML processing
│   ├── train_model.py             # Model training & data preprocessing
│   ├── car_dataset.csv            # Raw car specifications dataset
│   ├── requirements.txt           # Python dependencies
│   └── models/                    # Saved model artifacts (if applicable)
│
├── 📂 pages/                      # Next.js pages (routes)
│   ├── index.tsx                  # Homepage - Car recommendation form
│   ├── chat.tsx                   # Chatbot interface page
│   ├── results.tsx                # Recommendation results page
│   └── 📂 api/                    # API routes
│       ├── chat.ts                # LLaMA 3 chatbot endpoint
│       └── recommend.ts           # Car recommendation endpoint
│
├── 📂 components/                 # React components
│   ├── Chatbot.tsx                # Chat interface component
│   ├── CarCard.tsx                # Individual car display card
│   ├── FilterForm.tsx             # User preference form
│   ├── Header.tsx                 # Navigation header
│   └── Footer.tsx                 # Page footer
│
├── 📂 styles/                     # Styling files
│   ├── globals.css                # Global styles & Tailwind imports
│   └── chatbot.module.css         # Component-specific styles
│
├── 📂 lib/                        # Utility functions
│   ├── recommendationEngine.ts    # Core recommendation logic
│   ├── ollamaClient.ts            # Ollama API wrapper
│   └── dataLoader.ts              # CSV data loading utilities
│
├── 📂 public/                     # Static assets
│   ├── images/                    # Car images & icons
│   └── favicon.ico                # Site favicon
│
├── 📂 types/                      # TypeScript type definitions
│   ├── car.d.ts                   # Car interface types
│   └── chat.d.ts                  # Chat message types
│
├── .env.local                     # Environment variables (create this)
├── package.json                   # Node.js dependencies
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── next.config.js                 # Next.js configuration
├── .gitignore                     # Git ignore rules
├── LICENSE                        # MIT License
└── README.md                      # This file
```

### Key Files Explained

- **`pages/index.tsx`**: Main entry point where users input their preferences
- **`pages/api/chat.ts`**: API route that interfaces with Ollama to get LLaMA 3 responses
- **`components/Chatbot.tsx`**: Complete chat UI with message history and typing indicators
- **`backend/train_model.py`**: Processes the CSV dataset and prepares it for recommendations
- **`lib/recommendationEngine.ts`**: Contains the algorithm that matches user preferences to cars

---

## 📖 Usage Guide

### Using the Car Recommendation System

1. **Navigate to the homepage** (`http://localhost:3000`)

2. **Fill out the preference form**:
   - **Budget**: Enter minimum and maximum price (e.g., ₹500,000 - ₹800,000)
   - **Mileage**: Specify minimum fuel efficiency (e.g., 15 km/l)
   - **Car Type**: Select from dropdown (SUV, Sedan, Hatchback, MPV, etc.)
   - **Fuel Type**: Choose petrol, diesel, electric, or hybrid
   - **Seating**: Indicate required capacity (5, 7, 8 seats)
   - **Usage**: Describe primary use case (family, sports, daily commute)

3. **Submit the form** and view your personalized recommendations

4. **Review the results**:
   - Top 3 car suggestions with images
   - Key specifications (price, mileage, engine, etc.)
   - AI-generated reasoning for each recommendation
   - Comparison table highlighting differences

### Using the AI Chatbot

1. **Navigate to the chat page** (`http://localhost:3000/chat`)

2. **Start a conversation**:
   ```
   Example queries:
   - "What's a good family car under 10 lakhs?"
   - "Compare SUVs with the best mileage"
   - "I need a car for long highway trips, any suggestions?"
   - "What are the maintenance costs for electric cars?"
   ```

3. **Interact naturally**:
   - The AI understands context from previous messages
   - Ask follow-up questions
   - Request clarifications or more details

4. **View responses**:
   - Real-time typing indicator while AI generates response
   - Formatted text with proper paragraphs and lists
   - Links to recommended car pages (if applicable)

---

## 📊 Dataset Information

### Source
- **Primary**: [Kaggle Car Price Prediction Dataset](https://www.kaggle.com/datasets/nehalbirla/vehicle-dataset-from-cardekho)

### Dataset Features

| Feature | Type | Description | Example |
|---------|------|-------------|---------|
| `car_name` | String | Full name of the vehicle | "Maruti Swift VXI" |
| `price` | Float | Current market price (₹) | 650000 |
| `mileage` | Float | Fuel efficiency (km/l or km/kg) | 22.5 |
| `engine` | Integer | Engine displacement (cc) | 1197 |
| `max_power` | Float | Maximum power output (bhp) | 88.5 |
| `torque` | String | Torque specifications | "113Nm@4200rpm" |
| `seats` | Integer | Seating capacity | 5 |
| `fuel_type` | String | Type of fuel | "Petrol" |
| `transmission` | String | Transmission type | "Manual" |
| `car_type` | String | Vehicle category | "Hatchback" |
| `year` | Integer | Manufacturing year | 2020 |
| `km_driven` | Integer | Odometer reading | 25000 |
| `owner_type` | String | Number of previous owners | "First" |

### Data Statistics
- **Total Records**: 500+ vehicles
- **Price Range**: ₹100,000 - ₹50,00,000
- **Mileage Range**: 8 km/l - 30 km/l
- **Brands Covered**: 20+ manufacturers
- **Data Quality**: 95% complete (minimal missing values)

### Data Preprocessing Steps

1. **Cleaning**
   - Remove duplicate entries
   - Handle missing values (imputation or removal)
   - Fix inconsistent formatting

2. **Feature Engineering**
   - Extract numeric values from torque strings
   - Calculate price-per-feature ratios
   - Create categorical bins for continuous variables

3. **Encoding**
   - One-hot encoding for categorical features
   - Label encoding for ordinal features
   - Normalization for numeric features

4. **Validation**
   - Check for outliers
   - Verify data integrity
   - Cross-reference with external sources

---

## 🔌 API Documentation

### POST `/api/recommend`

**Description**: Get car recommendations based on user preferences

**Request Body**:
```json
{
  "budget_min": 500000,
  "budget_max": 800000,
  "mileage_min": 15,
  "car_type": "SUV",
  "fuel_type": "Petrol",
  "seats": 5,
  "usage": "family"
}
```

**Response**:
```json
{
  "recommendations": [
    {
      "rank": 1,
      "car_name": "Maruti Brezza VXI",
      "price": 785000,
      "mileage": 17.5,
      "engine": 1462,
      "max_power": 103,
      "seats": 5,
      "fuel_type": "Petrol",
      "reasoning": "Best value for money with excellent mileage and spacious interior perfect for families"
    },
    // ... 2 more recommendations
  ],
  "total_matches": 12
}
```

### POST `/api/chat`

**Description**: Send a message to the LLaMA 3 chatbot

**Request Body**:
```json
{
  "message": "What's a good family car under 10 lakhs?",
  "conversation_history": [
    {
      "role": "user",
      "content": "Previous message..."
    },
    {
      "role": "assistant",
      "content": "Previous response..."
    }
  ]
}
```

**Response**:
```json
{
  "response": "Based on your budget of under 10 lakhs, here are some excellent family car options...",
  "model": "llama3:latest",
  "timestamp": "2025-09-29T10:30:00Z"
}
```

---

## 📸 Screenshots

### Homepage - Car Recommendation Form
<img width="1920" height="1020" alt="Screenshot (1841)" src="https://github.com/user-attachments/assets/ff65f219-ffe5-461e-941f-1e6199f745c2" />

### Recommendation Results
![fotor-20250930213217](https://github.com/user-attachments/assets/f223e960-d30c-4452-badb-68a513f8e132)

### Compare Cars Feature 
![Screenshot (1840)-fotor-20250930213727](https://github.com/user-attachments/assets/d62ca9e5-0683-441c-9733-e20025a1dd4b)

### AI Chatbot Interface
<img width="1920" height="1020" alt="Screenshot (1837)" src="https://github.com/user-attachments/assets/fb1c6fcc-4138-48c4-915f-356fa3e0c787" />

---

## 🗺️ Roadmap

### Version 2.0 (Q4 2025)
- [ ] **Enhanced ML Model**
  - Collaborative filtering for better recommendations
  - User feedback loop to improve suggestions
  - Hybrid recommendation algorithm (content + collaborative)

- [ ] **Advanced Chatbot Features**
  - Multi-turn conversation memory
  - Voice input/output support
  - Image recognition for car photos

- [ ] **UI/UX Improvements**
  - Car image gallery with zoom
  - Interactive comparison tables
  - Save and share recommendations
  - Dark mode support

### Version 3.0 (Q1 2026)
- [ ] **Mobile Application**
  - React Native iOS/Android app
  - Push notifications for price drops
  - Offline mode with cached data

- [ ] **Database Integration**
  - PostgreSQL for scalability
  - Real-time price updates
  - User accounts and preferences

- [ ] **Social Features**
  - User reviews and ratings
  - Community discussions
  - Share recommendations on social media

### Long-term Vision
- Integration with dealership APIs
- Virtual test drive booking
- Insurance and loan calculator
- Augmented reality car visualization
- Multi-language support

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

1. **Report Bugs**: Open an issue with detailed reproduction steps
2. **Suggest Features**: Share your ideas in the Discussions section
3. **Improve Documentation**: Fix typos or add clarifications
4. **Write Code**: Submit pull requests for new features or bug fixes
5. **Add Dataset**: Contribute more car data to improve recommendations

### Development Workflow

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   git clone https://github.com/yourusername/AI-Car-Recommendation-Agent.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow existing code style
   - Add tests if applicable
   - Update documentation

4. **Commit with clear messages**
   ```bash
   git commit -m "Add: New car comparison feature"
   ```

5. **Push and create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   # Open PR on GitHub
   ```

### Code Style Guidelines

- **TypeScript**: Use strict type checking
- **React**: Functional components with hooks
- **Naming**: camelCase for variables, PascalCase for components
- **Comments**: Explain "why", not "what"
- **Testing**: Write unit tests for new features

### Commit Message Format

```
Type: Short description

Detailed explanation if necessary

Fixes #issue_number
```

**Types**: Add, Fix, Update, Remove, Refactor, Docs

---

## 🙏 Acknowledgments

- **Ollama Team** - For providing an excellent local LLM runtime
- **Meta AI** - For open-sourcing LLaMA 3
- **Kaggle Community** - For the car dataset
- **Next.js Team** - For an amazing React framework
- **Tailwind Labs** - For the utility-first CSS framework

### Special Thanks

- Contributors who have helped improve this project
- Early testers who provided valuable feedback
- The open-source community for inspiration

---

## 📧 Contact

**Developer**: Omkar Surve  

### Project Links

- **Repository**: https://github.com/yourusername/AI-Car-Recommendation-Agent
- **Bug Reports**: https://github.com/yourusername/AI-Car-Recommendation-Agent/issues

---

## ⭐ Show Your Support

If you find this project helpful:
- Give it a ⭐ on GitHub
- Share with friends and colleagues
- Contribute to its development
- Sponsor the project (if applicable)

---

<div align="center">

**Built with ❤️ by Omkar Surve**

Made possible by open-source technologies

</div>
