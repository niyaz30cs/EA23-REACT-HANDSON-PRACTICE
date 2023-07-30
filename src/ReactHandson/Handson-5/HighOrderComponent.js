import { useState } from "react"

function HighOrderComponent(OriginalComponent){
    const NewComponent=()=>{
       const[count,setCount]=useState(0);

       const increment=()=>{
        setCount(count+1);
       }
       return<OriginalComponent count={count} increment={increment}/>
    }
    return NewComponent;
}

export default HighOrderComponent;