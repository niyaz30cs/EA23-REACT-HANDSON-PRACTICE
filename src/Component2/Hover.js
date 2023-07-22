import React from 'react'
import HigherOrderCompo from './HigherOrderComp'

function Hover({num,addByOne}) {
  return (
    <div>
      <h1>number:-{num}</h1>
      <button onMouseOver={addByOne}>Hover</button>
    </div>
  )
}

export default HigherOrderCompo(Hover)
