# TimeTravel Agency — Interactive Webapp

A luxury futuristic time travel agency webapp built as a school project. Browse exclusive destinations across history, take a quiz to find your ideal journey, and chat with an AI-powered travel advisor.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll & hover animations
- **OpenAI-compatible API** — AI chatbot backend

## Features

- **Landing page** — dark theme with gold accents, modern SaaS-style layout
- **Hero section** — animated title, subtitle, and CTA
- **Destinations** — 3 interactive cards (Paris 1889, Cretaceous −65M, Florence 1504) with hover effects
- **Quiz** — 4-question recommendation system with scoring logic (pure frontend, no AI)
- **AI Chatbot** — floating widget powered by an OpenAI-compatible API, with system prompt for luxury travel advisor persona
- **Responsive** — mobile-first design with hamburger menu

## AI Tools Used

- **Windsurf Cascade** — AI pair-programming assistant used to scaffold and build the entire project
- **OpenAI API** (or compatible) — powers the in-app chatbot assistant

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

### Environment Variables

Copy the example file and fill in your API key:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

| Variable | Required | Description |
|---|---|---|
| `AI_API_KEY` | Yes | Your OpenAI (or compatible) API key |
| `AI_API_BASE` | No | Custom API base URL (defaults to `https://api.openai.com/v1`) |
| `AI_MODEL` | No | Model name (defaults to `gpt-3.5-turbo`) |

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
3. Add the environment variable `AI_API_KEY` in **Settings → Environment Variables**
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
