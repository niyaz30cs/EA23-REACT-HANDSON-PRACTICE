import React, { useContext } from 'react'
// import Child4 from './Child4'
import { MyContext2 } from './Parent'

function Child3() {
    const Data=useContext(MyContext2);
  return (
    <div>
        <h1>{Data.name}</h1>
        <h1>{Data.salary}</h1>
        <h1>{Data.designation}</h1>
        <h1>{Data.email}</h1>
      {/* <Child4/> */}
    </div>
  )
}

export default Child3
