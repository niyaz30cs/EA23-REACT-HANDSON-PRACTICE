import React, { useState } from 'react'

function HigherOrderComponent(PassComponent) {

    const NewComponent=()=>{
        const[count,setCount]=useState(0);

        const increment=()=>{
            setCount(count+1);
        }
        const decrement=()=>{
            setCount(count-1)
        }
        return<PassComponent count={count} increment={increment} decrement={decrement}/>
    }
    return NewComponent;
}

export default HigherOrderComponent
