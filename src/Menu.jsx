import React, { useState } from "react";
import './Menu.css';

const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsClicked(!isClicked);  // Toggle the "X" shape
  };

  return (
    <div className="dropdown">
      <button
        className={`dropdown-button ${isClicked ? 'clicked' : ''}`}
        onClick={toggleDropdown}
      >
        ☰
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <a href="#projects">-Projects-</a>
          <a href="#certifications">-Certifications-</a>
          <a href="#contact">-Contact-</a>
          <a href="#skills">-Skills-</a>
        </div>
      )}
    </div>
  );
};

export default Menu;
