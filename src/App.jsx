import { useState } from 'react'

import './App.css'
import Counter from './Component/Counter'

function App() {
  const [count, setCount] = useState(0)
console.log('render')
  return (
  <Counter/>
  )
}

export default App
