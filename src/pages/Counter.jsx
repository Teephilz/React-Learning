import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { decrement, increment, incrementByAmount } from '../redux/counterSlice';
import { useToggleContext } from '../../context/ThemeContext';

const Counter = () => {
    const {count}= useSelector(state=> state.counter); 
    const[isLight]= useToggleContext();

    // or you caan find the variable count in the counterSlice using 
    // const count= useSelector(state=> state.counter.count); 
    const dispatch= useDispatch();

  return (
    <div>
      <h1 className={isLight? 'flex items-center justify-center font-bold text-2xl text-black': 'flex items-center justify-center font-bold text-2xl text-white'}>The count is: {count}</h1>
      <div className="flex  items-center justify-center pt-5 gap-3">
      <button className='bg-gray-400 rounded-md border-2 border-black px-4 text-justify font-bold' onClick={()=>dispatch(increment())}> Increment</button>
      <button className='bg-gray-400 rounded-md border-2 border-black px-4 text-justify font-bold'  onClick={()=>dispatch(decrement())}> Decrement</button>
      <button className='bg-gray-400 rounded-md border-2 border-black px-4 text-justify font-bold'  onClick={()=>dispatch(incrementByAmount(20))}> Increment by 20</button>
      </div>
      
    </div>
  )
}

export default Counter
