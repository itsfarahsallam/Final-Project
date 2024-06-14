import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import About from "./pages/About"; 
import AppFaves from "./pages/AppFaves"; 
import LifeList from "./pages/LifeList";
import Quiz from "./pages/Quiz";
import CountdownTimer from './components/CountdownTimer';
import "./App.css";

function App() {
  const targetDate = new Date('2025-01-01T00:00:00'); // target date

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
              <li><Link to="/quiz">Quiz</Link></li>
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
                  <div className="title">Countdown Till Next Year</div>
                  <div className="content">
                    <CountdownTimer targetDate={targetDate} />
                  </div>
                </div>
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/life-list" element={<LifeList />} />
            <Route path="/faves" element={<AppFaves />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
      </div>
      <footer className="App-footer">
        <p>Site Still Under Construction</p>
        <p>&copy; Farah Sallam 2024</p>
        <img src="https://i.gifer.com/embedded/download/4QYc.gif" alt="Cockatiel Somersault" width="300px" height="200px"/>
      </footer>
    </Router>
  );
}

export default App;
