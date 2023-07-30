import React from 'react'
import "./Handson5.css";
import ClickComponent from './ClickComponent'
import HoverComponent from './HoverComponent'

function BothComponent() {
  return (
    <div className='both'>
      <h1 className='center'>Example of HigherOrderComponent</h1>
      <ClickComponent/>
      <HoverComponent/>
    </div>
  )
}

export default BothComponent
