import React, { useContext } from 'react'
import { studentContext } from '../App'

export default function CompF() {
  const x = useContext(studentContext)
  return (
    <div className='border border-success m-2 p-2 '>
      <h2>CompF</h2>
      <p>{x}</p>
    </div>
  )
}
