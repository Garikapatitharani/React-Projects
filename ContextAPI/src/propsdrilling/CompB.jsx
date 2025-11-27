import React, { useContext } from 'react'
import CompC from './CompC'
import { courseContext } from '../contextAPI/MyContext'

export default function CompB({name}) {
  const lmn=useContext(courseContext)
  return (
    <div className='border border-success m-2 p-2 '>
      <h2>CompB</h2>
      <h5>{lmn}</h5>
      <CompC name={name}/>
    </div>
  )
}
