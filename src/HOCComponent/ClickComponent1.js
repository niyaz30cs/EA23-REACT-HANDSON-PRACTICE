import React from 'react'
import HigherOrderComponent1 from './HigerOrderComponent1'

function ClickComponent1({count,increment,decrement}) {
  return (
    <div>
      <h1>Counter:-{count}</h1>
      <button onClick={increment}>ClickPlus</button>
      <button onClick={decrement}>ClickMinus</button>
    </div>
  )
}

export default HigherOrderComponent1(ClickComponent1)
