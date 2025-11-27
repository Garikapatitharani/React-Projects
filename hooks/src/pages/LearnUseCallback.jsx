import React, { useCallback, useState } from 'react'
import PracUseState from './PracUseState'

export default function LearnUseCallback() {
  const [course, setCourse] = useState("React");
  // function add(){
  //   return 10+50;
  // }

  const add=useCallback(() => {
    return 10 + 50;
  }, []); // useCallback memoizes the function, preventing it from being recreated on every render

  return (
    <div>
      {/* <h1> LearnUseCallback</h1> */}
      <p className='m-2'>{course}</p>
      <button className='m-2' onClick={()=>course=="React"? setCourse("JS"):setCourse("React")}>Toggle</button>
      <PracUseState add={add}/>
    </div>
    
  )
} 

// This component demonstrates the use of useCallback by passing a function to PracUseState
// The function `add` is defined in LearnUseCallback and passed down to PracUseState
// This allows PracUseState to use the `add` function without needing to redefine it