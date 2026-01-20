# Novi Tokeni - AI Chat + Studio Monorepo

Ovaj repo je kostur za AI projekte: chat app sa studio-om za building AI interakcija, backend gateway sa Vercel AI SDK, frontend sa React Router.

## Struktura
- `/backend`: Node.js API gateway za AI pozive.
- `/frontend`: React app sa chat-om i studio-om.

## Setup
1. `cd backend && npm install`
2. `cd ../frontend && npm install`
3. Dodaj .env u backend: `AI_API_KEY=your-key` (npr. za Grok ili OpenAI)
4. Pokreni backend: `npm run dev`
5. Pokreni frontend: `npm run dev`

Deploy: Frontend na Vercel, backend na Vercel ili Render.
