import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import ErrorMsg from '../forms/ErrorMsg'
import Button from '../forms/Button'

import { request } from '../../request'


export default function TodoModif(props) {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [task, setTask] = useState(props.task)
  const taskId = props.id
  
  const onSubmit = async data => {
    // Update user's profile
    data.id = taskId
    
    setIsSubmitting(true)
    const res = await request.patch('/todo', data)
    setIsSubmitting(false)
    
    if (res.status === 200) {
      // Reload todo list after success modification
      props.reloadList()
    } else {
      setError(res.error.input, { type: 'manual', message: res.error.msg })
    }
  }
  
  return (
    <div className='modification-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`input-group ${errors.task ? 'error-input-group' : ''}`}>
          <input {...register(
            "task",
            { required: 'Tâche obligatoire' }
          )}
          autoFocus
          placeholder="Tâche"
          autoComplete='off'
          value={task}
          onChange={ e => setTask(e.target.value) }
          />
          { errors.task && <ErrorMsg msg={errors.task.message} /> } 
        </div>
        
        <div className='btns'>
          <Button
            type='submit'
            isSubmitting={isSubmitting}
            submittingText='Modification...'
          >
            Modifier
          </Button>
          
          <p onClick={() => props.hideModifForm()}>Annuler</p>
        </div>
      </form>
    </div>
  )
}