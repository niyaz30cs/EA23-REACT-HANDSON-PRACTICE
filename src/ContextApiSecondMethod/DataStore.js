import React, { createContext, useState } from 'react'
import "../App.css";
export const MyContext=createContext();
function DataStore(props) {
    const[data,setData]=useState([1,2,3,4,5,6,7,8,9,0])
  return (
    <div>
      <MyContext.Provider value={[data,setData]}>
           {props.children}
      </MyContext.Provider>
    </div>
  )
}

export default DataStore
