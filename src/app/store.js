import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './../features/CounterSlice';
import NumberReducer from './../features/NumberSlice'

const store=configureStore({
    reducer : {counter : CounterReducer , number: NumberReducer}
})

export default store