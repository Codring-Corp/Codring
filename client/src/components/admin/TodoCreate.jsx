import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { request } from '../../request';


export default function TodoCreate(props) {
  const { register, handleSubmit, reset } = useForm();
  const [isAddingTodo, setIsAddingTodo] = useState(false)
  
  
  const onSubmit = async data => {
    // Check if task isn't empty
    const newTask = data.task
    
    if (newTask.replace(/\s/g, '').length) {
      // Save the new task in DB
      setIsAddingTodo(true)
      await request.post('/todo', data)
      setIsAddingTodo(false)
      // Clear input and reload todo list
      props.reloadList()
      reset({ task: '' })
    }
  }
  
  
  return (
    <div className='create-todo'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('task')}
          type='text'
          placeholder='Ajouter une nouvelle tâche'
          autoComplete='off'
        />
      </form>
      { isAddingTodo && <p className='loading'>Ajout de la todo...</p> }
    </div>
  )
}