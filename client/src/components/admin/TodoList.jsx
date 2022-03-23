import React, { useEffect, useState } from 'react'
import TodoCard from '../admin/TodoCard'
import { request } from '../../request'


export default function TodoList(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [todos, setTodos] = useState()
  
  
  useEffect(() => { getTodo() }, [])
  
  const getTodo = async () => {
    // Get all messages
    setIsLoading(true)
    const res = await request.get('/todo')
    setTodos(res.todo)
    setIsLoading(false)
  }
  
  // Reload todo list when a todo is created
  // Function triggered by parent component
  props.reloadList.current = () => getTodo()
  
  
  if (isLoading) return(<div className='loading'>Chargement des todo...</div>)
  
  
  return (
    <div className='todo-list'>
      { todos.map((todo, index) => {
        return(
          <TodoCard
            todo={todo}
            reloadList={() => getTodo()}
            key={index}
          />
        )
      }) }
    </div>
  )
}