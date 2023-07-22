// import React, { createContext, useState } from 'react'
// import Child1 from './Child1'

import { createContext } from "react";

// export const MyContext=createContext();

// function Parent() {
//     const name="NIYAZ ALAM";
//     const [data,setData]=useState("niyaz alam")
//     console.log(setData);
//   return (
//     <div>
//         <h1>Parent Component</h1>
//         <MyContext.Provider value={data}>
//         <Child1/>
//         </MyContext.Provider>
//     </div>
//   )
// }

// export default Parent


export const MyContext2=createContext({
    name:"Niyaz Alam",
    salary:"80LPA",
    designation:"Full Stack Web Developer",
    email:"niyaz@gmail.com"
})