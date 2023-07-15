import React, { Component } from 'react'

export class Handson1 extends Component {
    state={
        Name:"",
        Department:"",
        Rating:"",
        UserData:[]
    }
    HandleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    HandleClick=(event)=>{
        event.preventDefault();
        const newObj={
            name:this.state.Name,
            department:this.state.Department,
            rating:this.state.Rating
        }
        this.state.UserData.push(newObj);
        this.setState({UserData:this.state.UserData,Name:"",Department:"",Rating:""});
        console.log("data",this.state.UserData);
    }
  render() {
    return (
      <div>
        <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
        <form>
        <div className='InputBox'>
        <label htmlFor='name' className='label'>Name:-</label>
        <input id="name" type='text' name="Name" value={this.state.Name} 
        onChange={this.HandleChange} placeholder='Enter Name' 
        className='input' />
        </div>

        <div className='InputBox'>
        <label htmlFor='department' className='label'>Department:-</label>
        <input id="department" type='text' name="Department" 
        value={this.state.Department} onChange={this.HandleChange} 
        placeholder='Enter department' className='input'/>
        </div>

        <div className='InputBox'>
        <label htmlFor='rating' className='label'>Rating:-</label>
        <input id="rating" type='number' name="Rating" 
        value={this.state.Rating} onChange={this.HandleChange} 
        placeholder='Enter Rating' className='input'/>
        </div>
        <div className='btn'>
        <button onClick={this.HandleClick}>Submit</button>
        </div>
        </form>
        <div className='store'>
        {this.state.UserData.map((value,index)=>{
            return(
                  <h3 className='place' key={index}>
                    Name:{value.name}|
                    Department:{value.department}|
                    Rating:{value.rating}
                  </h3>  
            )
        })}
        </div>
      </div>
    )
  }
}

export default Handson1
