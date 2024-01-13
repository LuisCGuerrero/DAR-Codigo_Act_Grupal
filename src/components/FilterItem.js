import React from 'react';
import './styles/FilterItem.css'; 

function FilterItem({title, description}) {
    return (
    <div className="item">
        <div className="item-info">
            <p className="item-title">{title}</p>
      </div>
    </div>
    );
}

export default FilterItem;