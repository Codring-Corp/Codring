import React, { useState } from 'react'

import Trash from '../../assets/svg/Trash'
import Edit from '../../assets/svg/Edit'


export default function TodoCard(props) {
  const todo = props.todo
  const todoId = todo._id
  
  const [editMode, setEditMode] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  
  const deleteTodo = id => {
    // Delete message by id
    console.log('delete', id);
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
          <div className='confirmation-btn'>
            <p onClick={() => deleteTodo(todoId)}>Supprimer</p>
            <p onClick={() => setShowDeleteConfirmation(false)}>Annuler</p>
          </div>
        }
      </div>
    </div>
  )
}