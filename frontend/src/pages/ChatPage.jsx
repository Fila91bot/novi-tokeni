import { useState } from 'react';
import { useChat } from 'ai/react';  // Vercel AI SDK hook

function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/stream-chat',  // Poziva backend gateway
  });

  return (
    <div>
      <h2>AI Chat</h2>
      <div className="chat-window">
        {messages.map((m) => (
          <div key={m.id}>{m.role}: {m.content}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
}

export default ChatPage;
