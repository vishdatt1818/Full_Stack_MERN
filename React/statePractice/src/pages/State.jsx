
import "./State.css"

import React, { useState } from 'react';


const State = ({colors}) => {

const [color, setColor] = useState("red")

const changeColor = () =>{
    const idx = Math.floor(Math.random() * colors.length)
    console.log(idx);
    
    const randomColor = colors[idx]
   
    setColor(randomColor)
    console.log(randomColor);
    
    
}
 
  return (
    <>
    <div className='parent' >
      <div className="box" onClick={changeColor} style={{backgroundColor:color}}> </div>
    </div>
    </>
  )
}

export default State
