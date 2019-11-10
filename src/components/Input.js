import React from 'react';
import './Input.css';

let Input = (props) => {
    return(
        <div className="box">
            {props.children}
        </div>
    )
    }
export default Input;