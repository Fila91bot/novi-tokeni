import { Routes, Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import StudioPage from './pages/StudioPage';

function App() {
  return (
    <div className="app">
      <h1>AI Chat + Studio</h1>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/studio" element={<StudioPage />} />
      </Routes>
    </div>
  );
}

export default App;
