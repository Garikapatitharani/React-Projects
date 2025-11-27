import React, { createContext } from 'react'
import CompA from './propsdrilling/CompA'
import CompD from './context/CompD'

export const studentContext= createContext();
export default function App() {
  const name = 'Tharani'
  const student = 'Karthik'
  return (
    <div>
      <CompA name={name}/>
      <studentContext.Provider value={student}>
            <CompD/>
      </studentContext.Provider>
    </div>
  )
}

