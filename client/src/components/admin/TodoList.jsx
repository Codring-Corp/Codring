import React, { useEffect, useState } from 'react'
import TodoCard from '../admin/TodoCard'
import { request } from '../../request'


export default function TodoList() {
  const [isLoading, setIsLoading] = useState(true)
  const [todos, setTodos] = useState()
  
  
  useEffect(() => {
    const getMessages = async () => {
      // Get all messages
      const res = await request.get('/todo')
      setTodos(res.todo)
      setIsLoading(false)
    }
    getMessages()
  }, [])
  
  if (isLoading) return(<div className='loading'>Chargement des todo...</div>)
  
  
  return (
    <div className='todo-list'>
      { todos.map((todo, index) => {
        return(<TodoCard todo={todo} key={index} />)
      }) }
    </div>
  )
}