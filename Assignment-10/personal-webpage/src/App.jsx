import { useState } from 'react'
import './App.css'
import Logo from './Logo.jsx';


export default function App() {

  return (
    <>
      <div className='font-mono text-blue-100 bg-indigo-950 h-screen flex flex-col'>
        <header className='bg-indigo-400 text-7xl mt-10 w-full text-center flex justify-center flex-col border-t-8 border-b-8 border-indigo-500 shadow-2xl'>
        <img className='max-h-52 max-w-52 mt-10 self-center rounded-full shadow-2xl' src='./src/assets/profile-image.png' alt='profile-image'></img>
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
        <main className='grid flex-row mt-15 grid-cols-3'>
          <h2 className='text-4xl mb-20 border-l-4 m-6 p-6'>Biography:</h2>
          <p className='col-span-2 text-xl p-6 m-6 text-center'>Hello! My name is Brandon Hurt and I am from Russellville,  Arkansas. I am currently a Senior at Arkansas Tech Univeristy, and my love for all things technology has led me this far.<br/><br/>I love video games: Some of my favorites include Geometry Dash, Outer Wilds, and Ori. In Geometry Dash I have several projects which can be found on my <a className='text-blue-400 cursor-pointer hover:opacity-70' href='https://www.youtube.com/@brimbis7104'>YouTube</a>.<br/><br/>I love to meet new people and learn new things so feel free to reach out to me!</p>

          <h2 className='text-4xl mb-20 border-l-4 m-6 p-6'>Education:</h2>

        </main>
        <footer>

        </footer>
      </div>
    </>
  )
}
