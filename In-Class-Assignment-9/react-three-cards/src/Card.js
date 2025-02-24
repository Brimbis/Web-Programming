import React from 'react';
import './Card.css'; //Import CSS for styling

export default function Card({title, content, color}) {
    return (
        <div className='card' style={{backgroundColor: color}}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}