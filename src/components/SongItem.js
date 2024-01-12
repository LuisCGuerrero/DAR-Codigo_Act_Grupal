import React from 'react';
import './styles/SongItem.css'; 

function SongItem({ image, title, description }) {
  return (
    <div className="item">
      <img src={image} alt={title} className="item-image" />
      <div className="item-info">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
      </div>
    </div>
  );
}

export default SongItem;
