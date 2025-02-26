import React from 'react';
import './Card.css'; //Import CSS for styling

export default function Card({title, content, color}) {

    const lightenColor = (hex, factor = 2) => {
        const toRGB = (start) => Math.max(0, Math.floor(parseInt(hex.slice(start, start + 2), 16) * factor));

        return `rgb(${toRGB(1)}, ${toRGB(3)}, ${toRGB(5)})`;
    };
    const handleClick = () => {
        alert(title);
    };

    return (
        <div className='card' style={{backgroundColor: color}}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button type='button' onClick={handleClick} style={{ backgroundColor: lightenColor(color) }}>Click Me!</button>
        </div>
    );
}