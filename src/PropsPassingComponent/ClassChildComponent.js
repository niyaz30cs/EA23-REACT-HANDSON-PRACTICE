import React, { Component } from 'react'

class ClassChildComponent extends Component {
  render() {
    return (
      <div>
        <h1>Acessing Element in Child Component</h1>
        <h2>{this.props.value.Name}</h2>
        <h2>{this.props.value.Batch}</h2>
      </div>
    )
  }
}

export default ClassChildComponent;