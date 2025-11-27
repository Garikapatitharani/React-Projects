import React, { useEffect, useRef, useState } from 'react'

export default function LearnUseRef() {
  const [count, setCount] = useState(0);
  // const [rendered, setRendered] = useState(1);

  
  const rendered = useRef(1); // Using useRef to keep track of renders without causing re-renders
  console.log('rendered :', rendered);
  
  const styles = useRef(null); // Using useRef to store styles
  console.log('styles :', styles);


  useEffect(() => {
    // setRendered(p => p + 1);
    rendered.current = rendered.current + 1; // Increment the render count
    console.log("LearnUseRef rendered");
  }, [count]); // This effect runs every time 'count' changes


  const handleStyles=()=>{
    styles.current.style.backgroundColor = 'red'; 
    styles.current.style.color = 'white';
  }
  

  return (
    <div>
      {/* <h1>LearnUseRef</h1> */}
      <h2>Count : {count}</h2>
      <button className='m-2' onClick={() => { setCount(c => c + 1) }}>+</button>
      <button className='m-2' onClick={() => { setCount(c => c - 1) }}>-</button>

      <h2 ref={styles}>Rendered : {rendered.current}</h2> 
      <button onClick={handleStyles}>Add Styles</button>

    </div>
  )
}
