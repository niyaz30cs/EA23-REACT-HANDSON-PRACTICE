import React from 'react'
import "../App.css";
import {useDispatch,useSelector} from "react-redux"
import { decrement, increment, reset } from './countSlice';
function Counter() {
    const dispatch=useDispatch();
    const counter=useSelector(state=>state.count.value);
    const IncFunction=()=>dispatch(increment());
    const DecFunction=()=>dispatch(decrement());
    const Reset=()=>dispatch(reset())
  return (
    <div>
      <h1>Counter:-{counter}</h1>
      <button onClick={IncFunction}>IncBtn</button>
      <button onClick={DecFunction}>DecBtn</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter
