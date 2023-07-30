import React, { useState } from 'react'
import MyPureComponent from './MyPureComponent';

function AddComponent() {
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
  return (
    <div className='AddCompo'>
      <h1 className='center'>Example of PureComponent</h1>
      <div className='click'>
      <MyPureComponent count={count}/>
      <button onClick={increment} className='Btn'>PureBtn</button>
      </div>
    </div>
  )
}

export default AddComponent
