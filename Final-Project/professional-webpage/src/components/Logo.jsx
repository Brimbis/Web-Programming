import '../styles/App.css';

export default function Logo({link, image, styling}) {

  switch (styling) {
    case 'link':
      styling = 'hover:opacity-80 h-8 transition-transform duration-300 hover:scale-110';
      break;
    case 'image-small':
      styling = 'h-30 mx-auto mb-10 transition-transform duration-300 hover:scale-105';
      break;
    case 'profile':
      styling = 'h-40 w-40 object-cover rounded-full mx-auto shadow-lg hover:scale-105 transition-transform duration-300';
      break;
    default: 
      styling = '';
  }

  return (
    <>
      {link !== '' ? ( // Ternary Operator for image switching
        <a href={link} title={link}>
          <img src={image} className={styling}/>
        </a>
      ) : (
        <img src={image} className={styling}/>
      )}
    </>
  );
}