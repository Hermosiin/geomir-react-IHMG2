import React from 'react'

export const ToDo = ({todo, handleDelete, handleToggleTodo}) => {
  return (

    <div key={todo.id}>
      {todo.done === true ? 
      <p className='w-full line-through' >{todo.text}</p> : <p className='w-full'>{todo.text}</p>}

      {todo.done === true ?
      <button onClick={()=>{handleToggleTodo(todo.id)}}>FET</button> : <button onClick={()=>{handleToggleTodo(todo.id)}}>NO FET</button> }
      
      <button onClick={()=>{handleDelete(todo.id)}}>REMOVE </button>

    </div>
  )
}

