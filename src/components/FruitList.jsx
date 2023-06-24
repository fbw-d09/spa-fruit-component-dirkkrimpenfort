import React, { useState } from "react";
import Button from "./Button.jsx";
import "./FruitList.scss";

function FruitList() {
    const [fruits, setFruits] = useState( [
        { id: 1, name: "Apfel", color:`#${Math.floor(Math.random() * 16777215).toString(16)}`},
        { id: 2, name: "Banane", color: `#${Math.floor(Math.random() * 16777215).toString(16)}`},
        { id: 3, name: "Kiwi", color:`#${Math.floor(Math.random() * 16777215).toString(16)}`},
        { id: 4, name: "Orange", color:`#${Math.floor(Math.random() * 16777215).toString(16)}`},
    ]);

    const removeFruit = (id) => {
      setFruits(fruits.filter((fruit) => fruit.id !== id));
    };

    const [buttonText, setButtonText] = useState('Alles löschen');
    const [clickFunction, setClickFunction] = useState(() => () => removeAllFruits());
    
    const removeAllFruits = () => {
      setFruits([]);
      setButtonText('Alle Früchte anzeigen');
      setClickFunction(() => () => showAllFruits());
    };

    const showAllFruits = () => {
        window.location.reload();
    }
    
    return (
      <div className="FruitList">
          <h1>Früchte</h1>
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <Button
            name={fruit.name}
            color={fruit.color}
            removeFruit={() => removeFruit(fruit.id)}
          />
        </div>
      ))}
      <div className="ButtonContainer">
        <button  className="deleteAll" onClick={clickFunction} >{buttonText}</button>
      </div>
      
      </div>  
      )}


        
export default FruitList;