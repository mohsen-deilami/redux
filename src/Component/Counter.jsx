import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { selectCounter} from '../features/CounterSlice';
import {increment , decremnt} from './../features/CounterSlice';



export default function Counter() {
  const counter=useSelector(selectCounter)
  const dispatch=useDispatch();
  console.log(dispatch)
  return (
    <div>
      <p>{counter}</p>
     <button onClick={()=>dispatch(increment())}>Add</button>
     <button onClick={()=>dispatch(decremnt())}>Minus</button>
    </div>
  )
}
