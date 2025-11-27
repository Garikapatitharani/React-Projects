import React, { createContext } from 'react'

export const courseContext= createContext()

export default function MyContext({children}) {
  const course = "ReactJs";
   console.log("courseContext",courseContext)
  return (
    <courseContext.Provider value={course}>
      {children}
    </courseContext.Provider>
  )
}
