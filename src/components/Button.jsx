import React, { useState } from "react";
import "./Button.scss";


function Button( {name, color, removeFruit}) {
  const [fruitColor, setFruitColor] = useState(color);
  
  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setFruitColor(randomColor);
  };
    return (
        <>
        <h2 style={{ color: fruitColor }}>{name}</h2>
        <div className="changeColorGroup">
          <button  className="changeColor" type="button" onClick={changeColor} >Change Color</button>
          <button  className="changeColor" type="button" onClick={removeFruit} >Delete Fruit</button>
        </div>
        </>
      );

};

export default Button;