import React, { useEffect, useState } from 'react'
import axios from "axios";

function MyAxios() {
    const[data,setData]=useState([]);
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setData(res.data)
        })
    })

  return (
    <div>
      {data&&data.map((value,index)=>{
        return <h1 key={index}>
          <ul>
            <li>{value.name}</li>
          </ul>
        </h1>
      })}
    </div>
  )
}

export default MyAxios
