import React, { useState } from 'react'

import Trash from '../../assets/svg/Trash'
import Edit from '../../assets/svg/Edit'

import { request } from '../../request'


export default function TodoCard(props) {
  const todo = props.todo
  const todoId = todo._id
  
  const [editMode, setEditMode] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  
  
  const deleteTodo = async id => {
    // Delete todo by id
    setIsDeleting(true)
    await request.remove(`/todo/${id}`)
    setIsDeleting(false)
    // Reload todo list
    props.reloadList()
  }
  
  return (
    <div className='todo-card'>
      <p>{ todo.task }</p>
      
      <div className='btns'>
        <button onClick={() => setEditMode(true)}>
          <Edit />
        </button>
        <button onClick={() => setShowDeleteConfirmation(true)}>
          <Trash />
        </button>
        
        { showDeleteConfirmation &&
          <div className={`confirmation-btn ${isDeleting ? 'is-deleting' : ''}`}>
            <p onClick={() => deleteTodo(todoId)}>{ isDeleting ? 'Suppression...' : 'Supprimer' }</p>
            <p onClick={() => setShowDeleteConfirmation(false)}>Annuler</p>
          </div>
        }
      </div>
    </div>
  )
}