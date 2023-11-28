import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/Counter/action';

const Counter = () => {
    const count = useSelector((state=>state.count.count));
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter : {count}</h1>
        <div>
            <button onClick={()=>dispatch(increment(10))}>INC BY 10</button>
            <button onClick={()=>dispatch(decrement(5))}>DEC BY 5</button>
            <button onClick={()=>dispatch(reset())}>RESET</button>
        </div>
    </div>
  )
}

export default Counter