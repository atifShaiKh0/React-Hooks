//REACT --> React reacts on variable updation
//REACT is responsible for the UI updation
// use State is used for state updation
//setCounter is just assigning the value to the variable whatever the value is coming from the fucntions

import { useState } from 'react'// used for hooks
import React from 'react';
import './style.css';

export default function App() {

  const [counter, setCounter] = useState(15)

  //let counter = 15
  const addValue = () => {
    // console.log("clicked",counter)
    //counter = counter + 1
    setCounter(counter+1)

    const removeValue = () => {
      setCounter(counter-1)
    }
 }
  const removeValue = () => {
    setCounter(counter-1)
  }
  return (
   <>
   <h1>ATIF AUR REACT</h1>
   <h2>COUNTER VALUE : </h2>

   <button
   onClick={addValue}
   >Add Value {counter}</button>
   <br />
   <button
   onClick={removeValue}
   >Remove Value {counter}</button>
   </>
  );
}
