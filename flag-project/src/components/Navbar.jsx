import "./Navbar.css";
import logo from "../assets/techover-logo-dark.png";
import logoLight from "../assets/techover-logo.png";
import darkModeIcon from "../assets/dark-mode-icon.svg";
import lightModeIcon from "../assets/light-mode-icon.svg";
import React, {useState} from 'react';
import '../App.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

    return (
      <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
        <nav className={darkMode ? 'dark-mode' : ''}>
          <div className="navbar">
            <h2 className={darkMode ? 'dark-mode' : ''}>The Flag App</h2>
            <img 
              className="logo" 
              src={darkMode ? logoLight : logo}
              alt="Techover logo"
            />
            <div className="mode-switch" onClick={toggleDarkMode}>
              <input type="checkbox" checked={darkMode} readOnly />
              <span className="mode-switch">
                <img 
                  src={darkMode ? lightModeIcon : darkModeIcon} 
                />
                {darkMode ? 'DARK MODE' : 'LIGHT MODE'}</span>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;
