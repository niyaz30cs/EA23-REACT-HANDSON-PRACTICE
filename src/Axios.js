import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios() {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                setData(res.data);
        })
    })
  return (
    <div>
      {data.map((item,index)=>{
        return(
            <h1 key={index}>
                <ul>
                    <li>{item.username}</li>
                </ul>
            </h1>
        )
      })}
    </div>
  )
}

export default Axios
