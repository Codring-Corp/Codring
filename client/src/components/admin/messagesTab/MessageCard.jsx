import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { request } from '../../../request'


export default function MessageCard(props) {
  const msg = props.message
  const msgId = msg._id
  
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const deleteMessage = async id => {
    // Delete message by id
    setIsDeleting(true)
    await request.remove(`/messages/${id}`)
    setIsDeleting(false)
    // Reload messages list
    props.reloadList()
  }
  
  return (
    <div className='message-card'>
      <p className='content'>{ msg.body }</p>
      
      <div className='bottom-part'>
        <p className='data'>
          <Link to={`/profile/${msg.author}`} target="_blank" rel="noopener noreferrer">{ msg.author }</Link> - il y a { getDiffTime(msg.createdAt) }
        </p>
            
        <div className='btns'>
          {
            showDeleteConfirmation ?
            <div className={`confirmation-btn ${isDeleting ? 'is-deleting' : ''}`}>
              <p onClick={() => deleteMessage(msgId)}>{ isDeleting ? 'Suppression...' : 'Supprimer' }</p>
              <p onClick={() => setShowDeleteConfirmation(false)}>Annuler</p>
            </div>
            :
            <button onClick={() => setShowDeleteConfirmation(true)}>
              Supprimer le message
            </button>
          }
        </div>
      </div>
    </div>
  )
}

function getDiffTime(s) {
  // Return a good formated date
  const startDate = new Date(s)
  const endDate = new Date()
  const diffTime = endDate - startDate
  
  const seconds = Math.round(diffTime / 1000)
  const minutes = Math.round(diffTime / (1000 * 60) % 60)
  const hours = Math.round(diffTime / (1000 * 60 * 60) % 24)
  const days = Math.round(diffTime / (1000 * 3600 * 24))
  const weeks = Math.round(diffTime / (1000 * 3600 * 24 * 7))
  const months = Math.round(diffTime / (1000 * 3600 * 24 * 7 * 4))
  const years = Math.round(diffTime / (1000 * 3600 * 24 * 7 * 4 * 12))
  
  if (years >= 1) return `${years} an${years > 1 ? 's' : ''}`
  else if (months >= 1) return `${months} mois`
  else if (weeks >= 1) return `${weeks} semaine${weeks > 1 ? 's' : ''}`
  else if (days >= 1) return `${days} jour${days > 1 ? 's' : ''}`
  else if (hours >= 1) return `${hours} heure${hours > 1 ? 's' : ''}`
  else if (minutes >= 1) return `${minutes} minute${minutes > 1 ? 's' : ''}`
  else return `${seconds} seconde${seconds > 1 ? 's' : ''}`
}