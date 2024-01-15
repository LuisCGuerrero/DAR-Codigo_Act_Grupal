import React from 'react';
import './styles/Sidebar.css';
import Logo from './Logo.js';
import LibraryHeader from './LibraryHeader.js';
import { Link } from 'react-router-dom';
import PlaylistItem from './PlaylistItem.js';


const ButtonSideBar = () => {
    return (
        <div className="btn-sidebar-div">
          <Link to="/nopage" className="playlist-categoty"><span className='category-text'>Listas</span></Link>
          <Link to="/nopage" className="playlist-categoty"><span className='category-text'>Artistas</span></Link>
          <Link to="/nopage" className="playlist-categoty"><span className='category-text'>Álbumes</span></Link>
          <Link to="/nopage" className="playlist-categoty"><span className='category-text'>Playlist</span></Link>
        </div>
      );
  };

const playlistData = [
    { id: 1,
        image: "/img/Sidebar/like.png",
        title: "Canciones que te gustan",
        description: "Lista",
    },
    { id: 2,
        image: "/img/Sidebar/guitar_icon.jpeg",
        title: "Rock",
        description: "Género",
    },
    { id: 3,
        image: "/img/Sidebar/aitana_icon.jpeg",
        title: "Aitana",
        description: "Artista",
    },
    { id: 4,
        image: "/img/Sidebar/wild_icon.jpeg",
        title: "The Wild Proyect",
        description: "Podcast",
    },
    { id: 5,
        image: "/img/Sidebar/hola_icon.jpeg",
        title: "Hola Beats",
        description: "Artista",
    },
    { id: 6,
        image: "/img/Sidebar/fito_icon.jpeg",
        title: "Fitografía",
        description: "Álbum - Fito y Fitipaldis",
    },
    { id: 7,
        image: "/img/Sidebar/sabina_icon.jpeg",
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
                <img src="/img/Sidebar/spotify_home.png" alt="Inicio" className="icon" />
                <span>Inicio</span>
            </div>
            <div className="menu-item">
                <img src="/img/Sidebar/spotify_search.png" alt="Buscar" className="icon" />
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
