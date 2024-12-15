import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { increment , decrement , selectNumber } from '../features/NumberSlice';

export default function Number() {
    const number = useSelector(selectNumber);
    console.log(number);
    
  return (
    <div>
      
    </div>
  )
}
