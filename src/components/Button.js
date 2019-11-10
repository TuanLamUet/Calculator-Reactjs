import React from 'react';
import './Button.css';

let Button = (props) => {
    return(
        //Kiểm tra phần tử children có phải là Number hay không
        //Nếu là number thì dùng class number, nếu không thì dùng oprerator
        <div className={`wrap ${(isNaN(props.children) )? 'operator' : '' } `} 
        onClick={() => props.handleClick(props.children)}
        >
            {props.children}
        </div>
    );
}


export default Button;