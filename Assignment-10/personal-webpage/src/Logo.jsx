import './App.css';

export default function Logo({link, image, styling}) {

    return (
        <>
            <a href={link}>
                <img src={image} className={styling}/>
            </a>
        </>
    );
}