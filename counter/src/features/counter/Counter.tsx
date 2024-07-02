import './counter.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState,AppDispatch } from '../../app/store'
import { increment,decrement, incrementByAmount } from './counterSlice'
const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch: AppDispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }

    const incrementByAmountFunc = () => {
        dispatch(incrementByAmount(5))
    }
  return (
 
    <div className="counter">
         <span>{count}</span> <br />
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={incrementByAmountFunc}>Increment by Amount</button>
    </div>
  )
}

export default Counter