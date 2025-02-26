import React from 'react';
import Card from './Card.js';

export default function CardList() {
    const cards = [
        {title: "Card 1", content: "First", color: "#AA4A44"}, 
        {title: "Card 2", content: "Second", color: "#06402B"}, 
        {title: "Card 3", content: "Third", color: "#1E3F66"}
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