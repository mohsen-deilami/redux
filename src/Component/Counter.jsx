import React from 'react'
import { useSelector } from 'react-redux'
import { selectCounter } from '../features/CounterSlice';

export default function Counter() {
  const counter=useSelector(selectCounter)
  console.log(counter);
  
  return (
    <div>
      counter is : {counter}
    </div>
  )
}
