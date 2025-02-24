import React from 'react';
import Card from './Card.js';
import './App.css';

function App() {
  const cards = [
    {title: "Card 1", content: "First", color: "white"}, 
    {title: "Card 2", content: "Second", color: "gray"}, 
    {title: "Card 3", content: "Third", color: "black"}
  ];

  return (
    <div className='container'>
      {
        cards.map((card, index)=>(
          <Card key={index}{...card}/>
        ))
      }
    </div>
  );
}

export default App();