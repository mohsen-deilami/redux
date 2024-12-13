import { configureStore } from '@reduxjs/toolkit';
import {CounterSlice} from './../features/CounterSlice';

const store=configureStore({
    reducer : {Counter :CounterSlice}
})