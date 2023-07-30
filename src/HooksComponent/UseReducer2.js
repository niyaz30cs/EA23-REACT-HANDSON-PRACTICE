import React, { useReducer } from 'react'
const intialState=0;
const reducer=(state,action)=>{
      switch(action){
        case "plus":
            return state+1;
        case "minus":
            return state-1
        default:
            return state;        
      }
}
function UseReducer2() {
    const[num,setNum]=useReducer(reducer,intialState);
  return (
    <div>
        <h1>Counter Number:{num}</h1>
      <button onClick={()=>setNum("plus")}>Plus</button>
      <button onClick={()=>setNum("minus")}>Plus</button>
    </div>
  )
}

export default UseReducer2
