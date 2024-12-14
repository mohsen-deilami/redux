import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './../features/CounterSlice';

const store=configureStore({
    reducer : {counter : CounterReducer}
})

export default store