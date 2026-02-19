import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counterSlice'

function App() {
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
    </div>
  )
}

export default App
