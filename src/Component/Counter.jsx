import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { selectCounter} from '../features/CounterSlice';
import {increment , decremnt , incrementByAmount} from './../features/CounterSlice';



export default function Counter() {
  const counter=useSelector(selectCounter)
  const dispatch=useDispatch();
 
  return (
    <div>
      <p>{counter}</p>
     <button onClick={()=>dispatch(increment())}>Add</button>
     <button onClick={()=>dispatch(decremnt())}>Minus</button>
     <button onClick={()=>dispatch(incrementByAmount(2))}>Increment By Amount</button>
    </div>
  )
}
