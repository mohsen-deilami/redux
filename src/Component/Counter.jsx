import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { selectCounter} from '../features/CounterSlice';
import {increment , decremnt , incrementByAmount} from './../features/CounterSlice';



export default function Counter() {
  const counter=useSelector(selectCounter)
  const dispatch=useDispatch();
 const [payloadValue ,  setPayloadValue] =useState(2)
  return (
    <div>
      <p>{counter}</p>

      <input type="number" value={payloadValue} onChange={event => setPayloadValue(event.target.value)} />
      <br />
      <br />
     <button onClick={()=>dispatch(increment())}>Add</button>
     <button onClick={()=>dispatch(decremnt())}>Minus</button>
     <button onClick={()=>dispatch(incrementByAmount(+payloadValue))}>Increment By Amount</button>
    </div>
  )
}
