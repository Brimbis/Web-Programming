import React, { useState, useEffect } from 'react';
import moods from './Moods.json';
import './MoodTracker.css';

export default function MoodTracker() {
    const [currentMood, setCurrentMood] = useState(moods.happy.emoji);
    const [emoji, setEmoji] = useState(moods.happy.emoji);
    const [color, setColor] = useState(moods.happy.color);
    const [mainColor, setMainColor] = useState(moods.happy.maincolor);
    const [description, setDescription] = useState(moods.happy.description);
    const [image, setImage] = useState("/soup.jpeg");
    const [story, setStory] = useState(moods.happy.story);
    const [animationClass, setAnimationClass] = useState('slide-in');
    const [showSpitzer, setShowSpitzer] = useState(false);

    useEffect(() => {
        if (currentMood === moods.cool.emoji) {
            const timer = setTimeout(() => {
                setShowSpitzer(true);
            }, 500);
    
            return () => clearTimeout(timer);
        } else {
            setShowSpitzer(false);
        }
    }, [currentMood]);

    const handleMoodChange = (mood) => {
        if (currentMood !== mood.emoji) {
            setCurrentMood(mood.emoji);
            setAnimationClass('slide-out');

            setTimeout(() => {
                setEmoji(mood.emoji);
                setColor(mood.color);
                setMainColor(mood.maincolor);
                setDescription(mood.description);
                setStory(mood.story);
                setAnimationClass('slide-in');

                // Images
                switch (mood.image) {
                    case "spitzer":
                        setImage("/SPITZER.png");
                        break;
                    case "soup":
                        setImage("/soup.jpeg");
                        break;
                    case "brittany":
                        setImage("/brittany.jpeg");
                        break;
                    default:
                        setImage(mood.image);
                }
            }, 500);
        }
    };

    return (
        <div className='container' style={{ background: `linear-gradient(to bottom, ${color}, rgba(0, 0, 0, 0.9))`, color: mainColor }}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: <br/><b>{emoji}</b></p>

            <div className="button-container">
                <button onClick={() => handleMoodChange(moods.happy)} style={{ background: moods.happy.maincolor }}>Happy</button>
                <button onClick={() => handleMoodChange(moods.excited)} style={{ background: moods.excited.maincolor }}>Excited</button>
                <button onClick={() => handleMoodChange(moods.bored)} style={{ background: moods.bored.maincolor }}>Bored</button>
                <button onClick={() => handleMoodChange(moods.cool)} style={{ background: moods.cool.maincolor }}>Cool</button>
                <button onClick={() => handleMoodChange(moods.loving)} style={{ background: moods.loving.maincolor }}>Loving</button>
                <button onClick={() => handleMoodChange(moods.sad)} style={{ background: moods.sad.maincolor }}>Sad</button>
            </div>

            <div className={`mood-content ${animationClass}`}>
                <div>
                {currentMood !== moods.cool.emoji ? ( // Ternary Operator for image switching
                    <img src={image} alt="Mood representation"/>
                ) : (
                    showSpitzer && (
                        <a href="https://www.youtube.com/watch?v=3j5c__Usw50"><img src="/SPITZER.png" alt="SPITZER" style={{ borderColor: mainColor }} /></a>
                    )
                )}
                </div>
                <div style={{alignSelf: "center", justifySelf: "center", textAlign: "left", paddingLeft: "30px"}}>
                    <h2>Description: </h2>
                    <p style={{marginBottom: "40px"}}>{description}</p>
                </div>
                <div style={{gridColumn: "span 2"}}>
                    <h2>Short Story: </h2>
                    <p>{story}</p>
                </div>
            </div>
        </div>
    );
}