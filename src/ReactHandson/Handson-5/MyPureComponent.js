import React, { Component } from 'react'

export default class MyPureComponent extends Component {
  render() {
    return (
      <div>
        <h1>CountByPureComponent:-{this.props.count}</h1>
      </div>
    )
  }
}
