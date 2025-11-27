import React from 'react'
import CompB from './CompB'

export default function CompA({name}) {
  return (
    <div className='border border-success m-2 p-2 '>
      <h2>CompA</h2>
      <CompB name={name}/>
    </div>
  )
}
