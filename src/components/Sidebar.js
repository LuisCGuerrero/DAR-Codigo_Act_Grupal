import React from 'react';
import './styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://i.pinimg.com/originals/52/a3/fe/52a3fea300d4c0e1bd411deff2b8fcdb.jpg" alt="Logo" className="logo-image" />
      </div>
      <div className="menu-item">
        <img src="https://cdn3.emoji.gg/emojis/7184-spotify-home.png" alt="Inicio" className="icon" />
        <span>Inicio</span>
      </div>
      <div className="menu-item">
        <img src="https://cdn3.emoji.gg/emojis/3421-spotify-search.png" alt="Buscar" className="icon" />
        <span>Buscar</span>
      </div>
      {/* Agregar más elementos de menú según sea necesario */}
    </div>
  );
}

export default Sidebar;
