import React from 'react';
import './styles/Sidebar.css';
import Logo from './Logo.js';
import LibraryHeader from './LibraryHeader.js';
import { Link } from 'react-router-dom';
import like from "./img/like.png"
import PlaylistItem from './PlaylistItem.js';


const ButtonSideBar = () => {
    return (
        <div className="btn-sidebar-div">
          <Link to="/" className="playlist-categoty">Listas</Link>
          <Link to="/" className="playlist-categoty">Artistas</Link>
          <Link to="/" className="playlist-categoty">Álbumes</Link>
          <Link to="/" className="playlist-categoty">Playlist</Link>
        </div>
      );
  };

const playlistData = [
    { id: 1,
        image: like,
        title: "Canciones que te gustan",
        description: "Playlists",
    },
    { id: 2,
        image: like,
        title: "Canciones que te gustan",
        description: "",
    },
    { id: 3,
        image: like,
        title: "Canciones que te gustan",
        description: "",
    },
    { id: 4,
        image: like,
        title: "Canciones que te gustan",
        description: "",
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
                <img src="httpss://cdn3.emoji.gg/emojis/3421-spotify-search.png" alt="Buscar" className="icon" />
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
