import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const[count,setCount]=useState(10);
    const[num,setNum]=useState(10);

    useEffect(()=>{
        alert("Niyaz Alam");
    },[num]);
  return (
    <div>
      <h1>Count:-{count}</h1>
      <button onClick={(()=>setCount(count+20))}>Count</button>
      <h2>Number:-{num}</h2>
      <button onClick={(()=>setNum(num+5))}>Number</button>
    </div>
  )
}

export default UseEffectHook
