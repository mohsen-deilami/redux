import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counterValue:0,
}

const counterSlice=createSlice({
    name:'Counter',
    initialState,
    reducer:{
        increment:(state, action)=>{
            return state.countValue ++
        },
        decremnt:(state , action)=>{
            return statet.countValue --
        }
    }
})
export default counterSlice.reducer;
export const {decremnt , increment} = counterSlice.actions;