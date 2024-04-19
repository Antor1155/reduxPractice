import {useAppSelector, useAppDispatch} from "../src/redux/hooks"

export default function Mycom() {
    const count = useAppSelector(state => state.counter)
    
  return (
    <div>Mycom is value {count}</div>
  )
}
