import React, { useState } from 'react';
import moods from './Moods.json';
import './MoodTracker.css';

export default function MoodTracker() {
    const [currentMood, setCurrentMood] = useState(moods.happy.emoji);
    const [emoji, setEmoji] = useState(moods.happy.emoji);
    const [color, setColor] = useState(moods.happy.color);
    const [mainColor, setMainColor] = useState(moods.happy.maincolor);
    const [description, setDescription] = useState(moods.happy.description);
    const [image, setImage] = useState(moods.happy.image);
    const [story, setStory] = useState(moods.happy.story);
    const [animationClass, setAnimationClass] = useState('slide-in');

    const handleMoodChange = (mood) => {
        if (currentMood !== mood.emoji) {
            setCurrentMood(mood.emoji);
            setAnimationClass('slide-out');

            setTimeout(() => {
                setEmoji(mood.emoji);
                setColor(mood.color);
                setMainColor(mood.maincolor);
                setDescription(mood.description);
                setImage(mood.image);
                setStory(mood.story);
                setAnimationClass('slide-in');
            }, 500);
        }
    };

    return (
        <div className='container' style={{ backgroundColor: color, color: mainColor }}>
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
                <div style={{alignSelf: "center", justifySelf: "center", textAlign: "left"}}>
                    <h2>Description: </h2>
                    <p style={{marginBottom: "40px"}}>{description}</p>
                </div>
                <div>
                    <img src={image} alt="Mood representation" style={{marginBottom: "20px"}}/>
                </div>
                <div style={{gridColumn: "span 2"}}>
                    <h2>Short Story</h2>
                    <p>{story}</p>
                </div>
            </div>

        </div>
    );
}
