import React, { useState } from 'react'

function ControlledComponent() {
    const [name,setName]=useState("");
    const [userName,setUserName]=useState("");
    const HandleSubmit=(event)=>{
           event.preventDefault()
           console.log("name",name);
           console.log("userName",userName);
    }
  return (
    <div>
    <form>
      <label htmlFor='name'>Name:-</label>
      <input id='name' name="Name" value={name} onChange={((event)=>setName(event.target.value))} />
      <label htmlFor='username'>UserName:-</label>
      <input id='username' name="UserName" value={userName} onChange={((event)=>setUserName(event.target.value))} />
      <button onClick={HandleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default ControlledComponent
