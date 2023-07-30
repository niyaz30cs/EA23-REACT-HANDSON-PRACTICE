import React from 'react'
import HighOrderComponent from './HighOrderComponent'

function HoverComponent({count,increment}) {
  return (
    <div className='click'>
      <h1>Niyaz By Hover:-{count}</h1>
      <button onMouseOver={increment} className='Btn'>HoverBtn</button>
    </div>
  )
}

export default HighOrderComponent(HoverComponent);
