import React, { useReducer } from 'react'
const intialState=0;
const redecer=(state,action)=>{
      switch(action){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        default:
            return state;        
      }
}
function UseReducer() {
    const[count,setCount]=useReducer(redecer,intialState);
  return (
    <div>
        <h1>Counter:{count}</h1>
      <button onClick={()=>setCount("increment")}>IncrementBtn</button>
      <button onClick={()=>setCount("decrement")}>DecrementBtn</button>
    </div>
  )
}

export default UseReducer
