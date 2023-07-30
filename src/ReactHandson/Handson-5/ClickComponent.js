import React from 'react'
import HighOrderComponent from './HighOrderComponent'

function ClickComponent({count,increment}) {
  return (
    <div>
      <div className='click'>
      <h1>Niyaz By Click:-{count}</h1>
      <button onClick={increment} className='Btn'>ClickBtn</button>
      </div>
    </div>
  )
}

export default HighOrderComponent(ClickComponent);
