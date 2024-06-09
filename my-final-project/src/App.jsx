import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router, Routes, 
  Route, Link 
} from "react-router-dom"; 
import About from "./pages/About"; 
import AppFaves from "./pages/AppFaves"; 
import LifeList from "./pages/LifeList";
import BirdList from "./components/BirdList";
import DynamicScriptLoader from "./components/DynamicScriptLoader";
import "./App.css";
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
    <Router>
      <header className="App-header">
        <h1>My Birding Website</h1>
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
                    <p>Hello! My name is Farah and this is my website.</p>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="title">Search</div>
                  <div className="content">
                    <BirdList birds={birds} />
                  </div>
                </div>
                <div className="wrapper">
                  <div className="title">Till Next Year</div>
                  <div className="content">
                    <DynamicScriptLoader src="path/to/your/timer.js" />
                    {/* Timer HTML elements */}
                    <div id="days">0</div>Days
                    <div id="hours">00</div>Hours
                    <div id="minutes">00</div>Minutes
                    <div id="seconds">00</div>Seconds
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
    </Router>
  );
}

export default App;
