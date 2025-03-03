import React, { useState } from 'react';
import moods from './Moods.json';
import './MoodTracker.css';

export default function MoodTracker() {
    const [emoji, setEmoji] = useState(moods.happy.emoji);
    const [color, setColor] = useState(moods.happy.color);
    const [mainColor, setMainColor] = useState(moods.happy.maincolor);
    const [description, setDescription] = useState(moods.happy.description);
    const [image, setImage] = useState(moods.happy.image);
    const [story, setStory] = useState(moods.happy.story);

    const handleMoodChange = (mood) => {
        setEmoji(prevEmoji => prevEmoji = mood.emoji);
        setColor(prevColor => prevColor = mood.color);
        setMainColor(prevMainColor => prevMainColor = mood.maincolor);
        setDescription(prevDescription => prevDescription = mood.description);
        setImage(prevImage => prevImage = mood.image);
        setStory(prevStory => prevStory = mood.story);
    }

    return (
        <>
        <div style={{
            textAlign:"center", 
            padding:"20px", 
            height: "100vh",
            backgroundColor: color, 
            transition: "0.5s", 
            color: mainColor
        }}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {emoji}</p>
            <button
                onClick={()=>handleMoodChange(moods.happy)}
                style={{margin:"5px",
                        padding:"10px", 
                        background: moods.happy.maincolor
                }}
            >Happy</button>
            <button
                onClick={()=>handleMoodChange(moods.excited)}
                style={{margin:"5px",
                        padding:"10px", 
                        background: moods.excited.maincolor
                }}
            >Excited</button>
            <button
                onClick={()=>handleMoodChange(moods.bored)}
                style={{margin:"5px",
                    padding:"10px", 
                    background: moods.bored.maincolor
            }}
            >Bored</button>
            <button
                onClick={()=>handleMoodChange(moods.cool)}
                style={{margin:"5px",
                    padding:"10px", 
                    background: moods.cool.maincolor
            }}
            >Cool</button>
            <button
                onClick={()=>handleMoodChange(moods.loving)}
                value="Loving"
                style={{
                    background: moods.loving.maincolor
            }}
            >Loving</button>
            <button
                onClick={()=>handleMoodChange(moods.sad)}
                style={{margin:"5px",
                    padding:"10px", 
                    background: moods.sad.maincolor
            }}
            >Sad</button>

            <h2>Description</h2>
            <p>{description}</p>

            <img src={image} alt=''/>

            <h2>Short Story</h2>
            <p>{story}</p>
        </div>
        </>
    );
}