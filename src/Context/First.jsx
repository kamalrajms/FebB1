import React from 'react'
import Second from './Second'

export default function First() {
  return (
    <div style={{border:"2px solid #000",padding:"20px"}}>
      <h2>First component</h2>
      <Second/>
    </div>
  )
}
