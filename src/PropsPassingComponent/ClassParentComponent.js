import React, { Component } from 'react'
import ClassChildComponent from './ClassChildComponent';
class ClassParentComponent extends Component {
    constructor(){
        super()
        this.state={
            Name:"Niyaz Khan",
            Batch:"EA23"
        }
    }
  render() {
    return (
      <div>
        <ClassChildComponent value={this.state}/>
      </div>
    )
  }
}
export default ClassParentComponent;
