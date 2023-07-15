import React, { useEffect, useState } from 'react'

function FetchData() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
            res.json().then((data)=>{
                setData(data)
            })
        })
    },[])
  return (
    <div>
      {
        data.map((value,index)=>{
            return (
                <h2 key={index}>{value.id}{value.name}{ value.username}</h2>
            )
        })
      }
    </div>
  )
}

export default FetchData
