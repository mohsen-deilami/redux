import React from 'react'
import { useSelector } from 'react-redux'

export default function Counter() {
  const counter = useSelector(store => store.counter.counterValue);
  console.log(counter);
  
  return (
    <div>
      counter is : {counter}
    </div>
  )
}
