import React, { useState } from 'react';
import './App.css';
import Fruit from './components/Fruit';

function App() {
  const [fruits, setFruits] = useState([
    { id: 1, name: 'Apfel', color: 'red' },
    { id: 2, name: 'Banane', color: 'yellow' },
    { id: 3, name: 'Orange', color: 'orange' },
    { id: 4, name: 'Erdbeere', color: 'red' },
  ]);

  const removeFruit = (id) => {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
  };

  const removeAllFruits = () => {
    setFruits([]);
  };

  return (
    <div className="App">
      <h2>Früchte</h2>
      <div className="FruitContainer">
        {fruits.map((fruit) => (
          <div key={fruit.id}>
            <Fruit
              name={fruit.name}
              color={fruit.color}
              removeFruit={() => removeFruit(fruit.id)}
            />
          </div>
        ))}
      </div>
      <div className="ButtonContainer">
        <button onClick={removeAllFruits}>Alles löschen</button>
      </div>
    </div>
  );
}

export default App;
