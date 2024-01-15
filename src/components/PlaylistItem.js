import React from "react";
import './styles/PlaylistItem.css';

function PlaylistItem({ image, title, description }) {
    return (
      <div className="item">
        <img src={image} alt={title} className="item-image" />
        <div className="item-info">
          <h3 className="item-title">{title}</h3>
          <p className="item-description">{description}</p>
        </div>
        <div className="song-item-play-icon"></div> 
      </div>
    );
  }
  
  export default PlaylistItem;