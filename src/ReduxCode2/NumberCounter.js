import React from 'react'
import "../App.css";
import {useDispatch,useSelector} from "react-redux"
import { minus, plus, reset } from './counterSlice';
function NumberCounter() {

    const dispatch=useDispatch();
    const CounterNumber=useSelector(state=>state.counter.value);

    const IncrementFunc=()=>{
           dispatch(plus());
    }
    const DecrementFunc=()=>{
           dispatch(minus());
    }
    const ResetFunc=()=>{
           dispatch(reset());
    }
  return (
    <div>
      <h1>CounterNumber:-{CounterNumber}</h1>
      <button onClick={IncrementFunc}>Plus</button>
      <button onClick={DecrementFunc}>Minus</button>
      <button onClick={ResetFunc}>Reset</button>
    </div>
  )
}

export default NumberCounter;
