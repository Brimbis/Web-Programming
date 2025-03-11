import './App.css';

export default function Logo({link, image, styling}) {

    return (
        <>
            {link !== '' ? ( // Ternary Operator for image switching
                <a href={link}>
                    <img src={image} className={styling}/>
                </a>
            ) : (
                <img src={image} className={styling}/>
            )}
        </>
    );
}