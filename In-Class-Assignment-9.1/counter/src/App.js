import React, { useState } from 'react';
import './App.css';

export default function App() {
  // State, Function
  // Passing a function only runs when the component is rendered.
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 20;

  let checkCount = (count) => {
    if (count <= min) {return min}

    else if (count >= max) { return max }
    
    else { return count }
  }

  function decrementCount() {
    setCount(prevCount => checkCount(prevCount - 1))
  }

  function incrementCount() {
    setCount(prevCount => checkCount(prevCount + 1));
  }

  return (
    <>
      <h1>Counter</h1>
      <div className='container'>
        <button className='minus-button' onClick={decrementCount}>-</button>
        <span> {count} </span>
        <button className='plus-button' onClick={incrementCount}>+</button>
      </div>
    </>
  );
}
