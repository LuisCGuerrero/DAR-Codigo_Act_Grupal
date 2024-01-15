import React from "react";
import "./styles/LibraryHeader.css";

function LibraryHeader(){
    return (
        <div className="tu-biblioteca-header"> 
                <img className="icon" src="https://cdn.sanity.io/images/tsbk0zvv/production/f1a3a073127aade3fa0377ce143a166d56d596e9-24x24.svg?w=60&fit=max&auto=format" alt="Biblioteca"/>
                <span>
                    Tu biblioteca
                </span>
                <div className='tu-biblioteca-header-icons'>
                    <img className='icon' alt="Añadir" src={"/img/Sidebar/icons8-añadir-50.png"} />
                </div>
            </div>
    );
}

export default LibraryHeader;