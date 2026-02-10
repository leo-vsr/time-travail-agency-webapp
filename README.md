# TimeTravel Agency — Webapp Interactive

Une webapp d'agence de voyage temporel de luxe, réalisée dans le cadre d'un projet scolaire. Parcourez des destinations exclusives à travers l'histoire, faites un quiz pour trouver votre voyage idéal et discutez avec un conseiller de voyage propulsé par l'IA.

## Stack technique

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animations au scroll et au survol
- **API OpenRouter** — backend du chatbot IA (modèle gratuit : `z-ai/glm-4.5-air:free`)

## Fonctionnalités

- **Page d'accueil** — thème sombre avec accents dorés, design moderne style SaaS
- **Section héro** — titre animé, sous-titre et bouton d'appel à l'action
- **Destinations** — 3 cartes interactives (Paris 1889, Crétacé −65M, Florence 1504) avec effets au survol et modal de détails
- **Quiz** — système de recommandation en 4 questions avec logique de scoring (frontend pur, sans IA)
- **Chatbot IA** — widget flottant propulsé par une API compatible OpenAI, avec prompt système de conseiller de voyage de luxe
- **Responsive** — design mobile-first avec menu hamburger

## Outils IA utilisés

- **Windsurf Cascade** — assistant IA de pair-programming utilisé pour construire l'ensemble du projet
- **OpenRouter** — fournisseur d'API IA gratuit alimentant le chatbot intégré

## Démarrage

### Prérequis

- Node.js 18+
- npm

### Installation

```bash
git clone <url-de-votre-repo>
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

| Variable | Requis | Description |
|---|---|---|
| `AI_API_KEY` | Oui | Votre clé API OpenRouter |
| `AI_API_BASE` | Non | URL de base (défaut : `https://openrouter.ai/api/v1`) |
| `AI_MODEL` | Non | Modèle (défaut : `z-ai/glm-4.5-air:free`, alternatives : `mistralai/mistral-small-3.1-24b-instruct:free`, `meta-llama/llama-3.3-70b-instruct:free`) |

> **Note :** Ne jamais commit `.env.local`. Le fichier `.env.example` est fourni comme référence.

### Lancer en local

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
npm run build
npm start
```

## Déploiement sur Vercel

1. Pousser le repo sur GitHub
2. Importer le projet sur [vercel.com](https://vercel.com)
3. Ajouter les variables d'environnement dans **Settings → Environment Variables** :
   - `AI_API_KEY` = votre clé OpenRouter
   - `AI_API_BASE` = `https://openrouter.ai/api/v1`
   - `AI_MODEL` = `z-ai/glm-4.5-air:free`
4. Déployer — aucune configuration supplémentaire nécessaire

## Structure du projet

```
src/
├── app/
│   ├── api/chat/route.ts   # Route API du chatbot IA
│   ├── globals.css          # Tailwind + tokens de design
│   ├── layout.tsx           # Layout racine (Header + Footer)
│   └── page.tsx             # Page d'accueil (Héro, Destinations, Quiz, Chatbot)
├── components/
│   ├── Header.tsx           # Barre de navigation fixe avec menu mobile
│   ├── Footer.tsx           # Pied de page
│   ├── Hero.tsx             # Section héro avec animations
│   ├── Destinations.tsx     # 3 cartes de destinations + modal détails
│   ├── Quiz.tsx             # Quiz de recommandation en 4 questions
│   └── Chatbot.tsx          # Widget de chat IA flottant
public/
└── assets/                  # Images des destinations
