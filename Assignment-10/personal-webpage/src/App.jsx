import { useState } from 'react'
import './App.css'
import Logo from './Logo.jsx';

export default function App() {

  return (
    <>
    <head>
      <title>Brandon Hurt</title>
    </head>
    <div className='h-full w-full bg-indigo-950 flex justify-center'>
        <div className='font-mono text-blue-100 flex flex-col items-center max-w-4xl w-full'>
          <header className='bg-indigo-400 text-6xl mt-10 w-screen text-center flex flex-col items-center border-t-8 border-b-8 border-indigo-500 shadow-2xl'>
            <img className='max-h-30 mt-5 rounded-full shadow-2xl hover:-rotate-20 hover:scale-110 transition' src='./src/assets/profile-image.png' alt='profile-image'/>
            <h1 className='p-4 border-b-4 border-dashed border-indigo-300'>Brandon Hurt</h1>
            <div className='flex justify-center m-5'>
              <Logo
                link='https://www.linkedin.com/in/brandon-hurt-49321a354/' 
                image='./src/assets/linkedin-logo.png'
                styling='hover:opacity-70 max-h-10 pr-10 hover:scale-110 transition'
              />
              <Logo
                link='https://github.com/Brimbis'
                image='./src/assets/github-logo.png'
                styling='hover:opacity-70 max-h-10 pr-10 hover:scale-110 transition'
              />
              <Logo
                link='https://discordapp.com/users/263572671424495616'
                image='./src/assets/discord-logo.png'
                styling='hover:opacity-70 max-h-12 pr-10 hover:scale-110 transition'
              />
              <Logo
                link='mailto:brandonhurt208@gmail.com'
                image='./src/assets/gmail-logo.png'
                styling='hover:opacity-70 max-h-15 hover:scale-110 transition pb-1'
              />
            </div>
          </header>
          <main className='w-full max-w-3xl flex-col justify-center p-5 m-20 bg-indigo-900 rounded-2xl shadow-2xl text-center'>
            <h2 className='text-3xl border-b-4 p-5 pl-10 pr-10 m-3 rounded-full border-b-indigo-500 border-dotted inline-block text-center'>Biography</h2>

            <p className='text-md p-5 mt-5 mb-10 text-center col-span-2'>Hello! My name is Brandon Hurt and I am from Russellville, Arkansas. I am currently a Senior at Arkansas Tech University, and my love for all things technology has led me this far.<br/><br/>I love video games: Some of my favorites include Geometry Dash, Outer Wilds, and Ori. In Geometry Dash I have several projects which can be found on my <a className='text-blue-400 cursor-pointer hover:opacity-70' href='https://www.youtube.com/@brimbis7104'>YouTube</a>.<br/><br/>I love to meet new people and learn new things so feel free to reach out to me!</p>

            <h2 className='text-3xl border-b-4 p-5 pl-10 pr-10 m-3 rounded-full border-b-indigo-500 border-dotted inline-block text-center'>Education</h2>

            <Logo
              link=''
              image='./src/assets/ATU.png'
              styling='max-h-30 pr-10 object-center'
            />
            <p className="text-center">ATU Experience</p>
            <Logo
              link=''
              image='./src/assets/ARNG.png'
              styling='max-h-30 pr-10 object-center'
            />

          </main>
          <footer className='mt-10'>
            2025 Brandon Hurt
          </footer>
        </div>
      </div>
    </>
  )
}
