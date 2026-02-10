# TimeTravel Agency — Interactive Webapp

A luxury futuristic time travel agency webapp built as a school project. Browse exclusive destinations across history, take a quiz to find your ideal journey, and chat with an AI-powered travel advisor.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll & hover animations
- **OpenRouter API** — AI chatbot backend (free model: `z-ai/glm-4.5-air:free`)

## Features

- **Landing page** — dark theme with gold accents, modern SaaS-style layout
- **Hero section** — animated title, subtitle, and CTA
- **Destinations** — 3 interactive cards (Paris 1889, Cretaceous −65M, Florence 1504) with hover effects
- **Quiz** — 4-question recommendation system with scoring logic (pure frontend, no AI)
- **AI Chatbot** — floating widget powered by an OpenAI-compatible API, with system prompt for luxury travel advisor persona
- **Responsive** — mobile-first design with hamburger menu

## AI Tools Used

- **Windsurf Cascade** — AI pair-programming assistant used to scaffold and build the entire project
- **OpenRouter** — free AI API provider powering the in-app chatbot assistant

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <your-repo-url>
cd Webapp
npm install
```

### Configuration de l'IA (OpenRouter)

Le chatbot utilise [OpenRouter](https://openrouter.ai) comme fournisseur IA avec un modèle **gratuit**.

1. Créer un compte sur [https://openrouter.ai](https://openrouter.ai)
2. Générer une clé API dans le dashboard
3. Copier le fichier d'exemple et ajouter votre clé :

```bash
cp .env.example .env.local
```

4. Éditer `.env.local` :

```
AI_API_KEY=sk-or-xxxxxxxxxxxxxxxx
AI_API_BASE=https://openrouter.ai/api/v1
AI_MODEL=z-ai/glm-4.5-air:free
```

| Variable | Required | Description |
|---|---|---|
| `AI_API_KEY` | Yes | Votre clé API OpenRouter |
| `AI_API_BASE` | No | URL de base (défaut : `https://openrouter.ai/api/v1`) |
| `AI_MODEL` | No | Modèle (défaut : `z-ai/glm-4.5-air:free`, alternatives : `mistralai/mistral-small-3.1-24b-instruct:free`, `meta-llama/llama-3.3-70b-instruct:free`) |

> **Note :** Ne jamais commit `.env.local`. Le fichier `.env.example` est fourni comme référence.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Deployment on Vercel

1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add environment variables in **Settings → Environment Variables** :
   - `AI_API_KEY` = votre clé OpenRouter
   - `AI_API_BASE` = `https://openrouter.ai/api/v1`
   - `AI_MODEL` = `z-ai/glm-4.5-air:free`
4. Deploy — zero extra config needed

## Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts   # AI chatbot API endpoint
│   ├── globals.css          # Tailwind + design tokens
│   ├── layout.tsx           # Root layout (Header + Footer)
│   └── page.tsx             # Home page (Hero, Destinations, Quiz, Chatbot)
├── components/
│   ├── Header.tsx           # Fixed navbar with mobile menu
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section with animations
│   ├── Destinations.tsx     # 3 destination cards
│   ├── Quiz.tsx             # 4-question recommendation quiz
│   └── Chatbot.tsx          # Floating AI chat widget
public/
└── assets/                  # Destination images
