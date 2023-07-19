import React from 'react'

function ChildFuncComponent(props) {
  return (
    <div>
      <h1>ChildComponent</h1>
      <h2>{props.Name} {props.age}</h2>
    </div>
  )
}

export default ChildFuncComponent
