import React, { useState } from 'react';

export default function MoodTracker() {

    const [mood, setMood] = useState("😁");


    return (
        <div style={{textAlign:"center", padding:"20px"}}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood}</p>
            <button
                onClick={()=>setMood("😁")}
                style={{margin:"5px",
                        padding:"10px", 
                        background: "lightgreen"
                }}
            >Happy</button>
            <button
                onClick={()=>setMood("🤣")}
                style={{margin:"5px",
                        padding:"10px", 
                        background: "lightblue"
                }}
            >Laughing</button>
            <button
                onClick={()=>setMood("😒")}
                style={{margin:"5px",
                    padding:"10px", 
                    background: "gray"
            }}
            >Bored</button>
            <button
                onClick={()=>setMood("😎")}
                style={{margin:"5px",
                    padding:"10px", 
                    background: "red"
            }}
            >Cool</button>
            <button
                onClick={()=>setMood("😍")}
                style={{margin:"5px",
                    padding:"10px", 
                    background: "pink"
            }}
            >Loving</button>
            <button
                onClick={()=>setMood("😢")}
                style={{margin:"5px",
                    padding:"10px", 
                    background: "darkblue", 
                    color: "white"
            }}
            >Sad</button>
        </div>
    );
}