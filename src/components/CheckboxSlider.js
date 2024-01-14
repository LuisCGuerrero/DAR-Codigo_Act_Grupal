import React from "react";
import './styles/CheckboxSlider.css';

function CheckboxSlider(){
    return(
    <div className='remindCheckboxContainer'>
        <div class="checkbox-slider">                    
            <input type="checkbox" id="slider"></input>
            <label for="slider">Recuérdame</label>
        </div>
    </div>
    );
}

export default CheckboxSlider;