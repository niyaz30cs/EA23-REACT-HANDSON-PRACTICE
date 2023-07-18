import React, { useState } from 'react'

function ControlledComponent2() {
    const [name,setName]=useState("");
    const[fullName,setFullName]=useState();

    const handleChange=(event)=>{
         console.log(event.target.value);
         setName(event.target.value);
    }

    const handleSubmit=()=>{
        setFullName(name)
    }
  return (
    <div>
      {/* <h1>{name}</h1> */}
      <h1>{fullName}</h1>
      <label htmlFor='name'>Name:-</label>
      <input id="name" type='text' placeholder='Enter Your Name' 
      onChange={handleChange} value={name} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ControlledComponent2
