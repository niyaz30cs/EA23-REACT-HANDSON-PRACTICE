import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

function HoverComponent({count,increment,decrement}) {
  return (
    <div>
      <h1>{count}</h1>
      <button onMouseOver={increment}>HoverButton+</button>
      <button onMouseOver={decrement}>HoverButton -</button>
    </div>
  )
}

export default HigherOrderComponent(HoverComponent);
