import React from 'react';
import './styles/Sidebar.css';
import Logo from './Logo.js';
import LibraryHeader from './LibraryHeader.js';
import { Link } from 'react-router-dom';
import like from "./img/like.png"
import aitana from "./img/aitana_icon.jpeg"
import guitar from "./img/guitar_icon.jpeg"
import wild from "./img/wild_icon.jpeg"
import hola from "./img/hola_icon.jpeg"
import fito from "./img/fito_icon.jpeg"
import sabina from "./img/sabina_icon.jpeg"
import PlaylistItem from './PlaylistItem.js';


const ButtonSideBar = () => {
    return (
        <div className="btn-sidebar-div">
          <Link to="/" className="playlist-categoty"><span className='category-text'>Listas</span></Link>
          <Link to="/" className="playlist-categoty"><span className='category-text'>Artistas</span></Link>
          <Link to="/" className="playlist-categoty"><span className='category-text'>Álbumes</span></Link>
          <Link to="/" className="playlist-categoty"><span className='category-text'>Playlist</span></Link>
        </div>
      );
  };

const playlistData = [
    { id: 1,
        image: like,
        title: "Canciones que te gustan",
        description: "Lista",
    },
    { id: 2,
        image: guitar,
        title: "Rock",
        description: "Género",
    },
    { id: 3,
        image: aitana,
        title: "Aitana",
        description: "Artista",
    },
    { id: 4,
        image: wild,
        title: "The Wild Proyect",
        description: "Podcast",
    },
    { id: 5,
        image: hola,
        title: "Hola Beats",
        description: "Artista",
    },
    { id: 6,
        image: fito,
        title: "Fitografía",
        description: "Álbum - Fito y Fitipaldis",
    },
    { id: 7,
        image: sabina,
        title: "Joaquín Sabina",
        description: "Artista",
    },
]

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarArriba">
                <div className="logo-inicio">
                <Logo color="white"/>
                </div>
            <div className="menu-item">
                <img src="https://cdn3.emoji.gg/emojis/7184-spotify-home.png" alt="Inicio" className="icon" />
                <span>Inicio</span>
            </div>
            <div className="menu-item">
                <img src="https://cdn3.emoji.gg/emojis/3421-spotify-search.png" alt="Buscar" className="icon" />
                <span>Buscar</span>
            </div>
        </div>

        <div className='sidebarAbajo'>
            <LibraryHeader />
            <div className='div-btn'>
                <ButtonSideBar />
            </div>
            <div className='playlist-feed'>
                {playlistData.map((playlistData) => (
                    <PlaylistItem
                       key={playlistData.id}
                        image={playlistData.image}
                        title={playlistData.title}
                        description={playlistData.description}
                    />
                ))}
                
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
