import React from 'react';
import './styles/ListItem.css';

function ListItem({ image, title, description }) {
  return (
    <div className="list-item">
      <img src={image} alt={title} className="list-item-image" />
      <div className="list-item-info">
        <h3 className="list-item-title">{title}</h3>
        <p className="list-item-description">{description}</p>
      </div>
      <div className="list-item-play-icon"></div> 
    </div>
  );
}

export default ListItem;
