import React, { useMemo, useState } from 'react'

export default function LearnUseMemo() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);
  function square(n) {
    console.log("Calculating square ");
    return n * n;
  }
  const result = useMemo(()=>{ square(num)}, [num]); 
  return (
    <div>

      <input type='number' className='m-4 p-4' onChange={(e) => { setNum(e.target.value) }} />
      <h1>square of a number is : {result}</h1>
      <hr />
      <h2>Count : {count}</h2>
      <button type='button' className='m-4' onClick={() => { setCount(p => p + 1) }}>+</button>
    </div>

  )
}
  