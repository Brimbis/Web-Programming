import { useState } from 'react'
import './App.css'
import Logo from './Logo.jsx';

export default function App() {

  return (
    <>
    <div className='h-full w-full bg-indigo-950 flex justify-center'>
        <div className='font-mono text-blue-100 flex flex-col items-center max-w-4xl w-full'>
          <header className='bg-indigo-400 text-7xl mt-10 w-screen text-center flex flex-col items-center border-t-8 border-b-8 border-indigo-500 shadow-2xl'>
            <img className='max-h-52 max-w-52 mt-10 rounded-full shadow-2xl hover:-rotate-20 hover:scale-110 transition' src='./src/assets/profile-image.png' alt='profile-image'/>
            <h1 className='p-7 border-b-4 border-dashed border-indigo-300'>Brandon Hurt</h1>
            <div className='flex justify-center m-5'>
              <Logo
                link='https://www.linkedin.com/in/brandon-hurt-49321a354/' 
                image='./src/assets/linkedin-logo.png'
                styling='hover:opacity-70 max-h-15 pr-10 hover:scale-110 transition'
              />
              <Logo
                link='https://github.com/Brimbis'
                image='./src/assets/github-logo.png'
                styling='hover:opacity-70 max-h-15 pr-10 hover:scale-110 transition'
              />
              <Logo
                link='https://discordapp.com/users/263572671424495616'
                image='./src/assets/discord-logo.png'
                styling='hover:opacity-70 max-h-18 pr-10 hover:scale-110 transition'
              />
              <Logo
                link='mailto:brandonhurt208@gmail.com'
                image='./src/assets/gmail-logo.png'
                styling='hover:opacity-70 max-h-20 hover:scale-110 transition'
              />
            </div>
          </header>
          <main className='w-full max-w-3xl grid grid-cols-3 items-start p-5 m-20 bg-indigo-900 rounded-2xl shadow-2xl'>
            <h2 className='text-4xl border-l-4 p-6 w-full self-start'>Biography:</h2>
            <p className='text-xl p-3 text-center col-span-2'>Hello! My name is Brandon Hurt and I am from Russellville, Arkansas. I am currently a Senior at Arkansas Tech University, and my love for all things technology has led me this far.<br/><br/>I love video games: Some of my favorites include Geometry Dash, Outer Wilds, and Ori. In Geometry Dash I have several projects which can be found on my <a className='text-blue-400 cursor-pointer hover:opacity-70' href='https://www.youtube.com/@brimbis7104'>YouTube</a>.<br/><br/>I love to meet new people and learn new things so feel free to reach out to me!</p>
            <h2 className='text-4xl border-l-4 p-6 w-full self-start text-center'>Education:</h2>
            <p className='text-xl p-3 text-center col-span-2'>content</p>
          </main>
          <footer className='mt-10'>
            2025 Brandon Hurt
          </footer>
        </div>
      </div>
    </>
  )
}
