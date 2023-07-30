import React from 'react'
import "./Handson3.css"
import {NavLink, Route, Routes} from "react-router-dom"
import Home from './Home'
import Student from './Student'
import ContactUs from './ContactUs'
function NavBar() {
  return (
    <>
      
    <div className='navbar'>
      <NavLink to="/home" className="link" style={({isActive})=>{return isActive?{color:"red"}:{color:"black"}}}>Home</NavLink>
      <NavLink to="/student" className="link" style={({isActive})=>{return isActive?{color:"red"}:{color:"black"}}}>Student</NavLink>
      <NavLink to="/contactUs" className="link" style={({isActive})=>{return isActive?{color:"red"}:{color:"black"}}}>ContactUs</NavLink>
      </div>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/student' element={<Student/>} />
        <Route path='/contactus' element={<ContactUs/>} />
      </Routes> 
    </>
  )
}

export default NavBar
