import {useState, useEffect} from 'react';
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
    <>
    <div className='h-full w-full bg-indigo-950 flex justify-center'>
        <div className='font-mono text-blue-100 flex flex-col items-center max-w-4xl'>
          <header className='bg-indigo-400 text-6xl mt-10 w-screen text-center flex flex-col items-center border-t-8 border-b-8 border-indigo-500 shadow-2xl'>
            <img className='max-h-30 mt-5 rounded-full shadow-2xl hover:-rotate-20 hover:scale-110 transition' src='./src/images/profile-image.png' alt='profile-image'/>
            <h1 className='p-4 border-b-4 border-dashed border-indigo-300'>{info.name}</h1>
            <div className='flex justify-center m-5'>
              <Logo
                link={info.contactInfo?.linkedin}
                image='./src/images/linkedin-logo.png'
                styling='hover:opacity-70 max-h-10 pr-10 hover:scale-110 transition'
              />
              <Logo
                link={info.contactInfo?.github}
                image='./src/images/github-logo.png'
                styling='hover:opacity-70 max-h-10 pr-10 hover:scale-110 transition'
              />
              <Logo
                link={info.contactInfo?.discord}
                image='./src/images/discord-logo.png'
                styling='hover:opacity-70 max-h-12 pr-10 hover:scale-110 transition'
              />
              <Logo
                link={info.contactInfo?.email}
                image='./src/images/gmail-logo.png'
                styling='hover:opacity-70 max-h-15 hover:scale-110 transition pb-1'
              />
            </div>
          </header>
          <main className='w-full max-w-3xl flex-col justify-center p-5 m-20 bg-indigo-900 rounded-2xl shadow-2xl text-center'>
            <h2 className='text-4xl mt-5 mb-5 text-center'>Biography</h2>

            <p className='text-2xl text-blue-300 p-3 mt-5 text-center'>Age: {info.age}</p>

            <p className='text-lg p-5 mt-5 mb-10 text-left border-l-4' dangerouslySetInnerHTML={{ __html: info.biography }}></p>

            <div className='m-10 mt-20 border-b-4 border-b-indigo-950 border-dashed'></div>

            <h2 className='text-4xl mb-5 text-center'>Education</h2>

            <div className="flex justify-center w-full">
              <Logo
                link=''
                image='./src/images/ATU.png'
                styling='max-h-30 mt-10 hover:-rotate-10 hover:scale-110 transition drop-shadow-2xl'
              />
            </div>

            <p className="text-lg p-5 mt-5 mb-10 text-left border-l-4" dangerouslySetInnerHTML={{ __html: info.education?.atu }}></p>

            <div className="flex justify-center w-full">
              <Logo
                link=''
                image='./src/images/ARNG.png'
                styling='max-h-40 mt-10 hover:-rotate-10 hover:scale-110 transition drop-shadow-2xl'
              />
            </div>

            <p className="text-lg p-5 mt-5 mb-10 text-left border-l-4" dangerouslySetInnerHTML={{ __html: info.education?.ngar }}></p>

          </main>
          <footer className='mt-10 mb-5 text-center'>
          <br/>2025 Brandon Hurt
          </footer>
        </div>
      </div>
    </>
  )
}