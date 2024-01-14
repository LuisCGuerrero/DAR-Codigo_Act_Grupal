import React from 'react';
import './styles/Sidebar.css';
import Logo from './Logo.js'

function Sidebar() {
  return (
      <div className="sidebar">
        <Logo/>
        <div className="menu-item">
          <img src="https://cdn3.emoji.gg/emojis/7184-spotify-home.png" alt="Inicio" className="icon" />
          <span>Inicio</span>
        </div>
        <div className="menu-item">
          <img src="https://cdn3.emoji.gg/emojis/3421-spotify-search.png" alt="Buscar" className="icon" />
          <span>Buscar</span>
        </div>
      </div>
  );
}

export default Sidebar;
