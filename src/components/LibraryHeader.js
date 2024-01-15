import React from "react";
import "./styles/LibraryHeader.css";
import iconMore from './img/icons8-añadir-50.png';
import iconFlecha from './img/icons8-flecha-50.png';

function LibraryHeader(){
    return (
        <div className="tu-biblioteca-header"> 
                <img className="icon" src="https://cdn.sanity.io/images/tsbk0zvv/production/f1a3a073127aade3fa0377ce143a166d56d596e9-24x24.svg?w=60&fit=max&auto=format" />
                <span>
                    Tu biblioteca
                </span>
                <div className='tu-biblioteca-header-icons'>
                    <img className='icon' src={iconMore} />
                    <img className='icon' src={iconFlecha} />
                </div>
            </div>
    );
}

export default LibraryHeader;