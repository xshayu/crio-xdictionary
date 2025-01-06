import { useState } from 'react'
import './App.css';

interface DictionaryEntry {
  word: string;
  meaning: string;
}

function App() {
  const [dictionary] = useState<DictionaryEntry[]>([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResult, setSearchResult] = useState<string>("Word not found in the dictionary.");

  const handleSearch = () => {
    const searchTermLower = searchTerm.toLowerCase();
    
    const foundWord = dictionary.find(
      entry => entry.word.toLowerCase() === searchTermLower
    );

    setSearchResult(
      foundWord 
        ? foundWord.meaning 
        : "Word not found in the dictionary."
    );
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <p>Definition:</p>
        <p>{searchResult}</p>
      </div>
    </div>
  );
}

export default App
