import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount } from './redux/features/counterSlice'

function App() {
  const [num, setnum] = useState(5)
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
dispatch(increment())
      }}>+</button>
      <button onClick={()=>{
dispatch(decrement())

      }}>-</button>
      <input type="number"  value={num} onChange={(e)=>{
        setnum(e.target.value)
      }} />
      <button onClick={()=>{
dispatch(incrementbyAmount(Number(num)))

      }}>Increment by Amount</button>
    </div>
  )
}

export default App
