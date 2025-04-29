import {useState, useEffect} from 'react';
import '../styles/App.css';

export default function Logo({link, image, styling}) {
    const [style, setStyle] = useState('');

    useEffect(() => {
        if (styling == "link") {
            setStyle('hover:opacity-80 h-8 transition-transform duration-300 hover:scale-110');
        }
        else if (styling == "image-small") {
            setStyle('h-30 mx-auto mb-10 transition-transform duration-300 hover:scale-105');
        }
        else if (styling == 'profile') {
            setStyle("h-40 w-40 object-cover rounded-full mx-auto shadow-lg hover:scale-105 transition-transform duration-300");
        }
    }, []);

    return (
        <>
            {link !== '' ? ( // Ternary Operator for image switching
                <a href={link} title={link}>
                    <img src={image} className={style}/>
                </a>
            ) : (
                <img src={image} className={style}/>
            )}
        </>
    );
}