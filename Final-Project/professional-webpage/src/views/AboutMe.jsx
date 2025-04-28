import { useState, useEffect } from 'react';
import '../styles/App.css';
import Logo from '../components/Logo.jsx';
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
            src="../public/images/profile-image.png"
            alt="profile"
          />
          <h1 className="mt-6 mb-6 text-blue-100 font-semibold text-5xl tracking-wide">{info.name}</h1>
          <div className="flex justify-center space-x-6 mt-4">
            <Logo
              link={info.contactInfo?.linkedin}
              image="../public/images/linkedin-logo.png"
              styling="hover:opacity-80 h-8 transition-transform duration-300 hover:scale-110"
            />
            <Logo
              link={info.contactInfo?.github}
              image="../public/images/github-logo.png"
              styling="hover:opacity-80 h-8 transition-transform duration-300 hover:scale-110"
            />
            <Logo
              link={info.contactInfo?.discord}
              image="../public/images/discord-logo.png"
              styling="hover:opacity-80 h-9 transition-transform duration-300 hover:scale-110"
            />
            <Logo
              link={info.contactInfo?.email}
              image="../public/images/gmail-logo.png"
              styling="hover:opacity-80 h-10 transition-transform duration-300 hover:scale-110"
            />
          </div>
        </header>

        <main className="w-full bg-indigo-900/80 backdrop-blur-sm rounded-xl shadow-xl p-10 mt-14 text-left text-blue-100 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-indigo-100">Biography</h2>
            <p className="text-xl text-center mb-6 text-indigo-300">Age: {info.age}</p>
            <p
              className="text-lg leading-relaxed border-l-4 border-indigo-400 pl-6 text-blue-200"
              dangerouslySetInnerHTML={{ __html: info.biography }}
            />

            <div className="border-t-4 border-indigo-500 opacity-70 my-16 mx-4 rounded-sm"></div>

            <h2 className="text-4xl font-bold mb-10 text-center text-indigo-100">Education</h2>

            <div className="flex flex-col items-center space-y-14">
              <div className="text-center max-w-3xl">
                <Logo
                  link=""
                  image="../public/images/ATU.png"
                  styling="h-24 mx-auto mb-4 transition-transform duration-300 hover:scale-105"
                />
                <p
                  className="text-lg leading-relaxed border-l-4 border-indigo-400 pl-6 text-blue-200"
                  dangerouslySetInnerHTML={{ __html: info.education?.atu }}
                />
              </div>

              <div className="text-center max-w-3xl">
                <Logo
                  link=""
                  image="../public/images/ARNG.png"
                  styling="h-30 mx-auto mb-4 transition-transform duration-300 hover:scale-105"
                />
                <p
                  className="text-lg leading-relaxed border-l-4 border-indigo-400 pl-6 text-blue-200"
                  dangerouslySetInnerHTML={{ __html: info.education?.ngar }}
                />
              </div>
            </div>
        </main>


        <footer className="mt-10 mb-5 text-sm text-gray-400 text-center">
          &copy; 2025 Brandon Hurt
        </footer>


      </div>
    </div>
  );
}
