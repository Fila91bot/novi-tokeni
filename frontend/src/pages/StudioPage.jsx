function StudioPage() {
  const [prompt, setPrompt] = useState('Default system prompt');

  return (
    <div>
      <h2>AI Studio</h2>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={() => console.log('Save prompt to backend')}>Spremi</button>
      <p>Ovdje možeš buildati custom AI flows, dodati modele, itd.</p>
    </div>
  );
}

export default StudioPage;
