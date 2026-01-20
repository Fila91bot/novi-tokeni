const express = require('express');
const { openai } = require('@ai-sdk/openai'); // ili grok ako integriraš xAI
const { generateText } = require('ai');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  try {
    const { text } = await generateText({
      model: openai('gpt-4-turbo'), // ili tvoj AI model, npr. grok
      messages,
    });
    res.json({ response: text });
  } catch (error) {
    res.status(500).json({ error: 'AI error' });
  }
});

// Dodaj streaming endpoint za chat (Vercel AI style)
app.post('/api/stream-chat', async (req, res) => {
  const { messages } = req.body;
  res.setHeader('Content-Type', 'text/event-stream');
  const stream = await generateText({
    model: openai('gpt-4-turbo'),
    messages,
    stream: true,
  });
  for await (const chunk of stream) {
    res.write(`data: ${chunk}\n\n`);
  }
  res.end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend on port ${PORT}`));
