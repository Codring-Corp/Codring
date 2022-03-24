import React from 'react'

export default function TodoCardDisplay(props) {
  const todo = props.todo
  
  return (
    <div className='todoCard-container'>
        <div className='todo-card'>
        <p>{ todo.task }</p>
        </div>
    </div>
  )
}