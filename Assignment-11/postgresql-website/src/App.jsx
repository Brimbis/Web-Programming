import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

export default function App() {
  const [hobbies, setHobbies] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/hobbies")
      .then((response) => {
        setHobbies(response.data);
      })
      .catch(err => console.error("Hobbies fetch error:", err));

    axios.get("http://localhost:3000/info")
      .then((response) => {
        setInfo(response.data);
      })
      .catch(err => console.error("Info fetch error:", err));
  }, []);

  return (
    <Router>
      <div className="container">
        <nav>
          <div className="navBar">
            <Link to="/hobbies">Hobbies</Link>
            <Link to="/info">Personal Info</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/info" element={
            <div className='info-container'>
              <h2>Personal Information</h2>
              <ul>
                {info.map((item) => (
                  <>
                    <div className='grid-container'>
                        <div className='title'>Name:</div>
                        <p>{item.name}</p>
                        <div className='title'>Age:</div>
                        <p>{item.age}</p>
                    </div>
                    <hr style={{margin: "50px"}}/>
                    <div className="title" style={{ textAlign: "center" }}>About:</div>
                    <p>{item.about}</p>

                    <hr style={{margin: "50px"}}/>

                    <div className="title" style={{ textAlign: "center" }}>Skills:</div>
                    <ul>
                      {item.skills.map((skill, idx) => (
                        <li key={idx} style={{ listStyleType: "square"}}>{skill}</li>
                      ))}
                    </ul>
                  </>
                ))}
              </ul>
            </div>
          } />
          <Route path="/hobbies" element={
            <div className='hobbies-container'>
              <h2>Hobbies</h2>
              <ul>
                {hobbies.map((hobby, index) => (
                  <li key={index}>
                  <br/>
                  <div className="title">{hobby.name}</div>
                  <br/>
                  <p>{hobby.description}</p>
                  <br/>
                  <hr/>
                </li>
                
                ))}
              </ul>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}
