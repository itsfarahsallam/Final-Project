import React, { useEffect, useState } from 'react';
import BirdList from './components/BirdList';
import './App.css';
import axios from 'axios';

function App() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/birds/recent', {
          params: {
            lat: 40.730610, // Example latitude
            lng: -73.935242, // Example longitude
            dist: 25 // Search within 25 km
          }
        });
        setBirds(response.data);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchBirds();
  }, []);

  return (
    <>
    <body>
      <header className="App-header">
        <h1>My Birding Website</h1>
      </header>
      <div id="flex">
        <main>
          <nav>
            <div class ="navbar">
              <ul>
                <li><a href="my-final-project\src\App.jsx">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">My Life List</a></li>
                <li><a href="#">My Faves</a></li>
              </ul>
            </div>
          </nav>
          <div class="wrapper">
            <div class="title">Welcome!</div>
                    <div class="content">
                        <p>Hello! My name is Farah and this is my website.</p>
                    </div>
          </div>
          <BirdList birds={birds} />
        </main>
      </div>
     
    </body>
    </>
  );
}

export default App;
