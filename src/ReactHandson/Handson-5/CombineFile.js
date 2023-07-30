import React from 'react'
import BothComponent from './BothComponent'
import AddComponent from "./AddComponent"

function CombineFile() {
  return (
    <div className='mainContainer'>
      <BothComponent/>
      <AddComponent/>
    </div>
  )
}

export default CombineFile
