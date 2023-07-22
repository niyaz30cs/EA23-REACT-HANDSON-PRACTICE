import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

function ClickComponent({count,increment,decrement}) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>ClickButton +</button>
      <button onClick={decrement}>ClickButton -</button>
    </div>
  )
}

export default HigherOrderComponent(ClickComponent); 
