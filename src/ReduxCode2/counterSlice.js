import {createSlice} from "@reduxjs/toolkit"
const counterSlice=createSlice({
       name:"counter",
       initialState:{
        value:0
       },
       reducers:{
        plus:(state)=>{state.value+=10},
        minus:(state)=>{state.value-=10},
        reset:(state)=>{state.value=0}
       }
})

export const {plus,minus,reset}=counterSlice.actions;
export default counterSlice.reducer;