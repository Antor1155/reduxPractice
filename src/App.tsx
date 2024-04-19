
import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { increment, decrement } from './redux/slices/counter'
import Mycom from "../components/Mycom"

function App() {
  const count = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()
  return (
    <>
      <div>
        <h1>hello redux</h1>
        <h2>Count is {count}</h2>
      </div>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>

      <br /><br /><br /><br />
      <Mycom></Mycom>
    </>
  )
}

export default App
