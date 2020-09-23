import React from 'react';
import './display.css';

function Display(props){
      return(
          <div>
          <input type="text" className="disp" readOnly value={props.val} ></input>  
          </div>
        )
    };


export default Display;
