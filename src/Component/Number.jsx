import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { increment , decrement , selectNumber } from '../features/NumberSlice';

export default function Number() {
    const number = useSelector(selectNumber);
    const dispatch=useDispatch()
       
  return (
    <div>
        <p> Number is : {number}</p>
        <button onClick={()=>dispatch(increment())}> Number +</button>
        <button onClick={()=>dispatch(decrement())}> Number -</button>
      
    </div>
  )
}
