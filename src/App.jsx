import { useState } from 'react'

import './App.css'
import Counter from './Component/Counter';
import Number from './Component/Number';
import Users from './Component/Users';

function App() {

  return (
    <>
  <Counter/>
  <br />
  <Number/>
  <br />
  <Users/>
    </>
  )
}

export default App
