import { useState, useEffect } from 'react';
import '../styles/App.css';
import Logo from '../components/Logo.jsx';
import ProfileCard from '../components/ProfileCard.jsx';
import axios from 'axios';

export default function AboutMe() {
  const [info, setInfo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/info')
      .then(res => {
        setInfo(res.data);
      })
      .catch(err => console.error('Error fetching info:', err));
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-800 flex justify-center px-4">
      <div className="font-sans text-blue-100 flex flex-col items-center max-w-4xl w-full">
        

        <header className="bg-indigo-800 text-5xl mt-20 w-full text-center rounded-xl shadow-xl p-3 border border-indigo-700">
          <img 
            className="h-40 w-40 object-cover rounded-full mx-auto shadow-lg hover:scale-105 transition-transform duration-300" 
            src="../images/profile-image.png"
            alt="profile"
          />
          <h1 className="mt-6 mb-6 text-blue-100 font-semibold text-5xl tracking-wide">{info.name}</h1>
          <div className="flex justify-center space-x-6 mt-4">
            <Logo
              link={info.contactInfo?.linkedin}
              path="../images/linkedin-logo.png"
              styling="link"
            />
            <Logo
              link={info.contactInfo?.github}
              path="../images/github-logo.png"
              styling="link"
            />
            <Logo
              link={info.contactInfo?.discord}
              path="../images/discord-logo.png"
              styling="link"
            />
            <Logo
              link={info.contactInfo?.email}
              path="../images/gmail-logo.png"
              styling="link"
            />
          </div>
        </header>

        <main className="w-full bg-indigo-900/80 backdrop-blur-sm rounded-xl shadow-xl p-10 mt-14 text-left text-blue-100 max-w-5xl mx-auto">
          
          <ProfileCard
            title='Biography'
            path={`Age: ${info.age}`}
            description={info.biography}
          />
          
          <div className="border-t-4 border-indigo-500 opacity-70 my-16 mx-4 rounded-sm"></div>

          <ProfileCard
            title='Education'
            path='../images/ATU.png'
            description={info.education?.atu}
          />

          <ProfileCard
            path='../images/ARNG.png'
            description={info.education?.ngar}
          />
        </main>


        <footer className="mt-20 mb-5 text-sm text-gray-400 text-center">
          &copy; 2025 Brandon Hurt
        </footer>


      </div>
    </div>
  );
}
