import React, { useState } from 'react';
import './Fruit.css';

function Fruit({ name, color, removeFruit }) {
  const [fruitColor, setFruitColor] = useState(color);

  const changeColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setFruitColor(randomColor);
  };

  return (
    <div className={`FruitCard ${fruitColor}`}>
      <h2 style={{ color: fruitColor }}>{name}</h2>
      <div className="button-container">
        <button className="button-green" onClick={changeColor}>
          Farbe ändern
        </button>
        <button className="button-red" onClick={removeFruit}>
          Löschen
        </button>
      </div>
    </div>
  );
}

export default Fruit;
