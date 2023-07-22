import React, { Component } from 'react'
// import "./style.css"
import ChildComponent from './ChildComponent';
class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Dept: "",
      Rating: "",
      click: true,
      UserData: []
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    const newObj = {
      name: this.state.Name,
      dept: this.state.Dept,
      rating: this.state.Rating,
    }

    this.state.UserData.push(newObj);
    this.setState({
      UserData: this.state.UserData,
      Name: "",
      Dept: "",
      Rating: "",
      click: false
    })
  }

  toggleFunction = () => {
    this.setState({ click: !this.state.click })
  }
  render() {
    return (
      <>
        {
          this.state.click ?
            <div className='wholePart'>
              <form className='mainContainer'>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <div className='inputArea'>
                  <label htmlFor='name'>Name:-</label>
                  <input id='name' type='text' placeholder='Enter Name' name="Name"
                    value={this.state.Name} onChange={this.handleChange} className='inputField one' />
                </div>
                <div className='inputArea'>
                  <label htmlFor='dept'>Department:-</label>
                  <input id='dept' type='text' placeholder='Enter Department' name="Dept"
                    value={this.state.Dept} onChange={this.handleChange} className='inputField' />
                </div>
                <div className='inputArea'>
                  <label htmlFor='rating'>Rating:-</label>
                  <input id='rating' type='number' placeholder='Enter Rating' name="Rating"
                    value={this.state.Rating} onChange={this.handleChange} className='inputField one' />
                </div>
                <div className='btn'>
                  <button type='button' onClick={this.handleClick} className='buttonArea'>Submit</button>
                </div>
              </form>
            </div>
            :

            <ChildComponent value={this.state.UserData} toggleFunction={this.toggleFunction} />
        }
      </>


    )
  }
}
export default ParentComponent
