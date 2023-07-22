import React from 'react'
import HigherOrderComponent1 from './HigerOrderComponent1'


function HoverComponent1({count,increment,decrement}) {
  return (
    <div>
      <h1>Counter:-{count}</h1>
      <button onMouseOver={increment}>HoverPlus</button>
      <button onMouseOver={decrement}>HoverMinus</button>
    </div>
  )
}

export default HigherOrderComponent1(HoverComponent1)
