import React, { useState } from 'react'

function UseStateHook() {
    const [count,setCount]=useState(0);
  return (
    <div>
      <h1>Counter:-{count}</h1>
      <button onClick={(()=>setCount(count+1))}>PlusButton</button>
      <button onClick={(()=>setCount(count-1))}>MinusButton</button>
    </div>
  )
}

export default UseStateHook
