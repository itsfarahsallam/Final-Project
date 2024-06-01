import React, { useEffect, useState } from 'react';
import BirdList from './components/BirdList';
import './App.css';
import axios from 'axios';

function App() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/birds')
      .then(response => {
        setBirds(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the bird data!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Birding Website</h1>
      </header>
      <BirdList birds={birds} />
    </div>
  );
}

export default App;
