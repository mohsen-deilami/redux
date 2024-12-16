import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './../features/CounterSlice';
import NumberReducer from './../features/NumberSlice';
import logger from 'redux-logger';
import userSlice from '../features/UsersSlice';

const store=configureStore({
    reducer : {counter : CounterReducer , number: NumberReducer , useres : userSlice},
    middleware:(getDefaultMiddleware =>getDefaultMiddleware().concat(logger))
})

export default store