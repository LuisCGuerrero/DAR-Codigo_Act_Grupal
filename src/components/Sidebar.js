import React from 'react';
import './styles/Sidebar.css';
import Logo from './Logo.js';
import FilterItem from './FilterItem.js';


const filterData = [
  {id: 1, title: 'Listas'},
  {id: 2, title: 'Pódcasts'},
  {id: 3, title: 'Álbumes'},
  {id: 4, title: 'Artistas'}
];

const pData = [
  {id: 1, title: 'Canciones que te gustan', description: 'Lista'},
  {id: 2, title: 'Taylor Swift', description: 'Artista'},
  {id: 3, title: 'Quevedo', description: 'Artista'},
  {id: 4, title: 'Bad Bunny', description: 'Artista'},
  {id: 5, title: 'Estopa', description: 'Artista'}
];

function Sidebar() {
  return (
      <div className="sidebar">
        
        <div className="sidebar-top sidebar-element">
        { <Logo/> }
          <div className="menu-item">
            <img src="https://cdn3.emoji.gg/emojis/7184-spotify-home.png" alt="Inicio" className="icon" />
            <span>Inicio</span>
          </div>
          <div className="menu-item">
            <img src="https://cdn3.emoji.gg/emojis/3421-spotify-search.png" alt="Buscar" className="icon" />
            <span>Buscar</span>
          </div>
        </div>
        <div className="tu-biblioteca sidebar-element">
          {/*Falta el logo*/}
            <div className='box-header'>
              <div className='box-title'>
                <span >Tu Biblioteca</span>
              </div>
              <div className='box-action'>+</div>
              <div className='box-action'>-</div>
            </div>
          {/*Logo + y ->*/}
            <div className="sidebar-filter">
              {filterData.map((filter) => (
                <FilterItem key={filter.id} title={filter.title} />
                ))}
            </div>
          <div className="playlist">
            <p>Aqui van les playlist</p>
            <div className="p-list" >
              {pData.map(p => (
                <pItem key={p.id}  title={p.title} description={p.description} />
              ))}    
            </div>
          </div>
        </div>
      </div>
  );
}

export default Sidebar;
