import React from 'react'
import HigherOrderCompo from './HigherOrderComp'

function Click({num,addByOne}) {
  return (
    <div>
      <h1>Number:-{num}</h1>
      <button onClick={addByOne}>Click</button>
    </div>
  )
}

export default HigherOrderCompo(Click);
