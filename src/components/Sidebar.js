import React from 'react';
import './styles/Sidebar.css';
import Logo from './Logo.js';
import FilterItem from './FilterItem.js';


const filterData = [
  {id: 1, title: 'Listas', description: ''},
  {id: 2, title: 'Podcasts y programas'},
  {id: 3, title: 'Álbumes'},
  {id: 4, title: 'Artistas'}
];

function Sidebar() {
  return (
      <div className="sidebar">
        <Logo/>
        <div className="sidebar-top">
          <div className="menu-item">
            <img src="https://cdn3.emoji.gg/emojis/7184-spotify-home.png" alt="Inicio" className="icon" />
            <span>Inicio</span>
          </div>
          <div className="menu-item">
            <img src="https://cdn3.emoji.gg/emojis/3421-spotify-search.png" alt="Buscar" className="icon" />
            <span>Buscar</span>
          </div>
        </div>
        <div className="tu-biblioteca">
          {/*Falta el logo*/}
          <span>Tu Biblioteca</span>
          {/*Logo + y ->*/}
          <div classname="sidebar-filter">
            {filterData.map(filter => (
              <FilterItem key={filter.id} title={filter.title} />
            ))}
          </div> {/*Debería mostrarse en una única fila*/}
          <div className="playlist">
            <p>Aqui van les playlist</p>
          </div>
        </div>
      </div>
  );
}

export default Sidebar;
