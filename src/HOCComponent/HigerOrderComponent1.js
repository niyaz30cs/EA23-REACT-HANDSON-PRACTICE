import { useState } from "react";


function HigherOrderComponent(WrappedCompo){

    const NewComponent=()=>{
        const[count,setNum]=useState(0);

      const increment=()=>{
        setNum(count+1)
      }

      const decrement=()=>{
        setNum(count-1)
      }
      return <WrappedCompo num={count} increment={increment} decrement={decrement}/>
    }
    return NewComponent
}
export default HigherOrderComponent;
