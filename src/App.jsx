import { useState } from 'react'

import './App.css'
import Counter from './Component/Counter';
import Number from './Component/Number';

function App() {
  const [count, setCount] = useState(0)
console.log('render')
  return (
    <>
  <Counter/>
  <br />
  <Number/>
    </>
  )
}

export default App
