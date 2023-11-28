import React from 'react'
import TodoInput from './TodoInput'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const Todo = () => {
    const todos = useSelector((state)=>state.todos.todos);
  return (
    <div>
        <TodoInput />
        <br />
        {todos.map((item)=>(
            <TodoItem key={item.id} {...item} />
        ))}
    </div>
  )
}

export default Todo