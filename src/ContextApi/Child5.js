import React, { useContext } from 'react'
import { MyContext } from './Parent'

function Child5() {
    const useData=useContext(MyContext);
  return (
    <div>
      <h2>This is Component5:-{useData}</h2>
    </div>
  )
}

export default Child5
