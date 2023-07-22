import { useState } from "react"

function HigherOrderCompo(OriginalCompo){

    const Main=()=>{
        const[num,setNum]=useState(0);

        const addByOne=()=>{
            setNum(num+10)
        }
        return <OriginalCompo num={num} addByOne={addByOne}/>
    }
    return Main
}
export default HigherOrderCompo