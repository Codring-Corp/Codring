import React, { useState } from 'react'

import Trash from '../../assets/svg/Trash'
import Edit from '../../assets/svg/Edit'


export default function MessageCard(props) {
  const msg = props.message
  const msgId = msg._id
  
  const [editMode, setEditMode] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  
  const deleteAccount = id => {
    // Delete account by id
    console.log('delete', id);
  }
  
  return (
    <div className='message-card'>
      <div className='content'>
        <p>{ msg.body }</p>
      </div>
      
      <div className='data'>
        
      </div>
      
      <div className='btns'>
        <button onClick={() => setEditMode(true)}>
          <Edit />
        </button>
        <button onClick={() => setShowDeleteConfirmation(true)}>
          <Trash />
        </button>
        
        { showDeleteConfirmation &&
          <div className='confirmation-btn'>
            <p onClick={() => deleteAccount(msgId)}>Supprimer</p>
            <p onClick={() => setShowDeleteConfirmation(false)}>Annuler</p>
          </div>
        }
      </div>
    </div>
  )
}

function getDate(d) {
  // Return a good formated date
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  const date = new Date(d)
  const month = months[date.getMonth()]
  
  return `${date.getDate()} ${month} ${date.getFullYear()}`
}
