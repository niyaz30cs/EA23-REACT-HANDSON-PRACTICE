import React, { useContext } from 'react'
import { MyContext } from './DataStore'

function Sample() {
    const [UseSample]=useContext(MyContext);
    console.log(UseSample);
  return (
    <div>
      <h1>I am SampleComponent..</h1>
    </div>
  )
}

export default Sample
