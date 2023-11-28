import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {v4 as uuid} from "uuid";
import { addTodo } from '../Redux/Todo/action';

const TodoInput = () => {
    const [title,setTitle] = useState("");
    const dispatch = useDispatch();
    const handleAdd = ()=>{
        const payload ={
            id:uuid(),
            title,
            status:false
        }
        dispatch(addTodo(payload));
        setTitle("")
    }
  return (
    <div>
        <input type='text' placeholder='Enter Todo' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default TodoInput