import React, { useContext } from 'react'
import { MyContext } from './DataStore'

function Demo() {
    const [DemoUse]=useContext(MyContext)
    console.log(DemoUse);
  return (
    <div>
      <h1>I am DemoComponent.</h1>
    </div>
  )
}

export default Demo
