import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import About from "./pages/About"; 
import AppFaves from "./pages/AppFaves"; 
import LifeList from "./pages/LifeList";
import BirdList from "./components/BirdList";
import DynamicScriptLoader from "./components/DynamicScriptLoader";
import "./App.css";
import axios from 'axios';

function App() {
  const [birds, setBirds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const fetchBirds = async () => {
    try {
      const response = await axios.get('https://api.ebird.org/v2/data/obs/geo/recent', {
        headers: {
          'X-eBirdApiToken': 'ni9u96j4iq8f'
        },
        params: {
          q: searchTerm
        }
      });
      setBirds(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchBirds();
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    fetchBirds();
  };

  return (
    <Router>
      <header className="App-header">
        <h1>My Birding Website</h1>
        <img src="https://img1.picmix.com/output/stamp/normal/4/0/9/8/1698904_e0e83.gif" alt="Birding" />
      </header>
      <div id="flex">
        <nav>
          <div className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/life-list">My Life List</Link></li>
              <li><Link to="/faves">My Faves</Link></li>
            </ul>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={
              <div>
                <div className="wrapper">
                  <div className="title">Welcome!</div>
                  <div className="content">
                    <p>Hello! My name is Farah and this is my birding website.</p>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="title">Search</div>
                  <div className="content">
                    <form onSubmit={handleSearch}>
                      <label>
                        Search For a Bird by Common Name:
                        <input 
                          type="text" 
                          value={searchTerm} 
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </label>
                      <br></br><br></br>
                      <button type="submit">Search</button>
                    </form>
                    <BirdList birds={birds} />
                    {error && <p>Error: {error}</p>}
                  </div>
                </div>
                <div className="wrapper">
                  <div className="title">Countdown Till Next Year</div>
                  <div className="content">
                    <DynamicScriptLoader src="my-final-project/src/components/timer.js" />
                    <div id="days"></div>Days
                    <div id="hours"></div>Hours
                    <div id="minutes"></div>Minutes
                    <div id="seconds"></div>Seconds
                  </div>
                </div>
              </div>
            } />
            
            <Route path="/about" element={<About />} />
            <Route path="/life-list" element={<LifeList />} />
            <Route path="/faves" element={<AppFaves />} />
          </Routes>
        </main>
      </div>
      <footer className= "App-footer">
        <p>Site Still Under Construction</p>
        <p>&copy; Farah Sallam 2024</p>
        <img src="https://i.gifer.com/embedded/download/4QYc.gif" alt="Cockatiel Somersault" width="300px" height="200px"/>
      </footer>
    </Router>
  );
}

export default App;
