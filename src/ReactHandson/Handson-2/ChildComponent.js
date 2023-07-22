import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props){
        super(props);
        console.log(this.props.value);

    }
  render() {
    return (
      <>
        <h1 className='center'>USER FEEDBACK DATA</h1>
        <div className='childMainContainer'>
        <div className='childContainer'>
        {
            this.props.value.map((value,index)=>{
                return(
                    <div key={index} className='ShowData'>
                        Name:{value.name}||Department:{value.dept}||Rating:{value.rating}
                    </div>
                )
            })
        }
        </div>
        </div>
        <div className='center'>
        <button onClick={this.props.toggleFunction} className='buttonArea'>Go Back</button>
        </div>
      </>
    )
  }
}
