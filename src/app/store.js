import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './../features/CounterSlice';
import NumberReducer from './../features/NumberSlice';
import logger from 'redux-logger';

const store=configureStore({
    reducer : {counter : CounterReducer , number: NumberReducer},
    middleware:(getDefaultMiddleware =>getDefaultMiddleware().concat(logger))
})

export default store