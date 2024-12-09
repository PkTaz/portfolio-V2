import React, { useState } from 'react';
import './App.css';
import Cube from './Cube';
import ImageGrid from './ImageGrid';


function App() {
  const name = "William Chapman";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const letters = name.split("").map((letter, index) => (
    <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <a href="#home" className="nav-link">Home</a>
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            ☰
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
              <a href="#skills">Skills</a>
            </div>
          )}
        </div>      
      </header>
      <main>
      <h1 className="letter">{letters}</h1>
      <div className = "image-wrapper">
      <img src= './assets/profilep.jpeg' alt="Profile" className="profile-image" />
      </div>
      <h2 className="job-title">Front-End Developer + Software Engineer</h2>
      <p className="bio">I’m deeply passionate about using technology to drive meaningful change. 
        With a strong focus on understanding the needs of customers, I work to create solutions 
        that not only address their immediate challenges but also anticipate future needs. 
        My approach is always impact-driven, and I believe in delivering thoughtful, 
        compassionate solutions that make a real difference in people’s lives. 
        By combining technical expertise with a customer-first mindset, 
        I strive to build systems that truly resonate and add value to those who use them.</p>
        <Cube />
        <div className="button-c">
        <a href="./assets/WillChapman-R.pdf" target="_blank" class="web-button">View Resume</a>
        </div>
        <h3 className="cert-title">Certifications</h3>
        <ImageGrid />
      </main>
    </div>
  );
}

export default App;
