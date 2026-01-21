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




Primjer ChatView.vue (sa Vercel AI SDK streaming chat-om):

<script setup>
import { useChat } from 'ai/vue'

const { messages, input, handleInputChange, handleSubmit } = useChat({
  api: '/api/chat/stream',          // Laravel ruta koja proxy-a AI
  body: { model: 'gpt-4o-mini' }    // ili grok, claude...
})
</script>

<template>
  <div class="chat-container">
    <h1>AI Chat</h1>
    
    <div class="messages">
      <div v-for="msg in messages" :key="msg.id" :class="msg.role">
        <strong>{{ msg.role === 'user' ? 'Ti' : 'AI' }}:</strong> {{ msg.content }}
      </div>
    </div>

    <form @submit="handleSubmit">
      <input v-model="input" placeholder="Pitaj nešto..." />
      <button type="submit">Pošalji</button>
    </form>
  </div>
</template>

<style scoped>
.user { text-align: right; color: blue; }
.assistant { text-align: left; color: green; }
</style>
