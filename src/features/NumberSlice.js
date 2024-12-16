import { createSlice } from "@reduxjs/toolkit";
import {increment as incrementCounter} from './../features/CounterSlice'
const initialState ={
    numberValue: 0,
}
const numberSlice= createSlice({
    name :'number',
    initialState ,
    reducers :{
        increment : state =>{
            state.numberValue ++
        },
        decrement : state =>{
            state.numberValue --
        },
        extraReducers :(builder)=>{
            builder.addCase(incrementCounter ,(state,action)=>{
                state.numberValue ++
                console.log('extraa :=>',state.numberValue)
            })
        } 
    }
})
 export default numberSlice.reducer;
 export const {increment ,  decrement} = numberSlice.actions;
 export const selectNumber = state=>state.number.numberValue;