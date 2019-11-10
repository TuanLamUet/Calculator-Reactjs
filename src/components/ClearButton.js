import React from 'react';
import './ClearButton.css';

let ClearButton = (props) => {
    return(
        <div className="clear"
        onClick={()=>{props.handleClear()}}
        >
            {props.children}
        </div>
    )
}

export default ClearButton;
