import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counterValue:0,
}

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state, action)=>{
             state.counterValue ++
        },
        decremnt:(state , action)=>{
             state.counterValue --
        },
        incrementByAmount:(state , action) =>{
            state.counterValue += action.payload

        }
    }
})
export default counterSlice.reducer;
export const {decremnt , increment , incrementByAmount} = counterSlice.actions;
export const selectCounter=store=>store.counter.counterValue;