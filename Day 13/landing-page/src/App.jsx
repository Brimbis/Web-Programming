import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='justify-center items-center flex bg-gray-500 flex-col p-6 text-center text-white'>
        <header className='m-6 w-screen'>
          <h1 className='font-bold text-4xl'>Welcome to my Landing Page</h1>
          <p className='text-gray-300 mt-2'>Discover more about what I do!</p>
        </header>
        <main className='max-w-3xl mt-2 rounded-2xl shadow-lg text-center p-6'>
          <p className='text-gray-300 mb-4'>I like web programming!</p>
          <button className='bg-blue-600 cursor-pointer text-white rounded-2xl p-2'>Get Started</button>
        </main>
        <footer>
          <p className='text-gray-900 mt-9'>&#169; All rights reserved</p>
        </footer>
      </div>
    </>
  )
}
//background blue, text white, hover pointer
export default App
