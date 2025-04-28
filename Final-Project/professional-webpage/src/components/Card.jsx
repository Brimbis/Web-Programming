import { useState } from 'react';
import '../styles/App.css';
import Logo from './Logo';

export default function Card({ 
    type, 
    title, 
    altTitle, 
    path, 
    description,
    technologies, 
    date, 
    link, 
    images, 
}) {

    const [selectedImage, setSelectedImage] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedImage(null);
            setIsClosing(false);
        }, 300);
    };

    // -- PROFILE -- 

    if (type === 'profile') {
        return (
            <>
                <h2 className="text-4xl font-bold mb-10 text-center text-indigo-100">{title}</h2>

                {path && (
                    <Logo path={path} styling="image-small" />
                )}

                {altTitle && (
                    <p className="text-xl text-center mb-8 text-indigo-300">{altTitle}</p>
                )}

                <p
                    className="text-lg leading-relaxed border-l-4 border-indigo-400 pl-6 text-blue-200 mb-20"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </>
        );
    }
    
    // -- PROJECTS --

    else if (type === 'project') {
        return (
            <div className="relative bg-indigo-900/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-10 flex flex-col items-center space-y-6 transition-all transform hover:shadow-3xl max-w-5xl">
    
                <h2 className="text-3xl font-bold text-indigo-100">{title}</h2>
            
                <p className="text-lg text-indigo-300 text-center leading-relaxed">
                    {description}
                </p>

                {images?.length > 0 && (
                <>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        {images.map((imgSrc, index) => (
                            <button 
                                key={index}
                                onClick={() => setSelectedImage(imgSrc)}
                                className="flex justify-center items-center"
                            >
                                <img
                                    src={imgSrc}
                                    alt={`${title} image ${index + 1}`}
                                    className="rounded-lg shadow-md object-cover w-full h-64 bg-gray-700 hover:scale-103 transition-transform duration-300 cursor-zoom-in"
                                    style={{
                                        aspectRatio: imgSrc.includes('mobile') ? '9 / 16' : '4 / 3',
                                    }}
                                />
                            </button>
                        ))}
                    </div>

                    {selectedImage && (
                    <div 
                        className={`absolute top-0 left-0 w-full h-full bg-gray/50 flex justify-center items-center z-50 backdrop-blur-sm rounded-2xl cursor-zoom-out ${
                            isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
                        }`}
                        onClick={handleCloseModal}
                    >
                        <div className={`relative ${isClosing ? 'animate-zoomOut' : 'animate-zoomIn'}`}>
                            <img 
                                src={selectedImage} 
                                alt="Expanded" 
                                className="max-w-[90vw] max-h-[70vh] rounded-lg object-cover"
                            />
                        </div>
                    </div>
                    )}
                </>
                )}

                {technologies?.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className="px-3 py-1 bg-indigo-700/80 rounded-md text-indigo-100 text-sm shadow hover:bg-indigo-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
    
                {link && (
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-md"
                    >
                        View Project
                    </a>
                )}
    
                {date && (
                    <p className="absolute bottom-4 left-6 text-sm text-indigo-400 italic">
                        {new Date(date).toLocaleDateString()}
                    </p>
                )}
            </div>
        );
    }

    else if (type === 'experience') {
        return (
            <>

            </>
        );
    }

    // Fallback for undeclared type
    return null;
}
