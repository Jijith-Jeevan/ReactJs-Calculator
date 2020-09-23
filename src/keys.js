import React from 'react';
import './keys.css';

function Keys(props){
    return(
     <div>
         <button id="clear" onClick={()=>props.clear()}>Clear</button>
         <button id="operators" onClick={()=>props.setSign('/')}>/</button><br></br>
         <button id="num" onClick={()=>props.setnumber(props.keys[8])}>9</button>
         <button id="num" onClick={()=>props.setnumber(props.keys[7])}>8</button>
         <button id="num" onClick={()=>props.setnumber(props.keys[6])}>7</button>
         <button id="operators" onClick={()=>props.setSign('*')}>*</button><br></br>
         <button id="num" onClick={()=>props.setnumber(props.keys[5])}>6</button>
         <button id="num" onClick={()=>props.setnumber(props.keys[4])}>5</button>
         <button id="num" onClick={()=>props.setnumber(props.keys[3])}>4</button>
         <button id="operators" onClick={()=>props.setSign('-')}>-</button><br></br>
         <button id="num" onClick={()=>props.setnumber(props.keys[2])}>3</button>
         <button id="num" onClick={()=>props.setnumber(props.keys[1])}>2</button>
         <button id="num" onClick={()=>props.setnumber(props.keys[0])}>1</button>
         <button id="add" onClick={()=>props.setSign('+')}>+</button><br></br>
         <button id="num" onClick={()=>props.setnumber(props.keys[9])}>0</button>
         <button id="num" onClick={()=>props.setnumber(props.keys[10])}>.</button>
         <button id="equal" onClick={()=>props.equalSign()}>=</button>
        
     </div>
    );

    
}

export default Keys;
